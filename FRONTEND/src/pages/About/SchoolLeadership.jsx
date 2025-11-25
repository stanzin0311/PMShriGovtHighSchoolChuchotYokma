// src/pages/about/Leadership.jsx
import React from "react";
import { assets } from "../../assets/assets";

const SchoolLeadership = () => {
    // ACTUAL KNOWN HEAD OF SCHOOL
    const headOfSchool = {
      name: "Tashi Wangyal",
      title: "Head of School (H.O.S.)",
      qualification: "M.Sc, B.Ed (Physics)",
    };

    // Placeholder data for other key staff
    const keyStaff = [
      {
        name: "Stanzin Zazang",
        title: "Mater",
        image: assets.master1, // Placeholder image
      },
      {
        name: "Rinchen Dolma",
        title: "Mater",
        image: assets.master1, // Placeholder image
      },
      {
        name: "Zahira Bano",
        title: "Master",
        image: assets.master3, // Placeholder image
      },
    ];

    const managingCommittee = [
        "Head of School (Chairperson)",
        "Nominated Teacher Representative",
        "Parent Representative (VEC Member)",
        "Community Representative (Local Elder)",
        "Alumni Representative",
    ];

    return (
        <div className="space-y-12 max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
                School Leadership
            </h1>

            <section className="bg-rose-50/40 p-6 rounded-2xl shadow-sm">
                {/* Heading at top */}
                <h2 className="text-2xl md:text-3xl font-bold text-rose-700 mb-2">
                    Meet Our Head of School: {headOfSchool.name}
                </h2>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Leading the PM SHRI Transformation
                </h3>
                <div>
                    {/* Responsive image: full width on mobile, float right on md+ */}
                    <img
                        src={assets.principal} // Should be the image for Tashi Wangyal
                        alt={`Head of School ${headOfSchool.name}`}
                        className="
                            w-full max-w-full h-60 sm:h-80 object-cover rounded-2xl shadow-lg border-4 border-rose-200
                            mb-4
                            md:float-right md:w-64 md:h-80 md:ml-6 md:mb-3
                        "
                    />
                    <p className="text-gray-700 leading-relaxed mb-4">
                        PM Shri Govt. High School Chuchot Yokma is led by **{headOfSchool.name}**, a dedicated educator with a clear vision for holistic and future-ready education in Ladakh. As the {headOfSchool.title}, he ensures that the school operates in full compliance with PM SHRI standards and the principles of **NEP 2020**.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        With a solid background in education and local governance, {headOfSchool.name} is committed to fostering an inclusive, supportive, and technologically-advanced environment. His focus is on **experiential learning**, promoting the **Bhoti language**, and ensuring every student has access to the resources needed for excellence.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Under his leadership, the school places strong emphasis on **Social, Emotional, and Ethical (SEE) Learning**, alongside rigorous academics, helping students grow into compassionate, disciplined, and responsible citizens.
                    </p>
                    <div className="clear-both" />
                </div>
            </section>

            {/* Department/Wing Heads */}
            <section className="pt-8">
                <h3 className="text-2xl font-bold text-rose-700 mb-8 text-center border-b border-rose-200 pb-2">
                    Key School Master
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {keyStaff.map((staff, index) => (
                        <div key={index} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <img
                                src={staff.image}
                                alt={staff.name}
                                className="rounded-full shadow-lg w-32 h-32 object-cover border-4 border-rose-100 mb-4"
                            />
                            <div className="text-center">
                                <h4 className="font-semibold text-gray-900 text-lg">{staff.name}</h4>
                                <p className="text-rose-600 text-sm font-medium">{staff.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Managing Committee */}
            <section className="pt-8 bg-gray-50 p-8 rounded-2xl shadow-inner">
                <h3 className="text-2xl font-bold text-rose-700 mb-6 text-center">School Management Committee (SMC)</h3>
                <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                    The School Management Committee plays a critical role in the oversight, planning, and implementation of school programs, ensuring transparent and community-driven governance, as mandated by the RTE Act and PM SHRI guidelines.
                </p>
                <div className="grid md:grid-cols-5 gap-4">
                    {managingCommittee.map((role, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-500 text-center flex items-center justify-center h-full">
                            <p className="text-gray-700 text-sm font-medium">{role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SchoolLeadership;