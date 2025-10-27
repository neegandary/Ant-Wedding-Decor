import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '../constants/image';

const DecorPortfolio = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardClick = (endpoint) => {
    navigate(`/portfolio/${endpoint}`);
  };

  // Helper function to convert month string to number
  const monthToNumber = (monthStr) => {
    const monthMap = {
      'TH1': 1, 'TH2': 2, 'TH3': 3, 'TH4': 4, 'TH5': 5, 'TH6': 6,
      'TH7': 7, 'TH8': 8, 'TH9': 9, 'TH10': 10, 'TH11': 11, 'TH12': 12
    };
    return monthMap[monthStr] || 0;
  };

  // Portfolio items with translation keys
  const portfolioItemsRaw = [
    {
      id: 1,
      date: { day: '27', month: 'TH9', year: '2025' },
      categoryKey: 'weddingDecor',
      title: 'NATHAN & TRACY',
      author: 'Ant Wedding',
      descriptionKey: 'nathanTracyDesc',
      image: IMAGES.nathanxtracy,
      likes: 12,
      endpoint: 'nathanxtracy'
    },
    {
      id: 2,
      date: { day: '21', month: 'TH3', year: '2025' },
      categoryKey: 'weddingDecor',
      title: 'TIÊN & WILLIAM',
      author: 'Ant Wedding',
      descriptionKey: 'tienWilliamDesc',
      image: IMAGES.tienxwilliam,
      likes: 18,
      endpoint: 'tienxwilliam'
    },
    {
      id: 3,
      date: { day: '20', month: 'TH8', year: '2024' },
      categoryKey: 'ancestorDecorCategory',
      title: 'VAN & TUC',
      descriptionKey: 'vanTucDesc',
      author: 'Ant Wedding',
      image: IMAGES.vanxtuc,
      likes: 15,
      endpoint: 'vanxtuc'
    },
    {
      id: 4,
      date: { day: '03', month: 'TH8', year: '2024' },
      categoryKey: 'weddingDecor',
      title: 'TRAN & TAI',
      author: 'Ant Wedding',
      descriptionKey: 'tranTaiDesc',
      image: IMAGES.tranxtai,
      likes: 20,
      endpoint: 'tranxtai'
    },
    {
      id: 5,
      date: { day: '24', month: 'TH5', year: '2024' },
      categoryKey: 'ancestorDecorCategory',
      title: 'MAY & MATT',
      author: 'Ant Wedding',
      descriptionKey: 'mayMattDesc',
      image: IMAGES.mayxmat,
      likes: 14,
      endpoint: 'mayxmat'
    },
    {
      id: 6,
      date: { day: '22', month: 'TH8', year: '2024' },
      categoryKey: 'weddingDecor',
      title: 'DUYEN & STEVEN',
      author: 'Ant Wedding',
      descriptionKey: 'duyenStevenDesc',
      image: IMAGES.duyenxsteven,
      likes: 22,
      endpoint: 'duyenxsteven'
    },
    {
      id: 7,
      date: { day: '16', month: 'TH8', year: '2025' },
      categoryKey: 'weddingDecor',
      title: 'HÂN & TUẤN',
      author: 'Ant Wedding',
      descriptionKey: 'hanTuanDesc',
      image: IMAGES.service,
      likes: 16,
      endpoint: 'hanxtuan'
    },
    {
      id: 8,
      date: { day: '14', month: 'TH6', year: '2022' },
      categoryKey: 'ancestorDecorCategory',
      title: 'PHUONG & HIEN',
      author: 'Ant Wedding',
      descriptionKey: 'phuongHienDesc',
      image: IMAGES.phuongxhien,
      likes: 19,
      endpoint: 'phuongxhien'
    },
    {
      id: 9,
      date: { day: '09', month: 'TH11', year: '2022' },
      categoryKey: 'ancestorDecorCategory',
      title: 'MY & DUY',
      author: 'Ant Wedding',
      descriptionKey: 'myDuyDesc',
      image: IMAGES.duyxmy,
      likes: 17,
      endpoint: 'duyxmy'
    },
    {
      id: 10,
      date: { day: '14', month: 'TH6', year: '2022' },
      categoryKey: 'weddingDecor',
      title: 'PHUONG & HIEN',
      author: 'Ant Wedding',
      descriptionKey: 'phuongHien2Desc',
      image: IMAGES.phuongxhien2,
      likes: 25,
      endpoint: 'phuongxhien2'
    },
    {
      id: 11,
      date: { day: '15', month: 'TH3', year: '2022' },
      categoryKey: 'weddingDecor',
      title: 'ELOPE WEDDING',
      author: 'Ant Wedding',
      descriptionKey: 'elopementDesc',
      image: IMAGES.elopement,
      likes: 21,
      endpoint: 'elopement'
    },
    {
      id: 12,
      date: { day: '17', month: 'TH6', year: '2023' },
      categoryKey: 'weddingDecor',
      title: 'HIẾU & BRIAN',
      author: 'Ant Wedding',
      descriptionKey: 'hieuBrianDesc',
      image: IMAGES.hieuxbrian,
      likes: 23,
      endpoint: 'hieuxbrian'
    }
  ];

  // Sắp xếp theo thứ tự ngày tháng từ gần nhất đến xa nhất
  const portfolioItems = [...portfolioItemsRaw].sort((a, b) => {
    const dateA = new Date(a.date.year, monthToNumber(a.date.month) - 1, parseInt(a.date.day));
    const dateB = new Date(b.date.year, monthToNumber(b.date.month) - 1, parseInt(b.date.day));
    return dateB - dateA; // Sắp xếp giảm dần (mới nhất trước)
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light text-orange-400 leading-tight">
            {t('portfolioHeroTitle1')}<br />
            {t('portfolioHeroTitle2')}
          </h1>
          <div className="w-12 h-1 bg-orange-400 mt-6"></div>
        </motion.div>

        {/* Portfolio Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleCardClick(item.endpoint)}
            >
              {/* Card Container */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded text-center">
                    <div className="text-3xl font-bold text-gray-800">{item.date.day}</div>
                    <div className="text-xs text-gray-600 uppercase">{item.date.month}</div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-block bg-teal-700 text-white text-xs px-3 py-1 rounded mb-3 uppercase">
                    {t(item.categoryKey)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description (if exists) */}
                  {item.descriptionKey && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {t(item.descriptionKey)}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    {/* Author */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>{t('by')} {item.author || 'Admin'}</span>
                    </div>

                    {/* Likes & Share */}
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-orange-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="text-xs">{item.likes}</span>
                      </button>
                      <button className="text-gray-500 hover:text-orange-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Continue Reading Link */}
                  <button className="mt-4 text-sm text-gray-500 hover:text-orange-400 uppercase tracking-wider transition-colors">
                    {t('continueReading')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DecorPortfolio;