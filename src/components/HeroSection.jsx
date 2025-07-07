const HeroSection = () => {
  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="bg-gradient-to-r from-[#4ade80] to-[#06b6d4] text-gray-900
        py-14 sm:py-20 mt-6 sm:mt-10 rounded-lg
        max-w-5xl mx-4 sm:mx-auto px-4 sm:px-6"
    >
      <div className="text-center max-w-3xl mx-auto px-2 sm:px-0">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 sm:mb-6 tracking-wide drop-shadow-md">
          MS Creations
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 drop-shadow-sm px-2 sm:px-0">
          Crafting creativity through every design — bringing your ideas to life with passion and precision.
        </p>
        <button
          className="bg-white text-[#0ea5e9] font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          onClick={scrollToPortfolio}
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
