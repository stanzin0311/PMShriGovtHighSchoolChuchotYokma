import React from 'react';

const Support = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        School Support Center
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        How can we assist you regarding PM SHRI Govt. High School Chuchot Yokma?
                    </p>
                </div>

                {/* Support Cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    {/* Admissions */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Admissions</h3>
                        <p className="text-gray-600">
                            Get guidance on new admissions, eligibility criteria, documents required, and application procedures.
                        </p>
                    </div>

                    {/* Academic Support */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Academic Support</h3>
                        <p className="text-gray-600">
                            Assistance with textbooks, study materials, class schedules, and learning resources for students.
                        </p>
                    </div>

                    {/* Sports & Co-curricular */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Sports & Co-curricular</h3>
                        <p className="text-gray-600">
                            Information about sports programs, clubs, yoga sessions, and co-curricular activities for holistic development.
                        </p>
                    </div>

                    {/* Community & Volunteer */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Community & Volunteer Programs</h3>
                        <p className="text-gray-600">
                            Learn about school-community initiatives, volunteer opportunities, and outreach programs for students.
                        </p>
                    </div>

                    {/* Special Education Support */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Special Needs Support</h3>
                        <p className="text-gray-600">
                            Guidance on Braille classes, physiotherapy support, and assistive learning resources for students with special needs.
                        </p>
                    </div>

                    {/* Contact & Assistance */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact & Assistance</h3>
                        <p className="text-gray-600">
                            Reach out to the school office for any queries or personalized support regarding student education and welfare.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;
