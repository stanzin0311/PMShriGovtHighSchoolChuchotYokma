import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Boarding = () => {
  const images = [
    assets.Boarding1,
    assets.Boarding2,
    assets.Boarding3,
    assets.Boarding4,
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="max-w-7xl mx-auto md:px-4 py-8 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Boarding
      </h1>

      {/* Image Slider */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Boarding ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-rose-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* About Boarding */}
      <div className="bg-white p-6 rounded-2xl shadow-lg leading-relaxed text-gray-700 space-y-4">
        <p>
          PM Shri Govt. High School Chuchot Yokma provides a dedicated{" "}
          <strong className="text-rose-700">residential hostel facility exclusively for Special (CWSN) children</strong>.
        </p>

        <p>
          The hostel is located <strong className="text-rose-700">near the school campus</strong> so that children can
          easily access classes, therapy sessions and extracurricular activities every day.
        </p>

        <p>
          RCI-certified staff and escorts support children throughout the day and help them with personal care, learning activities,
          mobility and daily routines.
        </p>

        <p>
          During winter holidays, children return home to spend time with their families.
        </p>
      </div>

      {/* Facilities */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-rose-700 mb-4 border-b-2 border-rose-200 pb-2">
          Boarding Facilities
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>Safe residential rooms with daily care</li>
          <li>Nutritious meals and dining facilities</li>
          <li>Study room for evening supervised learning</li>
          <li>Games & recreation room for indoor activities</li>
          <li>Playground for outdoor recreation</li>
          <li>Solar-heated bathrooms</li>
          <li>Greenhouse / kitchen garden</li>
          <li>School transport facility</li>
          <li>Escorts and hostel attendants available at all times</li>
        </ul>
      </div>
    </div>
  );
};

export default Boarding;
