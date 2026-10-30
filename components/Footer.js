// components/Footer.js
// Global Footer for AM SEA FOOD SALES

function Footer() {
  const { applyPromo } = React.useContext(window.CartContext);

  return (
    <footer className="bg-ocean-950 text-slate-400 text-xs pt-16 pb-12 border-t border-ocean-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-ocean-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ocean-800 flex items-center justify-center text-cyan-300">
                <i data-lucide="fish" className="w-6 h-6"></i>
              </div>
              <div>
                <span className="block text-xl font-black text-white font-heading">AM SEA FOOD SALES</span>
                <span className="block text-[10px] uppercase tracking-widest text-coral-400 font-bold">Premium Flash-Frozen D2C Seafood</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Delivering wild Alaskan salmon, cold-water Maine lobster, and dry-pack sea scallops directly to American dinner tables with 100% guaranteed cold-chain arrival.
            </p>
            <div className="pt-2 text-slate-300 space-y-0.5">
              <p>📍 Fulfillment Docks: Anchorage, AK & Gloucester, MA</p>
              <p>📞 Customer Support: 1-800-555-CATCH (Mon-Fri 8am-6pm EST)</p>
            </div>
          </div>

          {/* Shop Seafood */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Shop Seafood</h4>
            <ul className="space-y-2.5">
              <li><a href="#catalog" className="hover:text-white transition">Wild Alaskan Salmon</a></li>
              <li><a href="#catalog" className="hover:text-white transition">Pacific Halibut & Cod</a></li>
              <li><a href="#catalog" className="hover:text-white transition">Maine Lobster Tails</a></li>
              <li><a href="#catalog" className="hover:text-white transition">Jumbo Dry Sea Scallops</a></li>
              <li><a href="#catalog" className="hover:text-white transition">Colossal King Crab</a></li>
            </ul>
          </div>

          {/* Boxes & Subscriptions */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Boxes & Plans</h4>
            <ul className="space-y-2.5">
              <li><a href="#custom-box-builder" className="hover:text-white transition text-coral-400 font-bold">Build Your Own Box</a></li>
              <li><a href="#curated-boxes" className="hover:text-white transition">Wild Salmon Showcase</a></li>
              <li><a href="#curated-boxes" className="hover:text-white transition">Shellfish & Lobster Box</a></li>
              <li><a href="#curated-boxes" className="hover:text-white transition">Omega-3 Power Box</a></li>
              <li><a href="#curated-boxes" className="hover:text-white transition">Subscribe & Save 10%</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Get $15 Off Your First Catch</h4>
            <p className="text-slate-400 mb-3">Join 50,000+ seafood enthusiasts. Receive secret seasonal catches & chef recipes.</p>
            <form onSubmit={(e) => { e.preventDefault(); applyPromo("SIZZLE15"); }} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-ocean-900 border border-ocean-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-coral-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs uppercase tracking-wider transition"
              >
                Claim $15 Discount
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <p>© {new Date().getFullYear()} AM SEA FOOD SALES. All rights reserved. Packed with dry ice and delivered cold.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Cold Chain Terms</a>
            <a href="#" className="hover:text-slate-400">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;

