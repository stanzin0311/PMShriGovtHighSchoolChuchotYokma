import React from "react";
import { assets } from "../../assets/assets";

const Campus = () => {
  const facilities = [
    "ICT / Computer Lab (functional & used for teaching)",
    "Digi-Lab (digital learning over multimedia & e-content)",
    "Full Science Laboratory",
    "STEM Lab for project-based learning",
    "Physiotherapy / Health & Wellness Room",
    "Anganwadi / Balavatika (early childhood readiness)",
    "Library & Resource Room",
    "Mini Hall / Multipurpose Activity Hall",
    "Playground & Sports Room",
    "Study Room & Games Room located near the Hostel",
    "Hostel (ONE common residential facility — not separate for boys & girls)",
    "Kitchen garden & kitchen shed (PM-POSHAN)",
    "Accessible ramps & CWSN-friendly facilities",
    "CCTV & fire safety measures + School Disaster Management Plan",
  ];

  const Box = ({ image, title, text }) => (
    <section className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
      <img src={image} alt={title} className="md:w-1/2 object-cover max-h-[360px]" />
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold text-rose-700 mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
    </section>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      {/* Main heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 mb-3 text-center">
        Our Campus & Infrastructure
      </h1>

      {/* School overview banner */}
      <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={assets.SchoolCampus}
          alt="PM Shri Govt. High School Chuchot Yokma Campus"
          className="w-full object-cover max-h-[360px]"
        />
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-rose-700 mb-3">
            PM Shri Govt. High School Chuchot Yokma
          </h1>
          <p className="text-gray-700 leading-relaxed mb-3">
            PM Shri Govt. High School Chuchot Yokma provides a campus environment that supports the holistic
            goals of the PM-SHRI programme and NEP 2020. The campus balances modern digital learning spaces
            with Ladakhi values, offering students both academic and co-curricular opportunities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our infrastructure focuses on accessibility, safety and wellbeing — ensuring every child can
            learn, play and grow in a secure setting.
          </p>
        </div>
      </section>

      {/* Facility big boxes */}
      <Box
        image={assets.ResourceRoom}
        title="Resource Room"
        text="A supportive learning space equipped with remedial and enrichment materials designed to 
        help students strengthen foundational concepts and develop independent learning skills."
      />

      <Box
        image={assets.PhysiotherapyRoom}
        title="Physiotherapy & Health / Wellness Room"
        text="Provides first aid, physiotherapy care and emotional support — promoting students' physical 
        and mental wellbeing."
      />

      <Box
        image={assets.brailleClass}
        title="Braille / Inclusive Learning Classes"
        text="Specialised support for visually impaired learners through Braille reading, tactile learning and inclusive classroom methods."
      />

      <Box
        image={assets.library}
        title="Library"
        text="A well-maintained library that cultivates reading habits with storybooks, reference materials 
        and academic resources supporting classroom learning."
      />

      <Box
        image={assets.ComputerLab}
        title="ICT / Computer Lab"
        text="Functional computer laboratory used regularly for ICT education and multimedia learning aligned 
        with NEP-2020."
      />

      <Box
        image={assets.ScienceLab}
        title="Full Science Laboratory"
        text="Hands-on laboratory equipped for Physics, Chemistry & Biology practicals using proper lab 
        equipment and safety protocols."
      />

      <Box
        image={assets.SportsPlayground}
        title="Sports Room & Playground"
        text="Indoor sports room and outdoor playground supporting football, volleyball and basketball — 
        promoting Fit India & physical education."
      />

      <Box
        image={assets.knittingClass}
        title="Knitting & Handcraft Skill Training"
        text="Students learn traditional and creative knitting to build focus, patience and fine motor skills, while preserving Ladakhi cultural practices."
      />

      {/* Campus Facilities Overview list */}
      <section className="bg-rose-50 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-rose-700 mb-8">
          Campus Facilities Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {facilities.map((f, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-rose-100 flex items-center gap-3">
              <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
              <p className="text-gray-700 text-sm font-medium">{f}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hostel section */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-rose-700 mb-4">Hostel & Residential Support</h2>
        <p className="text-gray-700 leading-relaxed">
          The school provides partial residential facilities for students from remote areas. There is 
          <strong> ONE common residential hostel for both boys & girls together</strong>. Nearby study rooms and a games room 
          support evening study and recreation.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          The campus also maintains a kitchen garden and kitchen shed under PM-POSHAN, supporting the school's 
          nutritional meal programme.
        </p>
      </section>

      {/* Closing */}
      <div className="bg-rose-700 text-white py-10 rounded-2xl shadow-md text-center px-6">
        <h3 className="text-2xl font-semibold mb-3">A Campus for Growth & Safety</h3>
        <p className="max-w-3xl mx-auto leading-relaxed">
          From digital learning spaces and science labs to accessible facilities and strong safety measures, 
          our campus builds confident learners rooted in Ladakhi values — ensuring high-quality, inclusive 
          education for every child.
        </p>
      </div>
    </div>
  );
};

export default Campus;
