import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Grid3x3, X, ZoomIn, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import StickyBox from 'react-sticky-box';
import { PORTFOLIO_DETAIL_DATA, PORTFOLIO_LIST } from '../data';

const PortfolioDetail = () => {
  const { t } = useTranslation();
  const { endpoint } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll to top when endpoint changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [endpoint]);

  const currentIndex = PORTFOLIO_LIST.indexOf(endpoint);
  const prevEndpoint = currentIndex > 0 ? PORTFOLIO_LIST[currentIndex - 1] : null;
  const nextEndpoint = currentIndex < PORTFOLIO_LIST.length - 1 ? PORTFOLIO_LIST[currentIndex + 1] : null;

  const portfolio = PORTFOLIO_DETAIL_DATA[endpoint] || PORTFOLIO_DETAIL_DATA.nathanxtracy;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : portfolio.images.length - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev < portfolio.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header with Background Image */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${portfolio.headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-5xl md:text-6xl font-bold text-white tracking-wider"
        >
          {portfolio.title}
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Description & Info (Sticky) */}
          <div className="lg:w-1/3 flex-shrink-0">
            <StickyBox 
              offsetTop={32} 
              offsetBottom={32}
              style={{ zIndex: 10 }}
            >
              <div className="bg-white rounded-lg shadow-md p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{portfolio.title}</h2>
                <p className="text-sm text-gray-500 mb-6">{portfolio.subtitle}</p>

                {/* Description */}
                <div className="text-gray-700 text-sm leading-relaxed mb-8 whitespace-pre-line">
                  {portfolio.description}
                </div>

                {/* Details */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <p className="text-sm mb-2">
                    <span className="font-semibold">{t('concept')}</span> {portfolio.details.concept}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">{t('weddingAddress')}</span> {portfolio.details.address}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">{t('photographer')}</span> {portfolio.details.photographer}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-bold text-gray-800 mb-3">ANT WEDDING - DECOR & MORE</h3>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Hotline:</span> {portfolio.contact.hotline}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span> {portfolio.contact.email}
                  </p>
                </div>

                {/* Tags */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">{t('tags')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StickyBox>
          </div>

          {/* Right Column - Masonry Gallery Layout (Scrollable) */}
          <div className="lg:w-2/3 flex-grow">
            <div className="columns-1 md:columns-2 gap-4">
              {portfolio.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative break-inside-avoid mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gray-50"
                >
                  <img
                    src={image.src}
                    alt={`${portfolio.title} - ${index + 1}`}
                    className="w-full h-auto object-contain group-hover:opacity-95 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ZoomIn className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 border-t border-gray-300 pt-8">
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={() => prevEndpoint && navigate(`/portfolio/${prevEndpoint}`)}
              disabled={!prevEndpoint}
              className={`flex items-center gap-3 group ${prevEndpoint
                ? 'text-gray-700 hover:text-orange-400 cursor-pointer'
                : 'text-gray-300 cursor-not-allowed'
                } transition-colors`}
            >
              <ChevronLeft className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-400 uppercase">{t('newer')}</div>
                <div className="text-sm font-medium">
                  {prevEndpoint ? PORTFOLIO_DETAIL_DATA[prevEndpoint]?.title || 'Previous Portfolio' : t('noPrevious')}
                </div>
              </div>
            </button>

            {/* Back to Grid Button */}
            <button
              onClick={() => navigate('/portfolio')}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 hover:border-orange-400 hover:text-orange-400 transition-colors group"
            >
              <Grid3x3 className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => nextEndpoint && navigate(`/portfolio/${nextEndpoint}`)}
              disabled={!nextEndpoint}
              className={`flex items-center gap-3 group ${nextEndpoint
                ? 'text-gray-700 hover:text-orange-400 cursor-pointer'
                : 'text-gray-300 cursor-not-allowed'
                } transition-colors`}
            >
              <div className="text-right">
                <div className="text-xs text-gray-400 uppercase">{t('older')}</div>
                <div className="text-sm font-medium">
                  {nextEndpoint ? PORTFOLIO_DETAIL_DATA[nextEndpoint]?.title || 'Next Portfolio' : t('noNext')}
                </div>
              </div>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent z-10">
            <div className="text-white text-sm">
              {currentImageIndex + 1} / {portfolio.images.length}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={closeLightbox}
                className="text-white hover:text-gray-300 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-6 h-6" />
              </button>
              <button
                onClick={closeLightbox}
                className="text-white hover:text-gray-300 transition-colors"
                title="Fullscreen"
              >
                <Maximize2 className="w-6 h-6" />
              </button>
              <button
                onClick={closeLightbox}
                className="text-white hover:text-gray-300 transition-colors"
                title="Share"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button
                onClick={closeLightbox}
                className="text-white hover:text-gray-300 transition-colors"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Image */}
          <div className="relative max-w-7xl max-h-[90vh] mx-auto px-16">
            <img
              src={portfolio.images[currentImageIndex].src}
              alt={`${portfolio.title} - ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioDetail;
