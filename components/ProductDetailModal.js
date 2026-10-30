// components/ProductDetailModal.js
// Modal displaying portion specs, nutrition, and cooking instructions

function ProductDetailModal({ product, onClose }) {
  const { addToCart } = React.useContext(window.CartContext);

  const [selectedVariant, setSelectedVariant] = React.useState(product.variants[0]);
  const [selectedPrep, setSelectedPrep] = React.useState(product.preparationOptions[0]);
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-950/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center z-10"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <div className="rounded-2xl overflow-hidden h-72 sm:h-80 bg-slate-100 border border-slate-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-4 flex flex-wrap gap-1.5">
              {product.certifications.map((c, i) => (
                <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-coral-600 block">
                {product.origin} • {product.harvestMethod}
              </span>

              <h2 className="text-2xl font-black font-heading text-ocean-950 mt-1 mb-2">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 text-xs mb-3">
                <span className="text-yellow-400 font-bold">★★★★★</span>
                <span className="text-slate-500 font-semibold">{product.rating} ({product.reviewsCount} verified reviews)</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {product.shortDescription}
              </p>

              <div className="flex gap-2 border-b border-slate-200 pb-2 mb-3 text-xs font-bold">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-1 ${activeTab === 'overview' ? 'text-coral-600 border-b-2 border-coral-500' : 'text-slate-400'}`}
                >
                  Specs
                </button>
                <button
                  onClick={() => setActiveTab("nutrition")}
                  className={`pb-1 ${activeTab === 'nutrition' ? 'text-coral-600 border-b-2 border-coral-500' : 'text-slate-400'}`}
                >
                  Nutrition
                </button>
                <button
                  onClick={() => setActiveTab("cooking")}
                  className={`pb-1 ${activeTab === 'cooking' ? 'text-coral-600 border-b-2 border-coral-500' : 'text-slate-400'}`}
                >
                  Chef Tips
                </button>
              </div>

              {activeTab === "overview" && (
                <div className="text-xs text-slate-600 space-y-1 mb-4">
                  <p><strong>Portion Size:</strong> {product.portionSize} per fillet</p>
                  <p><strong>Flash-Frozen:</strong> {product.flashFrozen}</p>
                  <p><strong>Cold Chain:</strong> Shipped with solid dry ice in 100% recyclable insulation</p>
                </div>
              )}

              {activeTab === "nutrition" && (
                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4">
                  <div><strong>Calories:</strong> {product.nutrition.calories} kcal</div>
                  <div><strong>Protein:</strong> {product.nutrition.protein}</div>
                  <div><strong>Omega-3s:</strong> {product.nutrition.omega3}</div>
                  <div><strong>Total Fat:</strong> {product.nutrition.fat}</div>
                </div>
              )}

              {activeTab === "cooking" && (
                <div className="text-xs text-slate-600 bg-sky-50 p-3 rounded-xl border border-sky-100 mb-4">
                  <p className="font-semibold text-ocean-950 mb-1">👨‍🍳 Preparation Technique:</p>
                  <p>{product.cookingTips}</p>
                </div>
              )}

              <div className="space-y-2 mb-4">
                <label className="text-xs font-bold text-slate-700 uppercase">Select Quantity Pack:</label>
                <div className="grid grid-cols-3 gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`p-2 rounded-xl text-xs font-bold text-center border transition ${
                        selectedVariant.id === v.id
                          ? 'bg-ocean-900 text-white border-ocean-900'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      <span className="block">{v.packCount}-Pack</span>
                      <span className="text-[10px] block opacity-80">${v.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1 mb-6">
                <label className="text-xs font-bold text-slate-700 uppercase">Cut Preparation:</label>
                <select
                  value={selectedPrep}
                  onChange={(e) => setSelectedPrep(e.target.value)}
                  className="w-full text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5"
                >
                  {product.preparationOptions.map(prep => (
                    <option key={prep} value={prep}>{prep}</option>
                  ))}
                </select>
              </div>

            </div>

            <button
              onClick={() => {
                addToCart(product, selectedVariant, selectedPrep);
                onClose();
              }}
              className="w-full py-4 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-coral-500/25"
            >
              Add {selectedVariant.packCount}-Pack to Cart (${selectedVariant.price})
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

window.ProductDetailModal = ProductDetailModal;

