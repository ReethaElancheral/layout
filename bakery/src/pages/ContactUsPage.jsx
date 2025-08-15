import ContactUs from "../components/contact/ContactUs";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";






const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <ContactUs/>
      </main>
<Footer/>
    </div>
  );
};

export default ContactUsPage;
