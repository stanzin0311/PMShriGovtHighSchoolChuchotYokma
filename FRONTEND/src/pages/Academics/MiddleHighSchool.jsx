import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

const MiddleHighSchool = () => {
  const slides = [assets.middleschool1, assets.middleschool2, assets.middleschool3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="max-w-7xl mx-auto px-0 md:px-4 py-8 space-y-12">

      {/* Image Slider */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-rose-100">
        <img
          src={slides[currentIndex]}
          alt="Middle and High School students"
          className="w-full h-[350px] md:h-[550px] object-cover transition-all duration-700 ease-in-out"
        />

        {/* Overlay Heading */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-md p-4">
            Middle & Secondary School (Grades 6-10)
          </h1>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-rose-600 w-6" : "bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-justify p-4 md:p-0">

        <h2 className="text-2xl font-bold text-rose-700 border-b-2 border-rose-200 pb-2">
          The Senior Years: Fostering Independence and Board Exam Readiness
        </h2>

        <p>
          The PM Shri Govt High School covers two critical phases: the Middle Stage (Grades 6-8) and the Secondary Stage (Grades 9-10). 
          Our mission is to guide students through adolescence and prepare them with essential study habits, self-discipline, 
          and independent learning skills required for the Board Examination and Senior Secondary Stage.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 pt-4">
          Middle Stage (Grades 6-8)
        </h3>
        <p>
          This stage introduces a multidisciplinary and exploratory curriculum. Students learn core concepts in Science, Mathematics, Arts, 
          and Humanities with emphasis on experiential learning, critical thinking, and building strong analytical foundations through 
          projects and collaborative work.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 pt-4">
          Secondary Stage (Grades 9-10)
        </h3>
        <p>
          The Secondary Stage focuses on deeper academic understanding and preparation for the Class 10 Board Examinations. 
          Students strengthen core subject mastery while beginning to explore vocational and skill-based education.
        </p>

        <p>
          A strong language policy is followed where English communication is mandatory for all Middle and Secondary students. 
          This ensures fluency and confidence, opening better opportunities for higher education and career growth.
        </p>

        <p>
          Each student must participate in at least one extracurricular club and one sports activity. With options such as debate, art, drama, 
          robotics, music, and athletics, students develop teamwork, creativity, leadership, and resilience beyond academics.
        </p>

        <p className="font-semibold text-rose-600">
          Through these programs, our PM Shri School nurtures confident, capable, and well-rounded individuals prepared for the Senior Secondary Stage.
        </p>
      </div>
    </section>
  );
};

export default MiddleHighSchool;
