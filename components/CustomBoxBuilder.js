// components/CustomBoxBuilder.js
// Sizzlefish-inspired interactive 6-pack or 12-pack custom box builder

function CustomBoxBuilder({ products }) {
  const { addCustomBoxToCart, showToast } = React.useContext(window.CartContext);

  const [boxTargetSize, setBoxTargetSize] = React.useState(12);
  const [boxFrequency, setBoxFrequency] = React.useState("subscribe"); // 'one-time' or 'subscribe' (10% off)
  const [customBoxPortions, setCustomBoxPortions] = React.useState({
    "prod-sockeye-salmon": 4,
    "prod-pacific-halibut": 2,
    "prod-sea-scallops": 2,
    "prod-wild-gulf-shrimp": 2,
    "prod-ahi-tuna": 2
  });

  const totalBoxPortionsCount = React.useMemo(() => {
    return Object.values(customBoxPortions).reduce((sum, val) => sum + (val || 0), 0);
  }, [customBoxPortions]);

  const remainingSlots = boxTargetSize - totalBoxPortionsCount;
  const isBoxFull = totalBoxPortionsCount >= boxTargetSize;

  const customBoxPrice = React.useMemo(() => {
    let rawTotal = 0;
    Object.entries(customBoxPortions).forEach(([prodId, qty]) => {
      const p = products.find(prod => prod.id === prodId);
      if (p && qty > 0) {
        rawTotal += p.pricePerPortion * qty;
      }
    });
    let basePrice = Math.max(rawTotal * 0.95, 69.99);
    if (boxFrequency === "subscribe") {
      basePrice = basePrice * 0.90;
    }
    return Math.round(basePrice * 100) / 100;
  }, [customBoxPortions, products, boxFrequency]);

  const handleAdjustBoxPortion = (prodId, delta) => {
    setCustomBoxPortions(prev => {
      const current = prev[prodId] || 0;
      const next = current + delta;
      if (next < 0) return prev;
      if (delta > 0 && totalBoxPortionsCount >= boxTargetSize) {
        showToast("Box is already full! Remove a portion or switch to 12-pack to add more.");
        return prev;
      }
      return { ...prev, [prodId]: next };
    });
  };

  const handleAddBox = () => {
    if (totalBoxPortionsCount !== boxTargetSize) {
      alert(`Please select exactly ${boxTargetSize} portions to complete your box. (Currently ${totalBoxPortionsCount} selected)`);
      return;
    }
    addCustomBoxToCart(boxTargetSize, boxFrequency, customBoxPrice, customBoxPortions, products);
  };

  return (
    <section id="custom-box-builder" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-coral-600 uppercase bg-coral-50 border border-coral-200 px-3 py-1 rounded-full">
            Signature Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-ocean-950 mt-3 mb-4">
            Build Your Custom Seafood Box
          </h2>
          <p className="text-slate-600 text-base">
            Choose your favorite cuts. Pack your box with 6 or 12 individual 6-8oz portions, flash-frozen at peak freshness. Subscribe to save 10% and adjust or cancel anytime.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* BUILDER HEADER CONTROLS */}
          <div className="bg-ocean-950 text-white p-6 sm:p-8 border-b border-ocean-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Step 1: Box Size */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">1. Select Size:</span>
                <div className="inline-flex rounded-xl bg-ocean-900 p-1 border border-ocean-800">
                  <button
                    onClick={() => setBoxTargetSize(6)}
                    className={`px-5 py-2 rounded-lg font-bold text-xs transition ${
                      boxTargetSize === 6 ? 'bg-coral-500 text-white shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    6-Pack Box (Starter)
                  </button>
                  <button
                    onClick={() => setBoxTargetSize(12)}
                    className={`px-5 py-2 rounded-lg font-bold text-xs transition ${
                      boxTargetSize === 12 ? 'bg-coral-500 text-white shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    12-Pack Box (Best Value)
                  </button>
                </div>
              </div>

              {/* Step 2: Frequency */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">2. Frequency:</span>
                <div className="inline-flex rounded-xl bg-ocean-900 p-1 border border-ocean-800">
                  <button
                    onClick={() => setBoxFrequency("one-time")}
                    className={`px-5 py-2 rounded-lg font-bold text-xs transition ${
                      boxFrequency === "one-time" ? 'bg-ocean-700 text-white shadow-md' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    One-Time Purchase
                  </button>
                  <button
                    onClick={() => setBoxFrequency("subscribe")}
                    className={`px-5 py-2 rounded-lg font-bold text-xs transition flex items-center gap-1.5 ${
                      boxFrequency === "subscribe" ? 'bg-emerald-600 text-white shadow-md' : 'text-emerald-400 hover:text-white'
                    }`}
                  >
                    <i data-lucide="refresh-cw" className="w-3.5 h-3.5"></i>
                    Subscribe & Save 10%
                  </button>
                </div>
              </div>

            </div>

            {/* PROGRESS CAPACITY BAR */}
            <div className="mt-8 pt-6 border-t border-ocean-800/80">
              <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-bold mb-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">
                    Box Status: <strong>{totalBoxPortionsCount} of {boxTargetSize} Portions Selected</strong>
                  </span>
                  {isBoxFull && (
                    <span className="bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase">
                      ✓ 100% Full & Ready
                    </span>
                  )}
                </div>
                <span className="text-cyan-300">
                  {remainingSlots > 0 ? `${remainingSlots} more portions needed` : 'Box ready for delivery!'}
                </span>
              </div>

              <div className="w-full bg-ocean-900 h-3.5 rounded-full overflow-hidden p-0.5 border border-ocean-700">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isBoxFull ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-coral-500 to-amber-400'
                  }`}
                  style={{ width: `${Math.min(100, (totalBoxPortionsCount / boxTargetSize) * 100)}%` }}
                ></div>
              </div>

              {/* Visual Slot Pills Tray */}
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: boxTargetSize }).map((_, idx) => {
                  const isFilled = idx < totalBoxPortionsCount;
                  return (
                    <div
                      key={idx}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                        isFilled ? 'bg-coral-500 text-white slot-pop shadow' : 'border border-dashed border-ocean-700 text-ocean-700'
                      }`}
                    >
                      {isFilled ? '🐟' : idx + 1}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

          {/* PORTION SELECTION GRID */}
          <div className="p-6 sm:p-8">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-4">
              Click (+) or (-) to customize your portions:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.filter(p => p.boxBuilderEligible).map(p => {
                const currentQty = customBoxPortions[p.id] || 0;
                return (
                  <div
                    key={p.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      currentQty > 0 ? 'border-coral-400 bg-coral-50/20 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex gap-3 items-center">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-16 h-16 rounded-xl object-cover border border-slate-100"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 truncate">{p.name}</h4>
                        <span className="text-[11px] text-slate-500 block">{p.portionSize} portion</span>
                        <span className="text-xs font-black text-ocean-700">${p.pricePerPortion}/ea</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-600">Portions:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAdjustBoxPortion(p.id, -1)}
                          disabled={currentQty === 0}
                          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold flex items-center justify-center transition"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-sm font-black text-slate-900">
                          {currentQty}
                        </span>
                        <button
                          onClick={() => handleAdjustBoxPortion(p.id, 1)}
                          disabled={totalBoxPortionsCount >= boxTargetSize}
                          className="w-7 h-7 rounded-lg bg-coral-500 hover:bg-coral-600 disabled:opacity-40 text-white font-bold flex items-center justify-center transition shadow-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BUILDER BOTTOM SUMMARY & ADD TO CART CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 p-6 rounded-2xl">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-ocean-950 font-heading">
                    ${customBoxPrice.toFixed(2)}
                  </span>
                  {boxFrequency === "subscribe" && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      10% Subscription Discount Applied
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Includes {boxTargetSize} flash-frozen portions, insulated eco-cooler & dry ice packaging.
                </p>
              </div>

              <button
                onClick={handleAddBox}
                disabled={!isBoxFull}
                className={`px-8 py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg transition ${
                  isBoxFull
                    ? 'bg-coral-500 hover:bg-coral-600 text-white shadow-coral-500/30'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }`}
              >
                <i data-lucide="package-plus" className="w-5 h-5"></i>
                {isBoxFull ? 'Add Custom Box to Cart' : `Select ${remainingSlots} More to Finish`}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

window.CustomBoxBuilder = CustomBoxBuilder;

