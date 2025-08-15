import { motion } from "framer-motion";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
     <section className="bg-[#fff6f0] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-[#e28542]">
          Privacy Policy
        </h1>
        <p className="text-xl text-black text-justify">
          At Cherii Bakery, we respect your privacy and are committed to
          protecting your personal information. This policy explains how we
          collect, use, and safeguard the data you share with us when you visit
          our website, place an order, or interact with our services.
        </p>

        <h2 className="text-3xl font-semibold text-[#e28542]">Information We Collect</h2>
        <ul className="list-disc list-inside text-xl text-black space-y-2">
          <li>Personal details such as name, address, phone number, and email.</li>
          <li>Payment information for processing orders.</li>
          <li>Order history and preferences.</li>
          <li>Device and browser information for website optimization.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-[#e28542]">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-xl text-black space-y-2">
          <li>To process and deliver your orders.</li>
          <li>To improve our website and customer experience.</li>
          <li>To send updates, offers, and promotions (only if you opt in).</li>
          <li>To comply with legal and regulatory requirements.</li>
        </ul>

        <p className="text-xl text-black">
          We do not sell or share your personal data with third parties except
          when required by law or to complete your order through secure payment
          gateways and delivery partners.
        </p>
      </div>
    </section>
    <Footer/>
    </>
   
  );
}
