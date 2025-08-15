
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import CategoryProductsPage from "../components/ourproducts/CategoryProductsPage";






const CategoriesProductsMainPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <CategoryProductsPage/>
      </main>
<Footer/>
    </div>
  );
};

export default CategoriesProductsMainPage;
