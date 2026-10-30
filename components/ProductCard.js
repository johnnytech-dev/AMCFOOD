// components/ProductCard.js
// Individual product card with pack options, prep dropdown, and add to cart

function ProductCard({ product, onQuickView }) {
  const { addToCart } = React.useContext(window.CartContext);

  const [selectedVariant, setSelectedVariant] = React.useState(product.variants[0]);
  const [selectedPrep, setSelectedPrep] = React.useState(product.preparationOptions[0]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Image Wrap */}
        <div className="relative h-56 overflow-hidden card-image-wrap bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Badge */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            <span className="badge-coral text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
              {product.badge}
            </span>
            <span className="badge-wild text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
              {product.tag}
            </span>
          </div>

          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-ocean-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow backdrop-blur transition opacity-0 group-hover:opacity-100"
          >
            Quick View
          </button>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <div className="flex items-center gap-1.5 text-xs mb-1.5">
            <span className="text-yellow-400 font-bold">★★★★★</span>
            <span className="text-slate-400 text-[11px]">({product.reviewsCount})</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-600 font-bold text-[11px]">{product.origin}</span>
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="text-base font-bold font-heading text-ocean-950 group-hover:text-ocean-600 transition cursor-pointer mb-1 line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Portions & Price Bar */}
          <div className="flex items-baseline justify-between mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <div>
              <span className="text-lg font-black text-ocean-950 font-heading">
                ${selectedVariant.price}
              </span>
              <span className="text-[11px] text-slate-400 line-through ml-1.5">
                ${selectedVariant.compareAtPrice}
              </span>
            </div>
            <span className="text-[11px] font-bold text-coral-600">
              ~${(selectedVariant.price / selectedVariant.packCount).toFixed(2)}/portion
            </span>
          </div>

          {/* Controls: Pack Variant & Preparation */}
          <div className="space-y-2 mb-4">
            <div className="flex gap-1.5">
              {product.variants.map(v => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-bold transition border ${
                    selectedVariant.id === v.id
                      ? 'bg-ocean-900 text-white border-ocean-900 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {v.packCount} Fillets
                </button>
              ))}
            </div>

            <div className="relative">
              <select
                value={selectedPrep}
                onChange={(e) => setSelectedPrep(e.target.value)}
                className="w-full text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-ocean-500"
              >
                {product.preparationOptions.map(prep => (
                  <option key={prep} value={prep}>{prep}</option>
                ))}
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5 pt-0">
        <button
          onClick={() => addToCart(product, selectedVariant, selectedPrep)}
          className="w-full py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition hover:shadow-md"
        >
          <i data-lucide="shopping-cart" className="w-4 h-4"></i>
          Add to Cart (${selectedVariant.price})
        </button>
      </div>
    </div>
  );
}

window.ProductCard = ProductCard;

