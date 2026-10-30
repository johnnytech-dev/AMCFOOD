// components/CartDrawer.js
// Slide-over cart drawer with free shipping progress bar, cross-sell items, and promo code

function CartDrawer({ crossSells, onOpenCheckout }) {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    cartSubtotal,
    discountAmount,
    shippingCost,
    cartTotal,
    freeShippingDifference,
    freeShippingProgress,
    promoCode,
    setPromoCode,
    appliedPromoName,
    updateQuantity,
    addAddonToCart,
    applyPromo
  } = React.useContext(window.CartContext);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-ocean-950/70 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 bg-ocean-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i data-lucide="shopping-bag" className="w-5 h-5 text-coral-400"></i>
            <h3 className="font-heading font-bold text-base">Your Chilled Catch Cart</h3>
            <span className="text-xs bg-ocean-800 text-cyan-300 px-2 py-0.5 rounded-full font-bold">
              {cart.reduce((sum, i) => sum + i.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            ✕
          </button>
        </div>

        {/* FREE SHIPPING PROGRESS BAR */}
        <div className="bg-sky-50 px-5 py-3 border-b border-sky-100 text-xs">
          <div className="flex justify-between font-bold mb-1.5">
            {freeShippingDifference === 0 ? (
              <span className="text-emerald-700 flex items-center gap-1">
                <i data-lucide="sparkles" className="w-3.5 h-3.5 text-emerald-500"></i>
                🎉 You've unlocked FREE Chilled Express Shipping!
              </span>
            ) : (
              <span className="text-slate-700">
                Add <strong className="text-coral-600">${freeShippingDifference.toFixed(2)}</strong> more for FREE Express Shipping!
              </span>
            )}
            <span className="text-slate-500">{freeShippingProgress}%</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-coral-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${freeShippingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* CART ITEMS LIST */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <i data-lucide="shopping-basket" className="w-8 h-8"></i>
              </div>
              <h4 className="font-bold text-slate-800">Your catch box is empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Fill your freezer with fresh wild-caught salmon, halibut, or customize your own seafood box!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-3 px-5 py-2.5 rounded-xl bg-coral-500 text-white font-bold text-xs"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.cartItemId}
                className="flex gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-100 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">{item.name}</h4>
                    <button
                      onClick={() => updateQuantity(item.cartItemId, 0)}
                      className="text-slate-400 hover:text-red-500 text-xs ml-2"
                    >
                      ✕
                    </button>
                  </div>

                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {item.preparation} • {item.weight}
                  </span>

                  <div className="flex justify-between items-center mt-2.5">
                    <div className="flex items-center gap-2 border border-slate-200 rounded-lg bg-slate-50 px-2 py-0.5">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="text-slate-600 hover:text-black font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-black text-slate-900 w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="text-slate-600 hover:text-black font-bold text-xs"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-black text-ocean-950 font-heading">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* IN-CART CROSS-SELL RECOMMENDATIONS */}
          {cart.length > 0 && crossSells && crossSells.length > 0 && (
            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                Frequently Paired Add-ons:
              </h4>
              <div className="space-y-2">
                {crossSells.map(cs => (
                  <div key={cs.id} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <img src={cs.image} alt={cs.name} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <span className="text-xs font-bold text-slate-900 block leading-tight">{cs.name}</span>
                        <span className="text-[10px] text-slate-500">${cs.price.toFixed(2)} • {cs.weight}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => addAddonToCart(cs)}
                      className="px-2.5 py-1 rounded-lg bg-white border border-coral-400 text-coral-600 hover:bg-coral-500 hover:text-white font-bold text-[11px] transition"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CART FOOTER & CHECKOUT */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            
            {/* Promo Code Input */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code (e.g. SIZZLE15)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-ocean-500 uppercase font-bold"
              />
              <button
                onClick={() => applyPromo()}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl"
              >
                Apply
              </button>
            </div>

            {appliedPromoName && (
              <div className="flex justify-between text-xs text-emerald-600 font-bold bg-emerald-50 p-2 rounded-lg">
                <span>Discount ({appliedPromoName}):</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            {/* Pricing Breakdown */}
            <div className="space-y-1 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Chilled Express Dry Ice Shipping</span>
                <span className="font-bold text-slate-900">
                  {shippingCost === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-ocean-950 pt-2 border-t border-slate-200 font-heading">
                <span>Total Due</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onOpenCheckout}
              className="w-full py-4 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-coral-500/25 transition"
            >
              <i data-lucide="lock" className="w-4 h-4"></i>
              Proceed to Chilled Checkout
            </button>

            <p className="text-[10px] text-center text-slate-400">
              🔒 Encrypted 256-Bit SSL Checkout • Ships on Solid Dry Ice
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

window.CartDrawer = CartDrawer;

