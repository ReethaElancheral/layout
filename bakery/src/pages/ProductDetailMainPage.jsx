
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import ProductDetailPage from "../components/ourproducts/ProductDetailsPage";





const ProductDetailMainPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <ProductDetailPage/>
      </main>
<Footer/>
    </div>
  );
};

export default ProductDetailMainPage;
