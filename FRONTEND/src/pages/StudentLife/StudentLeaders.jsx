import React from "react";
import { assets } from "../../assets/assets";
import { Users } from "lucide-react";

const StudentLeaders = () => {
    const leaders = [
        {
            name: "Head Girl",
            student: "Name Here",
            image: assets.defaultStudent, // replace with actual image
        },
        {
            name: "Head Boy",
            student: "Name Here",
            image: assets.defaultStudent, // replace with actual image
        },
    ];

    return (
        <div className="w-full">
            {/* Top Banner */}
            <div className="w-full h-64 md:h-80 overflow-hidden">
                <img
                    src={assets.home4}
                    alt="Student Leadership"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Intro Section */}
            <div className="max-w-5xl mx-auto text-center py-10 px-4">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <Users className="w-7 h-7 text-rose-600" />
                    <h1 className="text-3xl md:text-4xl font-bold text-rose-700">
                        Student Leaders
                    </h1>
                </div>

                <p className="text-gray-700 leading-relaxed text-justify">
                    Today’s children are tomorrow’s leaders. At PM Shri Govt. High School
                    Chuchot Yokma, student leadership is encouraged to help young learners 
                    develop confidence, responsibility, and teamwork.
                    <br /><br />
                    Each academic year, the school appoints a Head Boy and Head Girl who 
                    represent the student body, assist in school activities, and uphold 
                    discipline and values within the campus.
                </p>
            </div>

            {/* Leaders Section */}
            <div className="max-w-4xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-items-center mt-6">
                    {leaders.map((leader, index) => (
                        <div key={index} className="text-center">
                            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-rose-300 shadow-md">
                                <img
                                    src={leader.image}
                                    alt={leader.student}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="mt-3 text-xl font-bold text-gray-800">
                                {leader.student}
                            </h3>
                            <p className="text-sm text-gray-600 font-medium">
                                {leader.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentLeaders;
