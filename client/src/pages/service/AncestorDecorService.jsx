import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/image';

const AncestorDecorService = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const portfolioExamples = [
    { endpoint: 'vietxquynh2', image: IMAGES.vietxquynh, title: 'VIET & QUYNH' },
    { endpoint: 'phuongxhien', image: IMAGES.phuongxhien, title: 'PHUONG & HIEN' },
    { endpoint: 'duyxmy', image: IMAGES.duyxmy, title: 'DUY & MY' },
    { endpoint: 'thoaxbinh', image: IMAGES.thoaxbinh, title: 'THOA & BINH' },
    { endpoint: 'anxtoan', image: IMAGES.anxtoan, title: 'AN & TOAN' },
    { endpoint: 'vyxkhang', image: IMAGES.vyxkhang, title: 'VY & KHANG' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.vietxquynh})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{t('ancestorDecor')}</h1>
            <p className="text-xl md:text-2xl font-light">{t('ancestorDesc')}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('serviceOverview')}</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Lễ gia tiên là nghi lễ truyền thống quan trọng trong đám cưới Việt Nam, thể hiện sự tôn kính với tổ tiên và 
              sự kết nối giữa các thế hệ. Chúng tôi hiểu rõ ý nghĩa thiêng liêng này và cam kết mang đến không gian trang trí 
              vừa trang trọng, vừa tinh tế.
            </p>
            <p className="mb-4">
              Với kinh nghiệm nhiều năm, đội ngũ của chúng tôi sẽ tư vấn và thiết kế không gian lễ gia tiên phù hợp với 
              phong tục từng gia đình, kết hợp hài hòa giữa truyền thống và hiện đại.
            </p>
          </div>
        </motion.div>

        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('serviceIncludes')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Trang trí bàn thờ gia tiên</h3>
              <p className="text-gray-600">Thiết kế và trang trí bàn thờ theo phong cách truyền thống hoặc hiện đại, phù hợp với không gian và mong muốn của gia đình.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Hoa tươi cao cấp</h3>
              <p className="text-gray-600">Lựa chọn và sắp xếp hoa tươi phù hợp với nghi lễ, mang ý nghĩa tốt lành và trang trọng.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Vật phẩm nghi lễ</h3>
              <p className="text-gray-600">Chuẩn bị đầy đủ các vật phẩm cần thiết cho nghi lễ theo phong tục truyền thống.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Tư vấn nghi thức</h3>
              <p className="text-gray-600">Hỗ trợ tư vấn về trình tự và cách thức tiến hành lễ gia tiên đúng chuẩn.</p>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('ourWork')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioExamples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer"
                onClick={() => navigate(`/portfolio/${item.endpoint}`)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-emerald-700 text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">{t('readyToStart')}</h2>
          <p className="text-lg mb-8">{t('contactUsToday')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0794672928" className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              {t('callNow')}: 079 467 2928
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-emerald-700 transition"
            >
              {t('contactForm')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AncestorDecorService;
