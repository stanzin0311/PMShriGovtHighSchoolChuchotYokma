import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Settings,
    Users,
    HandHeart,
    Building2,
    Dumbbell,
    BookOpen,
    Globe2,
    Heart,
    Sparkles,
    Flower2,
    CheckCircle,
} from "lucide-react";

const SchoolAbout = () => {
    const [animateNumbers, setAnimateNumbers] = useState(false);

    const sectionRef = useRef(null);
    const statsRef = useRef(null);

    const isSectionInView = useInView(sectionRef, { once: false, amount: 0.2 });
    const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

    // Target values for animation (PM Shri Chuchot Yokma Data)
    const TARGET_YEARS = 69; // 2025 - 1956 + 1
    const TARGET_STUDENTS = 90; 
    const TARGET_AID = 100; 
    const TARGET_HOSTEL = 50; 
    const TARGET_PE = 100; 
    
    const [years, setYears] = useState(0);
    const [students, setStudents] = useState(0);
    const [aid, setAid] = useState(0);
    const [hostel, setHostel] = useState(0);
    const [pe, setPe] = useState(0);


    // Smooth number animation
    useEffect(() => {
        if (isStatsInView && !animateNumbers) {
            setAnimateNumbers(true);
            const duration = 2000;
            const frameRate = 60;
            const totalFrames = (duration / 1000) * frameRate;
            let frame = 0;
            const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

            const animate = () => {
                frame++;
                const progress = easeOutQuart(frame / totalFrames);
                
                // Set states based on progress towards target values
                setYears(Math.floor(TARGET_YEARS * progress));
                setStudents(Math.floor(TARGET_STUDENTS * progress));
                setAid(Math.floor(TARGET_AID * progress));
                setHostel(Math.floor(TARGET_HOSTEL * progress));
                setPe(Math.floor(TARGET_PE * progress));

                if (frame < totalFrames) {
                    requestAnimationFrame(animate);
                } else {
                    // Ensure final values are exactly the target values
                    setYears(TARGET_YEARS);
                    setStudents(TARGET_STUDENTS);
                    setAid(TARGET_AID);
                    setHostel(TARGET_HOSTEL);
                    setPe(TARGET_PE);
                }
            };
            requestAnimationFrame(animate);
        }

        if (!isStatsInView && animateNumbers) {
             // Reset state when component scrolls out of view
             setAnimateNumbers(false);
             setYears(0);
             setStudents(0);
             setAid(0);
             setHostel(0);
             setPe(0);
        }
    }, [isStatsInView, animateNumbers, TARGET_YEARS, TARGET_STUDENTS, TARGET_AID, TARGET_HOSTEL, TARGET_PE]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    
    const featureData = [
        {
            icon: <BookOpen className="w-8 h-8 text-blue-600 mb-3" />,
            title: "NEP 2020 Aligned Education",
            text: "Focusing on competency-based learning, digital fluency, and a holistic report card to prepare students for the future.",
        },
        {
            icon: <Flower2 className="w-8 h-8 text-green-600 mb-3" />,
            title: "Cultural & Bhoti Language Focus",
            text: "Integrating local Ladakhi culture and actively promoting the Bhoti language to foster identity and linguistic skills.",
        },
        {
            icon: <Heart className="w-8 h-8 text-pink-600 mb-3" />,
            title: "Inclusive & Nurturing Environment",
            text: "Providing first-level counseling and a supportive community where every child, regardless of background, can thrive.",
        },
        {
            icon: <Globe2 className="w-8 h-8 text-indigo-600 mb-3" />,
            title: "Modern Digital Infrastructure",
            text: "Fully equipped ICT Lab, smart classrooms, and devices to support modern learning and digital literacy skills.",
        },
        {
            icon: <Sparkles className="w-8 h-8 text-yellow-600 mb-3" />,
            title: "Safety First Commitment",
            text: "Robust School Disaster Management Plan (SDMP), CCTV, regular safety audits, and self-defense training for girls.",
        },
        {
            icon: <HandHeart className="w-8 h-8 text-red-600 mb-3" />,
            title: "Health & Eco Consciousness",
            text: "Certified Fit India School status and an active Eco Club to promote physical health, well-being, and environmental responsibility.",
        },
    ];

    return (
        <section ref={sectionRef} className="bg-gray-50 text-gray-800">
            
            {/* WHY CHOOSE PM SHRI CHUCHOT YOKMA */}
            <motion.div
                initial="hidden"
                animate={isSectionInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-6xl mx-auto px-6 py-16"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
                >
                    OUR KEY <span className="text-rose-600">OFFERINGS</span>
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 max-w-3xl mx-auto mb-12 text-center"
                >
                    As a PM SHRI school, we are transforming education to ensure high-quality, holistic development for every child, guided by the vision of the NEP 2020.
                </motion.p>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
                >
                    {featureData.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-left border border-gray-100 flex items-start space-x-4"
                        >
                            <div className="flex-shrink-0 pt-1">
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-1 text-gray-900">{feature.title}</h4>
                                <p className="text-gray-600 text-sm">{feature.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* OUR JOURNEY IN NUMBERS */}
            <div
                ref={statsRef}
                className="bg-linear-to-b from-gray-50 via-gray-100 to-gray-200 py-16"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            isStatsInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl font-bold text-center mb-12 text-gray-800"
                    >
                        OUR JOURNEY IN NUMBERS
                    </motion.h3>

                    <motion.div
                        initial="hidden"
                        animate={isStatsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center"
                    >
                        {[
                            {
                                icon: <Settings className="text-rose-600 w-8 h-8" />,
                                value: years,
                                suffix: "+",
                                label: "YEARS OF LEGACY (EST. 1956)",
                            },
                            {
                                icon: <Users className="text-blue-600 w-8 h-8" />,
                                value: students,
                                suffix: "+",
                                label: "STUDENT ENROLLMENT",
                            },
                            {
                                icon: <HandHeart className="text-green-600 w-8 h-8" />,
                                value: aid,
                                suffix: "%",
                                label: "RECEIVING FREE EDUCATION",
                            },
                            {
                                icon: <Building2 className="text-yellow-600 w-8 h-8" />,
                                value: hostel,
                                suffix: "+",
                                label: "HOSTEL CAPACITY (BOYS & GIRLS)",
                            },
                            {
                                icon: <Dumbbell className="text-purple-600 w-8 h-8" />,
                                value: pe,
                                suffix: "%",
                                label: "ACTIVE PHYSICAL EDUCATION",
                            },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex flex-col items-center bg-gray-50 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                            >
                                {stat.icon}
                                <h4 className="font-bold text-3xl text-gray-800 mb-1">
                                    {stat.value}
                                    {stat.suffix}
                                </h4>
                                <p className="text-gray-600 text-xs font-medium uppercase">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SchoolAbout;