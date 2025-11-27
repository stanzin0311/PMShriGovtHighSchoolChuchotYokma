import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets"; 
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-200">
        <img src={assets.kindergartenGroup} alt="lower Students"className="w-full h-[350px] md:h-[450px] object-cover object-center"/>
      </div>

const LowerSchool = () => {
  const slides = [assets.juniorsection1, assets.juniorsection2, ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="max-w-7xl mx-auto px-0 md:px-4 py-8 space-y-12">

      {/* Hero Image Slider */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-rose-100">
        <img
          src={slides[currentIndex]}
          alt="Lower School Classroom Environment"
          className="w-full h-[330px] md:h-[520px] object-cover transition-all duration-700"
        />

        {/* Overlay Heading */}
        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-rose-600 text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.9)] p-4">
            Lower School (Grades 1–5)
          </h1>
        </div>

        {/* Dots Indicator */}
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

      {/* Lower School Main Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-justify p-4 md:p-0">
        <h2 className="text-2xl font-bold text-rose-700 border-b-2 border-rose-200 pb-2">
          The Preparatory Stage — Building Strong Learning Foundations
        </h2>

        <p>
          The <strong>Lower School</strong> corresponds to the <strong>Preparatory Stage</strong> of NEP 2020 (Grades 3–5),
          supporting children during a crucial shift from play-based learning to structured and conceptual learning.
          Teaching continues to be engaging and interactive while gradually strengthening academic discipline.
        </p>

        <p>
          Students build strong foundations in <strong>English, Mathematics, Science, Social Studies</strong>, and
          <strong>communication skills</strong>. Learning happens through <strong>hands-on projects, discussions, experiments,
          visual learning, storytelling, and real-world examples</strong>, helping students understand concepts deeply rather than memorizing.
        </p>

        <p>
          Teachers also support personal growth by promoting <strong>independence, empathy, responsibility, and a sense of belonging</strong>.
          Through inquiry-based learning, students are always encouraged to think, explore, ask questions, and express their ideas confidently.
        </p>

        <p>
          Art, music, physical education, cultural learning, and local studies remain integrated into academics to ensure children develop
          <strong>both intellect and emotional intelligence</strong>. Every child receives close attention to their strengths, learning style,
          and pace — bringing out the best in them.
        </p>

        <p className="font-semibold text-rose-600">
          By the time students enter Middle School, they are confident, curious, and academically ready — equipped
          with strong FLN skills and a positive attitude toward learning.
        </p>
      </div>
    </section>
  );
};

export default LowerSchool;
