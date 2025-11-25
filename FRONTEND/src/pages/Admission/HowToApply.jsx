import React from "react";
import { Mail, Calendar, Clipboard, CheckCircle, FileText, CreditCard } from "lucide-react";

const HowToApply = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-8 pt-6 space-y-6 bg-white rounded-xl shadow-lg">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-rose-700 border-b-4 border-rose-200 pb-3">
        Admission Process: PM Shri Govt High School Chuchot Yokma
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 leading-relaxed">
        Admissions at <span className="font-semibold text-rose-700">PM Shri Govt High School Chuchot Yokma</span> are conducted with clarity, fairness and transparency by following the guidelines of the <strong>National Education Policy (NEP)</strong>.
      </p>

      {/* Contact */}
      <div className="bg-rose-50 border border-rose-100 p-5 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-rose-700 mb-2 flex items-center gap-2">
          <Mail className="w-5 h-5" /> Contact Us
        </h2>
        <p className="text-gray-700">
          For any admission-related queries, email us at:{" "}
          <a
            href="mailto:govthighheadmaster@gmail.com"
            className="text-rose-600 font-medium hover:underline"
          >
            govthighheadmaster@gmail.com
          </a>
        </p>
      </div>

      {/* Notification Dates */}
      <div>
        <h2 className="text-2xl font-semibold text-rose-700 mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6" /> Admission Notifications
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Ninth Class:</strong> Admissions are conducted in <strong>November – December</strong>.
          </li>
          <li>
            <strong>Other Classes (Transfer Cases):</strong> Admissions depend on seat availability.
            Please contact the school office for details.
          </li>
          <li>
            The new academic session begins in <strong>December</strong>.
          </li>
        </ul>
      </div>

      {/* Steps to Apply */}
      <div>
        <h2 className="text-2xl font-semibold text-rose-700 mb-6 flex items-center gap-2">
          <Clipboard className="w-6 h-6" /> Steps to Apply
        </h2>

        <div className="space-y-6">
          <div className="border border-rose-100 p-5 rounded-xl shadow-sm bg-gray-20">
            <h3 className="font-semibold text-rose-700 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" /> Step 1: Collect the Application Form
            </h3>
            <p className="text-gray-700">
              Application forms are available **only from the School Office** during the admission period.
            </p>
          </div>

          <div className="border border-rose-100 p-5 rounded-xl shadow-sm bg-gray-20">
            <h3 className="font-semibold text-rose-700 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Step 2: Submit Required Documents
            </h3>
            <p className="text-gray-700">
              Submit the filled form along with supporting documents (Birth Certificate, Transfer Certificate,
              Aadhaar, etc.) before the deadline.
            </p>
          </div>

          <div className="border border-rose-100 p-5 rounded-xl shadow-sm bg-gray-20">
            <h3 className="font-semibold text-rose-700 mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5" /> Step 3: Selection Process
            </h3>
            <p className="text-gray-700">
              The selection list will be displayed **on the School Notice Board on the same day**.
              Parents & students are required to be present for verification if selected.
            </p>
          </div>

          <div className="border border-rose-100 p-5 rounded-xl shadow-sm bg-gray-20">
            <h3 className="font-semibold text-rose-700 mb-2 flex items-center gap-2">
              <CreditCard className="w-5 h-5" /> Step 4: Final Admission
            </h3>
            <p className="text-gray-700">
              After verification, admission is confirmed.  
              <span className="font-semibold text-rose-700 underline">
                There are absolutely NO FEES — education is completely free.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* No Payment Required */}
      <div className="text-center mt-10">
        <p className="text-lg font-semibold text-rose-700">
          📌 PM Shri Govt High School Chuchot Yokma provides **free education for all students**.
        </p>
      </div>
    </div>
  );
};

export default HowToApply;
