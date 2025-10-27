import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../../constants/image';

export const Restaurant = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#cbb9a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Sảnh Tiệc Sang Trọng',
      description: 'Không gian sảnh tiệc rộng rãi, điều hòa, âm thanh ánh sáng hiện đại',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#cbb9a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: 'Thực Đơn Đa Dạng',
      description: 'Menu phong phú từ Á đến Âu, phù hợp với mọi khẩu vị',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#cbb9a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Đội Ngũ Phục Vụ',
      description: 'Nhân viên chuyên nghiệp, nhiệt tình, phục vụ tận tâm',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#cbb9a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Trang Trí Theo Concept',
      description: 'Thiết kế và trang trí sảnh theo phong cách riêng của cặp đôi',
    },
  ];

  const portfolioImages = [
    { src: IMAGES.phuongxhien2_8, title: 'Tiệc Cưới Nhà Hàng Sang Trọng' },
    { src: IMAGES.vanxtuc, title: 'Tiệc Cưới Phong Cách Hiện Đại' },
    { src: IMAGES.duyenxsteven7, title: 'Tiệc Cưới Ấm Cúng' },
  ];

  const processSteps = [
    { step: '01', title: 'Tư Vấn', desc: 'Tư vấn không gian, thực đơn và dịch vụ' },
    { step: '02', title: 'Lên Kế Hoạch', desc: 'Thiết kế concept và báo giá chi tiết' },
    { step: '03', title: 'Chuẩn Bị', desc: 'Chuẩn bị thực đơn và trang trí sảnh' },
    { step: '04', title: 'Tổ Chức', desc: 'Phục vụ và điều phối tiệc hoàn hảo' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${IMAGES.service})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">NHÀ HÀNG TIỆC CƯỚI</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Tận hưởng không gian sang trọng, thực đơn đa dạng và dịch vụ chuyên nghiệp cho ngày trọng đại
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dịch Vụ Nổi Bật</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f7f5f3] py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Quy Trình Tổ Chức Tiệc</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-[#cbb9a4] mb-4">{step.step}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Không Gian & Khoảnh Khắc</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
            >
              <img src={item.src} alt={item.title} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
              <div className="p-4 bg-white text-center">
                <h3 className="font-semibold text-gray-700">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

       {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Sẵn Sàng Tạo Nên Tiệc Cưới Hoàn Hảo?
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
  );
};

export default Restaurant;
