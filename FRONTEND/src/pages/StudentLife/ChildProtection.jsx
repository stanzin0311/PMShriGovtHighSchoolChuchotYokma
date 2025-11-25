import React from "react";
import { assets } from "../../assets/assets";
import { ShieldCheck } from "lucide-react";

const ChildProtection = () => {
    return (
        <div className="py-12">
            <div className="max-w-6xl mx-auto md:px-6 space-y-12">

                {/* 🔹 Title */}
                <div className="text-center space-y-4">
                    <div className="flex justify-center items-center gap-3">
                        <ShieldCheck className="w-10 h-10 text-rose-600 animate-pulse" />
                        <h1 className="text-4xl md:text-5xl font-extrabold text-rose-700 tracking-tight">
                            Child Protection Policy
                        </h1>
                    </div>

                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        PM Shri Govt. High School Chuchot Yokma is committed to providing a safe, secure,
                        and supportive environment for every student—inside the classroom, on the field,
                        and within the boarding facility.
                    </p>
                </div>

                {/* 🔹 Hero Image */}
                <div className="w-full h-72 md:h-[26rem] overflow-hidden rounded-3xl shadow-2xl">
                    <img
                        src={assets.ChildProtection1}
                        alt="Child Protection"
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-in-out"
                    />
                </div>

                {/* 🔹 Policy Details */}
                <div className="backdrop-blur-xl bg-white/70 border border-rose-100 shadow-xl rounded-3xl p-6 md:p-10 space-y-6 text-gray-700 leading-relaxed">

                    <p>
                        PM Shri Govt. High School Chuchot Yokma follows a strong{" "}
                        <span className="font-semibold text-rose-700">Child Protection Policy</span> to
                        ensure the safety, dignity, and well-being of all students. The school environment
                        —including classrooms, playgrounds, hostels, indoor activity areas, and the
                        multi-purpose hall—is closely monitored by trained staff.
                    </p>

                    <p>
                        Our policy aligns with the guidelines set by the{" "}
                        <span className="font-medium text-rose-700">Department of School Education</span>,
                        the{" "}
                        <span className="font-medium text-rose-700">Juvenile Justice Act</span>, and the{" "}
                        <span className="font-medium text-rose-700">
                            Protection of Children from Sexual Offences (POCSO) Act
                        </span>
                        . We aim to prevent any form of abuse, neglect, bullying, or discrimination.
                    </p>

                    <p>
                        Teachers, wardens, coaches, and all support staff receive regular awareness and
                        orientation on child safety. The school maintains a{" "}
                        <span className="font-semibold text-rose-700">zero-tolerance policy</span> toward
                        any physical, emotional, or verbal misconduct.
                    </p>

                    <p>
                        With facilities such as football and volleyball grounds, basketball court, indoor
                        badminton/table tennis hall, hostel, yoga activities, physiotherapy support, and
                        indoor games, safety measures are actively followed in every space used by the
                        students.
                    </p>

                    <p>
                        The school encourages students to speak openly with teachers, hostel wardens, or
                        the Child Protection Committee if they feel uncomfortable or unsafe at any time.
                    </p>
                </div>

                {/* 🔹 Download Section */}
                <div className="text-center bg-gradient-to-r from-rose-100 to-rose-200 rounded-2xl shadow-inner py-10 px-6 space-y-5 border border-rose-200/50">

                    <p className="text-gray-800 text-lg font-medium">
                        The detailed Child Protection Policy is available in the{" "}
                        <a
                            href="/downloads"
                            className="text-rose-700 underline hover:text-rose-800 transition"
                        >
                            Downloads
                        </a>{" "}
                        section.
                    </p>

                    <a
                        href={assets.ChildProtection}
                        download
                        className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                    >
                        Download Policy
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ChildProtection;
