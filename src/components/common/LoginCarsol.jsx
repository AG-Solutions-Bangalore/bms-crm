import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
// import rawmaterial from "@/assets/img/raw-material.jpg";
// import fabric from "@/assets/img/fabric.jpg";
// import yarn from "@/assets/img/yarn.jpg";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1300&q=80",
    text: "Comfortable and affordable rooms for your stay",
  },
  {
    src: "https://img.freepik.com/free-photo/young-friends-hostel_52683-121730.jpg?ga=GA1.1.70886028.1749460191&semt=ais_hybrid&w=740&q=80",
    text: "Safe and homely environment with modern amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1300&q=80",
    text: "Your perfect PG experience, just like home",
  },
];

export default function LoginCarousel() {
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setShowText(true);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:flex md:w-1/2 bg-gradient-to-tr from-blue-100 to-blue-50 items-center justify-center relative overflow-hidden p-4">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-[100px] top-8 left-12"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute w-52 h-52 bg-blue-300 rounded-full opacity-25 blur-[90px] bottom-16 right-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
        <motion.div
          className="absolute w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-[70px] bottom-6 left-28"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={images[index].src}
              alt={`carousel-${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-md"
      >
        <h1 className="text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] ">
          BMS{" "}
        </h1>

        {showText && (
          <p className="text-base lg:text-xl text-gray-700 mt-4 min-h-[2.5rem]">
            <Typewriter
              words={[images[index].text]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={4000}
            />
          </p>
        )}
      </motion.div>
    </div>
  );
}
