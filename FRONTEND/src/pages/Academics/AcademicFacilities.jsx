import React from "react";
import {
  BookOpen,
  FlaskConical,
  MonitorSmartphone,
  Dumbbell,
  HeartPulse,
  Scissors,
  Sparkles,
} from "lucide-react";
import { assets } from "../../assets/assets";

const AcademicFacilities = () => {
  const facilities = [
    {
      title: "Library & Reading Space",
      icon: <BookOpen className="w-6 h-6 text-rose-700" />,
      image: assets.library,
      description:
        "The school maintains a functional library that supports classroom learning. Students have access to textbooks, reference materials, and reading resources that strengthen foundational knowledge.",
    },

    {
      title: "Science Laboratory",
      icon: <FlaskConical className="w-6 h-6 text-rose-700" />,
      image: assets.laboratory,
      description:
        "Our Science Lab enables students to engage in simple experiments and hands-on activities. It allows them to explore, observe, and understand scientific concepts in a practical environment.",
    },

    {
      title: "ICT Room & Digital Learning Tools",
      icon: <MonitorSmartphone className="w-6 h-6 text-rose-700" />,
      image: assets.home3,
      description:
        "The ICT Room is equipped with computers, smart TVs, and DTH-enabled educational channels. Teachers integrate digital tools to enhance lessons, introduce interactive learning, and familiarize students with modern technology.",
    },

    {
      title: "Sports & Physical Education",
      icon: <Dumbbell className="w-6 h-6 text-rose-700" />,
      image: assets.sport,
      description:
        "Dedicated spaces for sports and physical education help students improve fitness, build teamwork, and develop discipline and confidence through regular physical activities.",
    },

    {
      title: "Braille Education",
      icon: <Sparkles className="w-6 h-6 text-rose-700" />,
      image: assets.brailleClass,
      description:
        "Braille classes provide visually impaired students with the ability to read and write using the tactile Braille system. These sessions foster independence, literacy, and accessibility in learning.",
    },

    {
      title: "Knitting & Handwork Skills",
      icon: <Scissors className="w-6 h-6 text-rose-700" />,
      image: assets.knittingClass,
      description:
        "Knitting classes help students develop creativity, patience, and fine motor skills. They learn traditional handcraft techniques and create functional items, connecting culture with practical skills.",
    },

    {
      title: "Physiotherapy & Wellness Sessions",
      icon: <HeartPulse className="w-6 h-6 text-rose-700" />,
      video: "https://www.youtube.com/embed/By1_arlkozg",
      description:
        "The school conducts physiotherapy and wellness programs to support students’ physical development. Sessions focus on posture correction, flexibility, balance, and healthy movement habits under expert guidance.",
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
          PM Shri Govt. High School Chuchot Yokma provides meaningful, inclusive, 
          and well-rounded learning infrastructure to support every student’s growth.
        </p>
      </div>

      {/* Facility Cards */}
      {facilities.map((facility, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center gap-10 p-4 md:p-6 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-2xl ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image or Video */}
          <div className="w-full lg:w-1/2">
            {facility.video ? (
              <iframe
                src={facility.video}
                title={facility.title}
                className="w-full h-72 md:h-96 rounded-2xl shadow-xl border-4 border-rose-100"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl border-4 border-rose-100"
              />
            )}
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
          These facilities help create a supportive, skill-based, and inclusive learning environment for every student.
        </p>
      </div>
    </section>
  );
};

export default AcademicFacilities;
