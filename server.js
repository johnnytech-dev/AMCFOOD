const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

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
const recipesData = loadJson('recipes.json');

// API: Get Products with filtering & search
app.get('/api/products', (req, res) => {
  try {
    let list = [...(productsData.products || [])];
    const { category, search, tag, sort } = req.query;

    if (category && category !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (tag) {
      list = list.filter(p => p.tag.toLowerCase().includes(tag.toLowerCase()) || (p.badge && p.badge.toLowerCase().includes(tag.toLowerCase())));
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

    if (sort === 'price-low') {
      list.sort((a, b) => a.pricePerPortion - b.pricePerPortion);
    } else if (sort === 'price-high') {
      list.sort((a, b) => b.pricePerPortion - a.pricePerPortion);
    } else if (sort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    res.json({
      success: true,
      count: list.length,
      products: list
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// API: Get single product by id or slug
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = (productsData.products || []).find(p => p.id === id || p.slug === id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, product });
});

// API: Get Curated Subscription Boxes
app.get('/api/boxes', (req, res) => {
  res.json({
    success: true,
    boxes: productsData.curatedBoxes || []
  });
});

// API: Get Cross-Sell Add-ons
app.get('/api/addons', (req, res) => {
  res.json({
    success: true,
    addons: productsData.crossSells || []
  });
});

// API: Sourcing and Cold Chain info
app.get('/api/sourcing', (req, res) => {
  res.json({
    success: true,
    coldChain: sourcingData.coldChainGuarantees || [],
    origins: sourcingData.sourcingOrigins || []
  });
});

// API: Recipes and cooking guides
app.get('/api/recipes', (req, res) => {
  res.json({
    success: true,
    recipes: recipesData.recipes || []
  });
});

// API: Postal / Zip Code validation & Delivery Date Estimator
app.post('/api/validate-zip', (req, res) => {
  const { zipCode } = req.body;
  if (!zipCode || zipCode.trim().length < 3) {
    return res.status(400).json({ success: false, message: 'Please enter a valid postal or zip code.' });
  }

  const cleanZip = zipCode.trim();
  const zipNum = parseInt(cleanZip.replace(/\D/g, ''), 10) || 50000;

  // Realistic dynamic delivery date calculation
  const now = new Date();
  const deliveryDays = zipNum % 2 === 0 ? 1 : 2; // Next-Day or 2-Day Air
  const targetDate = new Date();
  targetDate.setDate(now.getDate() + (deliveryDays === 1 ? 1 : 2));

  // If lands on Sunday, shift to Monday/Tuesday for fresh dispatch
  if (targetDate.getDay() === 0) targetDate.setDate(targetDate.getDate() + 1);

  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const formattedDelivery = targetDate.toLocaleDateString('en-US', options);

  const cutoffHours = Math.max(1, 24 - now.getHours());

  res.json({
    success: true,
    zipCode: cleanZip,
    serviceable: true,
    carrier: deliveryDays === 1 ? 'UPS Next-Day Chilled Express' : 'FedEx Priority Overnight / 2-Day Chilled',
    estimatedDeliveryDate: formattedDelivery,
    transitTime: `${deliveryDays} Business Day${deliveryDays > 1 ? 's' : ''}`,
    cutoffCountdown: `${cutoffHours} hours remaining for ${deliveryDays === 1 ? 'Tomorrow' : formattedDelivery} delivery`,
    packaging: '100% Recyclable Thermal Cornstarch Cooler with 5lbs Solid Dry Ice (< -78.5°C)',
    temperatureGuarantee: 'Guaranteed rock-solid frozen (< 4°C) upon arrival'
  });
});

// API: Place Order & Generate Receipt
app.post('/api/orders', (req, res) => {
  const { items, customer, subtotal, shipping, discount, total, frequency } = req.body;
  
  if (!items || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart cannot be empty to place an order.' });
  }

  const orderId = 'AM-' + Math.floor(100000 + Math.random() * 900000);
  const trackingNumber = '1Z9999999' + Math.floor(10000000 + Math.random() * 90000000);
  
  const estimatedArrival = new Date();
  estimatedArrival.setDate(estimatedArrival.getDate() + 2);
  const arrivalFormatted = estimatedArrival.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const orderRecord = {
    orderId,
    trackingNumber,
    carrier: 'UPS Chilled Air Express (Dry Ice Refrigerated)',
    createdAt: new Date().toISOString(),
    status: 'Confirmed & Being Packed with Dry Ice',
    estimatedArrival: arrivalFormatted,
    temperatureSpec: '< -40°F Flash Freeze held with 5 lbs Dry Ice',
    customer: customer || {
      name: 'Valued Customer',
      email: 'customer@example.com',
      address: '742 Ocean Way, Coastal Bay',
      zipCode: '90210'
    },
    items,
    frequency: frequency || 'One-Time Purchase',
    subtotal: subtotal || 0,
    shipping: shipping || 0,
    discount: discount || 0,
    total: total || 0
  };

  res.json({
    success: true,
    message: 'Order placed successfully! Packed with dry ice and scheduled for rapid chilled dispatch.',
    order: orderRecord
  });
});

// API: Newsletter signup
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email.' });
  }
  res.json({
    success: true,
    promoCode: 'AMC10',
    message: 'Welcome to the AMCFOOD family! Use code AMC10 at checkout for 10% off your first box.'
  });
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AMCFOOD Seafood Market server running at http://localhost:${PORT}`);
});

