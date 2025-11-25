import React from "react";
import { Facebook } from "lucide-react";
import { assets } from "../../assets/assets";

const Parents = () => {
  return (
    <section className="max-w-6xl mx-auto md:px-4 py-8 space-y-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Parents
      </h1>

      {/* Intro Text */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          PM Shri Govt. High School Chuchot Yokma believes that parents are our
          strongest partners. Their support, trust, and involvement play a vital
          role in helping us shape a positive and meaningful learning
          environment for every child.
        </p>
        <p>
          Parent–Teacher Meetings (PTMs) are conducted regularly to discuss the
          academic progress and personal development of students. Parents also
          interact with teachers during term-end result announcements.
        </p>
      </div>

      {/* Information Section */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Parents can stay updated through official school notices, the school
          communication channels, and community announcements. For admissions,
          detailed information is available on the Admissions page.
        </p>

        <div className="flex flex-wrap gap-4 mt-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-rose-700 hover:bg-rose-600 px-4 py-2 rounded-full transition-all"
          >
            <Facebook size={18} />
            Facebook
          </a>

          <a
            href="/news"
            className="text-rose-700 border border-rose-300 hover:bg-rose-50 px-4 py-2 rounded-full transition-all"
          >
            Latest Updates
          </a>

          <a
            href="/admission/contact"
            className="text-rose-700 border border-rose-300 hover:bg-rose-50 px-4 py-2 rounded-full transition-all"
          >
            Admission Enquiry
          </a>
        </div>
      </div>

      {/* Fees / Support Section (Updated: school is free) */}
      <div className="bg-rose-50 p-6 rounded-2xl shadow-md space-y-3">
        <h2 className="text-xl font-semibold text-rose-700 border-b-2 border-rose-200 pb-2">
          Fees & Support
        </h2>

        <p className="text-gray-700">
          PM Shri Govt. High School Chuchot Yokma is a government school providing
          free education in accordance with government policy. There are no
          school tuition fees for regular students.
        </p>

        <p className="text-gray-700">
          The school participates in the PM-POSHAN (mid-day meal) programme to
          ensure students receive nutritious meals during school days. For other
          support or special programmes (hostel accommodation for remote-area
          students, uniforms, textbooks), parents may contact the school office
          for guidance on entitlements and procedures.
        </p>

        <a
          href="/contact-us"
          className="inline-block bg-rose-700 hover:bg-rose-600 text-white px-5 py-2 rounded-full transition-all font-medium"
        >
          Contact School Office
        </a>
      </div>

      {/* Parent Engagement & Guidance */}
      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-rose-700 border-b-2 border-rose-200 pb-2">
          Parent Engagement
        </h2>

        <p className="text-gray-700">
          We encourage parents to actively participate in their child’s learning
          journey. Regular communication with teachers, attending PTMs, and
          supporting reading and homework routines at home significantly helps
          student success.
        </p>

        <p className="text-gray-700">
          Parents who need additional support (for example, information about
          hostel facilities for remote-area students or assistance under
          government schemes) may reach out to the school office or the School
          Management Committee (SMC).
        </p>
      </div>
    </section>
  );
};

export default Parents;
