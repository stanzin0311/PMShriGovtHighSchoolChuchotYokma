import React from "react";
import { BadgeCheck, Shirt, BookOpenCheck, Baby, Users } from "lucide-react";
import { assets } from "../../assets/assets";

const FinancialAid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-10 space-y-10 bg-white rounded-xl shadow-xl">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Free & Inclusive Education for All Students
      </h1>

      {/* Banner Image */}
      <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src={assets.FinancialAid}
          alt="Government Sponsored Education - PM Shri Govt High School"
          className="w-full object-cover max-sm:h-[200px]"
        />
      </div>

      {/* About Financial Support */}
      <p className="text-gray-700 leading-relaxed text-lg font-medium">
        As a <strong>PM SHRI Government High School</strong> under the <strong>Samagra Shiksha</strong> initiative of the Central Government, 
        we ensure that **every student receives quality education at zero cost**.  
        No tuition fee is charged to any student — education and development are fully sponsored by the government.
      </p>

      {/* Free Benefits */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white shadow-sm border border-rose-100 p-6 rounded-2xl space-y-3 hover:shadow-md transition">
          <BookOpenCheck className="w-10 h-10 text-rose-600" />
          <h2 className="font-semibold text-rose-700 text-lg">Free Textbooks & Notebooks</h2>
          <p className="text-gray-600">All academic learning materials are supplied by the school every year without any cost.</p>
        </div>

        <div className="bg-white shadow-sm border border-rose-100 p-6 rounded-2xl space-y-3 hover:shadow-md transition">
          <Shirt className="w-10 h-10 text-rose-600" />
          <h2 className="font-semibold text-rose-700 text-lg">Free Uniforms for Students</h2>
          <p className="text-gray-600">Students receive complete school uniforms including winter clothing in Ladakh conditions.</p>
        </div>

        <div className="bg-white shadow-sm border border-rose-100 p-6 rounded-2xl space-y-3 hover:shadow-md transition">
          <Users className="w-10 h-10 text-rose-600" />
          <h2 className="font-semibold text-rose-700 text-lg">No Tuition or Development Charges</h2>
          <p className="text-gray-600">Families do not have to pay any school fee. Every child is educated equally without financial burden.</p>
        </div>

        <div className="bg-white shadow-sm border border-rose-100 p-6 rounded-2xl space-y-3 hover:shadow-md transition">
          <Baby className="w-10 h-10 text-rose-600" />
          <h2 className="font-semibold text-rose-700 text-lg">Support for Special Needs (CWSN)</h2>
          <p className="text-gray-600">Students with special needs receive assistive devices, therapy support & personalized learning plans.</p>
        </div>

        <div className="bg-white shadow-sm border border-rose-100 p-6 rounded-2xl space-y-3 hover:shadow-md transition">
          <BadgeCheck className="w-10 h-10 text-rose-600" />
          <h2 className="font-semibold text-rose-700 text-lg">Government Welfare & Mid-Day Meal</h2>
          <p className="text-gray-600">Students benefit from nutritional support and welfare initiatives for overall development.</p>
        </div>
      </div>

      {/* Closing Statement */}
      <p className="text-gray-700 leading-relaxed text-lg text-center font-semibold">
        We strongly believe that **every child — regardless of background — deserves equal access to quality education, care and opportunities.**
        PM SHRI Govt High School proudly stands for **education without discrimination and without economic burden**.
      </p>
    </section>
  );
};

export default FinancialAid;
