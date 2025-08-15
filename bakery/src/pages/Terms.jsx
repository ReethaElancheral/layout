import { motion } from "framer-motion";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

export default function TermsConditions() {
  return (
    <>
    <Navbar/>
<section className="bg-[#fff6f0] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-[#e28542]">
          Terms & Conditions
        </h1>

        <p className="text-xl text-black text-justify">
          By using our website and services, you agree to the terms outlined
          below. Please read them carefully before placing any order with Cherii
          Bakery.
        </p>

        <h2 className="text-3xl font-semibold text-[#e28542]">Ordering</h2>
        <ul className="list-disc list-inside text-xl text-black space-y-2">
          <li>All orders are subject to product availability.</li>
          <li>Prices are subject to change without notice.</li>
          <li>We reserve the right to refuse orders at our discretion.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-[#e28542]">Delivery</h2>
        <ul className="list-disc list-inside text-xl text-black space-y-2">
          <li>Delivery times are estimates and may vary during peak seasons.</li>
          <li>Customers must provide accurate delivery addresses and contact details.</li>
          <li>We are not responsible for delays caused by unforeseen circumstances.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-[#e28542]">Usage of Content</h2>
        <p className="text-xl text-black">
          All images, designs, and content on this website are the property of
          Cherii Bakery and may not be used or reproduced without prior
          permission.
        </p>
      </div>
    </section>
    <Footer/>
    </>
    
  );
}

