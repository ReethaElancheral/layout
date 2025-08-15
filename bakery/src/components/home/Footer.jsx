import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from '../../assets/images/footerlogo.png'

export default function Footer() {
  return (
    <footer className="bg-[#f6dd96] text-black py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="Cherii Logo" className="h-22 w-48 mb-4" />
         
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-2xl">Quick Links</h4>
          <ul className="space-y-2 font-medium text-xl">
            <li>Track Your Order</li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund">Refund & Cancellation Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-bold mb-3 text-2xl">Shop</h4>
          <ul className="space-y-2 font-medium text-xl">
            <li><Link to="/products/cookies">Cookies</Link></li>
            <li><Link to="/products/breads">Muesli</Link></li>
            <li><Link to="/products/chocolates">Granola Bars</Link></li>
            <li><Link to="/products/muffins">Seed Mixes</Link></li>
            <li><Link to="/products/giftbox">Gift Boxes</Link></li>
            <li><Link to="/products/chips">Super Savers</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-3 text-2xl">Contact</h4>
          <p className="flex items-center gap-2 font-medium text-xl"><FiMapPin /> No.45, Anna Salai, Chennai - 600017</p>
          <p className="flex items-center gap-2 font-medium text-xl"><FiMail /> info@cherii.com</p>
          <p className="flex items-center gap-2 font-medium text-xl"><FiPhone /> +123 456 7890</p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
