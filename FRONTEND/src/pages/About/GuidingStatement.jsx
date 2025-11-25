import React from "react";
import {
  Eye,
  Atom,
  Target,
  HeartHandshake,
  ShieldCheck,
  Smile,
  Users,
  Network,
  Handshake,
  UserCheck,
  ClipboardCheck,
  HeartPulse,
  Star,
  ThumbsUp,
  Heart,
} from "lucide-react";
import { assets } from "../../assets/assets";

const GuidingStatement = () => {
  const statementCards = [
    {
      icon: <Eye className="w-8 h-8 text-sky-600" />,
      bg: "bg-sky-100",
      title: "Our Vision",
      desc: "To nurture lifelong learners who can learn, unlearn, and relearn; becoming engaged, productive, and contributing citizens for an equitable, inclusive, and plural society as envisaged by NEP 2020.",
    },
    {
      icon: <Atom className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-100",
      title: "Our Mission",
      desc: "To prepare a PM SHRI exemplar school where every student feels welcomed, cared for, and provided with safe, stimulating learning experiences and resources conducive to holistic development.",
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-100",
      title: "Our Strategy",
      desc: "Implement NEP 2020 through experiential, inquiry-based, and learner-centered pedagogy. Focus on academics, 21st-century skills, ethical learning, inclusion, and active participation.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-amber-600" />,
      bg: "bg-amber-100",
      title: "Our Values",
      desc: "Equity, inclusion, compassion, integrity, accountability, respect, and community engagement guide every action at PM SHRI Govt. High School Chuchot Yokma.",
    },
  ];

  const coreValues = [
    { icon: <ShieldCheck className="text-sky-600" />, label: "Safety & Security" },
    { icon: <Smile className="text-rose-500" />, label: "Happiness & Wellbeing" },
    { icon: <Heart className="text-red-500" />, label: "Compassion & Empathy" },
    { icon: <Users className="text-indigo-500" />, label: "Diversity & Inclusion" },
    { icon: <Network className="text-green-600" />, label: "Integrity" },
    { icon: <Handshake className="text-orange-500" />, label: "Respect" },
    { icon: <ClipboardCheck className="text-emerald-600" />, label: "Responsibility & Accountability" },
    { icon: <Star className="text-yellow-500" />, label: "Discipline & Excellence" },
    { icon: <ThumbsUp className="text-blue-500" />, label: "Trust & Collaboration" },
    { icon: <UserCheck className="text-violet-600" />, label: "Teamwork & Participation" },
    { icon: <HeartPulse className="text-pink-500" />, label: "Health & Hygiene" },
  ];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-0 md:px-0 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-300 pb-3">
        Guiding Statements
      </h1>

      {/* Vision / Mission / Strategy / Values */}
      <section className="bg-linear-to-b from-rose-50 via-white to-rose-50 rounded-3xl shadow-sm py-8 md:px-4 px-2 ">
        <div className="grid lg:grid-cols-3 gap-6 items-center ">
          {/* Left Image */}
          <div className="lg:col-span-1 flex justify-center">
            <img
              src={assets.nomo}
              alt="PM Shri School Campus"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover h-[450px] lg:h-[550px]"
            />
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {statementCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`${card.bg} p-2 rounded-full shadow-sm`}>
                      {card.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {card.title}
                    </h2>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative -mt-8 py-14 rounded-2xl px-4 overflow-hidden">
        <div className="absolute inset-0 bg-rose-100/50 blur-2xl opacity-70"></div>

        <div className="relative text-center space-y-10">
          <h2 className="text-2xl font-semibold text-rose-700">Our Core Values</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            PM SHRI Govt. High School Chuchot Yokma focuses on holistic growth, inclusion, ethical living, and community engagement, while preparing students for the 21st century.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {coreValues.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition duration-200"
              >
                <div className="w-8 h-8 mb-3">{item.icon}</div>
                <p className="font-medium text-gray-800 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-rose-50 p-8 -mt-8 rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold text-center bg-rose-700 text-white py-2 rounded-md inline-block px-6 mb-6">
          Our Objectives
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            Ensure every child feels welcomed, cared for, and included in learning.
          </li>
          <li>
            Offer safe, stimulating, and future-ready learning environments.
          </li>
          <li>
            Implement NEP 2020 pedagogical practices: experiential, inquiry-driven, holistic, and learner-centered.
          </li>
          <li>
            Track enrolment, learning outcomes, and ensure equitable access for all children.
          </li>
          <li>
            Foster compassion, mindfulness, ethics, integrity, and social responsibility.
          </li>
          <li>
            Encourage physical, emotional, and cognitive development through sports, arts, culture, and leadership.
          </li>
          <li>
            Preserve and promote Ladakhi heritage, language, and cultural identity.
          </li>
          <li>
            Engage the community through volunteering, social activities, and Samajik Chetna Kendra initiatives.
          </li>
          <li>
            Promote accountability, transparency, and quality learning outcomes at all levels.
          </li>
          <li>
            Prepare students to become nation-builders and active participants in a dynamic world.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GuidingStatement;