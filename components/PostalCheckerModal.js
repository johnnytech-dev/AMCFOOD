// components/PostalCheckerModal.js
// Modal allowing users to verify zip code for chilled express delivery

function PostalCheckerModal({ onClose }) {
  const { zipCode, validateZip } = React.useContext(window.ZipContext);
  const [inputVal, setInputVal] = React.useState(zipCode);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateZip(inputVal)) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-950/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
          <i data-lucide="map-pin" className="w-6 h-6"></i>
        </div>

        <h3 className="text-xl font-bold font-heading text-ocean-950">
          Verify Cold-Chain Delivery
        </h3>
        <p className="text-xs text-slate-600 mt-1 mb-6">
          Enter your US 5-digit zip code to calculate next-day express delivery date and temperature-controlled routing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              ZIP / Postal Code:
            </label>
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="e.g. 90210, 10001, 33101"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-ocean-500 focus:outline-none"
              autoFocus
            />
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-bold">
              <i data-lucide="check-circle" className="w-4 h-4 text-emerald-500"></i>
              <span>Ships in Insulated Dry Ice Coolers</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Guaranteed arrival below 4°C (frozen solid). 100% money-back freshness guarantee.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-coral-500/20 transition"
          >
            Check Delivery Schedule
          </button>
        </form>
      </div>
    </div>
  );
}

window.PostalCheckerModal = PostalCheckerModal;

