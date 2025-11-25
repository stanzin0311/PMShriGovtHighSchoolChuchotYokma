import React from "react";
import { assets } from "../../assets/assets";

const CommunityOutreach = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-4 py-8 space-y-12">
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Community Outreach
      </h1>

      {/* Main Content */}
      <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
        <p>
          PM SHRI School continuously engages with the local community to build
          a supportive, inclusive, and child-friendly learning environment.
        </p>

        <p>
          Through various outreach efforts, the school encourages students to
          participate in activities that promote responsibility, social
          awareness, and compassionate behaviour. Community participation is an
          essential part of the school’s vision.
        </p>

        <p>
          The school also collaborates with local organisations, volunteers, and
          parents to create learning opportunities that go beyond the classroom.
          These efforts help in nurturing confident, capable, and socially aware
          young citizens.
        </p>
      </div>

      {/* ------------------ SMC SECTION ------------------ */}
      <div className="bg-rose-50 p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-rose-700 border-b-2 border-rose-200 pb-2">
          School Management Committee (SMC)
        </h2>

        <p className="text-gray-700 leading-relaxed">
          The <strong>School Management Committee (SMC)</strong> plays an
          important role in strengthening the partnership between the school and
          the community. The committee supports school development, ensures
          transparency, and helps maintain a safe and child-focused environment.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The SMC consists of parents, teachers, and community members who work
          together to:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Support academic and co-curricular development.</li>
          <li>Strengthen communication between parents and the school.</li>
          <li>Assist in maintaining student safety and well-being.</li>
          <li>Encourage community involvement in school activities.</li>
        </ul>

        {assets.SMC_Group && (
          <div className="mt-4">
            <img
              src={assets.SMC_Group}
              alt="School Management Committee"
              className="w-full rounded-xl shadow-lg object-cover hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        )}
      </div>
      {/* ------------------ END SMC SECTION ------------------ */}

      {/* Volunteer Button */}
      <div className="text-center">
        <a
          href="/community/volunteer"
          className="inline-block bg-rose-700 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
        >
          Volunteer With Us
        </a>
      </div>

      {/* Image Section */}
      <div className="mt-10">
        <img
          src={assets.CommunityOutreach1}
          alt="Community Outreach"
          className="w-full object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

    </div>
  );
};

export default CommunityOutreach;
