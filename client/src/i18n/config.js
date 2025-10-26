import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      // Header
      hotline: "Hotline",

      // Navbar
      home: "TRANG CHỦ",
      services: "DỊCH VỤ",
      work: "ANTWORK",
      about: "GIỚI THIỆU",
      contact: "LIÊN HỆ",

      // Services Dropdown
      destinationWedding: "Trang trí tiệc cưới ngoài trời",
      ancestorCeremony: "Trang trí lễ gia tiên",
      restaurantWedding: "Trang trí sảnh nhà hàng",
      eventDecor: "Trang trí sự kiện",

      // Hero
      wedding: "Tiệc cưới",
      heroTitle: "Thoả Sức Biến Tấu Tiệc Cưới Trong Mơ",
      readMore: "Xem thêm",

      // Service Cards
      ancestorDecor: "TRANG TRÍ LỄ GIA TIÊN",
      ancestorDesc: "Thiết kế không gian lễ gia tiên trang trọng, ấm cúng với đầy đủ các vật phẩm truyền thống. Chúng tôi tư vấn và bố trí theo phong tục từng vùng miền, đảm bảo sự trang nghiêm và ý nghĩa cho nghi lễ quan trọng này.",
      outdoorDecor: "TRANG TRÍ NGOÀI TRỜI",
      outdoorDesc: "Tạo nên không gian tiệc cưới ngoài trời lãng mạn, sang trọng với hệ thống backdrop, cổng hoa, lối đi và khu vực đón khách ấn tượng. Phù hợp với sân vườn, bãi biển hay không gian mở.",
      restaurantDecor: "TRANG TRÍ NHÀ HÀNG",
      restaurantDesc: "Biến hóa sảnh tiệc nhà hàng thành không gian cưới lung linh với backdrop sân khấu, bàn tiệc, lối đi và hệ thống ánh sáng chuyên nghiệp. Đa dạng phong cách từ cổ điển đến hiện đại.",
      eventDecorTitle: "TRANG TRÍ SỰ KIỆN",
      eventDecorDesc: "Cung cấp giải pháp trang trí toàn diện cho các sự kiện đặc biệt như lễ đính hôn, tiệc thôi nôi, sinh nhật. Thiết kế theo chủ đề riêng với đội ngũ thi công chuyên nghiệp, đúng tiến độ.",
      viewDetails: "XEM CHI TIẾT",

      // Stats
      yearsExperience: "NĂM KINH NGHIỆM",
      couplesServed: "CẶP ĐÔI TIN TƯỞNG",

      // Banner
      bannerTitle1: "We'll create wedding",
      bannerTitle2: "décor to suit your Inspiration",
      bannerDesc: "Với hơn 15 năm kinh nghiệm tổ chức các sự kiện và những phương án cưới nhỏ lẻ khác nhau, Ant Wedding sẽ mang lại cho bạn những ý tưởng tuyệt vời và bản tính nhất về sự lựa chọn ANT WEDDING để đảm bảo sự yên tâm trong quá trình thực hiện cũng như thành thải hoàn toàn đã đạt được trong sự hài lòng về ngày vui của mình.",
      designPackages: "CÁC GÓI ĐÃ CÓ THIẾT KẾ",

      // Why Choose Us
      whyChooseUs: "LÝ DO CHỌN ANT WEDDING",
      whyChooseDesc: "Ant Town luôn cân nhắc \"đầu vào\" về độ tỉ mỉ, sự tinh tâm có khách hàng hoàn toàn yên tâm về \"đầu ra\" của mình",
      trustedBrand: "THƯƠNG HIỆU UY TÍN",
      experiencedTeam: "~ ĐÀN ĐẦY KINH NGHIỆM",
      trustedBrandDesc: "Với hơn 15 năm kinh nghiệm và phục trách các dịch vụ về tổ chức đám cưới, Ant Wedding đã trở thành một trong những thương hiệu uy tín hàng đầu tại TP. HCM. Đội ngũ tư vấn chuyên nghiệp, tận tâm, luôn sẵn sàng lắng nghe và đưa ra giải pháp tối ưu nhất cho mỗi đám cưới.",
      professionalProcess: "QUY TRÌNH & ĐỘI NGŨ CHUYÊN NGHIỆP",
      professionalProcessDesc: "Với quy trình làm việc rõ ràng, chặt chẽ và đội ngũ nhân viên chuyên nghiệp, Ant Wedding đảm bảo mọi khâu trong tổ chức đám cưới đều được thực hiện một cách hoàn hảo. Từ khâu tư vấn, thiết kế, thi công đến khâu hoàn thiện, mọi chi tiết đều được chăm chút tỉ mỉ.",
      highExpertise: "NHẬN SỰ CHUYÊN MÔN CAO",
      highExpertiseDesc: "Được xây dựng và đào tạo bởi đội ngũ chuyên gia hàng đầu, nhân viên của Ant Wedding luôn cập nhật những xu hướng mới nhất trong lĩnh vực trang trí cưới. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.",

      // Footer
      contactUs: "Contact us",
      ourPhone: "Our phone number:",
      ourEmail: "Our Email:",
      ourAddress: "Our Address:",
      addressDetail: "Destination Wedding Decoration based in Nha Trang",
      appointmentNote: "(Vui lòng đặt lịch hẹn trước)",
      followAnt: "FOLLOW ANT",
      followers: "người theo dõi",
      followPage: "Theo dõi trang",
      share: "Chia sẻ",
      tagline: "Ant Wedding – Draw Your Wedding Dream",
      footerNote: "from Ant Wedding with Love",

      // Introduce
      helloWeAre: "HELLO, WE ARE ANT WEDDING",
      introTitle1: "Chúng Tôi Luôn",
      introTitle2: "Đổi Mới Sáng Tạo",
      introTitle3: "Uy Tín & Chất Lượng",
      introDesc: "Khởi đầu từ 2010 - trong giai đoạn dịch vụ cho ngày cưới còn rất truyền thống và cơ bản. Bứt phá khỏi những quan niệm làm dịch vụ lỗi thời, kết hợp với tư duy đổi mới dựa trên nền tảng được đào tạo bài bản trong trường lớp mỹ thuật. Ant Wedding tự hào là một trong những đơn vị tiên phong và có kinh nghiệm nhiều năm trong việc tổ chức lễ cưới tại TPHCM. Ant Wedding cung cấp các dịch vụ cho ngày cưới: Lập kế hoạch - Thiết kế - Trang trí. Từ quá trình lên kế hoạch, làm ý tưởng & kiến tạo nên những trải nghiệm cá nhân hoá, phản ánh đúng câu chuyện tình yêu của từng cặp đôi.",
      introQuote: "Cho đến nay White Wedding vẫn luôn tự hào là đơn vị chuyên nghiệp và giàu kinh nghiệm hàng đầu trong lĩnh vực trang trí gia tiên tại TPHCM.",
      founders: "Ngọc Anh & Nhã Tịnh",
      founderTitle: "Founder Ant Wedding"
    }
  },
  en: {
    translation: {
      // Header
      hotline: "Hotline",

      // Navbar
      home: "HOME",
      services: "SERVICES",
      work: "ANTWORK",
      about: "ABOUT US",
      contact: "CONTACT",

      // Services Dropdown
      destinationWedding: "Outdoor Wedding Decoration",
      ancestorCeremony: "Ancestor Ceremony Decoration",
      restaurantWedding: "Restaurant Hall Decoration",
      eventDecor: "Event Decoration",

      // Hero
      wedding: "Wedding",
      heroTitle: "Transform Your Dream Wedding Into Reality",
      readMore: "Read more",

      // Service Cards
      ancestorDecor: "ANCESTOR CEREMONY DECORATION",
      ancestorDesc: "Design a solemn and warm ancestor ceremony space with complete traditional items. We consult and arrange according to regional customs, ensuring dignity and meaning for this important ritual.",
      outdoorDecor: "OUTDOOR DECORATION",
      outdoorDesc: "Create a romantic and elegant outdoor wedding space with backdrop systems, flower arches, walkways and impressive guest reception areas. Suitable for gardens, beaches or open spaces.",
      restaurantDecor: "RESTAURANT DECORATION",
      restaurantDesc: "Transform restaurant halls into sparkling wedding spaces with stage backdrops, banquet tables, walkways and professional lighting systems. Diverse styles from classic to modern.",
      eventDecorTitle: "EVENT DECORATION",
      eventDecorDesc: "Provide comprehensive decoration solutions for special events such as engagement ceremonies, baby showers, birthdays. Custom theme design with professional construction team, on schedule.",
      viewDetails: "VIEW DETAILS",

      // Stats
      yearsExperience: "YEARS OF EXPERIENCE",
      couplesServed: "COUPLES TRUSTED",

      // Banner
      bannerTitle1: "We'll create wedding",
      bannerTitle2: "décor to suit your Inspiration",
      bannerDesc: "With over 15 years of experience organizing events and various wedding plans, Ant Wedding will bring you wonderful ideas and the best choice of ANT WEDDING to ensure peace of mind during the implementation process as well as complete satisfaction with your special day.",
      designPackages: "DESIGN PACKAGES",

      // Why Choose Us
      whyChooseUs: "WHY CHOOSE ANT WEDDING",
      whyChooseDesc: "Ant Town always considers the \"input\" in terms of meticulousness and care so that customers are completely assured of their \"output\"",
      trustedBrand: "TRUSTED BRAND",
      experiencedTeam: "~ EXPERIENCED TEAM",
      trustedBrandDesc: "With over 15 years of experience in wedding organization services, Ant Wedding has become one of the leading prestigious brands in Ho Chi Minh City. Our professional and dedicated consulting team is always ready to listen and provide the most optimal solutions for each wedding.",
      professionalProcess: "PROFESSIONAL PROCESS & TEAM",
      professionalProcessDesc: "With a clear and rigorous work process and professional staff, Ant Wedding ensures that every stage of wedding organization is carried out perfectly. From consulting, design, construction to completion, every detail is meticulously cared for.",
      highExpertise: "HIGH EXPERTISE",
      highExpertiseDesc: "Built and trained by leading experts, Ant Wedding staff always update the latest trends in wedding decoration. We are committed to bringing customers the best products and services.",

      // Footer
      contactUs: "Contact us",
      ourPhone: "Our phone number:",
      ourEmail: "Our Email:",
      ourAddress: "Our Address:",
      addressDetail: "Destination Wedding Decoration based in Nha Trang",
      appointmentNote: "(Please make an appointment in advance)",
      followAnt: "FOLLOW ANT",
      followers: "followers",
      followPage: "Follow Page",
      share: "Share",
      tagline: "Ant Wedding – Draw Your Wedding Dream",
      footerNote: "from Ant Wedding with Love",

      // Introduce
      helloWeAre: "HELLO, WE ARE ANT WEDDING",
      introTitle1: "We Always",
      introTitle2: "Innovate & Create",
      introTitle3: "Trust & Quality",
      introDesc: "Starting from 2010 - during a period when wedding services were still very traditional and basic. Breaking away from outdated service concepts, combined with innovative thinking based on a solid foundation of art school training. Ant Wedding is proud to be one of the pioneering units with many years of experience in organizing weddings in Ho Chi Minh City. Ant Wedding provides wedding day services: Planning - Design - Decoration. From the planning process, creating ideas & building personalized experiences that accurately reflect each couple's love story.",
      introQuote: "To this day, White Wedding is still proud to be the leading professional and experienced unit in the field of ancestor ceremony decoration in Ho Chi Minh City.",
      founders: "Ngoc Anh & Nha Tinh",
      founderTitle: "Founder Ant Wedding"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
