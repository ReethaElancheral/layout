

// src/pages/OrderSummary.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mapImg from "../../assets/images/deliverymap.PNG";

const OrderSummary = () => {
  const location = useLocation();
  const { cartItems } = location.state || {};

  // Pick first product from cart
  const mainItem = cartItems && cartItems.length > 0 ? cartItems[0] : null;

  // Random IDs & Dates
  const [orderId, setOrderId] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    setOrderId(`DRF${Math.random().toString(36).substring(2, 12).toUpperCase()}`);
    setTrackingId(`${Math.random().toString(36).substring(2, 8).toUpperCase()}`);

    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);

    const formatDateTime = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "P.M" : "A.M";
      const formattedHours = hours % 12 || 12;
      return `${day}-${month}-${year} ${formattedHours}.${minutes} ${ampm}`;
    };

    setOrderDate(formatDateTime(now));
    setDeliveryDate(formatDateTime(nextDay));
  }, []);

  if (!mainItem) {
    return <div className="p-6 text-red-500">No order data found.</div>;
  }

  return (
    <div className="bg-[#faf3eb] min-h-screen px-4 md:px-12 py-8">
      {/* Top Message */}
      <h1 className="text-center font-bold text-lg md:text-2xl uppercase mb-8">
        The Order Was Processed, Fulfilled, And Delivered As Within One Day
      </h1>

      {/* Order Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div>
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <p className="mb-2 font-medium">PRODUCT ID: <span className="font-normal">{orderId}</span></p>
          <p className="mb-2 font-medium">ORDER DATE: <span className="font-normal">{orderDate}</span></p>
          <p className="mb-2 font-medium">EXPECTED DELIVERY DATE: <span className="font-normal">{deliveryDate}</span></p>
          <p className="mb-2 font-medium">TRACKING ID: <span className="font-normal">{trackingId}</span></p>
        </div>

        {/* Right Column - Product Image */}
        <div className="flex justify-center">
          <img
            src={mainItem.image}
            alt={mainItem.name}
            className="w-full max-w-sm h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

    {/* Tracking Section */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  {/* Left Column - Steps */}
  <div>
    <h2 className="font-bold text-lg mb-6">Track Your Order</h2>
    <div className="relative flex flex-col pl-8">
      {(() => {
        const now = new Date();
        const steps = [
          { label: "Place Your Order", offsetHours: 0 },
          { label: "Billing Your Order", offsetHours: 1 },
          { label: "Loading Your Order", offsetHours: 3.5 },
          { label: "Delivery Expected", offsetHours: 24.5 }
        ];

        const formatDateTime = (date) => {
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();
          const hours = date.getHours();
          const minutes = String(date.getMinutes()).padStart(2, "0");
          const ampm = hours >= 12 ? "P.M" : "A.M";
          const formattedHours = hours % 12 || 12;
          return `${day}-${month}-${year} ${formattedHours}.${minutes} ${ampm}`;
        };

        return steps.map((step, idx) => {
          const stepDate = new Date(now.getTime() + step.offsetHours * 60 * 60 * 1000);
          return (
            <div key={idx} className="relative flex items-start mb-6">
              {/* Circle */}
              <div className="relative flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-orange-500 border-2 border-orange-500 z-10"></div>
                {/* Vertical line under circle */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-600"></div>
                )}
              </div>

              {/* Step Info */}
              <div className="ml-4">
                <p className="font-semibold">{step.label}</p>
                <p className="text-sm text-gray-600">{formatDateTime(stepDate)}</p>
              </div>
            </div>
          );
        });
      })()}
    </div>
  </div>

  {/* Right Column - Map Image */}
  <div className="flex justify-center">
    <img
      src={mapImg}
      alt="Delivery Map"
      className="w-full max-w-lg h-auto rounded-lg shadow-lg"
    />
  </div>
</div>

    </div>
  );
};

export default OrderSummary;
