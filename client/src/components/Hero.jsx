import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IMAGES } from "../constants/image";

const Hero = () => {
    const images = [
        IMAGES.hero1,
        IMAGES.hero2,
        IMAGES.hero3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay,
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    const slideVariants = {
        enter: {
            opacity: 0,
            scale: 1.1,
        },
        center: {
            opacity: 1,
            scale: 1,
        },
        exit: {
            opacity: 0,
            scale: 0.95,
        },
    };

    return (
        <div className="max-w-full mx-auto relative h-[800px] overflow-hidden rounded-xl shadow-lg">
            {/* Image Slider */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-[800px] object-cover absolute inset-0"
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-white w-8" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto pointer-events-auto">
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                        className="text-sm tracking-widest uppercase text-white/90 mb-2 underline"
                    >
                        Tiệc cưới
                    </motion.p>
                    <motion.h2
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.5}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-center"
                    >
                        Thoả Sức Biến Tấu Tiệc Cưới Trong Mơ
                    </motion.h2>
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.8}
                        className="mt-6 flex justify-center"
                    >
                        <button className="inline-block px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white/10 transition">
                            Read more
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero