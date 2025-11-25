import React from "react";
import { assets } from "../../assets/assets";

const AtAGlance = () => {
  return (
    <div className="space-y-12 py-8">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-300 pb-3">
        PM Shri Govt. High School Chuchot Yokma At a Glance
      </h1>

      {/* Intro Section */}
      <p className="text-gray-700 text-lg leading-relaxed">
        Located in the serene region of Ladakh,{" "}
        <span className="font-semibold text-rose-700">PM Shri Govt. High School Chuchot Yokma</span> is a
        government-supported institution committed to educational excellence and NEP 2020 implementation. We
        provide opportunities for students to discover their potential, develop
        modern skills, and grow into responsible, contributing members of society.
      </p>

      {/* History Section */}
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Established in <span className="font-semibold text-rose-700">1956</span> as a primary school, 
          the school has a rich legacy of serving the Chuchot Yokma community and surrounding areas.
        </p>

        <p className="text-gray-700 leading-relaxed">
          It was upgraded to Upper Primary in <span className="font-semibold text-rose-700">1975</span> and further enhanced to a Secondary School in 
          <span className="font-semibold text-rose-700"> 2009</span>. Its current designation as a PM SHRI school affirms its commitment to be an exemplar institution for quality education.
        </p>
      </div>

      {/* Campus Image */}
      <div>
        <img
          src={assets.SchoolCampus} // Assuming this is the correct image for Chuchot Yokma
          alt="PM Shri Govt. High School Chuchot Yokma Campus"
          className="w-full max-h-[500px] object-cover shadow-lg rounded-3xl"
        />
      </div>

      {/* Campus Overview */}
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Serving <span className="font-semibold text-rose-700">around 280 students</span> from Pre-Primary to Class 10, 
          the school offers a holistic learning environment focused on digital literacy, experiential learning, and ethical growth. Our infrastructure supports both academic and co-curricular development.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Hostel facilities are currently provided for students from remote areas, accommodating approximately 
          <span className="font-semibold text-rose-700"> 50 students</span> (Boys and Girls) on campus. 
          The school actively promotes multilingual learning, including English, Hindi, Urdu, Arabic, and the preservation of **Bhoti**.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We emphasize holistic development through robust academics, a certified **Fit India School** status, arts, cultural preservation, and environmental awareness via an **Eco Club**.
        </p>
      </div>

      {/* Community & Support Section */}
      <div className="grid md:grid-cols-2 gap-0 items-stretch">
        {/* Red Background Text Section */}
        <div className="bg-rose-700 text-white p-8 flex flex-col justify-center space-y-6">
          <p className="leading-relaxed">
            As a **PM-SHRI school**, we are dedicated to supporting children from diverse, remote, and 
            disadvantaged backgrounds, ensuring **100% free education** and equitable opportunities for learning and growth through 
            Samagra Shiksha and other government initiatives.
          </p>
          <p className="leading-relaxed">
            The school thrives due to the strong guidance and support from local community leaders, the Village Education Committee (VEC), and well-wishers, 
            helping it become a leading educational institution in the region.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={assets.firstlady} // Assuming this is an appropriate image of community support/events
            alt="Community engagement event at the school"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;