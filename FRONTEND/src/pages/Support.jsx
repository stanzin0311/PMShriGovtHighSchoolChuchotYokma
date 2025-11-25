import React from 'react'
const Support = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Support Center
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        How can we help you today?
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Support Cards */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">FAQ</h3>
                        <p className="text-gray-600">Find answers to commonly asked questions about our services.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h3>
                        <p className="text-gray-600">Get in touch with our support team for personalized assistance.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Documentation</h3>
                        <p className="text-gray-600">Access detailed guides and documentation for our platform.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;
