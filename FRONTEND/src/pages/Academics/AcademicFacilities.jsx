import React from "react";
import { BookOpen, FlaskConical, MonitorSmartphone, Dumbbell } from "lucide-react";
import { assets } from "../../assets/assets";

const AcademicFacilities = () => {
  const facilities = [
    {
      title: "Library & Reading Space",
      icon: <BookOpen className="w-6 h-6 text-rose-700" />,
      image: assets.library,
      description: `The school maintains a simple yet functional library that supports regular classroom learning. It provides students with access to textbooks, reference materials, and reading resources that help strengthen foundational learning across subjects.`,
    },

    {
      title: "Science Laboratory",
      icon: <FlaskConical className="w-6 h-6 text-rose-700" />,
      image: assets.laboratory,
      description: `Our basic Science Lab enables students to participate in hands-on activities and simple experiments. It helps them observe, explore, and understand scientific concepts through practical learning experiences appropriate for the high school level.`,
    },

    {
      title: "ICT Room & Digital Learning Tools",
      icon: <MonitorSmartphone className="w-6 h-6 text-rose-700" />,
      image: assets.Auditorium,
      description: `The school uses ICT-enabled learning through an ICT Room equipped with computers, a smart TV, and DTH-supported educational channels. These digital tools help teachers enhance lessons, introduce visual learning, and provide exposure to modern technology.`,
    },

    {
      title: "Sports & Physical Education",
      icon: <Dumbbell className="w-6 h-6 text-rose-700" />,
      image: assets.home3,
      description: `The school provides students with dedicated spaces for games, physical education, and sports activities. Regular sports periods, outdoor play, and fitness sessions help students build confidence, discipline, teamwork, and physical well-being.`,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto md:px-4 px-0 py-8 space-y-12">
      {/* Section Heading */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-5xl font-bold text-rose-700">
          Academic Facilities
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          PM Shri Govt. High School Chuchot Yokma offers essential learning facilities
          that support the academic growth and overall development of every student.
        </p>
      </div>

      {/* Facility Sections */}
      {facilities.map((facility, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-10 p-4 md:p-6 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-2xl ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl border-4 border-rose-100"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-rose-100 p-3 rounded-full shadow-md">
                {facility.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {facility.title}
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed text-justify">
              {facility.description}
            </p>
          </div>
        </div>
      ))}

      {/* Closing Note */}
      <div className="max-w-3xl mx-auto text-center mt-16 p-6 bg-rose-50 rounded-xl border border-rose-200">
        <p className="text-gray-800 leading-relaxed font-semibold">
          These essential academic facilities help the school create a
          supportive learning environment while remaining rooted in
          simplicity, inclusivity, and meaningful education for every child.
        </p>
      </div>
    </section>
  );
};

export default AcademicFacilities;
