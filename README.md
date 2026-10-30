# AM SEA FOOD SALES 🐟
> **High-Converting, Modern D2C Seafood E-Commerce Platform**  
> Heavily inspired by the user experience, layout, and cold-chain assurance of [Sizzlefish](https://www.sizzlefish.com/).

---

## 🌟 Key Highlights & Modules

### 1. Global Header & Announcement Bar
- **Cold-Chain Assurance Bar**: Dynamic live indicator alerting customers: *"Packed with Solid Dry Ice • Flash-Frozen at -40°F • Guaranteed Fresh Arrival < 4°C"*.
- **Interactive Postal Code Checker**: Modal and navbar pill allowing customers to enter any 5-digit US Zip Code (e.g., `90210`, `10001`, `33101`) to calculate next-day chilled delivery date, carrier routing, and countdown cut-off time.
- **Header & Navigation**: Brand emblem, dropdown categories, search bar with instant query matching, and cart trigger with live item count and subtotal.

### 2. High-Impact Hero Section & Trust Bar
- **Headline**: *"Pure, Natural Seafood Delivered Fresh to Your Door"*.
- **Social Proof**: 4.9/5 stars badge from 38,000+ verified seafood customers.
- **Dual CTAs**: "Shop All Catch" (Primary Coral) & "Build Your Seafood Box" (Secondary Ice Blue with Save 10% badge).
- **Weekly Featured Catch Showcase**: Instant add-to-cart card featuring Wild Alaskan Sockeye Salmon.
- **Trust Badges Bar**: *Sustainably Wild-Caught*, *Flash-Frozen at Sea*, *Zero Added Chemicals (No STPP)*, *100% Satisfaction Guarantee*.

### 3. Sizzlefish-Inspired Custom Box Builder
- **Curated Box Sizes**: Toggle between **6-Pack (Starter)** and **12-Pack (Best Value)**.
- **Purchase Mode**: One-Time Delivery vs. **Subscribe & Save 10%** recurring deliveries.
- **Visual Slot Tray**: Interactive slot pill indicators that fill and animate as items are added.
- **Portion Selection Grid**: Real-time `+` / `-` controls for Wild Salmon, Halibut, Sea Scallops, Wild Gulf Shrimp, Ahi Tuna, Chilean Sea Bass, and more.
- **Capacity Lock & Validation**: Automatically disables addition once the box reaches 100% capacity.

### 4. Filterable Product Catalog & Variant Selection
- **Category Tabs**: *All Catch*, *Fresh Catch & Fillets*, *Shellfish & Scallops*, *Sashimi Grade*, *Smoked & Prepared*.
- **Filter Tags**: *Wild-Caught*, *Omega-3 Rich*, *Best Sellers*.
- **Product Cards**:
  - High-res seafood imagery with hover zoom.
  - Sourcing origin badge (*Bristol Bay*, *Gulf of Alaska*, *Maine*).
  - Price per portion & weight breakdown (`$32.99 / 4 x 6oz Fillets • ~$8.24/portion`).
  - Fillet pack size selector (`4-Pack`, `8-Pack`, `14-Pack`).
  - Preparation dropdown (`Portioned Fillets (Skin-on)`, `Skinless Portions`, `Thick-Cut Steaks`).
  - Quick view detail modal with specs, macronutrients, and chef cooking techniques.

### 5. Curated Subscription Boxes
- Pre-packaged bundles:
  - *The Alaskan Wild Salmon Showcase Box* (14 Portions)
  - *The Ultimate Shellfish & Lobster Feast* (12 Portions)
  - *The Heart-Healthy Omega-3 Power Box* (14 Portions)
  - *The Pristine Pacific White Fish Medley* (14 Portions)

### 6. Cold-Chain Traceability & Origin Map
- **4 Cold-Chain Pillars**:
  1. *Sustainable Harvest at Peak Ocean Season*
  2. *Cryogenic Flash-Freezing at Sea (-40°F)*
  3. *100% Recyclable Thermal Cornstarch Cooler + Solid Dry Ice (-109.3°F)*
  4. *Guaranteed Arrival Frozen Solid (< 4°C)*
- **Interactive Origin Map Modal**: Displays certified fishing grounds with harvest methods, water temperatures, and Marine Stewardship Council certifications.

### 7. Chef Recipes & Cooking Inspiration
- Step-by-step culinary guides (e.g., *Pan-Seared Halibut with Lemon-Caper Butter*, *Cedar Plank Sockeye with Maple Dijon*).
- 1-click **"Add Catch to Cart"** button directly from recipe cards.

### 8. Slide-over Cart & Multi-Step Checkout Drawer
- **Free Shipping Progress Bar**: Dynamic threshold calculation towards free express shipping at $125.
- **In-Cart Upsells & Cross-Sells**:
  - *Artisan Lemon Herb Finishing Butter* ($6.99)
  - *Western Red Cedar Grilling Planks 2-Pack* ($9.99)
  - *AM Signature Ocean Citrus & Dill Rub* ($5.99)
  - *Colossal Cocktail Shrimp Add-on* ($14.99)
- **Promo Code Engine**: Test codes like `SIZZLE15` (15% off) and `FREESHIP`.
- **Multi-Step Checkout Flow**: Shipping details, dry ice cold-chain delivery estimate, payment details, and instant printable Order Confirmation Receipt with tracking number generation.

---

## 🚀 How to Run the Project

### Option A: Run with Node.js Express Server
```bash
# 1. Start the server
node server.js

# 2. Open in your browser
http://localhost:3000
```

### Option B: Open Directly in Any Web Browser
Double-click `index.html` in Windows Explorer or open it in Google Chrome / Edge:
```
file:///c:/Users/Personal/OneDrive/Desktop/SEAFOOD%20WEBSITE/index.html
```
*(The application is engineered with built-in resilient state, allowing it to function completely offline without a server!)*

---

## 📁 Directory Structure
```
SEAFOOD WEBSITE/
├── data/
│   ├── products.json     # Rich seafood inventory, variants, nutrition, & cross-sells
│   ├── sourcing.json     # Fishing grounds, harvest methods, & cold-chain specs
│   └── recipes.json      # Gourmet seafood recipes & preparation guides
├── app.js                # Full React application (State, Components, Modals, Drawer)
├── index.html            # Main HTML5 entry point with Tailwind CSS & Lucide Icons
├── server.js             # Express REST API backend & static file server
├── styles.css            # Custom ocean theme styling, animations, & print rules
└── package.json          # Project configuration & scripts
```

---

## 🛠️ Tech Stack
- **Frontend**: React 18, Tailwind CSS, Lucide Icons, Modern Component Architecture.
- **State Management**: React State & Context for Cart, Box Builder, Delivery Checker, and Checkout.
- **Backend**: Node.js & Express REST API (`/api/products`, `/api/boxes`, `/api/validate-zip`, `/api/orders`).
- **Cold-Chain Infrastructure**: Dry-ice packaging simulation, temperature threshold guarantees, and postal delivery estimators.

