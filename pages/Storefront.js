// pages/Storefront.js
// Main Storefront Page orchestrating all modular components for AM SEA FOOD SALES

function Storefront() {
  const { toastMessage, clearCart } = React.useContext(window.CartContext);
  const { isZipModalOpen, setIsZipModalOpen } = React.useContext(window.ZipContext);

  const [products] = React.useState(INITIAL_PRODUCTS);
  const [boxes] = React.useState(CURATED_BOXES);
  const [crossSells] = React.useState(CROSS_SELLS);
  const [sourcingOrigins] = React.useState(SOURCING_DATA);
  const [recipes] = React.useState(RECIPES_DATA);

  const [searchQuery, setSearchQuery] = React.useState("");
  const [quickViewProduct, setQuickViewProduct] = React.useState(null);
  const [isSourcingModalOpen, setIsSourcingModalOpen] = React.useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
  const [orderConfirmation, setOrderConfirmation] = React.useState(null);

  React.useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  const handleOrderConfirmed = (customerDetails) => {
    const orderId = "AM-" + Math.floor(100000 + Math.random() * 900000);
    const tracking = "1Z" + Math.floor(100000000000 + Math.random() * 900000000000);

    setOrderConfirmation({
      orderId,
      tracking,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      customer: customerDetails
    });
    setIsCheckoutOpen(false);
    clearCart();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-ocean-950 text-white border-l-4 border-coral-500 px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
          <i data-lucide="check-circle" className="w-5 h-5 text-emerald-400"></i>
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header & Announcement Bar */}
      <window.Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenSourcingModal={() => setIsSourcingModalOpen(true)}
      />

      {/* Hero Section */}
      <window.Hero
        featuredProduct={products[0]}
        onAddToCart={(p) => window.CartContext && p}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* Trust Badges */}
      <window.TrustBar />

      {/* Sizzlefish-Inspired Custom Box Builder */}
      <window.CustomBoxBuilder products={products} />

      {/* Filterable Product Catalog */}
      <window.ProductCatalog
        products={products}
        searchQuery={searchQuery}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* Curated Pre-Packaged Boxes */}
      <window.CuratedBoxes boxes={boxes} />

      {/* Sourcing & Cold-Chain Traceability */}
      <window.ColdChainTraceability
        sourcingOrigins={sourcingOrigins}
        onOpenSourcingModal={() => setIsSourcingModalOpen(true)}
      />

      {/* Gourmet Recipes */}
      <window.ChefRecipes recipes={recipes} products={products} />

      {/* Footer */}
      <window.Footer />

      {/* Postal Checker Modal */}
      {isZipModalOpen && (
        <window.PostalCheckerModal onClose={() => setIsZipModalOpen(false)} />
      )}

      {/* Product Detail Modal */}
      {quickViewProduct && (
        <window.ProductDetailModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

      {/* Cart Drawer */}
      <window.CartDrawer
        crossSells={crossSells}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <window.CheckoutModal
          onClose={() => setIsCheckoutOpen(false)}
          onConfirmOrder={handleOrderConfirmed}
        />
      )}

      {/* Order Confirmation Receipt Modal */}
      {orderConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-950/80 backdrop-blur-sm">
          <div id="printable-receipt" className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                <i data-lucide="check" className="w-8 h-8"></i>
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Order Confirmed</span>
              <h3 className="text-2xl font-black font-heading text-ocean-950 mt-1">
                Receipt #{orderConfirmation.orderId}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tracking Number: <strong className="text-ocean-900">{orderConfirmation.tracking}</strong>
              </p>
            </div>

            <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200 text-xs text-sky-900 mb-5 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <i data-lucide="truck" className="w-4 h-4 text-sky-600"></i>
                <span>Chilled Dispatch in Progress</span>
              </div>
              <p className="text-[11px] text-sky-700">
                Shipped with 5 lbs dry ice in 100% recyclable insulation. Guaranteed &lt; 4°C upon arrival.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs text-slate-800"
              >
                Print Receipt
              </button>
              <button
                onClick={() => setOrderConfirmation(null)}
                className="flex-1 py-3 rounded-xl bg-ocean-950 hover:bg-ocean-900 font-bold text-xs text-white"
              >
                Back to Store
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sourcing Map Modal */}
      {isSourcingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-950/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsSourcingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            <span className="text-xs font-black tracking-widest text-ocean-600 uppercase">
              Traceability & Fisheries
            </span>
            <h3 className="text-2xl font-black font-heading text-ocean-950 mt-1 mb-2">
              Where Our Seafood Is Harvested
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Every catch is tagged with harvest coordinates, vessel ID, and flash-freeze timestamps. We harvest exclusively from verified certified sustainable fisheries.
            </p>

            <div className="space-y-6">
              {sourcingOrigins.map(origin => (
                <div key={origin.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row gap-5 items-center">
                  <img
                    src={origin.image}
                    alt={origin.name}
                    className="w-full md:w-44 h-32 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-ocean-950">{origin.name}</h4>
                      <span className="text-xs font-bold text-coral-600 bg-coral-50 px-2.5 py-0.5 rounded-full border border-coral-200">
                        {origin.species}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 mb-3">{origin.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                      <div><strong>Harvest Method:</strong> {origin.harvestMethod}</div>
                      <div><strong>Water Temp:</strong> {origin.temp}</div>
                      <div><strong>Peak Season:</strong> {origin.season}</div>
                      <div><strong>Certification:</strong> {origin.badge}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsSourcingModalOpen(false)}
              className="mt-6 w-full py-3 bg-ocean-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl"
            >
              Close Sourcing Guide
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

function MainApp() {
  return (
    <window.ZipProvider>
      <window.CartProvider>
        <Storefront />
      </window.CartProvider>
    </window.ZipProvider>
  );
}

window.MainApp = MainApp;

