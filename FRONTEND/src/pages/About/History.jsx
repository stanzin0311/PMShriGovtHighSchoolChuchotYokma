import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const History = () => {
  const images = [assets.history1, assets.history2, assets.history3, assets.history4];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="space-y-10 py-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4 border-b-4 border-rose-100 pb-2">
          History of PM Shri Govt. High School Chuchot Yokma
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          PM Shri Govt. High School Chuchot Yokma is part of the PM SHRI initiative — a vision by the Government of India to create exemplar schools across the country. 
          The school has evolved to become a model of inclusive, high-quality, and value-based education in Ladakh.
        </p>
      </div>

      {/* Story Section */}
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          Established with the aim of providing equitable and holistic education in the peaceful village of Chuchot Yokma, the school integrates modern teaching practices with the rich cultural heritage of Ladakh. 
          It has become a hub where students are encouraged to explore, question, and discover their unique strengths.
        </p>

        <p>
          Over the years, the school has embraced the PM SHRI framework, focusing on 21st-century learning, Social, Emotional, and Ethical (SEE) learning, and sustainable development. 
          Students are guided to become future-ready citizens, equipped with knowledge, skills, and values to contribute meaningfully to society.
        </p>

        <p>
          The school emphasizes holistic development — academics, arts, sports, leadership, and ethical values are nurtured together. Teachers, parents, and the community collaborate to create a safe, inclusive, and stimulating environment for every child.
        </p>

        <p>
          Today, PM Shri Govt. High School Chuchot Yokma stands as a beacon of quality education in the region — showcasing the principles of NEP 2020, inspiring students to grow academically, socially, and ethically, while staying deeply connected to their Ladakhi roots.
        </p>
      </div>

      {/* Custom Image Slider */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-rose-700 mb-6">
          A Glimpse into Our School
        </h3>
        <div className="relative rounded-xl overflow-hidden shadow-lg group">
          <div className="relative h-[300px] md:h-[400px]">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`History ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-700 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-700 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-rose-700 w-8"
                    : "bg-white/70 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;