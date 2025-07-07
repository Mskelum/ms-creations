import React, { useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import designs from "../data/designs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const scrollRefs = useRef({});

  const categories = [
    "Handbill Design",
    "Cover Page Design",
    "Social Media Post Design",
  ];

  const handleImageClick = (design) => {
    if (window.innerWidth >= 640) {
      setSelectedDesign(design);
    }
  };

  const closeModal = () => setSelectedDesign(null);

  /* Arrow scroll helper */
  const scroll = (category, direction) => {
    const container = scrollRefs.current[category];
    if (!container) return;
    const card = container.querySelector("[data-card]");
    const cardWidth = card?.offsetWidth || 300;
    container.scrollBy({
      left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeroSection />

      <section
        id="portfolio"
        className="max-w-7xl mx-auto px-4 py-20 text-center"
      >
        {categories.map((category) => {
          const filtered = designs.filter((d) => d.category === category);

          return (
            <div key={category} className="mb-13 relative group ml-4 mr-4">
              <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-tight ">
                {category}
              </h2>

              {filtered.length ? (
                <div className="relative">
                  {/* ────────── Arrows ────────── */}
                  <button
                    onClick={() => scroll(category, "left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                               hidden md:flex h-11 w-11 items-center justify-center
                               rounded-full bg-white/80 backdrop-blur shadow hover:bg-white
                               transition group-hover:flex"
                  >
                    <FaChevronLeft className="text-gray-700" />
                  </button>
                  <button
                    onClick={() => scroll(category, "right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                               hidden md:flex h-11 w-11 items-center justify-center
                               rounded-full bg-white/80 backdrop-blur shadow hover:bg-white
                               transition group-hover:flex"
                  >
                    <FaChevronRight className="text-gray-700" />
                  </button>

                  {/* ────────── Card Row ────────── */}
                  <div
                    ref={(el) => (scrollRefs.current[category] = el)}
                    className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2 pt-1"
                  >
                    {filtered.map((design) => {
                      const isSelected = selectedDesign?.id === design.id;

                      return (
                        <div
                          key={design.id}
                          data-card
                          onClick={() => handleImageClick(design)}
                          className={`flex-shrink-0 snap-start cursor-pointer
        w-full sm:w-[48%] md:w-[31%] lg:w-[23.5%]
        rounded-xl border-2 transition-all duration-300 transform
        ${isSelected
                              ? "border-blue-600 scale-105 shadow-lg ring-2 ring-blue-300 animate-pulse"
                              : "border-gray-200 hover:border-blue-400 hover:scale-[1.02]"}
      `}
                        >
                          <div className="overflow-hidden rounded-t-xl h-80 flex items-center justify-center bg-white">
                            <img
                              src={design.image}
                              alt={design.title}
                              className="max-h-full object-contain p-2"
                            />
                          </div>


                          <div className="px-5 py-1 text-center">
                            <p className="mt-1 text-sm text-gray-700 font-semibold">Rs. {design.price}.00</p>
                            <p className="text-sm text-gray-500">{design.size}</p>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>
              ) : (
                <p className="text-gray-500 italic">No designs available.</p>
              )}
            </div>
          );
        })}
      </section>

      {/* ────────── Modal ────────── */}
      {selectedDesign && (
        <div className="hidden sm:flex fixed inset-0 bg-black/70 items-center justify-center z-50" onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 mx-4"
          >
            <img
              src={selectedDesign.image}
              alt={selectedDesign.title}
              className="w-full rounded-lg mb-6 object-contain max-h-[65vh]"
            />
            <button
              onClick={closeModal}
              className="px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ────────── Hide native scrollbar ────────── */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Home;
