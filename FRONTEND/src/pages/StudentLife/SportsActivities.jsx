import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Trophy, Users } from "lucide-react";

const SportsActivities = () => {
  // Only top 3 banner images
  const banners = [assets.sport1, assets.sport2, assets.sport3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="w-full bg-gradient-to-b from-[#FFF4DB] via-[#FFD8A8] to-[#FEB3C8]">
      {/* Banner Slider */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Sports Banner ${i + 1}`}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === i ? "bg-rose-600 scale-110" : "bg-white/80"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto text-center py-10 px-6">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-rose-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-rose-700">
            Sports & Activities
          </h1>
        </div>

        <p className="text-gray-700 leading-relaxed text-center md:text-justify">
          At PM Shri Govt. High School Chuchot Yokma, sports and physical activities are an essential part of student life.
          We provide a variety of indoor and outdoor games, yoga sessions, and physiotherapy support to ensure that every student develops fitness, teamwork, and confidence.
        </p>
      </div>

      {/* Sports Available */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold text-rose-700 text-center mb-6 border-b-2 border-rose-300 pb-1 inline-block">
          Sports & Activities Available
        </h2>

        <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-2 text-lg">
          <li>Football & Multi-use Ground – for football, athletics drills, and volleyball arrangements.</li>
          <li>Basketball Court – outdoor matches and practice sessions.</li>
          <li>Indoor Hall – used for badminton, table tennis, and school events.</li>
          <li>Indoor Games – chess, carrom, and other table games to develop strategy and focus.</li>
          <li>Yoga & Physical Training – sessions to improve flexibility, breathing, and overall fitness.</li>
          <li>Physiotherapy Support – rehabilitation and wellness programs for students when required.</li>
        </ul>
      </div>

      {/* Closing */}
      <div className="bg-rose-50 py-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Users className="mx-auto text-rose-600 w-8 h-8 mb-3" />
          <h3 className="text-2xl font-semibold text-rose-700 mb-2">
            Sports for All
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Every student is encouraged to participate at their comfort level.
            Our goal is to build fitness, teamwork, and lasting habits of well-being in a supportive environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportsActivities;
