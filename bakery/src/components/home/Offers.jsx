import offersimg from '../../assets/images/offers.png'

const Offers = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-0 py-8 bg-[#fff6f0]">
      {/* Subheading */}
      <h2 className="text-center text-xl text-[#e28542] sm:text-2xl lg:text-3xl font-bold mb-6">
        OFFERS & DEALS
      </h2>

      {/* Full width image */}
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={offersimg}
          alt="Delicious bakery goods"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Offers;
