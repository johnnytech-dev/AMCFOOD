// components/CuratedBoxes.js
// Pre-packaged curated seafood boxes with subscription discounts

function CuratedBoxes({ boxes }) {
  const { addBoxToCart } = React.useContext(window.CartContext);

  return (
    <section id="curated-boxes" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest text-cyan-400 uppercase bg-ocean-800 border border-ocean-700 px-3 py-1 rounded-full">
            Curated by Our Fishmongers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading mt-3 mb-4">
            Pre-Packaged Seafood Boxes
          </h2>
          <p className="text-slate-300 text-base">
            The easiest way to keep your freezer stocked with pristine ocean proteins. Choose one-time delivery or save an extra 10% on recurring deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map(box => (
            <div
              key={box.id}
              className="bg-ocean-950 rounded-3xl border border-ocean-800 overflow-hidden flex flex-col justify-between hover:border-ocean-600 transition shadow-lg group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={box.image}
                    alt={box.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-coral-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow">
                    {box.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-ocean-900/90 text-cyan-300 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur">
                    {box.portions} Portions
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-400 text-xs mb-1">
                    <span>★★★★★</span>
                    <span className="text-slate-400">({box.reviewsCount})</span>
                  </div>

                  <h3 className="text-base font-bold font-heading mb-2">{box.name}</h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mb-4">{box.description}</p>

                  <div className="space-y-1 text-xs text-slate-400">
                    {box.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <i data-lucide="check" className="w-3.5 h-3.5 text-emerald-400"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-ocean-900/60 mt-4">
                <div className="flex items-baseline justify-between mb-4 pt-4">
                  <div>
                    <span className="text-xs text-slate-400 line-through mr-1">${box.compareAtPrice}</span>
                    <span className="text-xl font-black text-cyan-300 font-heading">${box.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-400 block font-bold">Sub & Save 10%</span>
                    <span className="text-xs font-black text-emerald-300">${box.subscribePrice}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => addBoxToCart(box, false)}
                    className="py-2.5 rounded-xl bg-ocean-800 hover:bg-ocean-700 text-xs font-bold text-white border border-ocean-700 transition"
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => addBoxToCart(box, true)}
                    className="py-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-xs font-extrabold text-white transition shadow"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

window.CuratedBoxes = CuratedBoxes;

