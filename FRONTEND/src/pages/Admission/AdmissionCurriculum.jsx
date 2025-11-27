import React from "react";
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

      {/* Intro Image (CROPPED) */}
      <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
        <img
          src={assets.curriculum}
          alt="PM Shri School Curriculum Focus"
          className="w-full object-cover object-center h-[260px] md:h-[380px]"
        />
      </div>

      {/* Description */}
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          As a model <strong>PM Shri Govt High School</strong> recognized by the Central Government, 
          we strictly follow the <strong>CBSE curriculum</strong> with a progressive, student-centric 
          approach driven entirely by the mandates of the <strong>National Education Policy (NEP) 2020</strong>. 
          Our designation as a PM Shri School signifies our commitment to transforming education by 
          making it more experiential, holistic, integrated, inquiry-driven, and fun, ensuring the 
          highest quality of learning environment for every child.
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
            <strong>NEP 2020 Alignment (FLN & Multilingualism):</strong> 
            We place a strong emphasis on <strong>Foundational Literacy and Numeracy (FLN)</strong>, ensuring 
            every child achieves proficiency in reading, writing, and basic arithmetic by Grade 3. 
            Furthermore, we actively promote <strong>multilingualism</strong>, respecting and integrating the 
            local Ladakhi language and culture into the curriculum to foster deep cognitive development 
            and cultural pride.
          </div>

          {/* Skill & Vocational Education */}
          <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
            <div className="float-left mr-4 mb-2">
              <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                <Activity className="w-7 h-7" />
              </div>
            </div>
            <strong>Skill & Vocational Education:</strong> 
            The curriculum mandates the introduction of <strong>vocational subjects</strong> from Class 6 onwards, 
            integrating practical skills like basic IT, electronics, and local crafts. This includes 
            hands-on training, exposure to local industries, and opportunities for internships, ensuring 
            students gain relevant skills and are <strong>job-ready</strong> upon graduation.
          </div>

          {/* Experiential Learning */}
          <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
            <div className="float-left mr-4 mb-2">
              <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                <PenTool className="w-7 h-7" />
              </div>
            </div>
            <strong>Experiential Learning:</strong> 
            We move away from rote learning by integrating subjects like 
            <strong> Art, Sports, and Physical Education</strong> with core academics. Learning is driven by 
            <strong> inquiry, discussion, discovery, and analysis</strong>, utilizing dedicated science and maker 
            labs. Students engage in Project-Based Learning (PBL) and field visits to connect classroom 
            theory to real-world applications.
          </div>

          {/* Holistic Progress Card (HPC) */}
          <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
            <div className="float-left mr-4 mb-2">
              <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
                <UserCheck className="w-7 h-7" />
              </div>
            </div>
            <strong>Holistic Progress Card (HPC):</strong> 
            Assessment is multidimensional, moving beyond marks to include self-assessment, 
            peer-assessment, and teacher evaluation. The HPC measures growth across 
            <strong> cognitive, affective, and psychomotor</strong> skills, offering a complete picture of 
            student development.
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
          PM Shri schools promote digital-first education with smart classrooms, ICT labs, computer literacy, 
          and access to digital platforms such as DIKSHA and e-Pathshala.
        </div>

        {/* Inclusive Education */}
        <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
          <div className="float-left mr-4 mb-2">
            <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
              <UserCheck className="w-7 h-7" />
            </div>
          </div>
          <strong>Inclusive Education for All Learners:</strong> 
          Learning needs of every child—slow learners, achievers, first-generation learners, 
          and children with special needs—are supported through remedial classes, peer learning, 
          counselling, and personalized teaching plans.
        </div>

        {/* Sustainability */}
        <div className="relative bg-white shadow-sm border border-rose-100 rounded-2xl p-6 leading-relaxed text-gray-700">
          <div className="float-left mr-4 mb-2">
            <div className="bg-rose-100 text-rose-600 p-3 rounded-full shadow-sm">
              <PenTool className="w-7 h-7" />
            </div>
          </div>
          <strong>Environmental & Sustainability Education:</strong> 
          Students participate in eco-clubs, gardening, waste management, and climate awareness activities, 
          encouraging responsibility toward the environment.
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-700 leading-relaxed font-semibold">
          Our enhanced PM Shri curriculum ensures a balanced blend of academics, skills, 
          and values—preparing students to become confident, adaptable, and responsible 
          citizens contributing positively to society and the nation.
        </p>
      </div>
    </section>
  );
};

export default AdmissionCurriculum;
