

// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, FiBell, FiShoppingBag, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext"; // ✅ use AuthContext
import logo from "../../assets/images/logo.PNG";
import { categoriesData } from "../data/productsData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { cartItems } = useCart();
  const { user, logout } = useAuth(); // ✅ get logged-in user and logout
  const wishlistCount = wishlist.length;
  const cartCount = cartItems.length;
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    logout(); // ✅ clears AuthContext and localStorage
    navigate("/login");
  };

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value.trim()) return setResults([]);

    const query = value.toLowerCase();
    let allResults = [];
    Object.entries(categoriesData).forEach(([catId, products]) => {
      products.forEach((p) => {
        if (
          p.name.toLowerCase().includes(query) ||
          (p.description && p.description.toLowerCase().includes(query))
        ) {
          allResults.push({ ...p, categoryId: catId });
        }
      });
    });
    setResults(allResults);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const query = searchTerm.trim().toLowerCase();
    let matchedCategory = null;

    Object.entries(categoriesData).forEach(([catId, products]) => {
      if (
        products.some(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            (p.description && p.description.toLowerCase().includes(query))
        )
      ) {
        matchedCategory = catId;
      }
    });

    if (matchedCategory) {
      navigate(`/products/${matchedCategory}?search=${encodeURIComponent(query)}`);
    } else {
      navigate(`/products/CAKES?search=${encodeURIComponent(query)}`);
    }
    setSearchTerm("");
    setResults([]);
  };

  const handleSelect = (product) => {
    navigate(`/products/${product.categoryId}/${product.id}`);
    setSearchTerm("");
    setResults([]);
  };

  return (
    <nav className="bg-bakeryBrown text-black font-spartan shadow">
      {/* Row 1 */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <img src={logo} alt="Cherii Logo" className="h-24 w-auto object-contain pl-4" />
        </div>

        <ul className="hidden md:flex gap-10 font-semibold tracking-wide text-2xl">
          <li><Link to="/" className="hover:underline">HOME</Link></li>
          <li><Link to="/about" className="hover:underline">ABOUT US</Link></li>
          <li><Link to="/products" className="hover:underline">OUR PRODUCTS</Link></li>
          <li><Link to="/blog" className="hover:underline">BLOG</Link></li>
          <li><Link to="/contact" className="hover:underline">CONTACT US</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <Link to="/wishlist" className="relative">
            <FiHeart size={22} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-[6px] py-[1px]">
                {wishlistCount}
              </span>
            )}
          </Link>
          <FiBell size={22} />
          <Link to="/cart" className="relative">
            <FiShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-[6px] py-[1px]">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Row 2: Desktop Search + Login/User */}
      <div className="hidden md:flex items-center justify-between px-6 pb-4">
        <div className="w-[96px]"></div>

        <form
          onSubmit={handleSearch}
          className="flex items-center bg-bakeryLight px-3 rounded shadow-sm w-full max-w-lg relative"
        >
          <FiSearch className="text-gray-500" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="SEARCH PRODUCTS..."
            className="w-full px-4 py-2 focus:outline-none bg-[#fff6f0]"
          />
          {results.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-lg shadow-lg z-50">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelect(product)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.categoryId}</p>
                </div>
              ))}
            </div>
          )}
        </form>

        <div className="flex justify-end w-[150px]">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg text-white">{user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white text-sm px-4 py-1 rounded-full shadow"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-[#f9d649] text-black text-lg px-8 py-2 rounded-full font-bold shadow">
                LOGIN
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
