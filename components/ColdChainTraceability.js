// components/ColdChainTraceability.js
// Sourcing, cold chain pillars, and fishing ground origin cards

function ColdChainTraceability({ sourcingOrigins, onOpenSourcingModal }) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-ocean-600 uppercase bg-ocean-100 border border-ocean-200 px-3 py-1 rounded-full">
            Pristine Cold-Chain Integrity
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-ocean-950 mt-3 mb-4">
            How AM Seafood Guarantees Unmatched Freshness
          </h2>
          <p className="text-slate-600 text-base">
            Supermarket fish is often weeks old and thawed multiple times. Our direct-from-ocean cold-chain ensures your catch is blast-frozen within hours of harvest and arrives solid frozen at your kitchen table.
          </p>
        </div>

        {/* 4 COLD-CHAIN PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center relative group hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-ocean-100 text-ocean-700 mx-auto flex items-center justify-center mb-4">
              <i data-lucide="anchor" className="w-7 h-7"></i>
            </div>
            <span className="text-xs font-black text-coral-600 uppercase">Step 01</span>
            <h3 className="text-base font-bold text-ocean-950 mt-1 mb-2">Sustainable Harvest</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct partnerships with small-boat wild fleets in Alaska & Maine. Zero chemical dips or artificial water weight.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center relative group hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-700 mx-auto flex items-center justify-center mb-4">
              <i data-lucide="snowflake" className="w-7 h-7"></i>
            </div>
            <span className="text-xs font-black text-coral-600 uppercase">Step 02</span>
            <h3 className="text-base font-bold text-ocean-950 mt-1 mb-2">Flash-Frozen at -40°F</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cryogenically blast-frozen within 2-4 hours onboard. Rapid freeze preserves moisture, flavor, and cell membrane integrity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center relative group hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
              <i data-lucide="package" className="w-7 h-7"></i>
            </div>
            <span className="text-xs font-black text-coral-600 uppercase">Step 03</span>
            <h3 className="text-base font-bold text-ocean-950 mt-1 mb-2">100% Recyclable Cooler</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Insulated with eco-friendly cornstarch foam and packed with solid dry ice pellets (-109°F) engineered for 72-hour transit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center relative group hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl bg-coral-100 text-coral-700 mx-auto flex items-center justify-center mb-4">
              <i data-lucide="shield-check" className="w-7 h-7"></i>
            </div>
            <span className="text-xs font-black text-coral-600 uppercase">Step 04</span>
            <h3 className="text-base font-bold text-ocean-950 mt-1 mb-2">Guaranteed Frozen</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Arrives frozen solid below 4°C. In the unlikely event of transit thaw or delay, we re-ship or refund 100% instantly.
            </p>
          </div>

        </div>

        {/* INTERACTIVE ORIGIN SOURCING CARDS */}
        <div className="bg-ocean-950 text-white rounded-3xl p-8 sm:p-12 border border-ocean-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">Ocean-To-Table Traceability</span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading mt-1">Our Certified Fishing Grounds</h3>
            </div>
            <button
              onClick={onOpenSourcingModal}
              className="px-5 py-2.5 rounded-xl bg-ocean-800 hover:bg-ocean-700 text-xs font-bold text-cyan-300 border border-ocean-700 flex items-center gap-2 self-start md:self-auto"
            >
              <i data-lucide="map" className="w-4 h-4"></i>
              View Interactive Origin Map
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sourcingOrigins.map(origin => (
              <div key={origin.id} className="bg-ocean-900/80 rounded-2xl p-5 border border-ocean-800 flex flex-col justify-between">
                <div>
                  <img
                    src={origin.image}
                    alt={origin.name}
                    className="w-full h-32 rounded-xl object-cover mb-3"
                  />
                  <span className="text-[10px] uppercase font-bold text-coral-400 block">{origin.species}</span>
                  <h4 className="text-sm font-bold text-white mt-0.5">{origin.name}</h4>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3">{origin.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-ocean-800/80 text-[11px] text-cyan-300 font-semibold flex items-center gap-1">
                  <i data-lucide="check-circle-2" className="w-3.5 h-3.5 text-emerald-400"></i>
                  <span>{origin.badge}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

window.ColdChainTraceability = ColdChainTraceability;

