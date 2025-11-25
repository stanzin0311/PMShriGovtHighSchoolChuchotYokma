import { useEffect, useState } from "react";
import { TvMinimalPlay, Download, HeartHandshake, X } from "lucide-react";

const FloatingButtons = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true); // show after 5 seconds
        }, 3000);

        return () => clearTimeout(timer); // cleanup on unmount
    }, []);


    if (!visible) return null;

    return (
        <div className="fixed bottom-5 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 flex items-center gap-2 sm:gap-3 z-50 bg-white shadow-xl rounded-full px-3 sm:px-4 py-2 border border-gray-200">
            {/* PM Shri Govt. School Chuchot Yokma TV Button */}
            <a
                href="https://www.youtube.com/@Govt.HighschoolchuchotYokma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-3 sm:px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
                title="Lamdon TV"
            >
                <TvMinimalPlay className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline whitespace-nowrap">School TV</span>
            </a>


            {/* Download Section Button */}
            <a
                href="/downloads"
                className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 sm:px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
                title="Download"
            >
                <Download className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">Download</span>
            </a>

            {/* Support Lamdon Button */}
            <a
                href="/support"
                className="flex items-center gap-1.5 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-3 sm:px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
                title="Support"
            >
                <HeartHandshake className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">Support</span>
            </a>

            {/* Close Button */}
            <button
                onClick={() => setVisible(false)}
                className="ml-1 sm:ml-2 bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 transition-all duration-300 p-1.5 rounded-full"
                aria-label="Close"
                title="Close"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default FloatingButtons;