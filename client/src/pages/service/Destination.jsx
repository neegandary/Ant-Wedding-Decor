import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/image';

export const Destination = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const features = [
        {
            icon: (
                <svg className="w-12 h-12 text-[#cbb9a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            title: 'Backdrop & Cổng Hoa',
            description: 'Thiết kế backdrop và cổng hoa ấn tượng, phù hợp với không gian ngoài trời'
        },
        {
            icon: (
                <svg className="w-12 h-12 text-[#cbb9a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                </svg>
            ),
            title: 'Bàn Ghế & Lối Đi',
            description: 'Bố trí bàn ghế và trang trí lối đi lãng mạn với hoa tươi và vải voan'
        },
        {
            icon: (
                <svg className="w-12 h-12 text-[#cbb9a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Ánh Sáng',
            description: 'Hệ thống ánh sáng chuyên nghiệp tạo không gian lung linh vào buổi tối'
        },
        {
            icon: (
                <svg className="w-12 h-12 text-[#cbb9a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            title: 'Trang Trí Chủ Đề',
            description: 'Thiết kế theo concept riêng, phù hợp với phong cách của cặp đôi'
        }
    ];

    const portfolioImages = [
        { src: IMAGES.tienxwilliam, title: 'Beach Wedding', endpoint: 'tienxwilliam' },
        { src: IMAGES.nathanxtracy, title: 'Garden Wedding', endpoint: 'nathanxtracy' },
        { src: IMAGES.service, title: 'Outdoor Ceremony', endpoint: 'hanxtuan' },
        { src: IMAGES.mayxmat, title: 'Rustic Wedding', endpoint: 'mayxmat' }
    ];

    const processSteps = [
        { step: '01', title: 'Tư Vấn', desc: 'Lắng nghe ý tưởng và tư vấn concept phù hợp' },
        { step: '02', title: 'Thiết Kế', desc: 'Thiết kế 3D và báo giá chi tiết' },
        { step: '03', title: 'Thi Công', desc: 'Thi công và setup tại địa điểm' },
        { step: '04', title: 'Hoàn Thiện', desc: 'Kiểm tra và bàn giao hoàn hảo' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url(${IMAGES.tienxwilliam})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative h-full flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-center text-white px-4"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            {t('outdoorDecor')}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto whitespace-pre-line">
                            {t('outdoorHeroSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Description Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        {t('outdoorServiceTitle')}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {t('outdoorDesc')}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                        Các Dự Án Đã Thực Hiện
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onClick={() => navigate(`/portfolio/${image.endpoint}`)}
                                className="relative h-80 rounded-lg overflow-hidden group cursor-pointer"
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <h3 className="text-white text-2xl font-bold p-6">
                                        {image.title}
                                    </h3>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                        Quy Trình Làm Việc
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {processSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-[#cbb9a4] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                        Ưu Điểm Của Tiệc Cưới Ngoài Trời
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#cbb9a4] to-[#b8a490] rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Không Gian Rộng Rãi
                            </h3>
                            <p className="text-gray-600">
                                Không gian thoáng đãng, thoải mái cho khách mời và dễ dàng bố trí các hoạt động
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="w-12 h-12 bg-[#cbb9a4] rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Ánh Sáng Tự Nhiên
                            </h3>
                            <p className="text-gray-600">
                                Tận dụng ánh sáng tự nhiên tạo nên những bức ảnh đẹp lung linh
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="w-12 h-12 bg-[#cbb9a4] rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Không Gian Lãng Mạn
                            </h3>
                            <p className="text-gray-600">
                                Hòa mình vào thiên nhiên, tạo không gian lãng mạn và đáng nhớ
                            </p>
                        </div>
                    </div>
                </motion.div>


                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Sẵn Sàng Tạo Nên Tiệc Cưới Ngoài Trời Hoàn Hảo?
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:0794672928"
                            className="bg-[#cbb9a4] text-white px-8 py-3 rounded-lg hover:bg-[#b8a490] transition-colors font-semibold inline-flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Hotline: 079 467 2928
                        </a>
                        <a
                            href="/contact"
                            className="bg-white text-[#806a56] border-2 border-[#cbb9a4] px-8 py-3 rounded-lg hover:bg-[#cbb9a4] hover:text-white transition-colors font-semibold inline-flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Gửi Yêu Cầu Tư Vấn
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
