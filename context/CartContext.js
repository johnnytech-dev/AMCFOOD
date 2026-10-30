// context/CartContext.js
// Global Cart state management for AM SEA FOOD SALES

const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);
  const [appliedPromoName, setAppliedPromoName] = React.useState("");
  const [toastMessage, setToastMessage] = React.useState(null);

  const FREE_SHIPPING_THRESHOLD = 125.00;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3800);
  };

  const cartSubtotal = React.useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const discountAmount = React.useMemo(() => {
    return (cartSubtotal * discountPercent) / 100;
  }, [cartSubtotal, discountPercent]);

  const shippingCost = React.useMemo(() => {
    if (cartSubtotal === 0) return 0;
    return cartSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 18.50;
  }, [cartSubtotal]);

  const cartTotal = React.useMemo(() => {
    return Math.max(0, cartSubtotal - discountAmount + shippingCost);
  }, [cartSubtotal, discountAmount, shippingCost]);

  const freeShippingDifference = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const addToCart = (product, variant = null, prep = null) => {
    const selectedVariant = variant || (product.variants && product.variants[0]) || { id: 'v1', price: product.price || 29.99, packCount: 4, totalWeight: '1.5 lbs' };
    const selectedPrep = prep || (product.preparationOptions && product.preparationOptions[0]) || 'Portioned Fillets';
    const cartItemId = `${product.id}-${selectedVariant.id}-${selectedPrep}`;

    setCart(prevCart => {
      const existing = prevCart.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prevCart.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          cartItemId,
          id: product.id,
          name: product.name,
          image: product.image,
          price: selectedVariant.price,
          packCount: selectedVariant.packCount,
          weight: selectedVariant.totalWeight,
          preparation: selectedPrep,
          quantity: 1,
          isBox: false
        }
      ];
    });

    showToast(`Added ${product.name} to your chilled cart!`);
    setIsCartOpen(true);
  };

  const addBoxToCart = (box, isSubscription = false) => {
    const price = isSubscription ? box.subscribePrice : box.price;
    const cartItemId = `${box.id}-${isSubscription ? 'sub' : 'onetime'}`;

    setCart(prevCart => {
      const existing = prevCart.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prevCart.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          cartItemId,
          id: box.id,
          name: box.name,
          image: box.image,
          price: price,
          packCount: box.portions,
          weight: `${box.portions} Portions`,
          preparation: isSubscription ? 'Recurring Catch (10% Off)' : 'One-Time Delivery',
          quantity: 1,
          isBox: true
        }
      ];
    });

    showToast(`Added ${box.name} to your cart!`);
    setIsCartOpen(true);
  };

  const addCustomBoxToCart = (boxTargetSize, boxFrequency, customBoxPrice, customBoxPortions, products) => {
    const portionSummary = Object.entries(customBoxPortions)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const p = products.find(prod => prod.id === id);
        return `${qty}x ${p ? p.name.split(' ')[0] : 'Item'}`;
      })
      .join(', ');

    const cartItemId = `custom-box-${boxTargetSize}-${boxFrequency}-${Date.now()}`;
    const newBox = {
      cartItemId,
      id: `custom-${boxTargetSize}-box`,
      name: `Custom Curated ${boxTargetSize}-Pack Seafood Box`,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      price: customBoxPrice,
      packCount: boxTargetSize,
      weight: `${boxTargetSize} Portions`,
      preparation: `${boxFrequency === 'subscribe' ? 'Bi-Weekly Subscription (10% Off)' : 'One-Time Delivery'} • [${portionSummary}]`,
      quantity: 1,
      isBox: true
    };

    setCart(prev => [...prev, newBox]);
    showToast(`Your Custom ${boxTargetSize}-Pack Seafood Box has been added!`);
    setIsCartOpen(true);
  };

  const addAddonToCart = (addon) => {
    const cartItemId = `addon-${addon.id}`;
    setCart(prevCart => {
      const existing = prevCart.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prevCart.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          cartItemId,
          id: addon.id,
          name: addon.name,
          image: addon.image,
          price: addon.price,
          packCount: 1,
          weight: addon.weight,
          preparation: "Gourmet Add-on",
          quantity: 1,
          isBox: false
        }
      ];
    });
    showToast(`Added ${addon.name} to your order!`);
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    } else {
      setCart(prev =>
        prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item)
      );
    }
  };

  const applyPromo = (code) => {
    const clean = (code || promoCode).trim().toUpperCase();
    if (clean === "SIZZLE15" || clean === "AM15") {
      setDiscountPercent(15);
      setAppliedPromoName(clean);
      showToast("🎉 Promo SIZZLE15 applied: 15% OFF!");
    } else if (clean === "FREESHIP") {
      setDiscountPercent(10);
      setAppliedPromoName(clean);
      showToast("🎉 Promo FREESHIP applied: 10% Discount!");
    } else {
      alert("Invalid code. Try 'SIZZLE15' for 15% off!");
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{
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
      toastMessage,
      addToCart,
      addBoxToCart,
      addCustomBoxToCart,
      addAddonToCart,
      updateQuantity,
      applyPromo,
      clearCart,
      showToast
    }}>
      {children}
    </CartContext.Provider>
  );
}

window.CartContext = CartContext;
window.CartProvider = CartProvider;

