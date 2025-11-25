// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import { PlayCircle, Download, HeartHandshake } from "lucide-react";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import PageTitle from "./component/PageTitle";

// Home
import Home from "./pages/Home";

// About Pages
import Welcome from "./pages/About/Welcome";
import AtAGlance from "./pages/About/AtAGlance";
import GuidingStatement from "./pages/About/GuidingStatement";
import History from "./pages/About/History";
import SchoolLeadership from "./pages/About/SchoolLeadership";
import Campus from "./pages/About/Campus";

// Admission Pages
import WhyPMShriGovtHighSchool from "./pages/Admission/WhyPMShriGovtHighSchool";
import HowToApply from "./pages/Admission/HowToApply";
import AdmissionCurriculum from "./pages/Admission/AdmissionCurriculum";
import FinancialAid from "./pages/Admission/FinancialAid";
import ContactAdmission from "./pages/Admission/ContactAdmission";

// Academics Pages
import Kindergarten from "./pages/Academics/Kindergarten";
import LowerSchool from "./pages/Academics/LowerSchool";
import MiddleHighSchool from "./pages/Academics/MiddleHighSchool";
import AcademicFacilities from "./pages/Academics/AcademicFacilities";
import SchoolOpeningTime from "./pages/Academics/SchoolOpeningTime";
import Technology from "./pages/Academics/Technology";

// Student Life Pages
import StudentLeaders from "./pages/StudentLife/StudentLeaders";
import CodeOfConduct from "./pages/StudentLife/CodeOfConduct";
import SportsActivities from "./pages/StudentLife/SportsActivities";
import Boarding from "./pages/StudentLife/Boarding";
import ChildProtection from "./pages/StudentLife/ChildProtection";

// Community Pages
import CommunityOutreach from "./pages/Community/CommunityOutreach";
import Parents from "./pages/Community/Parents";
import Teachers from "./pages/Community/Teachers";
import Vacancies from "./pages/Community/Vacancies";
import ContactUs from "./pages/Community/ContactUs";

// News Page
import News from "./pages/News";

// Support & Volunteer
import Support from "./pages/Support";
import FloatingButtons from "./component/FloatingButtons";
import Downloads from "./pages/Downloads";
import AboutLayout from "./component/AboutLayout";
import AdmissionLayout from "./component/AdmissionLayout";
import AcademicsLayout from "./component/AcademicsLayout";
import CommunityLayout from "./component/CommunityLayout";
import StudentLifeLayout from "./component/StudentLifeLayout";
import ScrollToTop from "./component/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
     <ScrollToTop />
      <main className="flex-1 pt-20">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <PageTitle title="Home">
                <Home />
              </PageTitle>
            }
          />

          {/* About Layout Wrapper */}
          <Route path="/about" element={<AboutLayout />}>
            <Route path="welcome" element={<PageTitle title="Welcome to PM Shri School"><Welcome /></PageTitle>} />
            <Route path="glance" element={<PageTitle title="At a Glance"><AtAGlance /></PageTitle>} />
            <Route path="guiding-statement" element={<PageTitle title="Guiding Statement"><GuidingStatement /></PageTitle>} />
            <Route path="history" element={<PageTitle title="Our History"><History /></PageTitle>} />
            <Route path="leadership" element={<PageTitle title="School Leadership"><SchoolLeadership /></PageTitle>} />
            <Route path="campus" element={<PageTitle title="Campus"><Campus /></PageTitle>} />
          </Route>

          {/* Admission Routes */}
        <Route path="/admission" element={<AdmissionLayout />}>
          <Route path="why-pm-shri-govt-high-school"element={<PageTitle title="Why PM Shri Govt. High School"><WhyPMShriGovtHighSchool /></PageTitle>}/>
          <Route path="apply" element={<PageTitle title="How to Apply"><HowToApply /></PageTitle>} />
          <Route path="curriculum" element={<PageTitle title="Curriculum"><AdmissionCurriculum /></PageTitle>} />
          <Route path="financial-aid" element={<PageTitle title="Financial Aid"><FinancialAid /></PageTitle>} />
          <Route path="contact" element={<PageTitle title="Contact Admission"><ContactAdmission /></PageTitle>} />
        </Route>


          {/* Academics Routes */}
          <Route path="/academics" element={<AcademicsLayout />}>
            <Route path="kindergarten" element={<Kindergarten />} />
            <Route path="lower-school" element={<LowerSchool />} />
            <Route path="middle-high-school" element={<MiddleHighSchool />} />
            <Route path="academic-facilities" element={<AcademicFacilities />} />
            <Route path="school-opening-time" element={<SchoolOpeningTime />} />
            <Route path="technology" element={<Technology />} />
          </Route>

          {/* Student Life Routes */}
          <Route path="/student-life" element={<StudentLifeLayout />}>
            <Route path="student-leaders" element={<StudentLeaders />} />
            <Route path="code-of-conduct" element={<CodeOfConduct />} />
            <Route path="sports-activities" element={<SportsActivities />} />
            <Route path="boarding" element={<Boarding />} />
            <Route path="child-protection" element={<ChildProtection />} />
          </Route>

          {/* Community Routes */}
          <Route path="/community" element={<CommunityLayout />}>
            <Route path="community-outreach" element={<CommunityOutreach />} />
            <Route path="parents" element={<Parents />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="vacancies" element={<Vacancies />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>


          {/* News & Support */}
          <Route path="/news" element={<PageTitle title="News"><News /></PageTitle>} />
          <Route path="/support" element={<PageTitle title="Support Lamdon"><Support /></PageTitle>} />

          {/* Privacy & Terms */}
          <Route
            path="/privacy"
            element={
              <PageTitle title="Privacy Policy">
                <div className="container mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold">Privacy Policy</h1>
                </div>
              </PageTitle>
            }
          />
          <Route
            path="/terms"
            element={
              <PageTitle title="Terms & Conditions">
                <div className="container mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold">Terms & Conditions</h1>
                </div>
              </PageTitle>
            }
          />
          <Route
            path="/downloads"
            element={
              <PageTitle title="downlaod">
                <Downloads />
              </PageTitle>
            }
          />
          <Route
            path="/sitemap"
            element={
              <PageTitle title="Sitemap">
                <div className="container mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold">Sitemap</h1>
                </div>
              </PageTitle>
            }
          />
        </Routes>
      </main>


      <FloatingButtons />


      <Footer />
    </div>
  );
};

export default App;
