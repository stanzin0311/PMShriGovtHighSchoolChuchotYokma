import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const PrincipalMessage = () => {
  const principalName = "Tashi Wangyal";
  const principalTitle = "Head of School";
  const messageLink = "/about/leadership";

  const messageContent = [
    "It is with great pride that I welcome you to PM SHRI Govt. High School Chuchot Yokma. Our mission is to offer a joyful and inclusive learning environment where every child feels valued and inspired.",
    "We remain committed to academic excellence, digital learning, cultural preservation — especially the Bhoti language — and the holistic development of every learner.",
    "Together with our parents, dedicated staff, and community, we are shaping confident, compassionate, and future-ready citizens."
  ];

  return (
    <motion.section
      className="relative py-24 bg-linear-to-br from-rose-50 via-white to-rose-100 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-16 gap-5 px-6 md:px-12">
        {/* Left — Message */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold uppercase tracking-wider text-blue-600 mb-2">
            {principalTitle}
          </h3>
          <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Message from {principalName}
          </h4>

          <div className="text-lg md:text-xl font-light leading-relaxed text-gray-700 italic mb-7">
            <span className="text-4xl text-rose-700 font-serif">“</span>
            {messageContent.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? "inline" : "mt-4"}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
            <span className="text-4xl text-rose-700 font-serif">”</span>
          </div>

          <a
            href={messageLink}
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-rose-300/60 transition duration-300 font-medium"
          >
            Meet Our Leadership
          </a>
        </div>

        {/* Right — Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative group w-full max-w-md md:max-w-lg">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-tr from-rose-200 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
            <div className="overflow-hidden rounded-3xl shadow-2xl relative border-4 border-white">
              <motion.img
                src={assets.principal}
                alt={`Principal, ${principalName}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PrincipalMessage;
