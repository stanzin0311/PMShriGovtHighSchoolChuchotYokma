import React, { useState, useEffect } from "react";

// Mock assets defined here to ensure the component is runnable in this environment.
// Replace these public URLs with your actual local paths later.
const assets = {
  home1: "https://images.unsplash.com/photo-1549557404-399a6d36e05d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Students in lab
  home2: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // High school students collaborating
  home3: "https://images.unsplash.com/photo-1509062560867-b7d609bd2d9e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Teacher leading discussion
  home4: "https://images.unsplash.com/photo-1541339907198-e087566d9f1e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Student working on laptop
};


const MiddleHighSchool = () => {
  const slides = [assets.home1, assets.home2, assets.home3, assets.home4];

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
      {/* Hero Image Slider */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-rose-100">
        <img
          src={slides[currentIndex]}
          alt="Middle and High School students studying and collaborating"
          className="w-full h-[350px] md:h-[550px] object-cover transition-all duration-700 ease-in-out"
        />

        {/* Overlay Heading */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-md p-4">
            Middle & Secondary School (Grades 6-10)
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

      {/* Middle & High School Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-justify p-4 md:p-0">
        <h2 className="text-2xl font-bold text-rose-700 border-b-2 border-rose-200 pb-2">
            The Senior Years: Fostering Independence and Board Exam Readiness
        </h2>

        <p>
          The PM Shri Govt High School covers two critical phases: the **Middle Stage** (Grades 6-8) and the **Secondary Stage** (Grades 9-10). Our mission is to guide students through the complexities of adolescence and prepare them with the **essential study habits, self-discipline, and independent learning skills** necessary for the Board Examination and the Senior Secondary Stage (Grades 11 & 12).
        </p>

        {/* Middle Stage Content */}
        <h3 className="text-xl font-semibold text-gray-800 pt-4">
            Middle Stage (Grades 6-8)
        </h3>
        <p>
          This stage marks the transition to a more **multidisciplinary and exploratory** curriculum. Students are introduced to core concepts in Science (Physics, Chemistry, Biology), Mathematics, Arts, and Humanities with an emphasis on **experiential learning and critical thinking**. The focus is on making connections between subjects and developing strong foundational analytical skills through projects, presentations, and collaborative problem-solving.
        </p>

        {/* Secondary Stage Content */}
        <h3 className="text-xl font-semibold text-gray-800 pt-4">
            Secondary Stage (Grades 9-10)
        </h3>
        <p>
          The Secondary Stage is characterized by **depth and rigor**, focusing intensely on preparing students for the crucial **Class 10 Board Examinations**. The curriculum is designed to build mastery in core subjects while allowing for the initial exploration of vocational skills, ensuring students have a solid academic foundation before selecting their streams for the Senior Secondary level.
        </p>

        <p>
          We maintain a strong **language policy**, making **English communication mandatory** for all Middle and Secondary School students. This commitment ensures they develop fluency and confidence in a global language, significantly boosting their opportunities for future academic and professional pursuits.
        </p>

        <p>
          Emphasizing **skill and competency development**, every student must participate in at least one extracurricular club and one sports club. A wide variety of activities — including debate, art, drama, robotics, music, and athletics — allow students to discover their talents and passions, fostering **teamwork, leadership, and resilience** beyond academics.
        </p>

        <p className="font-semibold text-rose-600">
          Through these programs, our PM Shri School successfully nurtures confident, capable, and well-rounded individuals who are ready to pursue excellence in the Senior Secondary Stage and contribute meaningfully to the community.
        </p>
      </div>
    </section>
  );
};

export default MiddleHighSchool;