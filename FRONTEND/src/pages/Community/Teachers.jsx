import React from "react";
import { assets } from "../../assets/assets";

const Teachers = () => {
  return (
    <section className="max-w-6xl mx-auto md:px-4 py-8 space-y-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Teachers
      </h1>

      {/* Intro Paragraph */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          PM Shri Govt. High School Chuchot Yokma is supported by a team of
          dedicated and experienced teachers across various subjects. Our
          faculty members are committed to providing quality education and
          guiding students with care, patience, and motivation.
        </p>

        <p>
          The school regularly encourages teachers to participate in{" "}
          <strong>professional development programmes</strong>, digital
          training, and academic workshops conducted by the Education Department
          of UT Ladakh and other organisations. This helps our teachers stay
          updated with modern teaching methods and improve classroom
          engagement.
        </p>

        <p>
          Head of School: <span className="font-semibold">Tashi Wangyal</span>
        </p>
      </div>

      {/* Image with overlay text and shadow */}
      <div className="relative w-full mx-auto">
        <img
          src={assets.teacher1}
          alt="School Teachers"
          className="w-full rounded-2xl shadow-lg object-cover"
        />

        {/* Bottom gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent rounded-2xl"></div>

        {/* Text overlay for medium+ screens */}
        <div className="hidden md:block absolute bottom-2 left-2 text-white px-4 py-2 rounded-xl">
          <p className="font-semibold text-lg">Our Dedicated Faculty</p>
          <p className="text-sm">Committed • Skilled • Supportive</p>
        </div>
      </div>

      {/* Text outside the image for small screens */}
      <div className="block md:hidden text-center -mt-6">
        <p className="font-semibold text-lg text-rose-700">Our Dedicated Faculty</p>
        <p className="text-gray-700 text-sm">Committed • Skilled • Supportive</p>
      </div>

      {/* Teaching Approach */}
      <div className="bg-rose-50 p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-rose-700 border-b-2 border-rose-200 pb-2">
          Teaching Approach
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Our teachers focus on creating a supportive learning environment where
          every student feels encouraged to ask questions, explore ideas, and
          take part in classroom activities. Equal attention is given to both
          academic subjects and co-curricular development.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Teachers at our school use a blend of <strong>activity-based
          learning</strong>, <strong>concept-based teaching</strong>, and{" "}
          <strong>practical demonstrations</strong> to help students understand
          concepts clearly.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our faculty collaborates closely with parents through PTMs,
          counselling sessions, and continuous feedback to ensure the overall
          growth of every child.
        </p>
      </div>

      {/* Special Educators & Inclusion */}
      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-rose-50">
        <h2 className="text-xl font-semibold text-rose-700 border-b-2 border-rose-200 pb-2">
          Special Educators & Inclusive Education
        </h2>

        <p className="text-gray-700 leading-relaxed">
          PM Shri Govt. High School Chuchot Yokma is committed to inclusive
          education and learning for all children, including Children With
          Special Needs (CWSN). The school works to ensure that every child has
          access to meaningful learning experiences.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <strong>Special Educators:</strong> The school engages special
          educators to support learners with diverse needs. In line with
          best-practice standards, the school includes special educators who are{" "}
          <strong>RCI-certified</strong> to provide specialised educational
          support and interventions.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <strong>Counselling & Support:</strong> A first-level counsellor is
          appointed to support students' psycho-social needs and to work with
          teachers and parents on individual learning plans where necessary.
          Teachers receive guidance on inclusive teaching strategies and the
          use of assistive technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">Accessibility & Facilities</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Ramp and handrails for accessible entry to school buildings.</li>
              <li>CWSN-friendly toilet (functional).</li>
              <li>Assistive technologies and inclusive teaching aids available.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Programs & Practices</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Individualized support and classroom adjustments for learners.</li>
              <li>Teacher sensitization on inclusive pedagogy and differentiated instruction.</li>
              <li>Collaboration with cluster-level special educator resources when required.</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-600 text-sm italic mt-2">
          If you need specific information about special educator support or
          assistive services, please contact the school office.
        </p>
      </div>
    </section>
  );
};

export default Teachers;
