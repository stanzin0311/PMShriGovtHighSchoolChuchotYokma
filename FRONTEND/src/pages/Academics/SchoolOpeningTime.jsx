import React from "react";
import { Clock, Snowflake, ThermometerSun, Sun } from "lucide-react";
import { assets } from "../../assets/assets";

const SchoolOpeningTime = () => {
  const timings = [
    {
      title: "Summer Timing",
      duration: "Apr - Oct",
      icon: <Clock className="w-8 h-8 text-rose-700" />,
      note: "From 10 AM - To 4 PM",
    },
    {
      title: "Winter Timing",
      icon: <Snowflake className="w-8 h-8 text-rose-700" />,
      duration: "Nov - Mar",
      note: "From 10:30 AM - To 3:30 PM",
    },
    {
      title: "Winter Holidays",
      icon: <ThermometerSun className="w-8 h-8 text-rose-700" />,
      duration: "Mid-December - End of February",
    },
    {
      title: "Summer Vacations",
      icon: <Sun className="w-8 h-8 text-rose-700" />,
      duration: "10 days in July",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto md:px-4 py-8 space-y-16">
      {/* Section Heading */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-bold text-rose-700">
          School Timings & Holidays
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our schedule is designed to suit the unique Himalayan climate of Ladakh,
          ensuring students learn comfortably throughout the changing seasons.
        </p>
      </div>

      {/* Timing Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {timings.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center p-6 space-y-3"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h2 className="text-lg md:text-xl font-semibold text-rose-700">
              {item.title}
            </h2>
            <p className="text-gray-800 font-medium">{item.duration}</p>
            {item.note && (
              <p className="text-gray-600 text-sm">{item.note}</p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Image */}
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-md">
        <img
          src={assets.schoolOpeningTime}
          alt="School Opening Time"
          className="w-full h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default SchoolOpeningTime;
