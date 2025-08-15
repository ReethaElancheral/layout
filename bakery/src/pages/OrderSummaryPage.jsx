
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import OrderSummary from "../components/ourproducts/OrderSummary";






const OrderSummaryPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <OrderSummary/>
      </main>
<Footer/>
    </div>
  );
};

export default OrderSummaryPage;
