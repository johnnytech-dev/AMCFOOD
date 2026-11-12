const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables from .env if present
try {
  const dotenvPath = path.join(__dirname, '.env');
  if (fs.existsSync(dotenvPath)) {
    const lines = fs.readFileSync(dotenvPath, 'utf8').split('\n');
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...rest] = trimmed.split('=');
        if (key && rest.length > 0) {
          process.env[key.trim()] = rest.join('=').trim();
        }
      }
    });
  }
} catch (e) {
  console.warn('Could not load .env file:', e.message);
}

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Supabase Client ────────────────────────────────────────────────────────
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase = null;
if (SUPABASE_URL && SUPABASE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  console.log('✅ Supabase connected:', SUPABASE_URL);
} else {
  console.warn('⚠️  Supabase credentials not found — running without database persistence.');
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Load datasets safely
const loadJson = (filename) => {
  const filePath = path.join(__dirname, 'data', filename);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return {};
};

const productsData = loadJson('products.json');
const sourcingData = loadJson('sourcing.json');
const recipesData  = loadJson('recipes.json');

// ─── API: Get Products ───────────────────────────────────────────────────────
app.get('/api/products', (req, res) => {
  try {
    let list = [...(productsData.products || [])];
    const { category, search, tag, sort } = req.query;

    if (category && category !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (tag) {
      list = list.filter(p =>
        p.tag.toLowerCase().includes(tag.toLowerCase()) ||
        (p.badge && p.badge.toLowerCase().includes(tag.toLowerCase()))
      );
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    if (sort === 'price-low')  list.sort((a, b) => a.pricePerPortion - b.pricePerPortion);
    else if (sort === 'price-high') list.sort((a, b) => b.pricePerPortion - a.pricePerPortion);
    else if (sort === 'rating')     list.sort((a, b) => b.rating - a.rating);

    res.json({ success: true, count: list.length, products: list });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = (productsData.products || []).find(p => p.id === req.params.id || p.slug === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, product });
});

app.get('/api/boxes',   (req, res) => res.json({ success: true, boxes:   productsData.curatedBoxes || [] }));
app.get('/api/addons',  (req, res) => res.json({ success: true, addons:  productsData.crossSells   || [] }));
app.get('/api/sourcing',(req, res) => res.json({ success: true, coldChain: sourcingData.coldChainGuarantees || [], origins: sourcingData.sourcingOrigins || [] }));
app.get('/api/recipes', (req, res) => res.json({ success: true, recipes: recipesData.recipes || [] }));

// ─── API: Zip Code / Delivery Date ──────────────────────────────────────────
app.post('/api/validate-zip', (req, res) => {
  const { zipCode } = req.body;
  if (!zipCode || zipCode.trim().length < 3) {
    return res.status(400).json({ success: false, message: 'Please enter a valid zip code.' });
  }
  const cleanZip  = zipCode.trim();
  const zipNum    = parseInt(cleanZip.replace(/\D/g, ''), 10) || 50000;
  const deliveryDays = zipNum % 2 === 0 ? 1 : 2;
  const now = new Date();
  const target = new Date();
  target.setDate(now.getDate() + deliveryDays);
  if (target.getDay() === 0) target.setDate(target.getDate() + 1);

  res.json({
    success: true,
    zipCode: cleanZip,
    serviceable: true,
    carrier: deliveryDays === 1 ? 'UPS Next-Day Chilled Express' : 'FedEx Priority Chilled Air',
    estimatedDeliveryDate: target.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
    transitTime: `${deliveryDays} Business Day${deliveryDays > 1 ? 's' : ''}`,
    cutoffCountdown: `${Math.max(1, 24 - now.getHours())} hours remaining`,
    packaging: '100% Recyclable Thermal Cooler with 5lbs Solid Dry Ice',
    temperatureGuarantee: 'Guaranteed frozen upon arrival'
  });
});

// ─── API: Place Order → Saved to Supabase ───────────────────────────────────
app.post('/api/orders', async (req, res) => {
  const { items, customer, subtotal, shipping, discount, total, frequency } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart cannot be empty.' });
  }

  const orderId        = 'AMC-' + Math.floor(100000 + Math.random() * 900000);
  const trackingNumber = '1Z9999999' + Math.floor(10000000 + Math.random() * 90000000);
  const arrival        = new Date();
  arrival.setDate(arrival.getDate() + 2);
  if (arrival.getDay() === 0) arrival.setDate(arrival.getDate() + 1);
  const arrivalFormatted = arrival.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const orderRecord = {
    order_id:         orderId,
    tracking_number:  trackingNumber,
    status:           'confirmed',
    carrier:          'UPS Chilled Air Express',
    estimated_arrival: arrivalFormatted,
    customer_name:    customer?.name    || 'Valued Customer',
    customer_email:   customer?.email   || null,
    customer_address: customer?.address || null,
    customer_zip:     customer?.zipCode || null,
    items:            items,
    frequency:        frequency || 'one-time',
    subtotal:         subtotal  || 0,
    shipping:         shipping  || 0,
    discount:         discount  || 0,
    total:            total     || 0,
    created_at:       new Date().toISOString()
  };

  // Save to Supabase if connected
  if (supabase) {
    try {
      const { error } = await supabase.from('orders').insert([orderRecord]);
      if (error) {
        console.error('Supabase order insert error:', error.message);
      } else {
        console.log(`✅ Order ${orderId} saved to Supabase`);
      }
    } catch (dbErr) {
      console.error('Supabase DB error:', dbErr.message);
    }
  }

  res.json({
    success: true,
    message: 'Order placed! Packed with dry ice and scheduled for chilled dispatch.',
    order: {
      orderId,
      trackingNumber,
      carrier:          orderRecord.carrier,
      estimatedArrival: arrivalFormatted,
      status:           'Confirmed & Being Packed with Dry Ice',
      customer:         customer || { name: 'Valued Customer' },
      items,
      subtotal:  subtotal || 0,
      shipping:  shipping || 0,
      discount:  discount || 0,
      total:     total    || 0,
      frequency: frequency || 'one-time'
    }
  });
});

// ─── API: Newsletter Signup → Saved to Supabase ─────────────────────────────
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  if (supabase) {
    try {
      // Upsert to avoid duplicate email errors
      const { error } = await supabase
        .from('subscribers')
        .upsert([{ email: email.toLowerCase().trim(), subscribed_at: new Date().toISOString() }], { onConflict: 'email' });
      if (error) {
        console.error('Supabase newsletter insert error:', error.message);
      } else {
        console.log(`✅ Subscriber ${email} saved to Supabase`);
      }
    } catch (dbErr) {
      console.error('Supabase DB error:', dbErr.message);
    }
  }

  res.json({
    success: true,
    promoCode: 'AMC10',
    message: 'Welcome to the AMC FOODS family! Use code AMC10 at checkout for 10% off your first box.'
  });
});

// ─── API: Get All Orders (admin) ─────────────────────────────────────────────
app.get('/api/admin/orders', async (req, res) => {
  if (!supabase) return res.status(503).json({ success: false, message: 'Database not connected.' });
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) throw error;
    res.json({ success: true, orders: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── API: Get All Subscribers (admin) ───────────────────────────────────────
app.get('/api/admin/subscribers', async (req, res) => {
  if (!supabase) return res.status(503).json({ success: false, message: 'Database not connected.' });
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });
    if (error) throw error;
    res.json({ success: true, count: data.length, subscribers: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ─── Fallback to index.html ──────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AMC FOODS Seafood Market server running at http://localhost:${PORT}`);
});
