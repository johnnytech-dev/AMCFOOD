// components/ProductCatalog.js
// Filterable Product Catalog with Category Tabs, Sorters, and Product Grid

function ProductCatalog({ products, searchQuery, onQuickView }) {
  const [selectedCategory, setSelectedCategory] = React.useState("All Catch");
  const [activeTagFilter, setActiveTagFilter] = React.useState("All");
  const [sortBy, setSortBy] = React.useState("popular");

  const filteredProducts = React.useMemo(() => {
    return products.filter(p => {
      if (selectedCategory !== "All Catch") {
        if (selectedCategory === "Fresh Catch & Fillets" && p.category !== "Fresh Catch") return false;
        if (selectedCategory === "Shellfish & Scallops" && p.category !== "Shellfish") return false;
        if (selectedCategory === "Sashimi Grade" && p.category !== "Sashimi Grade") return false;
        if (selectedCategory === "Smoked & Prepared" && p.category !== "Smoked & Prepared") return false;
      }
      if (activeTagFilter !== "All") {
        if (activeTagFilter === "Wild-Caught" && !p.tag.includes("Wild")) return false;
        if (activeTagFilter === "Omega-3 Rich" && parseInt(p.nutrition.omega3.replace(/\D/g, ''), 10) < 1000) return false;
        if (activeTagFilter === "Best Sellers" && p.badge !== "Best Seller" && p.badge !== "Top Rated") return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches = p.name.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.pricePerPortion - b.pricePerPortion;
      if (sortBy === "price-desc") return b.pricePerPortion - a.pricePerPortion;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [products, selectedCategory, activeTagFilter, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CATALOG HEADER & CATEGORY TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-ocean-600 uppercase">
              Direct Ocean Inventory
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-ocean-950 mt-1">
              Shop Premium Seafood
            </h2>
          </div>

          {/* Sorter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-100">
          {["All Catch", "Fresh Catch & Fillets", "Shellfish & Scallops", "Sashimi Grade", "Smoked & Prepared"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-ocean-900 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SECONDARY FILTER TAGS */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-bold text-slate-400">Filter:</span>
          {["All", "Wild-Caught", "Omega-3 Rich", "Best Sellers"].map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTagFilter(tag)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                activeTagFilter === tag
                  ? 'bg-coral-100 text-coral-800 font-bold border border-coral-300'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map(product => (
            <window.ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <i data-lucide="search-x" className="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
            <h3 className="text-lg font-bold text-slate-700">No seafood matched your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => { setSelectedCategory("All Catch"); setActiveTagFilter("All"); }}
              className="mt-4 px-4 py-2 bg-ocean-900 text-white rounded-xl text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

window.ProductCatalog = ProductCatalog;

