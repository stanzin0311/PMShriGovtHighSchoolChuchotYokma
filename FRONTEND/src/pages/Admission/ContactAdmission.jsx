import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { assets } from "../../assets/assets"; // using your actual assets

const ContactAdmission = () => {
  return (
    <section className="max-w-7xl mx-auto px-0 md:px-2 py-12 space-y-12 bg-white rounded-xl shadow-xl">

      {/* Heading */}
      <div className="text-left px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
          Contact Our Admissions Team
        </h1>
        <p className="text-gray-600 mt-2 leading-relaxed">
          The Admissions Cell at <strong>PM Shri Govt. High School Chuchot Yokma</strong> is committed
          to helping parents and students with every detail of the admission procedure, eligibility,
          documentation and government guidelines.
        </p>
      </div>

      {/* Admissions In-Charge Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-center -mt-4 px-4 md:px-0">

        {/* Image Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
          <img
            src={assets.MsFaridaBano} // replace later when you have Farida Bano's photo
            alt="Admissions In-Charge"
            className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">Mrs. Farida Bano</h3>
            <p className="text-sm text-gray-200">Admissions In-Charge</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            As a PM SHRI Government School, admissions follow a transparent and standardized
            government-approved framework. For any queries related to enrollment, eligibility,
            reservation, RTE, documentation or transfer admissions, please contact the Admissions
            In-Charge.
          </p>

          <p className="text-gray-700 leading-relaxed font-semibold text-rose-700">
            Working Hours: Monday – Friday • 10:00 AM – 4:00 PM <br /> (Excluding government holidays)
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-rose-600" />
              <span className="text-sm font-medium">
                +91 94192 18722 • +91 95966 10383
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-rose-600" />
              <a
                href="mailto:govthighheadmaster@gmail.com"
                className="text-sm hover:underline text-rose-600 font-medium"
              >
                govthighheadmaster@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-rose-600" />
              <span className="text-sm">
                PM Shri Govt. High School, Chuchot Yokma, Leh – UT Ladakh • 194104
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* School Office – Call Button */}
      <div className="relative group max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg mt-8">
        <img
          src={assets.contactOffice}
          alt="School Office"
          className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

        <a
          href="tel:+919419218722"
          className="absolute inset-0 flex flex-col items-center justify-center opacity-100 transition duration-500 text-white p-4"
        >
          <div className="bg-white p-3 rounded-full shadow-lg mb-3">
            <Phone className="text-rose-600 w-7 h-7" />
          </div>
          <p className="text-xl font-bold tracking-wide">Call the School Office</p>
          <p className="text-sm text-gray-200 mt-1">Quick support for admissions & documentation.</p>
        </a>
      </div>

    </section>
  );
};

export default ContactAdmission;
