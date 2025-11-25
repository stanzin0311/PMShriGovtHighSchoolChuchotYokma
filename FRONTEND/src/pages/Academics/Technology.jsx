import React from "react";
import { Laptop, MonitorSmartphone, Tv, Wifi } from "lucide-react";
import { assets } from "../../assets/assets";

const Technology = () => {
  return (
    <div className="max-w-6xl mx-auto md:px-4 py-10 space-y-12">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Technology at PM SHRI
      </h1>

      {/* Intro Section */}
      <p className="text-gray-700 leading-relaxed text-lg">
        As a PM SHRI School, we use essential digital tools to support classroom
        learning. Our focus is on practical, easy-to-use technology that helps 
        teachers create interactive and engaging lessons for the students.
      </p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* ICT Lab */}
        <div className="bg-rose-50 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Laptop className="text-rose-700 w-8 h-8" />
            <h2 className="text-xl font-semibold text-rose-700">ICT Laboratory</h2>
          </div>
          <p className="text-gray-700">
            The school has a functional ICT lab that helps students learn the
            basics of computers and supports teachers in digital teaching.
          </p>
        </div>

        {/* Smart Classroom Tools */}
        <div className="bg-rose-50 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <MonitorSmartphone className="text-rose-700 w-8 h-8" />
            <h2 className="text-xl font-semibold text-rose-700">Smart Classroom Tools</h2>
          </div>
          <p className="text-gray-700">
            Classrooms are equipped with projectors and ICT-enabled teaching tools
            that make learning more visual, interactive, and engaging.
          </p>
        </div>

        {/* Educational TV / DTH */}
        <div className="bg-rose-50 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Tv className="text-rose-700 w-8 h-8" />
            <h2 className="text-xl font-semibold text-rose-700">Educational TV</h2>
          </div>
          <p className="text-gray-700">
            The school uses television-based learning and educational DTH channels
            to support classroom teaching and introduce new concepts.
          </p>
        </div>

        {/* Internet Facility */}
        <div className="bg-rose-50 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Wifi className="text-rose-700 w-8 h-8" />
            <h2 className="text-xl font-semibold text-rose-700">Internet Access</h2>
          </div>
          <p className="text-gray-700">
            Internet connectivity is available for guided learning sessions,
            allowing students and teachers to access digital resources when needed.
          </p>
        </div>

      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={assets.schoolOpeningTime}
          alt="Technology at PM SHRI"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Technology;
