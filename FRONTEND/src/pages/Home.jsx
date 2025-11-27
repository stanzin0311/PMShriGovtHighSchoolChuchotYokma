import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";
import SchoolAbout from "../component/SchoolAbout";
import PrincipalMessage from "../component/PrincipalMessage";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: assets.home1, alt: "Students collaborating" },
    { image: assets.home2, alt: "School community" },
    { image: assets.home3, alt: "Learning environment" },
    { image: assets.home4, alt: "Students engaged" },
    { image: assets.home5, alt: "Campus life" },
    { image: assets.home6, alt: "School activities" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (i) => setCurrentSlide(i);

  return (
    <div>
      <div className="relative w-full h-[100vh] overflow-hidden bg-black">
        {/* IMAGES */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>

        {/* CONTENT OVERLAY */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center md:text-left">
              <div className="inline-block bg-red-600 text-white px-5 py-1 rounded-r-lg mb-4 font-semibold text-xs tracking-wide">
                SINCE 1956
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug drop-shadow-lg">
                Growing Minds in an{" "}
                <span className="text-rose-300">Inclusive & Inspiring</span>{" "}
                Environment
              </h1>

              <p className="text-md md:text-lg text-white mb-6 max-w-xl drop-shadow-md">
                Where every child is valued, empowered, and ready for the future.
              </p>

              <a
                href="/about/welcome"
                className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base group"
              >
                Explore Our Inclusive Vision
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* The rest of your homepage sections */}
      <SchoolAbout />
      <PrincipalMessage />
    </div>
  );
};

export default HeroCarousel;
