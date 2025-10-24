import Slider from "react-slick";
import { motion } from "framer-motion";


const Hero = () => {
    const images = [
        "/hero1.jpg",
        "/hero2.jpg",
        "/hero3.jpg",
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnHover: true,
    }

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
    return (
        <div className="max-w-full mx-auto relative">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx}>
                        <img
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-[800px] object-cover rounded-xl shadow-lg"
                        />
                    </div>
                ))}
            </Slider>

            {/* Absolute overlay: subtitle, title, and Read more button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto pointer-events-auto">
                    <motion.p variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.2} className="text-sm tracking-widest uppercase text-white/90 mb-2 underline">Tiệc cưới</motion.p>
                    <motion.h2 variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.5} className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg text-center">Thoả Sức Biến Tấu Tiệc Cưới Trong Mơ</motion.h2>
                    <motion.div variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.8} className="mt-6 flex justify-center">
                        <button className="inline-block px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white/10 transition">
                            Read more
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero