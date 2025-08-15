
import AboutUs from "../components/about/AboutUs";
import WhatWeBelieveIn from "../components/about/WhatWeBelieve";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";







const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
 <AboutUs/>

      </main>
<Footer/>
    </div>
  );
};

export default AboutUsPage;
