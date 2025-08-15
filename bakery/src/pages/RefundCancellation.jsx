import { motion } from "framer-motion";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

export default function RefundCancellation() {
  return (
    <>
    <Navbar/>
    <section className="bg-[#fff6f0] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-[#e28542]">
          Refund & Cancellation Policy
        </h1>

        <p className="text-xl text-black text-justify">
          We aim to ensure every customer is delighted with their order. If you
          face any issue with your purchase, please read our policy below:
        </p>

        <h2 className="text-3xl font-semibold text-[#e28542]">Cancellations</h2>
        <ul className="list-disc list-inside text-xl text-black space-y-2">
          <li>Orders can be cancelled within <strong>2 hours</strong> of placing them.</li>
          <li>Custom cake orders must be cancelled at least <strong>48 hours</strong> in advance.</li>
          <li>To cancel, contact our customer care with your order ID.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-[#e28542]">Refunds</h2>
        <ul className="list-disc list-inside text-xl text-black space-y-2">
          <li>Refunds are processed only for defective or incorrect items.</li>
          <li>Perishable products like cakes and pastries are non-returnable.</li>
          <li>Refunds will be credited to your original payment method within 5-7 business days.</li>
        </ul>

        <p className="text-xl text-black">
          We value customer satisfaction and will review every case individually
          to provide the best possible resolution.
        </p>
      </div>
    </section>
    <Footer/>
    </>
    
  );
}

