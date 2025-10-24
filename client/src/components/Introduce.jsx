import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Introduce = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
    };

    return (
        <section className="relative bg-white overflow-hidden py-20" ref={ref}>
            <img
                src="/background.jpg"
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
                                HELLO, WE ARE ANT WEDDING
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 leading-tight mb-6">
                                <span className="block">Chúng Tôi Luôn</span>
                                <span className="block">Đổi Mới Sáng Tạo</span>
                                <span className="block">Uy Tín & Chất Lượng</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                Khởi đầu từ 2010 - trong giai đoạn dịch vụ cho ngày cưới còn rất
                                truyền thống và cơ bản. Bứt phá khỏi những quan niệm làm dịch vụ
                                lỗi thời, kết hợp với tư duy đổi mới dựa trên nền tảng được đào
                                tạo bài bản trong trường lớp mỹ thuật. Ant Wedding tự hào là
                                một trong những đơn vị tiên phong và có kinh nghiệm nhiều năm
                                trong việc tổ chức lễ cưới tại TPHCM. Ant Wedding cung cấp các
                                dịch vụ cho ngày cưới: Lập kế hoạch - Thiết kế - Trang trí. Từ
                                quá trình lên kế hoạch, làm ý tưởng & kiến tạo nên những trải
                                nghiệm cá nhân hoá, phản ánh đúng câu chuyện tình yêu của từng
                                cặp đôi.
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
                                {/* <img
                  src="intro1.jpg"
                  alt="intro 1"
                  className="w-full h-40 object-cover rounded-lg shadow-md mt-5"
                /> */}
                                <motion.img
                                    src="intro1.jpg"
                                    alt="intro 1"
                                    className="w-full h-40 object-cover rounded-lg shadow-md mt-5 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}

                                />
                                <motion.img
                                    src="intro2.jpg"
                                    alt="intro 2"
                                    className="w-full h-80 object-cover rounded-lg shadow-md mt-5 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </div>

                            {/* Right stack */}
                            <div className="space-y-6 self-start">
                                <div className="bg-[#68866c] text-white rounded-lg p-6 shadow-lg">
                                    <p className="mb-4 text-justify">
                                        Cho đến nay White Wedding vẫn luôn tự hào là đơn vị chuyên
                                        nghiệp và giàu kinh nghiệm hàng đầu trong lĩnh vực trang trí
                                        gia tiên tại TPHCM.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="/avatar.jpg"
                                            alt="Huyền Phạm"
                                            className="w-12 h-12 rounded-full object-cover border-2 border-white"
                                        />
                                        <div>
                                            <div className="font-semibold">Name</div>
                                            <div className="text-sm text-white/80 whitespace-nowrap">
                                                Founder Ant Wedding
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <motion.img
                                    src="intro3.jpg"
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
