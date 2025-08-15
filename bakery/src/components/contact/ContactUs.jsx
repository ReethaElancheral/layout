// src/pages/ContactUs.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import contactimg from "../../assets/images/contactimg.PNG";
import contactimg2 from "../../assets/images/contactimg2.png";
import contactimg3 from "../../assets/images/contactimg3.png";
import contactimg4 from "../../assets/images/contactimg4.png";
import contactimg5 from "../../assets/images/contactimg5.PNG";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("contacts")) || [];
    existingData.push(formData);
    localStorage.setItem("contacts", JSON.stringify(existingData));
    alert("Message Sent! We will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#fff6ee] py-10 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[#D97B29] font-bold text-3xl uppercase">
          Send Us a Message
        </h2>
        <p className="text-black font-medium text-2xl">
          You can also use the form below to contact us directly. Our team will
          get back to you within 24 hours.
        </p>
      </div>

      {/* Form + Image */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-2xl font-medium mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-2xl font-medium mb-1">
              E Mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-2xl font-medium mb-1">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-2xl font-medium mb-1">
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-2xl font-medium mb-1">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md h-28 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-400 px-6 py-2 rounded-full uppercase font-bold hover:bg-yellow-500 transition w-full"
          >
            Send Messages
          </button>
        </motion.form>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={contactimg}
            alt="Quote"
            className="rounded-lg shadow-lg w-[450px]"
          />
        </motion.div>
      </div>

      {/* Branches Section */}
      <div className="mt-16">
        <h2 className="text-center text-yellow-400 text-3xl font-bold uppercase mb-8">
          Our Branches Across Tamil Nadu
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-48">
          {/* Left Images - Tilted style */}
          <div className="space-y-10 relative">
            <div className="relative">
              <img src={contactimg2} alt="Bakery 1" className="rounded-xl" />
              <img
                src={contactimg3}
                alt="Small Bakery 1"
                className="absolute -bottom-6 -left-6 w-30 rounded-lg rotate-[-1deg]"
              />
            </div>

            <div>
              <img src={contactimg5} alt="Bakery 2" className="rounded-xl" />
            </div>

            <div className="relative">
              <img
                src={contactimg3}
                alt="Small Bakery 2"
                className="absolute -bottom-10 -left-10 w-28 rounded-lg  rotate-[-35deg]"
              />
            </div>

            <div className="relative">
              <img
                src={contactimg4}
                alt="Small Bakery 3"
                className="absolute -bottom-13 left-10 w-[480px] h-[380px] rounded-lg  rotate-[-4deg]"
              />
            </div>
          </div>

          {/* Right Addresses */}
          <div className="space-y-4 text-black font-medium leading-relaxed text-xl">
            <p>
              <strong>Chennai</strong>
              <br />
              No. 45, Anna Salai, T. Nagar, Chennai – 600017
            </p>
            <p>
              <strong>Coimbatore</strong>
              <br />
              12, DB Road, RS Puram, Coimbatore – 641002
            </p>
            <p>
              <strong>Madurai</strong>
              <br />
              28, KK Nagar Main Road, Madurai – 625020
            </p>
            <p>
              <strong>Tiruchirappalli (Trichy)</strong>
              <br />
              7, Salai Road, Thillai Nagar, Trichy – 620018
            </p>
            <p>
              <strong>Salem</strong>
              <br />
              15, Five Roads, Fairlands, Salem – 636016
            </p>
            <p>
              <strong>Tirunelveli</strong>
              <br />
              11, South Bypass Road, Palayamkottai, Tirunelveli – 627002
            </p>
            <p>
              <strong>Erode</strong>
              <br />
              9, Brough Road, Erode – 638001
            </p>
            <p>
              <strong>Vellore</strong>
              <br />
              14, Katpadi Road, Gandhi Nagar, Vellore – 632006
            </p>
            <p>
              <strong>Thoothukudi (Tuticorin)</strong>
              <br />
              6, Beach Road, Tuticorin – 628001
            </p>
            <p>
              <strong>Thanjavur</strong>
              <br />
              10, Medical College Road, Thanjavur – 613004
            </p>
            <p>
              <strong>Dindigul</strong>
              <br />
              4, GTN Road, Dindigul – 624005
            </p>
            <p>
              <strong>Kanchipuram</strong>
              <br />
              3, Ekambaranathar Sannathi Street, Kanchipuram – 631502
            </p>
            <p>
              <strong>Karur</strong>
              <br />
              22, Kovai Road, Karur – 639002
            </p>
            <p>
              <strong>Nagercoil</strong>
              <br />
              16, Cape Road, Vadasery, Nagercoil – 629001
            </p>
            <p>
              <strong>Cuddalore</strong>
              <br />
              8, Beach Road, Cuddalore – 607001
            </p>
            <p>
              <strong>Villupuram</strong>
              <br />
              19, Tindivanam Road, Villupuram – 605602
            </p>
            <p>
              <strong>Namakkal</strong>
              <br />
              5, Salem Road, Namakkal – 637001
            </p>
            <p>
              <strong>Tiruppur</strong>
              <br />
              20, Avinashi Road, Tiruppur – 641603
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
