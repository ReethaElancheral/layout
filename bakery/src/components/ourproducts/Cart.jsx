



// import { useCart } from "../context/CartContext";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // ✅ import

// export default function Cart() {
//   const { cartItems, removeFromCart, clearCart } = useCart();
//   const navigate = useNavigate();
//   const { user } = useAuth(); // ✅ get logged-in user

//   const totalPrice = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

// const handleProceed = () => {
//   if (!user) {
//     alert("Please login to proceed to payment.");
//     navigate("/login");
//     return;
//   }
//   navigate("/payment");
// };

//   return (
//     <div className="px-4 md:px-12 py-8">
//       <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column */}
//           <div className="flex-1 space-y-4">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex gap-4 bg-white shadow rounded-lg p-4"
//               >
//                 <img
//                   src={item.image || item.imageUrl}
//                   alt={item.name}
//                   className="w-24 h-24 object-cover rounded"
//                 />
//                 <div className="flex flex-col flex-1">
//                   <h2 className="font-semibold">{item.name}</h2>
//                   <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
//                   <p className="text-gray-800 font-semibold">
//                     ₹{(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <button
//               onClick={clearCart}
//               className="text-red-500 underline mt-4 block"
//             >
//               Clear Cart
//             </button>
//           </div>

//           {/* Right Column - Summary */}
//           <div className="w-full lg:w-80 bg-white shadow rounded-lg p-6">
//             <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
//             <p className="flex justify-between mb-2">
//               <span>Total Items:</span> <span>{cartItems.length}</span>
//             </p>
//             <p className="flex justify-between mb-4">
//               <span>Total Price:</span>{" "}
//               <span>₹{totalPrice.toFixed(2)}</span>
//             </p>
//             <button
//               onClick={handleProceed} // ✅ updated
//               className="w-full bg-yellow-400 py-2 rounded font-semibold hover:bg-yellow-500 transition"
//             >
//               Proceed to Payment
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ import

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth(); // ✅ get logged-in user

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleProceed = () => {
    if (!user) {
      alert("Please login to proceed to payment.");
      navigate("/login");
      return;
    }
    navigate("/payment");
  };

  return (
    <div className="px-4 md:px-12 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-white shadow rounded-lg p-4"
              >
                <img
                  src={item.image || item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex flex-col flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                  <p className="text-gray-800 font-semibold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={clearCart}
              className="text-red-500 underline mt-4 block"
            >
              Clear Cart
            </button>
          </div>

          {/* Right Column - Summary */}
          <div className="w-full lg:w-80 bg-white shadow rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
            <p className="flex justify-between mb-2">
              <span>Total Items:</span> <span>{cartItems.length}</span>
            </p>
            <p className="flex justify-between mb-4">
              <span>Total Price:</span> <span>₹{totalPrice.toFixed(2)}</span>
            </p>
            <button
              onClick={handleProceed} // ✅ updated
              className="w-full bg-yellow-400 py-2 rounded font-semibold hover:bg-yellow-500 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
