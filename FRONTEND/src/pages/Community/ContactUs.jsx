import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now we keep local submission behavior.
    // You can replace this with an API call (POST) to your backend later.
    alert("Thank you! Your message has been submitted. The school office will get back to you.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <section className="max-w-4xl mx-auto md:px-4 py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700">
          CONTACT US
        </h1>
        <p className="text-gray-600 text-lg">
          Have a question about PM Shri Govt. High School Chuchot Yokma? Use the form below or contact the school office directly.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
          <h2 className="text-xl font-semibold text-rose-700 mb-3">School Office</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">H/S Chushod (Chuchot) Yogma — PM SHRI</span>
          </p>
          <p className="text-gray-700 mb-2">
            Village: <span className="font-medium">Chuchot Yokma</span>
          </p>
          <p className="text-gray-700 mb-2">
            Gram Panchayat: <span className="font-medium">Chuchot Yokma Part II</span>
          </p>
          <p className="text-gray-700 mb-2">
            Pin Code: <span className="font-medium">194101</span>
          </p>

          <div className="mt-4 space-y-1">
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+916006526086" className="text-rose-700 hover:underline">6006526086</a>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:govthighheadmaster@gmail.com" className="text-rose-700 hover:underline">govthighheadmaster@gmail.com</a>
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Office hours follow the school academic schedule. For admissions and official queries, please use the admission contact page.
          </p>
        </div>

        {/* Form Card */}
        <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Message<span className="text-rose-600">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-2 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map (Chuchot Yokma coordinates) */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps?q=34.080434,77.596379&z=15&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PM Shri Govt. High School Chuchot Yokma Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
