import React from "react";
import blog1 from '../../assets/images/blog1.png'
import blog2 from '../../assets/images/blog2.png'

export default function Blog() {
  return (
    <div className="bg-[#fff6f0] min-h-screen px-4 sm:px-8 lg:px-16 py-8 font-sans">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold text-[#D97B29] mb-8">
        Welcome to Our Bakery Blog
      </h1>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <img
          src={blog1}
          alt="Fresh Bread"
          className="rounded-2xl w-full h-auto object-cover"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Fresh Bakes, Sweet Stories & Artisan Inspiration
          </h2>
          <p className="text-black leading-relaxed text-xl font-semibold">
            At Cherii Bakery, our passion for baking goes beyond the oven—it’s a
            story we love to share. This blog is your go-to destination for
            everything sweet, savory, and lovingly handmade. Whether you're a
            fellow baker, a food lover, or just someone who enjoys the warmth of
            freshly baked bread, our blog is filled with something just for you.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-[#D97B29] text-3xl font-bold mb-4">
            What You’ll Find Here:
          </h3>

          <div className="space-y-5 text-sm">
            <div>
              <h4 className="text-[#bd7e40] text-2xl font-bold mb-6">
                Behind-the-Scenes Stories
              </h4>
              <p className="text-black text-lg font-semibold">
                Get a peek inside our kitchen, meet our talented bakers, and
                learn what goes into creating your favorite pastries, cakes, and
                loaves.
              </p>
            </div>

            <div>
                 <h4 className="text-[#bd7e40] text-2xl font-bold mb-6">
                Seasonal Specials & New Arrivals
              </h4>
              <p className="text-black text-lg font-semibold">
                Be the first to know about our latest menu additions, seasonal
                treats, and limited-edition goodies.
              </p>
            </div>

            <div>
                <h4 className="text-[#bd7e40] text-2xl font-bold mb-6">
                Recipes & Baking Tips
              </h4>
              <p className="text-black text-lg font-semibold">
                Try your hand at some of our favorite recipes and get expert
                tips to help you bake like a pro at home.
              </p>
            </div>

            <div>
                 <h4 className="text-[#bd7e40] text-2xl font-bold mb-6">
                Customer Spotlights & Events
              </h4>
             <p className="text-black text-lg font-semibold">
                We love our community! Read about our amazing customers,
                featured events, and special moments shared in our bakery.
              </p>
            </div>

            <div>
                <h4 className="text-[#bd7e40] text-2xl font-bold mb-6">
                Sustainability & Ingredients
              </h4>
            <p className="text-black text-lg font-semibold">
                Learn more about the ingredients we use, our sourcing practices,
                and how we’re working to bake better—for you and the planet.
              </p>
            </div>
          </div>
        </div>

        <img
          src={blog2}
          alt="Delicious Cake"
          className="rounded-2xl w-full h-[680px] object-cover"
        />
      </div>

      {/* Footer Note */}
      <p className="text-center mt-12 text-2xl font-bold text-[#804117] leading-tight">
        Whether you&apos;re here for mouthwatering ideas or curious about what’s
        next in our oven, our blog is a delicious stop on your journey. Stay
        connected with us, leave a comment, and don’t forget to subscribe so you
        never miss a crumb!
      </p>
    </div>
  );
}
