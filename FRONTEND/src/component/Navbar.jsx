import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const navLinks = [
    { name: "HOME", path: "/", hash: "home" },
    {
      name: "ABOUT",
      path: "/about/welcome",
      dropdown: [
        { name: "Welcome", path: "/about/welcome" },
        { name: "At a Glance", path: "/about/glance" },
        { name: "Guiding Statement", path: "/about/guiding-statement" },
        { name: "History", path: "/about/history" },
        { name: "School Leadership", path: "/about/leadership" },
        { name: "Campus", path: "/about/campus" },
      ]
    },
    {
      name: "ADMISSION",
      path: "/admission/apply",
      dropdown: [
        // 🔥 FIXED HERE — matches the Route in App.jsx
        { name: "Why PM Shri Govt. High School", path: "/admission/why-pm-shri-govt-high-school" },
        { name: "How to Apply", path: "/admission/apply" },
        { name: "Curriculum", path: "/admission/curriculum" },
        { name: "Financial Aid", path: "/admission/financial-aid" },
        { name: "Contact Admission Office", path: "/admission/contact" }
      ]
    },
    {
      name: "ACADEMICS",
      path: "/academics/kindergarten",
      dropdown: [
        { name: "Kindergarten", path: "/academics/kindergarten" },
        { name: "Lower School", path: "/academics/lower-school" },
        { name: "Middle and High School", path: "/academics/middle-high-school" },
        { name: "Academic Facilities", path: "/academics/academic-facilities" },
        { name: "School Opening Time", path: "/academics/school-opening-time" },
        { name: "Technology", path: "/academics/technology" }
      ]
    },
    {
      name: "STUDENT LIFE",
      path: "/student-life/student-leaders",
      dropdown: [
        { name: "Student Leaders", path: "/student-life/student-leaders" },
        { name: "School Code of Conduct", path: "/student-life/code-of-conduct" },
        { name: "Sports Activities", path: "/student-life/sports-activities" },
        { name: "Boarding", path: "/student-life/boarding" },
        { name: "Child Protection Policy", path: "/student-life/child-protection" }
      ]
    },
    {
      name: "COMMUNITY",
      path: "/community/health-wellness",
      dropdown: [
        { name: "Health and Wellness", path: "/community/health-wellness" },
        { name: "Community Outreach", path: "/community/community-outreach" },
        { name: "Parents", path: "/community/parents" },
        { name: "Teachers", path: "/community/teachers" },
        { name: "Vacancies", path: "/community/vacancies" },
        { name: "Contact Us", path: "/community/contact-us" }
      ]
    },
    { name: "NEWS", path: "/news" }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMenuOpen) toggleMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActiveLink = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#FFF4DB] via-[#FFD8A8] to-[#FEB3C8] border-b-4 border-rose-700 text-gray-900 shadow-sm z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavigation("/")}>
          <img src={assets.logo} alt="School Logo" className="h-14 w-auto object-contain" />
          <div className="hidden lg:block">
            <div className="text-sm font-bold text-gray-900">
              PM SHRI GOVT. HIGH SCHOOL CHUCHOT YOKMA,
               <span className="block">LEH LADAKH</span>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavigation(link.path)}
                  className={`px-3 py-2 text-sm font-semibold tracking-wide flex items-center gap-1
                    ${isActiveLink(link.path)
                      ? "bg-rose-100 text-rose-700 shadow-inner"
                      : "text-gray-800 hover:bg-rose-50 hover:text-rose-700"}`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </button>

                {/* Desktop Dropdown */}
                {link.dropdown && openDropdown === link.name && (
                  <div className="absolute left-0 top-full w-64 bg-white shadow-xl border rounded-b-md">
                    <ul className="py-2">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => handleNavigation(item.path)}
                            className={`block w-full text-left px-4 py-2.5 text-sm
                              ${location.pathname === item.path
                                ? "bg-rose-100 text-rose-700 font-medium"
                                : "text-gray-700 hover:bg-rose-50 hover:text-rose-700"}`}
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 text-gray-800 hover:text-rose-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <ul className="py-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => (link.dropdown ? toggleDropdown(link.name) : handleNavigation(link.path))}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className={`${openDropdown === link.name ? "rotate-180" : ""} transition`}/>}
                </button>

                {link.dropdown && openDropdown === link.name && (
                  <ul className="bg-rose-50 border-l-2 border-rose-700">
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className="block w-full text-left px-8 py-2.5 text-sm hover:text-rose-700"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
