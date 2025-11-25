import React, { useState, useEffect } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../../assets/assets";

const WhyPMShriGovtHighSchool = () => {
  const [current, setCurrent] = useState(0);

  const sliderImages = [
    assets.whyus1,
    assets.whyus2,
    assets.whyus3,
    assets.whyus4,
    assets.whyus5,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length);
  };

  const reasons = [
    "A legacy of excellence in holistic education since 1970.",
    "Focus on both modern academics and traditional Ladakhi values.",
    "Qualified and passionate teachers dedicated to student growth.",
    "Well-equipped campus with smart classrooms and modern facilities.",
    "Encouragement for creativity, sports, and community service.",
    "Strong alumni network contributing to society globally.",
  ];

  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="text-center space-y-2 py-8 md:px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700">
          Why PM Shri Govt. High School Chuchot Yokma?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Where education blends modern learning with Ladakhi values — building character, wisdom, leadership and compassion.
        </p>
      </div>

      {/* Top banner */}
      <div className="w-full overflow-hidden rounded-2xl shadow-md">
        <img
          src={assets.SchoolCampus}
          alt="School Campus"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* Reasons */}
      <div className="grid md:grid-cols-2 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-rose-50 border border-rose-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <CheckCircle className="text-rose-600 w-7 h-7 mt-1" />
            <p className="text-gray-700">{reason}</p>
          </div>
        ))}
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg mt-8">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Why PM Shri ${index + 1}`}
              className="w-full h-64 md:h-96 object-cover shrink-0"
            />
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-rose-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-rose-700" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {sliderImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                current === index ? "bg-rose-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Closing */}
      <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
        A school where every child learns not only to succeed — but to serve and uplift the community.
      </p>
    </div>
  );
};

export default WhyPMShriGovtHighSchool;
