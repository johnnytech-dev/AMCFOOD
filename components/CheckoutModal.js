// components/CheckoutModal.js
// Multi-step Checkout Modal for AM SEA FOOD SALES

function CheckoutModal({ onClose, onConfirmOrder }) {
  const { cartSubtotal, discountAmount, shippingCost, cartTotal } = React.useContext(window.CartContext);
  const { zipCode, deliveryInfo } = React.useContext(window.ZipContext);

  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    firstName: "Alex",
    lastName: "Morgan",
    email: "alex.morgan@example.com",
    address: "742 Evergreen Terrace",
    city: "Beverly Hills",
    state: "CA",
    zip: zipCode,
    cardNum: "4242 •••• •••• 4242",
    exp: "12/28",
    cvv: "389"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) onConfirmOrder(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-950/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="flex items-center justify-center gap-4 mb-6 text-xs font-bold">
          <span className={step === 1 ? 'text-coral-600 underline' : 'text-slate-400'}>1. Shipping & Cold Chain</span>
          <span className="text-slate-300">→</span>
          <span className={step === 2 ? 'text-coral-600 underline' : 'text-slate-400'}>2. Secure Payment</span>
        </div>

        <form onSubmit={handleNext}>
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-ocean-950">
                Chilled Delivery Address
              </h3>
              
              <div className="bg-sky-50 p-3.5 rounded-xl border border-sky-100 text-xs text-sky-900">
                <p className="font-bold flex items-center gap-1.5">
                  <i data-lucide="snowflake" className="w-4 h-4 text-sky-600"></i>
                  Guaranteed Delivery Date: {deliveryInfo.deliveryDate}
                </p>
                <p className="text-[11px] text-sky-700 mt-0.5">
                  Method: {deliveryInfo.carrier} • Insulated with dry ice
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase">First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase">Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 uppercase">Email for Tracking Receipt</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 uppercase">Street Address</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase">City</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase">State</label>
                  <input
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase">ZIP</label>
                  <input
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-xs uppercase tracking-wider mt-4"
              >
                Continue to Payment →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-ocean-950">
                Payment Details
              </h3>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Order Total:</span>
                  <span className="font-bold text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Delivery to {form.city}, {form.zip}</span>
                  <span>Arrival: {deliveryInfo.deliveryDate}</span>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 uppercase">Card Number</label>
                <input
                  name="cardNum"
                  value={form.cardNum}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase">Expiry</label>
                  <input
                    name="exp"
                    value={form.exp}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase">CVC / CVV</label>
                  <input
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 font-mono"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20"
                >
                  Confirm & Place Order (${cartTotal.toFixed(2)})
                </button>
              </div>

            </div>
          )}
        </form>

      </div>
    </div>
  );
}

window.CheckoutModal = CheckoutModal;

