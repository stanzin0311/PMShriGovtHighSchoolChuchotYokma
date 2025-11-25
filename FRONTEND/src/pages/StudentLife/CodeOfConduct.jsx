import React from "react";
import { ShieldCheck } from "lucide-react";

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen py-12 md:px-10 ">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Title Section */}
        <div className="text-center space-y-3">
          <ShieldCheck className="mx-auto w-12 h-12 text-rose-600" />
          <h1 className="text-4xl font-extrabold text-rose-700 sm:text-5xl">
            School Code of Conduct
          </h1>
          <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-600">
            For a disciplined and healthy school.
          </p>
        </div>

        {/* General Rules */}
        <section className="bg-white rounded-3xl shadow-lg p-8 space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold text-rose-700 border-b-4 border-rose-300 pb-3 mb-6">
            General Rules
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Students should treat school staff with respect at all times and be courteous to fellow students.</li>
            <li>Students will refrain from damaging any form of school property. The school reserves the right to be compensated by the student for any such damages.</li>
            <li>Students will refrain from littering and keep the school premises clean.</li>
            <li>Unacceptable behaviour including but not limited to irregular attendance, academic dishonesty, and neglect of homework, disruptive behaviour, loitering and disrespectful behaviour towards staff or fellow students will result in serious disciplinary action.</li>
            <li>Any form of bullying will result in a disciplinary committee review and could result in expulsion with a negative conduct certificate.</li>
            <li>Any misbehaviour or violation of school discipline will be dealt with by the disciplinary committee and corrective action will be taken. In extreme cases parents will be called in to discuss the child’s behaviour and may lead to suspension or expulsion from the school.</li>
            <li>It is compulsory to bring the school issued ID card to school every day. Not bringing the ID card could result in the child not being allowed into the school premises.</li>
            <li>For safety and security, parents should refrain from sending money with their child without specific written notice from the school.</li>
            <li>For safety and security, parents should refrain from sending valuables (like expensive jewellery, electronic items, etc.) to school.</li>
            <li>Expensive gifts, sweets, cakes or any other gifts to staff and students are not allowed for birthday celebrations. If interested, parents may contribute books to the school library.</li>
            <li>Parent can meet teachers only during parent teacher meetings or on Saturdays. Meeting teachers during school hours is strictly prohibited.</li>
            <li>Use of cell phones in the school is prohibited. If anyone is found using the cell phone, it will be confiscated and a fine of Rs 1000 shall be imposed along with a written assurance from both the student and the parent.</li>
            <li>PM Shri Govt. High School strongly objects and prohibits the presence of gangs and gang-related activity on school premises. If a student is in a fight or encourages others to fight, he/she will receive disciplinary consequences regardless of who started it. The concerned class teacher shall immediately intimate the parents about it and then if necessary, counselling to the students shall be done as it is of paramount importance. Replication of mistakes shall lead to the imposition of fine of Rs 1000 along with a written assurance from both the parents and the student.</li>
            <li>We place a strong emphasis on punctuality to the school. Students who arrive late to the school will be warned for the first time and if repeated he/she will be send back home and the parent shall be informed accordingly.</li>
            <li>A student who damages/vandalizes/defaces school property will be held responsible for their actions. The student may be subject to disciplinary consequences including possibility of suspension, expulsion, or exclusion from school activities. Therefore, everyone is requested to take good care of school properties.</li>
            <li>Chewing tobacco, cool lip and smoking are strictly prohibited and if caught, the concerned class teacher shall inform the parents and do necessary counselling. If the student is caught again, a fine of Rs 1000 and a written assurance letter will be taken from the concerned student and the parent.</li>
            <li>All the students must wear the prescribed school uniform without fail. The concerned class teacher will warn the student if the student come to school with incomplete uniform. The class teacher will take strict action against the student if caught for the second time and the parents will be intimated accordingly.</li>
            <li>Students are not allowed to ride/drive their own conveyance to the school. If the students are caught with the same, a warning will be issued first and if repeated, they will be handover to the police.</li>
            <li>A student shall be suspended/expelled immediately if he/she gets into fight with any teacher or staff members.</li>
          </ul>
        </section>

        {/* Dress Code */}
        <section className="bg-white rounded-3xl shadow-lg p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold text-rose-700 border-b-4 border-rose-300 pb-3 mb-6">
            Dress Code
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Neat and perfect uniform is compulsory on all working days.</li>
            <li>Proper uniform is to be worn as per the day order.</li>
            <li>Shoes should be maintained neat and tidy with the laces properly tied. Socks should be washed & changed regularly.</li>
            <li>Avoid fancy, costly items or any attractive accessories (long ear rings, bangles, watches, etc.). The school shall not be responsible for loss of any such items.</li>
            <li>Gold & Silver ornaments are strictly prohibited, for the safety of your child.</li>
            <li>Boys should trim their hair periodically and girls should tie their hair neatly with black band.</li>
            <li>Nails should be periodically cleaned and trimmed.</li>
          </ul>
        </section>

        {/* Food Habits */}
        <section className="bg-white rounded-3xl shadow-lg p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold text-rose-700 border-b border-rose-300 pb-3 mb-6">
            Food Habits
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Noodles, junk foods, bottle juices, bakery products and oily items are strictly prohibited.</li>
            <li>Lunch should be accompanied with vegetables / greens especially in summer.</li>
            <li>Do label your child’s name in all his/her belongings.</li>
            <li>Do not use poly bags for lunch packing, polythene is banned in PM Shri Govt. High School Chuchot Yokma.</li>
          </ul>
        </section>

        {/* Attendance & Regularity */}
        <section className="bg-white rounded-3xl shadow-lg p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold text-rose-700 border-b border-rose-300 pb-3 mb-6">
            Attendance & Regularity
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>The students should attend their classes punctually with the lessons well prepared.</li>
            <li>The students should be inside the School campus at least 15 minutes before the School Assembly, which starts at 10:00 AM. If the school timings is not followed continuously, strict actions will be taken.</li>
            <li>Frequent or long absenteeism will be severely dealt with, unless there is a genuine reason for the same.</li>
            <li>No leaves are allowed during the examinations and important events,. Request for re-test for examinations will not be encouraged without genuine reason.</li>
            <li>Do ensure that your child completes his/her home task regularly, by acknowledging your signature in the diary every day.</li>
            <li>One month written notice to the School Management is compulsory, whenever the withdrawal of your child from the school is necessary.</li>
          </ul>
        </section>

        {/* Health Care */}
        <section className="bg-white rounded-3xl shadow-lg p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold text-rose-700 border-b border-rose-300 pb-3 mb-6">
            Health Care
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>If your child has any specific allergy or physical illness, kindly do inform the class teacher and the School Authorities regarding the matter as soon as possible.</li>
            <li>Kindly note that in case of any sickness, immediate First Aid will be provided by the School Authorities. In case of any emergency, your child will be hospitalized locally and intimation will be sent to the parent / guardian by the quickest possible means.</li>
          </ul>
        </section>

        {/* Matters Strictly Dealt With */}
        <section className="bg-white rounded-3xl shadow-lg p-8 space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold text-rose-700 border-b border-rose-300 pb-3 mb-6">
            Matters which will be strictly dealt with
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Possession in school premises of weapons, explosives, and other objectionable material.</li>
          </ul>
        </section>

        {/* School Counselling Note */}
        <div className="text-center text-gray-600 italic mt-12">
          School Counselling and Guidance Committee Members
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
