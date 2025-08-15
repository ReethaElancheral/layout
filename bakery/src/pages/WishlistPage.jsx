
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Wishlist from "../components/ourproducts/Wishlist";






const WishlistPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <Wishlist/>
      </main>
<Footer/>
    </div>
  );
};

export default WishlistPage;
