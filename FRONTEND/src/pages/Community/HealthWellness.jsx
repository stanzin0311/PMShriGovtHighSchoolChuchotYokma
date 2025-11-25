import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HealthWellness = () => {
  const sliderImages = [
    assets.medical1,
    assets.medical2,
    assets.medical3,
    assets.medical4,
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderImages.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === sliderImages.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="max-w-7xl mx-auto md:px-4 py-8 space-y-12">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Health & Wellness
      </h1>

      {/* Image + Text */}
      <div className="w-full">

        {/* Staff Image */}
        <div className="relative md:float-right lg:w-[420px] lg:h-[460px] md:ml-10 md:mb-3 mb-6 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={assets.MsYangchanDolma}
            alt="Healthcare Worker"
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
          />

          {/* Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/70 to-transparent" />

          {/* Text Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-semibold text-lg">Ms Yangchan Dolma</p>
            <p className="text-sm opacity-90">Healthcare Worker</p>
          </div>
        </div>

        {/* Main Text */}
        <p className="text-gray-700 leading-relaxed text-lg">
          Our school ensures a safe, caring and supportive environment for every student. 
          We aim to promote physical, emotional and mental wellbeing through structured 
          activities and continuous guidance.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          Basic first-aid and general health support are available within the campus. 
          Students also receive regular health awareness sessions that help them develop 
          healthy habits and understand the importance of personal wellbeing.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          The school conducts physiotherapy support whenever needed, along with yoga and 
          mindfulness activities that help students relax, stay fit and maintain a balanced 
          routine. Hostel students are given extra guidance to ensure they feel at home 
          and cared for.
        </p>

        <div className="clear-both" />
      </div>

      {/* Image Slider */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-lg mt-10">

        {/* Slide Images */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Health ${index + 1}`}
              className="w-full h-64 md:h-96 shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md transition"
        >
          <ChevronLeft className="w-5 h-5 text-rose-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md transition"
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
    </div>
  );
};

export default HealthWellness;
