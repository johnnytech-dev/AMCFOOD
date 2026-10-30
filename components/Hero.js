// components/Hero.js
// Hero section for AM SEA FOOD SALES

function Hero({ featuredProduct, onAddToCart, onQuickView }) {
  const { deliveryInfo } = React.useContext(window.ZipContext);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-800 text-white pt-16 pb-20 lg:pt-20 lg:pb-28">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* HERO LEFT COPY */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-ocean-800/80 border border-ocean-700/80 px-4 py-1.5 rounded-full text-xs font-semibold text-cyan-300">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-slate-200">Rated 4.9/5 by 38,000+ Seafood Lovers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight">
              Pure, Natural Seafood <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-coral-400">
                Delivered Fresh to Your Door
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Wild-caught from the frigid, pure waters of Alaska and Maine. Flash-frozen onboard at <span className="text-cyan-300 font-bold">-40°F</span> within hours of harvest to lock in fresh-from-the-ocean flavor, texture, and natural Omega-3s.
            </p>

            {/* DUAL CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalog"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-extrabold text-base shadow-lg shadow-coral-500/30 flex items-center justify-center gap-2 transition hover:-translate-y-0.5"
              >
                <i data-lucide="compass" className="w-5 h-5"></i>
                Shop All Catch
              </a>

              <a
                href="#custom-box-builder"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-ocean-800/90 hover:bg-ocean-700/90 border border-cyan-400/30 text-white font-extrabold text-base flex items-center justify-center gap-2 transition hover:-translate-y-0.5 shadow-md"
              >
                <i data-lucide="package" className="w-5 h-5 text-cyan-300"></i>
                Build Your Seafood Box
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold">Save 10%</span>
              </a>
            </div>

            {/* Zip quick preview */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
              <i data-lucide="truck" className="w-4 h-4 text-emerald-400"></i>
              <span>Order in the next <strong className="text-white">4 hours</strong> for guaranteed delivery by <strong className="text-cyan-300">{deliveryInfo.deliveryDate}</strong>.</span>
            </div>

          </div>

          {/* HERO RIGHT FEATURED SHOWCASE CARD */}
          <div className="lg:col-span-5 relative">
            {featuredProduct && (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-ocean-700/60 bg-ocean-900 group">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent"></div>

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="badge-coral px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase shadow">
                    Fresh Catch of the Week
                  </span>
                  <span className="badge-wild px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow flex items-center gap-1">
                    <i data-lucide="snowflake" className="w-3.5 h-3.5"></i>
                    Flash-Frozen at -40°F
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-heading">{featuredProduct.name}</h3>
                    <span className="text-xl font-black text-cyan-300">
                      ${featuredProduct.variants[0].price} <span className="text-xs text-slate-300 font-normal">/ {featuredProduct.variants[0].packCount}-pack</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {featuredProduct.shortDescription}
                  </p>
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onAddToCart(featuredProduct)}
                      className="w-full py-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
                    >
                      <i data-lucide="shopping-cart" className="w-4 h-4"></i>
                      Add to Cart ({featuredProduct.variants[0].packCount} Fillets)
                    </button>
                    <button
                      onClick={() => onQuickView(featuredProduct)}
                      className="px-3 py-2.5 rounded-xl bg-ocean-800 hover:bg-ocean-700 text-xs font-bold border border-ocean-600"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;

