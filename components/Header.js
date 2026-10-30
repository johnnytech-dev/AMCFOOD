// components/Header.js
// Global Announcement Bar & Navigation Header for AM SEA FOOD SALES

function Header({ searchQuery, setSearchQuery, onOpenSourcingModal }) {
  const { cart, setIsCartOpen, cartSubtotal } = React.useContext(window.CartContext);
  const { deliveryInfo, setIsZipModalOpen } = React.useContext(window.ZipContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* TOP EMERGENCY COLD-CHAIN ANNOUNCEMENT BAR */}
      <div className="bg-ocean-950 text-cyan-200 border-b border-ocean-800 text-xs py-2 px-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-white font-bold">COLD-CHAIN ASSURANCE:</span>
            <span>Packed with Solid Dry Ice • Flash-Frozen at -40°F • Guaranteed Fresh Arrival &lt; 4°C</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => setIsZipModalOpen(true)}
              className="flex items-center gap-1.5 text-cyan-300 hover:text-white bg-ocean-900 hover:bg-ocean-800 px-3 py-1 rounded-full border border-ocean-700 transition"
            >
              <i data-lucide="map-pin" className="w-3.5 h-3.5 text-coral-400"></i>
              <span>Delivering to: <strong className="text-white underline">{deliveryInfo.zipCode}</strong> ({deliveryInfo.deliveryDate})</span>
              <i data-lucide="chevron-down" className="w-3 h-3 text-cyan-400"></i>
            </button>

            <span className="hidden lg:inline text-cyan-400/60">|</span>
            <span className="hidden lg:inline text-white font-semibold">
              Free Chilled Express Delivery on Orders $125+
            </span>
          </div>

        </div>
      </div>

      {/* GLOBAL HEADER */}
      <header className="bg-white/95 backdrop-blur-md sticky top-8 z-30 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* BRAND LOGO */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-ocean-900 via-ocean-800 to-ocean-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-white">
                  <i data-lucide="fish" className="w-7 h-7 text-cyan-300"></i>
                </div>
                <div>
                  <span className="block text-2xl font-black tracking-tight text-ocean-950 font-heading leading-tight">
                    AM SEA FOOD
                  </span>
                  <span className="block text-[10px] uppercase font-extrabold tracking-widest text-coral-600">
                    Direct Ocean Catch • Est. 2018
                  </span>
                </div>
              </a>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-700">
              <a href="#catalog" className="hover:text-ocean-600 transition flex items-center gap-1">
                Shop Seafood <i data-lucide="chevron-down" className="w-4 h-4 text-slate-400"></i>
              </a>
              <a href="#custom-box-builder" className="hover:text-ocean-600 transition flex items-center gap-1.5 text-coral-600 font-extrabold">
                <span className="px-2 py-0.5 rounded-full bg-coral-100 text-coral-700 text-[10px] tracking-wide uppercase">Popular</span>
                Build Your Box
              </a>
              <a href="#curated-boxes" className="hover:text-ocean-600 transition">
                Curated Boxes
              </a>
              <button onClick={onOpenSourcingModal} className="hover:text-ocean-600 transition">
                Our Sourcing Story
              </button>
              <a href="#recipes" className="hover:text-ocean-600 transition">
                Chef Recipes
              </a>
            </nav>

            {/* SEARCH & CART ACTIONS */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Search Bar Input */}
              <div className="relative hidden md:block w-48 xl:w-64">
                <input
                  type="text"
                  placeholder="Search wild salmon, halibut..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500 transition"
                />
                <i data-lucide="search" className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"></i>
              </div>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-ocean-900 hover:bg-ocean-800 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition hover:shadow-md"
              >
                <i data-lucide="shopping-bag" className="w-5 h-5 text-coral-400"></i>
                <span className="hidden sm:inline">Cart</span>
                <span className="bg-coral-500 text-white text-xs px-2 py-0.5 rounded-full font-black">
                  {totalItems}
                </span>
                {cartSubtotal > 0 && (
                  <span className="hidden xl:inline text-xs font-semibold text-cyan-200 border-l border-ocean-700 pl-2">
                    ${cartSubtotal.toFixed(2)}
                  </span>
                )}
              </button>

            </div>

          </div>
        </div>
      </header>
    </>
  );
}

window.Header = Header;

