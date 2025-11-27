import { useState } from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    X,
    Heart,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { assets } from "../assets/assets";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [subscribeStatus, setSubscribeStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const socialLinks = [
        { name: "Facebook", icon: <Facebook size={18} />, href: "https://www.facebook.com/govt.high.school.chuchot.yokma" },
        { name: "Instagram", icon: <Instagram size={18} />, href: "https://www.instagram.com/govt.high.school.chuchot.yokma/" },
        { name: "X", icon: <X size={18} />, href: "https://x.com/govt.high.school.chuchot.yokma" },
        { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/govt.high.school.chuchot.yokma" },
        { name: "You Tube", icon: <FaYoutube size={18} />, href: "https://www.youtube.com/@Govt.HighschoolchuchotYokma" },
    ];

    const quickLinks = {
        About: [
            { name: "Welcome", path: "/about/welcome" },
            { name: "History", path: "/about/history" },
            { name: "School Leadership", path: "/about/leadership" },
            { name: "Campus", path: "/about/campus" },
        ],
        Academics: [
            { name: "Kindergarten", path: "/academics/kindergarten" },
            { name: "Lower School", path: "/academics/lower-school" },
            { name: "Middle and High School", path: "/academics/middle-high" },
        ],
        Community: [
            { name: "Parents", path: "/community/parents" },
            { name: "Teachers", path: "/community/teachers" },
            { name: "Volunteer with Us", path: "/community/volunteer" },
            { name: "Contact Us", path: "/community/contact" },
        ],
    };

    const handleSubscribe = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubscribeStatus({
                type: "error",
                message: "Please enter a valid email address",
            });
            return;
        }

        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubscribeStatus({
                type: "success",
                message: "Thank you for subscribing to our newsletter!",
            });
            setEmail("");
        } catch {
            setSubscribeStatus({
                type: "error",
                message: "Failed to subscribe. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="bg-gradient-to-b from-[#FFF4DB] via-[#FFD8A8] to-[#FEB3C8] border-t border-gray-300 text-gray-800 px-1 md:px-10">
            <div className="container mx-auto px-4 py-12">
                
                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
                    
                    {/* School Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-5">
                            <img
                                src={assets.logo}
                                alt="PM Shri Govt High School Chuchot Yokma Logo"
                                className="h-16 w-auto object-contain mb-3"
                            />
                            <div>
                                <div className="text-sm font-bold leading-tight">
                                    PM Shri Govt High School Chuchot Yokma,
                                </div>
                                <div className="text-sm font-bold -mt-1">
                                    LEH LADAKH, INDIA
                                </div>
                            </div>
                        </div>

                        <p className="text-sm mb-5 leading-relaxed">
                            PM Shri Govt. High School Chuchot Yokma has been a cornerstone
                            of education in Ladakh since 1956 — growing from a small primary
                            school into a vibrant center of learning...
                        </p>

                        {/* Social Icons — RED */}
                        <div className="flex gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="w-9 h-9 rounded-full bg-rose-700 text-white flex items-center justify-center hover:bg-rose-800 transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {Object.entries(quickLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-base font-semibold mb-4 text-gray-900">
                                {title}
                            </h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.path}
                                            className="text-sm text-gray-700 hover:text-rose-700 transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Volunteer Section — RED */}
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 mb-10 border border-rose-300 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-rose-700 text-white flex items-center justify-center shadow-sm">
                            <Heart size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">
                                Volunteer for Us
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Stay updated with{" "}
                                <a href="/news" className="text-rose-700 font-medium hover:underline">
                                    latest news
                                </a>{" "}
                                or visit{" "}
                                <a href="/support" className="text-rose-700 font-medium hover:underline">
                                    Support PM Shri School
                                </a>{" "}
                                and{" "}
                                <a href="/volunteer" className="text-rose-700 font-medium hover:underline">
                                    Volunteering
                                </a>{" "}
                                pages.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border-t border-red-300 pt-8 pb-6">
                    <div className="max-w-xl mx-auto text-center">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">
                            Stay Connected
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Subscribe to receive updates about school events.
                        </p>

                        {/* Subscribe Button — RED */}
                        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-2.5 border border-red-400 rounded-lg focus:ring-2 focus:ring-rose-700 text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                onClick={handleSubscribe}
                                disabled={isSubmitting}
                                className={`px-6 py-2.5 bg-rose-700 text-white rounded-lg hover:bg-rose-800 focus:ring-2 focus:ring-rose-700 text-sm font-medium transition-colors duration-300 ${
                                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                }`}
                            >
                                {isSubmitting ? "Subscribing..." : "Subscribe"}
                            </button>
                        </div>

                        {subscribeStatus && (
                            <p
                                className={`text-sm mt-3 ${
                                    subscribeStatus.type === "success"
                                        ? "text-green-600"
                                        : "text-rose-700"
                                }`}
                            >
                                {subscribeStatus.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-red-300 pt-6 mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700">
                        <p> &copy; {currentYear} PM Shri School Govt High School Chuchot Yokma.
                        </p>
                        <p>All rights reserved. | Designed & Hosted by{" "}
                            <a href="https://onela.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Onela</a>
                        </p>

                        <div className="flex gap-6">
                            <a href="/privacy" className="hover:text-rose-700">Privacy Policy</a>
                            <a href="/terms" className="hover:text-rose-700">Terms & Conditions</a>
                            <a href="/sitemap" className="hover:text-rose-700">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
