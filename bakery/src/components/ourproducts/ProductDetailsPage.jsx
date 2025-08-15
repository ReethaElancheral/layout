

import { useParams, useNavigate } from "react-router-dom";
import { categoriesData } from "../data/productsData";
import { useState } from "react";
import { FaLock, FaLeaf, FaClock } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // your existing cart provider
import { toast } from "react-toastify";
import secure from '../../assets/images/secure.PNG'
import time from '../../assets/images/time.PNG'
import veg from '../../assets/images/veg.PNG'

export default function ProductDetailPage() {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  
  const product = categoriesData[categoryId]?.find((p) => p.id.toString() === productId);


  const [selectedWeight, setSelectedWeight] = useState(product?.weights[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-4">Product not found</div>;

  const price = product.basePrice * selectedWeight.multiplier * quantity;

 
  const handleAddToCart = () => {
  addToCart({
    id: product.id,
    name: product.name,
    image: product.imageUrl,
    price: product.basePrice * selectedWeight.multiplier,
    selectedWeight,
    quantity,
  });
toast.success(`${product.name} has been added to your cart!`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

};


  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
     <section className="overflow-x-hidden bg-[#fff6f0]">
    <div className="flex flex-col md:flex-row gap-8 p-4">
      {/* LEFT SIDE */}
      <div className="flex-1 mx-12">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-lg shadow-lg w-[400px] sm:w-[480px] h-[400px] sm:h-[450px] object-cover mx-12"
        />

        <div className="mt-8">
          <label className="block mb-1 font-medium">ENTER YOUR PIN CODE</label>
          <input
            type="text"
            placeholder="e.g. 560001"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={secure}/>
            <span className="font-medium text-black text-2xl">100% Secure Payment</span>
          </div>
          <div className="flex items-center gap-3">
           <img src={time}/>
            <span className="font-medium text-black text-2xl">24 Hours Preparation Time</span>
          </div>
          <div className="flex items-center gap-3">
           <img src={veg}/>
            <span className="font-medium text-black text-2xl">100% Vegetarian</span>
          </div>
          <p font-medium text-black text-2xl>**Note that all the orders will be dispatched after 24 hours**</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <h3 className="text-black">{product.bakery}</h3>
        <h1 className="text-3xl font-bold text-[#e28542]">{product.name}</h1>
        <p className="mt-2 text-black text-xl font-semibold">{product.longDescription}</p>

       

        <div className="mt-4">
          <h4 className="font-semibold mb-2">Weight</h4>
          <div className="flex gap-2 flex-wrap">
            {product.weights.map((w) => (
              <button
                key={w.label}
                className={`px-4 py-2 border rounded-lg ${
                  selectedWeight.label === w.label
                    ? "bg-[#f9d649] text-black"
                    : "bg-white"
                }`}
                onClick={() => setSelectedWeight(w)}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2">Quantity</h4>
          <div className="flex items-center gap-3">
            <button
              className="px-3 py-1 border rounded-lg"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-3 py-1 border rounded-lg"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
        </div>

       <p className="mt-6 text-3xl font-bold text-black">₹{price.toFixed(2)}</p>
        <p className="mt-4 text-sm text-black">INCL. OF ALL TAXES</p>


        <div className="mt-6 flex flex-col gap-4">
          <button
            className="flex-1 bg-[#f9d649] text-black py-3 rounded-lg font-semibold text-2xl"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="flex-1 border border-[#f9d649] text-black bg-[#f9d649] py-3 rounded-lg font-semibold text-2xl"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>

        {product.nutrition && (
          <div className="mt-8 shadow-lg border border-gray-400 px-4 py-4 rounded-xl">
            <h4 className="font-semibold text-2xl">Nutrition</h4>
            <p className="text-black text-lg leading-tight">{product.nutrition}</p>
          </div>
        )}
        {product.ingredients && (
          <div className="mt-4 shadow-lg border border-gray-400 px-4 py-4 rounded-xl">
            <h4 className="font-semibold text-2xl">Ingredients</h4>
            <p className="text-black text-lg leading-tight">{product.ingredients}</p>
          </div>
        )}
        {product.allergies && (
          <div className="mt-4 shadow-lg border border-gray-400 px-4 py-4 rounded-xl">
            <h4 className="font-semibold text-2xl">Allergies</h4>
            <p className="text-black text-lg leading-tight">{product.allergies}</p>
          </div>
        )}
      </div>
    </div>
    </section>
  );
}
