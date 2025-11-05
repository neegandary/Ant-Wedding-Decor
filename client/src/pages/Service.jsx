import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/image';

const Service = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('ancestorDecor'),
      description: t('ancestorDesc'),
      image: IMAGES.phuongxhien,
      link: '/services/ancestor',
    },
    {
      id: 2,
      title: t('outdoorDecor'),
      description: t('outdoorDesc'),
      image: IMAGES.tienxwilliam,
      link: '/services/destination',
    },
    {
      id: 3,
      title: t('restaurantDecor'),
      description: t('restaurantDesc'),
      image: IMAGES.duyxmy2_10,
      link: '/services/restaurant-wedding',
    },
    {
      id: 4,
      title: t('eventDecorTitle'),
      description: t('eventDecorDesc'),
      image: IMAGES.benang10,
      link: '/services/event',
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.service})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-white max-w-4xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              {t('services')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              ANT WEDDING - DECOR & MORE
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('ourServices')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('ourServicesDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-[#806a56] hover:text-[#cbb9a4] font-semibold transition-colors flex items-center gap-2"
                >
                  {t('viewDetails')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            {t('whyChooseUs')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#cbb9a4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('trustedBrand')}</h3>
              <p className="text-gray-600">
                {t('trustedBrandDesc2')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#cbb9a4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('professionalProcess')}</h3>
              <p className="text-gray-600">
                {t('professionalProcessDesc2')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#cbb9a4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t('highExpertise')}</h3>
              <p className="text-gray-600">
                {t('highExpertiseDesc2')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('readyForPerfectWedding')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('contactForFreeConsultation')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0794672928"
              className="bg-[#cbb9a4] text-white px-8 py-3 rounded-lg hover:bg-[#b8a490] transition-colors font-semibold"
            >
              {t('hotline')}: 079 467 2928
            </a>
            <a
              href="/contact"
              className="bg-white text-[#806a56] border-2 border-[#cbb9a4] px-8 py-3 rounded-lg hover:bg-[#cbb9a4] hover:text-white transition-colors font-semibold"
            >
              {t('contact')}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
