import React, { useState } from "react";

const Vacancies = () => {
  const [formData, setFormData] = useState({
    position: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for applying! Your application has been submitted.");
  };

  return (
    <section className="max-w-4xl mx-auto md:px-4 py-8 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700">
          Vacancies & Recruitment
        </h1>
        <p className="text-gray-600 text-lg">
          Opportunities to work with{" "}
          <span className="font-semibold">
            PM Shri Govt. High School Chuchot Yokma
          </span>
        </p>
      </div>

      {/* Vacancy Notice */}
      <div className="bg-rose-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-rose-700 mb-3">
          Current Openings
        </h2>

        <p className="text-gray-700 mb-3">
          The school announces vacancies based on the requirements sanctioned by 
          the Education Department, UT Ladakh. Eligible candidates may apply 
          online through the form below. Shortlisted candidates will be contacted 
          through phone or email.
        </p>

        <div className="space-y-3 text-gray-700">
          <h3 className="text-lg font-semibold">🔹 Available Post</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Guest Teacher (All Subjects)</strong> — As per academic requirement.
            </li>
            <li>
              <strong>Contractual Teacher</strong> — In accordance with departmental approval.
            </li>
            <li>
              <strong>Support Staff (Office/Library/Laboratory)</strong> — Based on vacancy.
            </li>
          </ul>

          <p className="mt-3 text-gray-600 italic">
            *All appointments will follow government norms and verification processes.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
        <h2 className="text-2xl font-semibold text-rose-700 mb-4 text-center">
          Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Position */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Post Applying For<span className="text-rose-600">*</span>
            </label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
            >
              <option value="">Choose one position</option>
              <option value="Guest Teacher">Guest Teacher</option>
              <option value="Contractual Teacher">Contractual Teacher</option>
              <option value="Support Staff">Support Staff</option>
            </select>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                First Name<span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Last Name<span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Email<span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Phone<span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Upload Your CV/Resume<span className="text-rose-600">*</span>
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-rose-600 file:text-white hover:file:bg-rose-700 cursor-pointer"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Why are you interested in this position?<span className="text-rose-600">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 rounded-lg font-semibold hover:bg-rose-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default Vacancies;
