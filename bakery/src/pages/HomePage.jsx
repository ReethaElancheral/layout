import CenteredImage from "../components/home/CenteredImage";
import CommonQuestions from "../components/home/CommonQuestions";
import CustomerTestimonials from "../components/home/CustomerTestimonials";
import Footer from "../components/home/Footer";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/home/Navbar";
import Offers from "../components/home/Offers";
import WhyChooseUs from "../components/home/WhyChooseUs";





const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <HeroSection/>
  <WhyChooseUs/>
  <Offers/>
  <CommonQuestions/>
  <CenteredImage/>
  <CustomerTestimonials/>
      </main>
<Footer/>
    </div>
  );
};

export default HomePage;
