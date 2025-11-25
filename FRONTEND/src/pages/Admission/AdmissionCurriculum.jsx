import React from "react";
// Switched to Lucide icons for compatibility
import { Book, Activity, PenTool, UserCheck } from "lucide-react"; 
import { assets } from "../../assets/assets";  

const AdmissionCurriculum = () => {
  return (
    <section className="max-w-7xl mx-auto px-2 py-8 space-y-10 bg-white rounded-xl shadow-xl">
      {/* Heading */}
      <div className="text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
          Curriculum & NEP 2020 Focus
        </h1>
      </div>

      {/* Intro Image */}
      <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src={assets.curriculum}
          alt="PM Shri School Curriculum Focus"
          className="w-full object-cover max-sm:h-[200px]"
        />
      </div>

      {/* Description */}
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          As a model <strong>PM Shri Govt High School</strong> recognized by the Central Government, we strictly follow the <strong>CBSE curriculum</strong> with a progressive, student-centric approach driven entirely by the mandates of the <strong>National Education Policy (NEP) 2020</strong>. Our designation as a PM Shri School signifies our commitment to transforming education by making it more experiential, holistic, integrated, inquiry-driven, and fun, ensuring the highest quality of learning environment for every child.
        </p>

        {/* Floating Info Blocks */}
        <div className="space-y-8">
          {/* NEP 2020 Alignment (FLN/Multilingualism) */}
          <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
            <div className="float-left mr-4 mb-2">
              <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                <Book className="w-7 h-7" />
              </div>
            </div>
            <strong>NEP 2020 Alignment (FLN & Multilingualism):</strong> We place a strong emphasis on **Foundational Literacy and Numeracy (FLN)**, ensuring every child achieves proficiency in reading, writing, and basic arithmetic by Grade 3. Furthermore, we actively promote **multilingualism**, respecting and integrating the local Ladakhi language and culture into the curriculum to foster deep cognitive development and cultural pride.
          </div>

          {/* Skill & Vocational Education */}
          <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
            <div className="float-left mr-4 mb-2">
              <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                <Activity className="w-7 h-7" />
              </div>
            </div>
            <strong>Skill & Vocational Education:</strong> The curriculum mandates the introduction of **vocational subjects** from Class 6 onwards, integrating practical skills like basic IT, electronics, and local crafts. This includes hands-on training, exposure to local industries, and opportunities for internships/apprenticeship, ensuring students gain relevant skills and are **job-ready** upon graduation.
          </div>

          {/* Experiential Learning */}
          <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
            <div className="float-left mr-4 mb-2">
              <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                <PenTool className="w-7 h-7" />
              </div>
            </div>
            <strong>Experiential Learning:</strong> We move away from rote learning by integrating subjects like **Art, Sports, and Physical Education** with core academics. Learning is driven by **inquiry, discussion, discovery, and analysis**, utilizing dedicated science and maker labs. Students engage in Project-Based Learning (PBL) and field visits to connect classroom theory to real-world applications and challenges.
          </div>

          {/* Holistic Progress Card (HPC) */}
          <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
            <div className="float-left mr-4 mb-2">
              <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                <UserCheck className="w-7 h-7" />
              </div>
            </div>
            <strong>Holistic Progress Card (HPC):</strong> Assessment is comprehensive and multidimensional, moving beyond marks to include self-assessment, peer-assessment, and teacher input. The HPC tracks a student's development across all three domains—**cognitive, affective, and psycho-motor**—providing detailed feedback on soft skills, ethics, critical thinking, emotional regulation, and teamwork, giving parents a complete picture of their child's overall growth.
          </div>
        </div>
            {/* Digital & Smart Learning */}
            <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
              <div className="float-left mr-4 mb-2">
                <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                  <Activity className="w-7 h-7" />
                </div>
            </div>
                <strong>Digital Learning & Smart Classrooms:</strong> 
                PM Shri schools are committed to digital-first education through well-equipped smart classrooms, ICT labs, computer literacy from early grades, and access to NCERT digital platforms like DIKSHA and e-Pathshala to enhance 21st-century skills.
            </div>

            {/* Inclusive Education */}
            <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
              <div className="float-left mr-4 mb-2">
                <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                  <UserCheck className="w-7 h-7" />
                </div>
              </div>
                <strong>Inclusive Education for All Learners:</strong> 
                   Individual learning needs of every student—including slow learners, high achievers, first-generation learners, and children with special needs—are supported through remedial classes, peer learning, counselling, and personalized teaching plans.
              </div>

            {/* Sustainability & Eco Education */}
            <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
              <div className="float-left mr-4 mb-2">
                <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                  <PenTool className="w-7 h-7" />
                </div>
              </div>
              <strong>Environmental & Sustainability Education:</strong> 
              Students actively participate in eco-club activities, school gardening, waste-management initiatives, and climate learning, building responsibility toward the environment and the ecosystem of Ladakh.
              </div>


        {/* Closing Paragraph */}
        <p className="text-gray-700 leading-relaxed font-semibold">
          Our enhanced PM Shri curriculum ensures every child receives the right blend of academic rigor, practical exposure, and ethical values. By focusing on these five pillars of NEP 2020, we are dedicated to preparing our students to become confident, adaptable, and successful leaders ready to contribute positively to both the local community and the nation.
        </p>
      </div>
    </section>
  );
};

export default AdmissionCurriculum;