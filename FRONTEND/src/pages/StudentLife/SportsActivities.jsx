import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Trophy, Users } from "lucide-react";

const SportsActivities = () => {
  const banners = [assets.sport1, assets.sport2, assets.sport3];

  const facilities = [
    {
      name: "Football & Multi-use Ground",
      image: assets.football,
      desc: "A large ground used for football, athletics drills, and can be arranged for volleyball when needed.",
    },
    {
      name: "Basketball Court",
      image: assets.basketball,
      desc: "Outdoor court for friendly matches, practice sessions, and inter-school events.",
    },
    {
      name: "Indoor Hall (Badminton / Table Tennis)",
      image: assets.hall || assets.Auditorium,
      desc: "A multi-purpose indoor hall used for badminton, table tennis and school functions.",
    },
    {
      name: "Indoor Games",
      image: assets.indoor || assets.handball,
      desc: "Indoor activities like chess, carrom and other table games that build concentration and strategy.",
    },
    {
      name: "Yoga & PT Sessions",
      image: assets.yoga || assets.handball,
      desc: "Regular yoga and physical training sessions to promote flexibility, breathing practices and overall fitness.",
    },
    {
      name: "Physiotherapy Support",
      image: assets.physiotherapy || assets.home3,
      desc: "Physiotherapy sessions and basic rehabilitation support available when required for students.",
    },
  ];

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
          Sports and physical activities are an important part of student life at PM SHRI Govt. High School Chuchot Yokma.
          Our facilities focus on inclusive participation — from field games to indoor events — with regular training,
          yoga, and physiotherapy support available to help students stay fit and confident.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold text-rose-700 text-center mb-10 border-b-2 border-rose-300 pb-1 inline-block">
          Our Sports Facilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {facilities.map((sport, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {sport.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {sport.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <div className="bg-rose-50 py-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Users className="mx-auto text-rose-600 w-8 h-8 mb-3" />
          <h3 className="text-2xl font-semibold text-rose-700 mb-2">
            Sport for All
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Every student is encouraged to join activities at their comfort level.
            Our goal is to build fitness, teamwork, and lasting habits of well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SportsActivities;
