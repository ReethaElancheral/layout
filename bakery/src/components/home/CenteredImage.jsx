import React from "react";
import flower from "../../assets/images/flower.png";

export default function CenteredImage() {
  return (
    <section className="w-full flex justify-center items-center py-8 bg-[#fff6f0]">
      <img
        src={flower}
        alt="Flower"
        className="max-w-full h-auto object-contain"
      />
    </section>
  );
}
