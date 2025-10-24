// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CountUpNumber } from "./CountUpNumber";
const Service = () => {
    const cards = [
        { title: 'TRANG TRÍ LỄ GIA TIÊN', img: '/service1.jpg', desc: 'Các gói trang trí đa dạng về kiểu cách, chất liệu, giá cả và màu sắc sẽ đem lại sự hài lòng cho các cặp đôi khó tính nhất.' },
        { title: 'TRANG TRÍ TIỆC CƯỚI', img: '/service2.jpg', desc: 'Biến không gian tiệc cưới trở nên sang trọng, lộng lẫy bằng hệ thống mẫu ấn tượng bậc nhất.' },
        { title: 'MÂM QUÀ & LONG PHỤNG', img: '/service3.jpg', desc: 'Dịch vụ mâm quả theo từng vùng miền và theo nhu cầu thực tế với các gói sản phẩm đẹp – an toàn – chất lượng cao.' },
        { title: 'RẠP CƯỚI & BÀN TIỆC', img: '/service4.jpg', desc: 'Rạp đám cưới & bàn ghế đạt tiệc giúp cho không gian của gia chủ thêm phần lịch sự, trang trọng.' },
        { title: 'XE HOA & TRANG TRÍ XE', img: '/service5.jpg', desc: 'Xe hoa cưới là điểm nhấn trong ngày đón dâu, góp phần làm cho buổi rước dâu trở nên long trọng.' },
        { title: 'HOA CẦM TAY CÔ DÂU', img: '/service6.jpg', desc: 'Chúng tôi hạnh phúc được mang lại cho các Cô Dâu những màu Hoa cưới tinh tế và sang trọng.' },
    ];

    return (
        <>
            <section className="bg-[#f8f6ec] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Row 1: first 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                        {cards.slice(0, 3).map((c, i) => (
                            <article key={i} className="relative">
                                <motion.img src={c.img} alt={c.title} className="w-full h-56 object-cover rounded-lg shadow-md" whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }} />
                                <div className="bg-white rounded-md shadow-lg p-6 -mt-12 mx-6">
                                    <h3 className="text-center text-lg font-semibold text-emerald-700 mb-3">{c.title}</h3>
                                    <p className="text-sm text-gray-600 text-center mb-4">{c.desc}</p>
                                    <div className="text-center">
                                        <a className="text-sm font-medium text-emerald-700 underline" href="#">XEM CHI TIẾT</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Row 2: next 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {cards.slice(3, 6).map((c, i) => (
                            <article key={i} className="relative">
                                <motion.img src={c.img} alt={c.title} className="w-full h-56 object-cover rounded-lg shadow-md" whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }} />
                                <div className="bg-white rounded-md shadow-lg p-6 -mt-12 mx-6">
                                    <h3 className="text-center text-lg font-semibold text-emerald-700 mb-3">{c.title}</h3>
                                    <p className="text-sm text-gray-600 text-center mb-4">{c.desc}</p>
                                    <div className="text-center">
                                        <a className="text-sm font-medium text-emerald-700 underline" href="#">XEM CHI TIẾT</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero Banner Section - Full Width */}
            <section className="relative w-full overflow-hidden shadow-xl">
                <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/service.jpg')" }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative h-full flex items-center text-white">
                        {/* Left Side - Stats */}
                        <div className="w-1/2 flex flex-row items-center justify-center px-8">
                            <div className="text-center flex-1">
                                <div className="text-7xl font-bold mb-2"><CountUpNumber target={15}  /></div>
                                <div className="text-sm uppercase tracking-wide">NĂM KINH NGHIỆM</div>
                            </div>
                            <div className="h-32 w-px bg-white/50 mx-8"></div>
                            <div className="text-center flex-1">
                                <div className="text-7xl font-bold mb-2"><CountUpNumber target={8000}  /></div>
                                <div className="text-sm uppercase tracking-wide">CẶP ĐÔI TIN TƯỞNG</div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-1/2 px-12 py-8">
                            <h2 className="text-4xl font-bold mb-2">We'll create wedding</h2>
                            <h3 className="text-3xl mb-4">décor to suit your Inspiration</h3>
                            <p className="text-sm leading-relaxed mb-6 text-justify">
                                Với hơn 15 năm kinh nghiệm tổ chức các sự kiện và những phương án cưới nhỏ lẻ khác nhau, Ant Wedding sẽ mang lại cho bạn những ý tưởng tuyệt vời và bản tính nhất về sự lựa chọn ANT
                                 WEDDING để đảm bảo sự yên tâm trong quá trình thực hiện cũng như thành thải hoàn toàn đã đạt được trong sự hài lòng về ngày vui của mình.
                            </p>
                            <button className="bg-white text-gray-800 px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition">
                                CÁC GÓI ĐÃ CÓ THIẾT KẾ
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f6ec] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">LÝ DO CHỌN ANT WEDDING</h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 whitespace-nowrap">
                        Ant Town luôn cân nhắc "đầu vào" về độ tỉ mỉ, sự tinh tâm có khách hàng hoàn toàn yên tâm về "đầu ra" của mình
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Card 01 */}
                        <div className="text-center">
                            <div className="text-6xl font-bold text-emerald-700/20 mb-2">01.</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">THƯƠNG HIỆU UY TÍN</h3>
                            <p className="text-sm font-semibold text-gray-700 mb-3">~ ĐÀN ĐẦY KINH NGHIỆM</p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Với hơn 15 năm kinh nghiệm và phục trách các dịch vụ về tổ chức đám cưới, Ant Wedding đã trở thành một trong những thương hiệu uy tín hàng đầu tại TP. HCM. Đội ngũ tư vấn chuyên nghiệp, tận tâm, luôn sẵn sàng lắng nghe và đưa ra giải pháp tối ưu nhất cho mỗi đám cưới.
                            </p>
                        </div>

                        {/* Card 02 */}
                        <div className="text-center">
                            <div className="text-6xl font-bold text-emerald-700/20 mb-2">02.</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">QUY TRÌNH & ĐỘI NGŨ CHUYÊN NGHIỆP</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Với quy trình làm việc rõ ràng, chặt chẽ và đội ngũ nhân viên chuyên nghiệp, Ant Wedding đảm bảo mọi khâu trong tổ chức đám cưới đều được thực hiện một cách hoàn hảo. Từ khâu tư vấn, thiết kế, thi công đến khâu hoàn thiện, mọi chi tiết đều được chăm chút tỉ mỉ.
                            </p>
                        </div>

                        {/* Card 03 */}
                        <div className="text-center">
                            <div className="text-6xl font-bold text-emerald-700/20 mb-2">03.</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">NHẬN SỰ CHUYÊN MÔN CAO</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Được xây dựng và đào tạo bởi đội ngũ chuyên gia hàng đầu, nhân viên của Ant Wedding luôn cập nhật những xu hướng mới nhất trong lĩnh vực trang trí cưới. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service