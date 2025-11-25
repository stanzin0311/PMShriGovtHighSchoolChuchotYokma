import React, { useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    about: "",
    expectations: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering! Your application has been submitted.");
  };

  return (
    <section className="max-w-5xl mx-auto md:px-4 py-8 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700">
          VOLUNTEER WITH US
        </h1>
        <p className="text-gray-600 text-lg">
          Lamdon welcomes volunteer’s time and expertise!
        </p>
      </div>

      {/* Description Section */}
      <div className="space-y-5 text-gray-700 leading-relaxed text-lg bg-rose-50 p-6 rounded-2xl shadow-md">
        <p>
          Thank you for your interest in volunteering with Lamdon School. We are
          so grateful for your time and support!
        </p>
        <p>
          Please complete this form to help us get to know you better. You can
          expect this to take roughly 5-10 minutes to complete.
        </p>
        <p>
          Please note that our Volunteers are currently supporting virtually but
          as schools reopen we may require Volunteers to support our classrooms
          on-ground. We will reach out to you as and when opportunities become
          available. This may take between a few weeks to a few months,
          preferably a longer duration.
        </p>
        <p>
          At Lamdon, volunteers don’t get paid — not because they’re worthless,
          but because we believe they are <strong>priceless</strong>. The
          smallest act of kindness is worth more than the grandest intention. We
          believe that volunteers have not only skillful hands but compassionate
          hearts. By serving as a volunteer you will enrich your life in many
          dimensions.
        </p>
        <p>
          Schools in Ladakh have a long winter holiday (approximately 3 months).
          We want to engage the students in a meaningful way during this time.
        </p>
        <p>
          To volunteer with us, kindly fill the form and submit it to us or
          reach our Media & Communications Coordinator at{" "}
          <a
            href="mailto:lamdonmedia@gmail.com"
            className="text-rose-600 underline hover:text-rose-800"
          >
            lamdonmedia@gmail.com
          </a>
        </p>
      </div>

      {/* Application Form */}
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-semibold text-rose-700 mb-4 text-center">
          Volunteer Application Form
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Give us a hand & start making a difference
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                First Name<span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
         
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
                placeholder="Your email"
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
                placeholder="Your number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          {/* Address & Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Address<span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Your age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              A few words about you<span className="text-rose-600">*</span>
            </label>
            <textarea
              name="about"
              placeholder="Tell us a bit about yourself"
              value={formData.about}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Expectations */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Your expectations from the school administration<span className="text-rose-600">*</span>
            </label>
            <textarea
              name="expectations"
              placeholder="Add your answer here"
              value={formData.expectations}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400"
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
    </section>
  );
};

export default Volunteer;
