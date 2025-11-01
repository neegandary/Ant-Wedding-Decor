import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { IMAGES } from "../constants/image";
import { useTranslation } from 'react-i18next';

const Introduce = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
    };

    return (
        <section className="relative bg-white overflow-hidden py-20" ref={ref}>
            <img
                src={IMAGES.background}
                alt="decorative background"
                className="pointer-events-none absolute inset-0 w-full h-full object-contain opacity-30"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left column: heading + paragraph */}
                    <motion.div
                        className="lg:col-span-7"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                    >
                        <div className="pl-4 sm:pl-6 lg:pl-12 xl:pl-24 max-w-3xl">
                            <p className="text-lg text-red-500 font-semibold tracking-widest mb-4">
                                {t('helloWeAre')}
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 leading-tight mb-6 whitespace-pre-line">
                                <span className="block">{t('introTitle1')}</span>
                                <span className="block">{t('introTitle2')}</span>
                                <span className="block">{t('introTitle3')}</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify font-light whitespace-pre-line">
                                {t('introDesc')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right column: image grid */}
                    <motion.div
                        className="lg:col-span-5"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-0 items-start">
                            {/* Left stack */}
                            <div className="space-y-0">
                                <motion.img
                                    src={IMAGES.intro1}
                                    alt="intro 1"
                                    className="w-full h-40 object-cover rounded-lg shadow-md mt-5 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}

                                />
                                <motion.img
                                    src={IMAGES.intro2}
                                    alt="intro 2"
                                    className="w-full h-80 object-cover rounded-lg shadow-md mt-5 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </div>

                            {/* Right stack */}
                            <div className="space-y-6 self-start">
                                <div className="bg-[#68866c] text-white rounded-lg p-6 shadow-lg min-h-[200px] flex flex-col justify-between">
                                    <p className="mb-4 text-justify font-light text-sm leading-relaxed">
                                        {t('introQuote')}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold text-sm">{t('founders')}</div>
                                            <div className="text-xs text-white/80">
                                                {t('founderTitle')}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <motion.img
                                    src={IMAGES.intro3}
                                    alt="intro 3"
                                    className="w-full h-36 object-cover rounded-lg shadow-md cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Introduce;
