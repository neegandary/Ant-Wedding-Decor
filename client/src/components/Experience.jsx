import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/image';

const Experience = () => {
    const navigate = useNavigate();

    // Hàng 1: 6 hình với thông tin
    const row1Images = [
        { img: `${IMAGES.nathanxtracy}`, title: 'FOUND BY FATE', tags: [ 'Trang Trí Tiệc Cướ'], endpoint: 'nathanxtracy' },
        { img: `${IMAGES.tienxwilliam}`, title: 'QUIET COASTAL LOVE ', tags: [ 'Trang Trí Tiệc Cưới'], endpoint: 'tienxwilliam' },
        { img: `${IMAGES.vanxtuc}`, title: 'VAN & TUC', tags: [ 'Trang Trí Gia Tiên'], endpoint: 'vanxtuc' },
        { img: `${IMAGES.tranxtai}`, title: 'TRAN & TAI', tags: [ 'Trang Trí Tiệc Cưới'], endpoint: 'tranxtai' },
        { img: `${IMAGES.mayxmat}`, title: 'EAT.PRAY.LOVE', tags: [ 'Trang Trí Gia Tiên'], endpoint: 'mayxmat' },
        { img: `${IMAGES.duyenxsteven}`, title: 'DUYEN & STEVEN', tags: [ 'Trang Trí Tiệc Cưới'], endpoint: 'duyenxsteven' },
    ];

    // Hàng 2: 6 hình với thông tin
    const row2Images = [
        { img: `${IMAGES.service}`, title: 'THE JOURNEY WITHIN', tags: [ 'Trang Trí Tiệc Cưới'], endpoint: 'service' },
        { img: `${IMAGES.phuongxhien}`, title: 'PHUONG & HIEN', tags: [ 'Trang Trí Gia Tiên'], endpoint: 'phuongxhien' },
        { img: `${IMAGES.duyxmy}`, title: 'SWEETEST DAY', tags: [ 'Trang Trí Gia Tiên'], endpoint: 'duyxmy' },
        { img: `${IMAGES.phuongxhien2}`, title: 'PHUONG & HIEN', tags: [ 'Trang Trí Tiệc Cưới'], endpoint: 'phuongxhien2' },
        { img: `${IMAGES.elopement}`, title: 'ELOPE WEDDING', tags: [ 'Trang Trí Tiệc Cưới'], endpoint: 'elopement' },
        { img: `${IMAGES.hieuxbrian}`, title: 'WELCOME HOME', tags: [ 'Trang Trí Tiệc Cưới'], endpoint: 'hieuxbrian' },
    ];

    const handleImageClick = (endpoint) => {
        navigate(`/portfolio/${endpoint}`);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                        ANT<span className="font-normal">WORK</span>
                    </h2>
                    <p className="text-sm text-orange-400">We'll create wedding décor to suit your Inspiration</p>
                </div>

                {/* First Row Slider - 6 images, show 4 */}
                <div className="mb-8">
                    <Slider {...settings}>
                        {row1Images.map((item, idx) => (
                            <div key={`row1-${idx}`} className="px-2">
                                <div className="relative group overflow-hidden rounded-lg cursor-pointer" onClick={() => handleImageClick(item.endpoint)}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                                        {/* Expand Icon */}
                                        <div className="absolute top-3 right-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                        </div>
                                        {/* Tags */}
                                        <div className="flex flex-col gap-2 mb-4">
                                            {item.tags.map((tag, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                    <span>{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-center">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Second Row Slider - 6 images, show 4 */}
                <div>
                    <Slider {...settings}>
                        {row2Images.map((item, idx) => (
                            <div key={`row2-${idx}`} className="px-2">
                                <div className="relative group overflow-hidden rounded-lg cursor-pointer" onClick={() => handleImageClick(item.endpoint)}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                                        {/* Expand Icon */}
                                        <div className="absolute top-3 right-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                        </div>
                                        {/* Tags */}
                                        <div className="flex flex-col gap-2 mb-4">
                                            {item.tags.map((tag, i) => (
                                                <div key={i} className="flex items-center gap-2 text-sm">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                    <span>{tag}</span>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-center">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Experience;
