// components/ChefRecipes.js
// Chef recipes and cooking inspiration with 1-click cart addition

function ChefRecipes({ recipes, products }) {
  const { addToCart } = React.useContext(window.CartContext);

  return (
    <section id="recipes" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-coral-600 uppercase">
              Culinary Inspiration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-ocean-950 mt-1">
              Chef-Approved Seafood Recipes
            </h2>
          </div>
          <p className="text-slate-500 text-xs max-w-md">
            Cooking wild seafood at home is simple and takes under 20 minutes. Browse chef techniques and add the exact catch to your cart in one click.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <div
              key={recipe.id}
              className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition group"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-ocean-950/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    ⏱ {recipe.time} • {recipe.difficulty}
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-bold text-coral-600 block uppercase">{recipe.seafoodName}</span>
                  <h3 className="text-sm font-bold text-ocean-950 mt-1 mb-2 line-clamp-2">{recipe.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{recipe.desc}</p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    const match = products.find(p => p.id === recipe.seafoodId);
                    if (match) addToCart(match);
                  }}
                  className="w-full py-2.5 rounded-xl bg-ocean-900 hover:bg-ocean-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition"
                >
                  <i data-lucide="plus-circle" className="w-4 h-4 text-coral-400"></i>
                  Add Catch to Cart
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

window.ChefRecipes = ChefRecipes;

