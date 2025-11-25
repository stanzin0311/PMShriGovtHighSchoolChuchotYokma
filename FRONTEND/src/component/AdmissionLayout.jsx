// src/component/AdmissionLayout.jsx
import { NavLink, Outlet } from "react-router-dom";

const AdmissionLinks = [
  { name: "Why PM Shri Govt. High School", path: "/admission/WhyPMShriGovtHighSchool" },
  { name: "How to Apply", path: "/admission/apply" },
  { name: "Curriculum", path: "/admission/curriculum" },
  { name: "Financial Aid", path: "/admission/financial-aid" },
  { name: "Contact Admission Office", path: "/admission/contact" },
];

const AdmissionLayout = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 flex flex-col md:flex-row gap-6">
      <aside className="md:w-1/4 w-full bg-white border border-gray-200 rounded-2xl shadow-sm self-start">
        <ul className="flex md:flex-col flex-wrap md:flex-nowrap">
          {AdmissionLinks.map((link) => (
            <li key={link.path} className="w-full">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-lg md:rounded-none md:rounded-l-lg border-l-4 ${
                    isActive
                      ? "bg-rose-50 text-rose-700 border-rose-600"
                      : "text-gray-700 border-transparent hover:bg-gray-100 hover:text-rose-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <Outlet />
      </main>
    </section>
  );
};

export default AdmissionLayout;
