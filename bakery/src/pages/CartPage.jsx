
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Cart from "../components/ourproducts/Cart";






const CartPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
 <Cart/>
      </main>
<Footer/>
    </div>
  );
};

export default CartPage;
