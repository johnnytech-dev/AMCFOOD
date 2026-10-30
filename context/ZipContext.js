// context/ZipContext.js
// Postal Code & Cold-Chain delivery estimation context

const ZipContext = React.createContext();

function ZipProvider({ children }) {
  const [zipCode, setZipCode] = React.useState("90210");
  const [isZipModalOpen, setIsZipModalOpen] = React.useState(false);
  const [deliveryInfo, setDeliveryInfo] = React.useState({
    zipCode: "90210",
    carrier: "UPS Next-Day Chilled Express",
    deliveryDate: "Tomorrow",
    guarantee: "100% Recyclable Cooler with 5 lbs Solid Dry Ice (< -78.5°C)"
  });

  const validateZip = (inputZip) => {
    if (!inputZip || inputZip.trim().length < 4) {
      alert("Please enter a valid 5-digit US Postal code.");
      return false;
    }
    const clean = inputZip.trim();
    const isNextDay = parseInt(clean.slice(-1), 10) % 2 === 0;

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + (isNextDay ? 1 : 2));
    if (targetDate.getDay() === 0) targetDate.setDate(targetDate.getDate() + 1); // skip Sunday

    const formattedDate = targetDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric"
    });

    setZipCode(clean);
    setDeliveryInfo({
      zipCode: clean,
      carrier: isNextDay ? "UPS Next-Day Chilled Express" : "FedEx Priority Chilled Air",
      deliveryDate: formattedDate,
      guarantee: "100% Recyclable Cooler with 5 lbs Solid Dry Ice. Guaranteed < 4°C upon arrival."
    });
    setIsZipModalOpen(false);
    return true;
  };

  return (
    <ZipContext.Provider value={{
      zipCode,
      setZipCode,
      deliveryInfo,
      isZipModalOpen,
      setIsZipModalOpen,
      validateZip
    }}>
      {children}
    </ZipContext.Provider>
  );
}

window.ZipContext = ZipContext;
window.ZipProvider = ZipProvider;

