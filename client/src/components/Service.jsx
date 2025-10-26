// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { CountUpNumber } from "./CountUpNumber";
import { IMAGES } from "../constants/image";
const Service = () => {
    const [visibleImages, setVisibleImages] = useState([]);

    // Load ảnh tuần tự, mỗi ảnh cách nhau 150ms
    useEffect(() => {
        const timers = [0, 1, 2, 3].map((index) =>
            setTimeout(() => {
                setVisibleImages(prev => [...prev, index]);
            }, index * 150)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

    const cards = useMemo(() => [
        {
            title: 'TRANG TRÍ LỄ GIA TIÊN',
            img: `${IMAGES.vietxquynh}`,
            desc: 'Thiết kế không gian lễ gia tiên trang trọng, ấm cúng với đầy đủ các vật phẩm truyền thống. Chúng tôi tư vấn và bố trí theo phong tục từng vùng miền, đảm bảo sự trang nghiêm và ý nghĩa cho nghi lễ quan trọng này.'
        },
        {
            title: 'TRANG TRÍ NGOÀI TRỜI',
            img: `${IMAGES.nganxnhat}`,
            desc: 'Tạo nên không gian tiệc cưới ngoài trời lãng mạn, sang trọng với hệ thống backdrop, cổng hoa, lối đi và khu vực đón khách ấn tượng. Phù hợp với sân vườn, bãi biển hay không gian mở.'
        },
        {
            title: 'TRANG TRÍ NHÀ HÀNG',
            img: `${IMAGES.duyxmy}`,
            desc: 'Biến hóa sảnh tiệc nhà hàng thành không gian cưới lung linh với backdrop sân khấu, bàn tiệc, lối đi và hệ thống ánh sáng chuyên nghiệp. Đa dạng phong cách từ cổ điển đến hiện đại.'
        },
        {
            title: 'TRANG TRÍ SỰ KIỆN',
            img: `${IMAGES.eventxbenang}`,
            desc: 'Cung cấp giải pháp trang trí toàn diện cho các sự kiện đặc biệt như lễ đính hôn, tiệc thôi nôi, sinh nhật. Thiết kế theo chủ đề riêng với đội ngũ thi công chuyên nghiệp, đúng tiến độ.'
        },
    ], []);

    return (
        <>
            <section className="bg-[#f8f6ec] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        {cards.slice(0, 4).map((c, i) => (
                            <motion.article
                                key={i}
                                className="relative flex flex-col"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.15,
                                    ease: "easeOut"
                                }}
                            >
                                <div className="relative w-full h-56 bg-gray-200 rounded-lg overflow-hidden z-0">
                                    {visibleImages.includes(i) ? (
                                        <motion.img
                                            src={c.img}
                                            alt={c.title}
                                            loading="eager"
                                            decoding="async"
                                            className="w-full h-56 object-cover rounded-lg shadow-md"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            whileHover={{ scale: 1.05 }}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-8 h-8 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                </div>
                                <div className="relative bg-white rounded-md shadow-lg p-6 -mt-12 mx-4 flex-1 flex flex-col min-h-[280px] z-10">
                                    <h3 className="text-center text-base font-bold text-emerald-700 mb-3 min-h-[48px] flex items-center justify-center">
                                        {c.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 text-center mb-4 flex-1 leading-relaxed">
                                        {c.desc}
                                    </p>
                                    <div className="text-center mt-auto">
                                        <a
                                            className="inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800 underline transition-colors"
                                            href="#"
                                        >
                                            XEM CHI TIẾT
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero Banner Section - Full Width */}
            <section className="relative w-full overflow-hidden shadow-xl">
                <div className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.service})` }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative h-full flex items-center text-white min-h-[500px] md:min-h-[600px]">
                        {/* Left Side - Stats */}
                        <div className="w-1/2 flex flex-row items-center justify-center px-8">
                            <div className="text-center flex-1">
                                <div className="text-7xl font-bold mb-2"><CountUpNumber target={15} /></div>
                                <div className="text-sm uppercase tracking-wide">NĂM KINH NGHIỆM</div>
                            </div>
                            <div className="h-32 w-px bg-white/50 mx-8"></div>
                            <div className="text-center flex-1">
                                <div className="text-7xl font-bold mb-2"><CountUpNumber target={8000} /></div>
                                <div className="text-sm uppercase tracking-wide">CẶP ĐÔI TIN TƯỞNG</div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <motion.div
                            className="w-1/2 px-12 py-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl font-bold mb-2">We'll create wedding</h2>
                            <h3 className="text-3xl mb-4">décor to suit your Inspiration</h3>
                            <p className="text-sm leading-relaxed mb-6 text-justify">
                                Với hơn 15 năm kinh nghiệm tổ chức các sự kiện và những phương án cưới nhỏ lẻ khác nhau, Ant Wedding sẽ mang lại cho bạn những ý tưởng tuyệt vời và bản tính nhất về sự lựa chọn ANT
                                WEDDING để đảm bảo sự yên tâm trong quá trình thực hiện cũng như thành thải hoàn toàn đã đạt được trong sự hài lòng về ngày vui của mình.
                            </p>
                            <button className="bg-white text-gray-800 px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition">
                                CÁC GÓI ĐÃ CÓ THIẾT KẾ
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f6ec] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-4xl font-bold text-center text-gray-800 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        LÝ DO CHỌN ANT WEDDING
                    </motion.h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#cbb9a4] to-transparent w-76"></div>
                    </div>
                    <motion.p
                        className="text-center text-gray-600 max-w-3xl mx-auto mb-12 whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        Ant Town luôn cân nhắc "đầu vào" về độ tỉ mỉ, sự tinh tâm có khách hàng hoàn toàn yên tâm về "đầu ra" của mình
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Card 01 - Fade từ trái */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="text-6xl font-bold text-emerald-700/20 mb-2">01.</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">THƯƠNG HIỆU UY TÍN</h3>
                            <p className="text-sm font-semibold text-gray-700 mb-3">~ ĐÀN ĐẦY KINH NGHIỆM</p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Với hơn 15 năm kinh nghiệm và phục trách các dịch vụ về tổ chức đám cưới, Ant Wedding đã trở thành một trong những thương hiệu uy tín hàng đầu tại TP. HCM. Đội ngũ tư vấn chuyên nghiệp, tận tâm, luôn sẵn sàng lắng nghe và đưa ra giải pháp tối ưu nhất cho mỗi đám cưới.
                            </p>
                        </motion.div>

                        {/* Card 02 - Fade từ dưới lên */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="text-6xl font-bold text-emerald-700/20 mb-2">02.</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">QUY TRÌNH & ĐỘI NGŨ CHUYÊN NGHIỆP</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Với quy trình làm việc rõ ràng, chặt chẽ và đội ngũ nhân viên chuyên nghiệp, Ant Wedding đảm bảo mọi khâu trong tổ chức đám cưới đều được thực hiện một cách hoàn hảo. Từ khâu tư vấn, thiết kế, thi công đến khâu hoàn thiện, mọi chi tiết đều được chăm chút tỉ mỉ.
                            </p>
                        </motion.div>

                        {/* Card 03 - Fade từ phải */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="text-6xl font-bold text-emerald-700/20 mb-2">03.</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">NHẬN SỰ CHUYÊN MÔN CAO</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Được xây dựng và đào tạo bởi đội ngũ chuyên gia hàng đầu, nhân viên của Ant Wedding luôn cập nhật những xu hướng mới nhất trong lĩnh vực trang trí cưới. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service