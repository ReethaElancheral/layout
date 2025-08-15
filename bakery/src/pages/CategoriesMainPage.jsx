
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import CategoriesPage from "../components/ourproducts/CategoriesPage";






const CategoriesMainPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <CategoriesPage/>
      </main>
<Footer/>
    </div>
  );
};

export default CategoriesMainPage;
