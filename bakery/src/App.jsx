import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import CategoriesMainPage from "./pages/CategoriesMainPage";
import CategoriesProductsMainPage from "./pages/CategoriesProductsMainPage";
import ProductDetailMainPage from "./pages/ProductDetailMainPage";
import ContactUsPage from "./pages/ContactUsPage";
import WishlistPage from "./pages/WishlistPage";
import PaymentPage from "./pages/PaymentPage";
import CartPage from "./pages/CartPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import BlogPage from "./pages/BlogPage";

import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage";
import ScrollToTop from "./components/scroll/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundCancellation from "./pages/RefundCancellation";
import TermsConditions from "./pages/Terms";

function App() {
  return (
    <>
        <Toaster position="top-right" />
      <Router>
        <div className="min-h-screen bg-[#E6E6FA] font-spartan text-black">
          <main>
            <ScrollToTop/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactUsPage/>} />
              <Route path="/wishlist" element={<WishlistPage/>} />
              <Route path="/products" element={<CategoriesMainPage />} />
              <Route path="/payment" element={<PaymentPage/>} />
              <Route path="/order-summary" element={<OrderSummaryPage/>} />
              <Route path="/cart" element={<CartPage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/blog" element={<BlogPage/>} />
              <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
              <Route path="/refund" element={<RefundCancellation/>} />
              <Route path="/terms" element={<TermsConditions/>} />
              <Route
                path="/products/:categoryId"
                element={<CategoriesProductsMainPage />}
              />
              <Route
                path="/products/:categoryId/:productId"
                element={<ProductDetailMainPage />}
              />
            </Routes>
          </main>
        </div>
      </Router>

      <ToastContainer 
        position="top-right" 
        autoClose={2000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
      />
    </>
  );
}

export default App;
