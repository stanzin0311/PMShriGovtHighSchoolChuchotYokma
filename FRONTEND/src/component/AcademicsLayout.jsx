import { NavLink, Outlet } from "react-router-dom";

const academicLinks = [
  { name: "Kindergarten", path: "/academics/kindergarten" },
  { name: "Lower School", path: "/academics/lower-school" },
  { name: "Middle & High School", path: "/academics/middle-high-school" },
  { name: "Academic Facilities", path: "/academics/academic-facilities" },
  { name: "School Opening Time", path: "/academics/school-opening-time" },
  { name: "Technology", path: "/academics/technology" },
];

const AcademicsLayout = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full bg-white border border-gray-200 rounded-2xl shadow-sm self-start">
        <ul className="flex md:flex-col flex-wrap md:flex-nowrap">
          {academicLinks.map((link) => (
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

      {/* Main content area */}
      <main className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <Outlet />
      </main>
    </section>
  );
};

export default AcademicsLayout;
