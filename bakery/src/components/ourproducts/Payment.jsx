
import { useCart } from "../context/CartContext";
import { categoriesData } from "../data/productsData";
import { useNavigate, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { FaLock, FaLeaf, FaClock } from "react-icons/fa";
import CenteredImage from "../home/CenteredImage";

import upi from '../../assets/images/upi.PNG'
import creditcard from '../../assets/images/creditcard.PNG'
import wallet from '../../assets/images/wallet.PNG'

// Helper: find full product meta in categoriesData by id
function findProductMetaById(productId) {
  const idStr = String(productId);
  for (const arr of Object.values(categoriesData || {})) {
    const found = arr.find(
      (p) => String(p.id) === idStr
    );
    if (found) return found;
  }
  return null;
}

export default function PaymentPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
    const { product } = location.state || {};

  // Guard: empty cart
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
        <button
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
          onClick={() => navigate("/")}
        >
          Go Shopping
        </button>
      </div>
    );
  }

  // Show first cart item as the "main" product for the top row (like the product detail page)
  const mainItem = cartItems[0];
  const meta = useMemo(() => findProductMetaById(mainItem.id) || {}, [mainItem.id]);

  const leftImage = mainItem.image || meta.imageUrl;
  const bannerImage = meta.bannerImage || meta.imageUrl;
  const bakeryName = meta.bakery || "Cherii bakery";
  const description = meta.longDescription || meta.description || "";

  // Totals (for entire cart)
  const totalQty = cartItems.reduce((sum, it) => sum + (it.quantity || 0), 0);
  const totalProductPrice = cartItems.reduce(
    (sum, it) => sum + (Number(it.price) || 0) * (it.quantity || 0),
    0
  );
  const discount = totalProductPrice * 0.15; // 15%
  const deliveryFee = 40;
  const gst = (totalProductPrice - discount + deliveryFee) * 0.05; // 5%
  const totalAmount = totalProductPrice - discount + deliveryFee + gst;

  // Address state (all required per your spec)
  const [address, setAddress] = useState({
    name: "",
    location: "",
    mobile: "",
    notes: "",
    addressLine: "",
  });
  const [addressSaved, setAddressSaved] = useState(false);

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState("upi"); // 'upi' | 'wallet' | 'card'
  const [payFields, setPayFields] = useState({
    upiId: "",
    walletId: "",
    cardId: "",
  });

  const handleSaveAddress = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !address.name.trim() ||
      !address.location.trim() ||
      !address.mobile.trim() ||
      !address.notes.trim() ||
      !address.addressLine.trim()
    ) {
      alert("Please fill all address fields (all are mandatory).");
      return;
    }
    setAddressSaved(true);
    alert("Address saved.");
  };

  const handlePay = () => {
  // Ensure address saved
  if (!addressSaved) {
    alert("Please add & save your address first.");
    return;
  }

  // Ensure payment field filled
  if (paymentMethod === "upi" && !payFields.upiId.trim()) {
    alert("Please enter your UPI ID.");
    return;
  }
  if (paymentMethod === "wallet" && !payFields.walletId.trim()) {
    alert("Please enter your Wallet ID.");
    return;
  }
  if (paymentMethod === "card" && !payFields.cardId.trim()) {
    alert("Please enter your Credit Card ID.");
    return;
  }

  // Success: navigate to Order Summary
  clearCart();
  navigate("/order-summary", { state: { cartItems, address, paymentMethod } });
};

  return (
     <section className="overflow-x-hidden bg-[#fff6f0]">
      <h1 className="text-3xl font-bold text-[#e28542] text-center mt-8">PRODUCT DETAILS</h1>
    <div className="p-4 md:p-8 space-y-10">
      {/* ROW 1 — SAME AS PRODUCT DETAIL PAGE */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column: main image + vertical secure items */}
        <div className="flex-1">
          <img
            src={leftImage}
            alt={mainItem.name}
            className="rounded-lg shadow-lg w-[400px] sm:w-[480px] h-[400px] sm:h-[450px] object-cover mx-12"
          />

         
        </div>

        {/* Right column: bakery + product details, weight, qty, price */}
        <div className="flex-1">
          <h3 className="text-black">{bakeryName}</h3>
          <h1 className="text-3xl font-bold text-[#e28542]">{mainItem.name}</h1>
          {description && <p className="mt-2 text-black font-semibold text-xl">{description}</p>}

         

          <div className="mt-4">
            <h4 className="font-semibold mb-1">WEIGHT:</h4>
            <p>{mainItem?.selectedWeight?.label || "-"}</p>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-1 text-lg">Quantity</h4>
            <p>{mainItem.quantity}</p>
          </div>

          <p className="mt-6 text-3xl font-bold text-black">
            ₹{(Number(mainItem.price) * (mainItem.quantity || 1)).toFixed(2)}
          </p>
           <p className="mt-4 text-sm text-black">INCL. OF ALL TAXES</p>

          {cartItems.length > 1 && (
            <p className="mt-2 text-sm text-black">
              + {cartItems.length - 1} more item(s) in this order
            </p>
          )}
        </div>
      </div>

    <h2 className="text-3xl font-bold text-[#e28542] text-center mt-8 mb-4">ADD ADDRESS</h2>
      {/* ROW 2 — ADD ADDRESS (Left) + PRODUCT-RELATED BANNER (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add Address form */}
        <div>
      
          <form className="space-y-4" onSubmit={handleSaveAddress}>
            <div>
              <label className="block text-lg font-medium mb-1">
                NAME <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                value={address.name}
                onChange={(e) => setAddress((s) => ({ ...s, name: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-1">
                DELIVERY LOCATION <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="e.g., Home, Office, City/Area"
                value={address.location}
                onChange={(e) => setAddress((s) => ({ ...s, location: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-1">
                MOBILE NO <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="tel"
                className="w-full border rounded-lg px-3 py-2"
                value={address.mobile}
                onChange={(e) => setAddress((s) => ({ ...s, mobile: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-1">
                ADD NOTES <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                className="w-full border rounded-lg px-3 py-2"
                placeholder="Any instructions for delivery"
                value={address.notes}
                onChange={(e) => setAddress((s) => ({ ...s, notes: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-1">
                ADDRESS <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                className="w-full border rounded-lg px-3 py-2"
                rows={3}
                value={address.addressLine}
                onChange={(e) => setAddress((s) => ({ ...s, addressLine: e.target.value }))}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f9d649] text-black py-3 rounded-lg font-semibold"
            >
              Add Address
            </button>
          </form>
        </div>

        {/* Right: product-related banner image */}
        <div className="flex items-center justify-center">
          {bannerImage ? (
            <img
              src={bannerImage}
              alt="Product banner"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-48 rounded-lg flex items-center justify-center text-gray-500">
              Banner image not available
            </div>
          )}
        </div>
      </div>

<h1 className="text-3xl font-bold text-[#e28542] text-center mt-8 mb-4">PAYMENT OPTIONS</h1>
      {/* ROW 3 — CENTERED PAYMENT OPTIONS */}
  <div className="mt-8 w-full max-w-md mx-auto space-y-4">
  {/* UPI */}
  <div className="flex items-center justify-between border p-3 rounded-lg">
    <div className="flex items-start gap-3">
      <img src={upi} alt="UPI" className="w-12 h-12 mt-1" />
      <div>
        <span className="font-medium block">Pay via UPI</span>
        <input
          type="text"
          placeholder="Enter UPI ID"
          className="border rounded-lg px-3 py-1 w-48 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={payFields.upiId}
          onChange={(e) =>
            setPayFields((s) => ({ ...s, upiId: e.target.value }))
          }
        />
      </div>
    </div>
    <input
      type="checkbox"
      className="w-5 h-5 ml-2 mt-2"
      checked={paymentMethod === "upi"}
      onChange={() => setPaymentMethod("upi")}
    />
  </div>

  {/* Wallet */}
  <div className="flex items-center justify-between border p-3 rounded-lg">
    <div className="flex items-start gap-3">
      <img src={wallet} alt="Wallet" className="w-12 h-12 mt-1" />
      <div>
        <span className="font-medium block">Pay via Wallet</span>
        <input
          type="text"
          placeholder="Enter Wallet ID"
          className="border rounded-lg px-3 py-1 w-48 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={payFields.walletId}
          onChange={(e) =>
            setPayFields((s) => ({ ...s, walletId: e.target.value }))
          }
        />
      </div>
    </div>
    <input
      type="checkbox"
      className="w-5 h-5 ml-2 mt-2"
      checked={paymentMethod === "wallet"}
      onChange={() => setPaymentMethod("wallet")}
    />
  </div>

  {/* Credit Card */}
  <div className="flex items-center justify-between border p-3 rounded-lg">
    <div className="flex items-start gap-3">
      <img src={creditcard} alt="Credit Card" className="w-12 h-12 mt-1" />
      <div>
        <span className="font-medium block">Pay via Credit Card</span>
        <input
          type="text"
          placeholder="Enter Credit Card Number"
          className="border rounded-lg px-3 py-1 w-48 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={payFields.cardId}
          onChange={(e) =>
            setPayFields((s) => ({ ...s, cardId: e.target.value }))
          }
        />
      </div>
    </div>
    <input
      type="checkbox"
      className="w-5 h-5 ml-2 mt-2"
      checked={paymentMethod === "card"}
      onChange={() => setPaymentMethod("card")}
    />
  </div>
</div>




      {/* ROW 4 — PRICE DETAILS (two columns) */}
      <div className="max-w-2xl mx-auto w-full border rounded-lg p-4">
        <div className="grid grid-cols-2 gap-y-2">
          <span>Quantity</span>
          <span className="text-right">{totalQty}</span>

          <span>Total Product Price</span>
          <span className="text-right">₹{totalProductPrice.toFixed(2)}</span>

          <span>Discount Amount (15%)</span>
          <span className="text-right text-green-600">-₹{discount.toFixed(2)}</span>

          <span>Delivery Fee</span>
          <span className="text-right">₹{deliveryFee.toFixed(2)}</span>

          <span>INCL. GST (5%)</span>
          <span className="text-right">₹{gst.toFixed(2)}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total Price Amount</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>

<button
  className="mt-4 w-full bg-[#f9d649] text-black py-3 rounded-lg font-semibold"
  onClick={handlePay} // validation is inside handlePay
>
  PAY & ORDER NOW
</button>
      
      </div>
    </div>
    <CenteredImage/>
    </section>
   
  );
}

