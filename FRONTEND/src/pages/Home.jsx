import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";
import SchoolAbout from "../component/SchoolAbout";
import PrincipalMessage from "../component/PrincipalMessage";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: assets.home1, alt: "Students collaborating" },
        { image: assets.home2, alt: "School community" },
        { image: assets.home3, alt: "Learning environment" },
        { image: assets.home4, alt: "Students engaged" },
        { image: assets.home5, alt: "Campus life" },
        { image: assets.home6, alt: "School activities" },
    ];

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (i) => setCurrentSlide(i);

    return (
        <div>
            <div className="relative w-full h-[100vh] overflow-hidden bg-black">
                
                {/* IMAGES */}
                <div className="absolute inset-0 w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-black/60"></div>
                        </div>
                    ))}
                </div>

                {/* CONTENT OVERLAY */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">

                            {/* Since Badge */}
                            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-r-lg mb-6 font-semibold text-sm tracking-wide">
                                SINCE 1956
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                                At PM Shri Govt. High School Chuchot Yokma, students grow in a 
                                nurturing, supportive, and inspiring environment.
                            </h1>

                            {/* Short Description */}
                            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl drop-shadow-md">
                                Inclusive Learning. Empowered Futures.
                            </p>

                            {/* Button */}
                            <a
                                href="/about/guiding-statement"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base group"
                            >
                                OUR GUIDING STATEMENTS
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* DOTS */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                            }`}
                        ></button>
                    ))}
                </div>
            </div>

            <SchoolAbout />
            <PrincipalMessage />
        </div>
    );
};

export default HeroCarousel;
