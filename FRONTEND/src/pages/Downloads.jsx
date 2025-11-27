import React from 'react';

const Downloads = () => {
   return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Downloads
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Access important forms, documents, and resources for PM SHRI Govt. High School Chuchot Yokma.
                    </p>
                </div>

                {/* Download Cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    {/* Admission Forms */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Admission Forms</h3>
                        <p className="text-gray-600">
                            Download application forms for new admissions and transfer students.
                        </p>
                    </div>

                    {/* Academic Materials */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Academic Materials</h3>
                        <p className="text-gray-600">
                            Access textbooks, worksheets, and other study resources for students.
                        </p>
                    </div>

                    {/* Notices & Circulars */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Notices & Circulars</h3>
                        <p className="text-gray-600">
                            Download official school notices, event circulars, and announcements.
                        </p>
                    </div>

                    {/* Exam Schedules */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Exam Schedules</h3>
                        <p className="text-gray-600">
                            View and download class-wise exam timetables for current academic sessions.
                        </p>
                    </div>

                    {/* Result Sheets */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Result Sheets</h3>
                        <p className="text-gray-600">
                            Download end-of-term and annual result sheets for students.
                        </p>
                    </div>

                    {/* School Policies */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">School Policies</h3>
                        <p className="text-gray-600">
                            Access official policies regarding student conduct, safety, and school rules.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Downloads;
