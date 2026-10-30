// components/TrustBar.js
// 4 core cold-chain and quality assurance badges

function TrustBar() {
  return (
    <section className="bg-ocean-950 text-white border-y border-ocean-800/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ocean-800/80 flex items-center justify-center text-cyan-400">
              <i data-lucide="anchor" className="w-5 h-5"></i>
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">Sustainably Wild-Caught</h4>
              <p className="text-[11px] text-slate-400">Never farmed with hormones</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ocean-800/80 flex items-center justify-center text-cyan-400">
              <i data-lucide="snowflake" className="w-5 h-5"></i>
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">Flash-Frozen at Sea</h4>
              <p className="text-[11px] text-slate-400">Cryogenic -40°F hold</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ocean-800/80 flex items-center justify-center text-cyan-400">
              <i data-lucide="shield-check" className="w-5 h-5"></i>
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">Zero Added Chemicals</h4>
              <p className="text-[11px] text-slate-400">No STPP or artificial water</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ocean-800/80 flex items-center justify-center text-coral-400">
              <i data-lucide="award" className="w-5 h-5"></i>
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white">100% Satisfaction</h4>
              <p className="text-[11px] text-slate-400">Arrives frozen or refunded</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

window.TrustBar = TrustBar;

