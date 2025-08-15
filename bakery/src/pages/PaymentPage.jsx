
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Payment from "../components/ourproducts/Payment";





const PaymentPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <Payment/>
      </main>
<Footer/>
    </div>
  );
};

export default PaymentPage;
