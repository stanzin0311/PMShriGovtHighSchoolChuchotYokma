import React from "react";
import { assets } from "../../assets/assets";

const Welcome = () => { // Renamed from History to Welcome for clarity
  return (
    <div className="space-y-12 max-w-7xl mx-auto max-sm:px-0 px-2 py-8">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Welcome to PM Shri Govt. High School Chuchot Yokma
      </h1>

      {/* Intro Paragraph */}
      <p className="text-gray-700 leading-relaxed text-lg">
        PM Shri Govt. High School Chuchot Yokma stands as a beacon of **modern, inclusive, and value-based education** in Ladakh. As a <span className="font-semibold text-rose-700">PM SHRI (Prime Minister Schools for Rising India)</span> institution, the school is supported by the Government of India through PM SHRI and Samagra Shiksha, ensuring high-quality and equitable learning opportunities for every child, fully aligned with the **National Education Policy (NEP) 2020**.
      </p>

      {/* Image and Story Section */}
      <div className="w-full">
        <img
          src={assets.principal} // Should be a picture of the Head of School, Tashi Wangyal
          alt="Head of School Tashi Wangyal"
          className="
            w-full max-w-full h-64 sm:h-80 object-cover rounded-3xl shadow-2xl
            mb-
            md:float-right md:w-[420px] md:h-[460px] md:ml-10 md:mb-3
            border-4 border-rose-200
            hover:scale-[1.02] transition-transform duration-300
          "
        />
        <p className="text-gray-700 leading-relaxed">
          Nestled in the peaceful village of Chuchot Yokma, the school is pioneering the integration of **21st-century education** with the cultural richness and wisdom of the region. Here, learning goes beyond rote memory—students are encouraged to explore, question, and discover their unique strengths through hands-on and experiential methods.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The PM SHRI framework guides our focus on five key pillars: **Sustainable & Future-Ready Education**, **Social, Emotional & Ethical Learning (SEE)**, **Holistic Development**, **Cultural Rootedness**, and **Community Engagement**. This ensures a balanced education that prepares students not just for exams, but for life.
        </p>
        <div className="clear-both" />
      </div>

      {/* Vision & Values */}
      <div className="space-y-5">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-rose-700">Sustainable & Future-Ready Education:</span> We cultivate environmental awareness, digital literacy, and practical skills through innovative programs, preparing students for a rapidly changing, global future.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-rose-700">Social, Emotional & Ethical Learning (SEE Learning):</span> We emphasize compassion, resilience, and ethical decision-making, helping students develop into confident, kind, and responsible global citizens.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-rose-700">Strong Academics + Holistic Development:</span> We ensure a balanced curriculum where core academics, sports, arts, culture, innovation, and leadership are nurtured in harmony.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-rose-700">Rooted in Ladakh, Ready for the World:</span> We honor Ladakhi heritage, language, and culture, using this strong foundation to inspire global possibilities and exposure.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-rose-700">A Caring Community:</span> We foster strong collaboration between teachers, parents, and staff to create a safe, supportive, and inclusive learning community where every learner is valued.
        </p>
      </div>

      {/* Signature */}
      <div className="mt-10 border-t border-gray-200 pt-6">
        <p className="italic text-gray-700 mb-1">“Dedicated to a brighter future for every learner.”</p>
        <h4 className="font-semibold text-rose-700 text-lg">Tashi Wangyal</h4>
        <p className="text-gray-600 text-sm">Head of School, PM Shri Govt. High School Chuchot Yokma</p>
      </div>
    </div>
  );
};

export default Welcome;