import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets"; // use your real imported images

const Kindergarten = () => {
  const slides = [assets.kindergarten1, assets.kindergarten1, assets.kindergarten1, assets.kindergarten1];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-0 md:px-4 py-8 space-y-12">
      {/* Hero Slider */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-rose-100">
        <img
          src={slides[currentIndex]}
          alt="Foundational Stage Classroom"
          className="w-full h-[350px] md:h-[550px] object-cover transition-all duration-700 ease-in-out"
        />

        {/* Overlay Heading */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
           <h1 className="text-3xl md:text-5xl font-bold text-rose-600 text-center drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] p-4">
              The Foundational Stage (Kindergarten)
            </h1>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-rose-600 w-6" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-justify p-4 md:p-0">
        <h2 className="text-2xl font-bold text-rose-700 border-b-2 border-rose-200 pb-2">
          NEP 2020 • Foundational Stage (Nursery – Grade 2)
        </h2>

        <p>
          The Foundational Stage at <strong>PM Shri Govt. High School Chuchot Yokma</strong>
          follows the National Education Policy (NEP 2020) framework for early childhood
          education. The purpose of this stage is to ensure that children aged 3–8 develop
          cognitive, social, emotional and motor skills in a <strong>play-based, joyful and
          stress-free environment</strong>. Learning takes place through music, stories,
          games, hands-on activities, outdoor play and discovery-based methods — not rote learning.
        </p>

        <p>
          A strong focus is placed on <strong>Foundational Literacy & Numeracy (FLN)</strong>.
          Children learn reading, writing, speaking and basic numeracy using activity-based
          and multi-sensory methods. The objective is to ensure that every child attains FLN
          proficiency by the end of Grade 2, giving them a strong base for future learning.
        </p>

        <p>
          The Foundational Wing has a <strong>dedicated play area</strong>, <strong>child-friendly classrooms</strong>,
          age-appropriate learning kits, puzzles, manipulatives, a <strong>story corner</strong>, and
          <strong>fine motor skill development activities</strong> such as clay molding, threading,
          painting and block play. Teachers are specially trained in early childhood pedagogy
          and maintain a warm and nurturing atmosphere for every child.
        </p>

        {/* Multilingualism */}
        <p className="font-semibold text-rose-600">
          In alignment with NEP 2020, the school encourages learning through the <strong>mother tongue /
          home language</strong> in the early years. Local Ladakhi language and culture are integrated
          through stories, songs and classroom conversations, helping children feel emotionally secure
          and confident while building cognitive growth.
        </p>

        {/* Anganwadi Collaboration */}
        <div className="bg-rose-50 border border-rose-200 p-5 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-rose-700 mb-2">
            Linkage with Anganwadi Centres
          </h3>
          <p>
            The school closely collaborates with nearby <strong>Anganwadi Centres</strong> to ensure
            a smooth transition for children entering formal schooling. Many students joining
            Kindergarten come from Anganwadis in the Chuchot area, and the school works in
            coordination with Anganwadi workers for:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Early identification of learning needs</li>
            <li>Sharing of child development records</li>
            <li>School readiness and orientation programs</li>
            <li>Health and nutrition monitoring</li>
          </ul>
          <p className="mt-2">
            This partnership ensures that children feel emotionally and socially supported,
            reducing anxiety and strengthening readiness for structured classroom learning.
          </p>
        </div>

        {/* Admission Note */}
        <p className="text-sm italic text-gray-500 mt-6">
          Admission to Kindergarten usually opens in **October–November**.
          Parents are advised to follow the official notice board or school website for
          announcements regarding eligibility, age criteria and required documents.
        </p>
      </div>

      {/* kindergartenGroup Image */}
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-200">
        <img src={assets.kindergartenGroup} alt="Kindergarten Students"className="w-full h-[350px] md:h-[450px] object-cover object-center"/>
      </div>

    </section>
  );
};

export default Kindergarten;
