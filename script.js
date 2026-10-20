(function () {
  "use strict";

  var SLIDES_DATA = [
    {
      id: 1,
      eyebrow: "CHỦ ĐỀ THUYẾT TRÌNH GDCD",
      title: "TẤM GƯƠNG LAO ĐỘNG CẦN CÙ CỦA BÁC HỒ",
      subtitle: "Hành trình tự lực cánh sinh trên con đường tìm đường cứu nước (1911 – 1941)",
      footerLabel: "Bài học về ý chí, nghị lực và giá trị của sức lao động",
      scenicTheme: "ocean",
      videoLabel: "TƯ LIỆU LỊCH SỬ",
      bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/1765164502847_csg-nam-1866.webp",
      caption: "Bến cảng Nhà Rồng năm 1911 – Nơi khởi đầu hành trình vĩ đại",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.75) 55%, rgba(18,19,22,0.2) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "4%", height: "3px", rotate: "0deg", opacity: 0.7 },
        pin: { left: "10%", top: "88%", label: "1911 • Khởi hành" }
      }
    },
    {
      id: 2,
      eyebrow: "BỐI CẢNH LỊCH SỬ",
      title: "ĐẤT NƯỚC ĐẦU THẾ KỶ XX",
      bullets: [
        { bold: "Khủng hoảng đường lối:", text: "Các phong trào yêu nước truyền thống đều rơi vào bế tắc." },
        { bold: "Trăn trở lớn:", text: "Cần tìm một con đường mới để giải phóng dân tộc." },
        { bold: "Tầm nhìn vượt thời đại:", text: "Quyết định đi sang phương Tây để tìm hiểu thực tế đời sống." }
      ],
      scenicTheme: "mountains",
      bgImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/colonial-francais (1).jpg",
      caption: "Bối cảnh Việt Nam đầu thế kỷ XX dưới ách thống trị thuộc địa",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.9) 52%, rgba(18,19,22,0.25) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "8%", height: "3px", rotate: "0deg", opacity: 0.7 },
        pin: { left: "14%", top: "88%", label: "Việt Nam • Đầu TK XX" }
      }
    },
    {
      id: 3,
      eyebrow: "CỘT MỐC KHỞI ĐẦU • 05/06/1911",
      title: "RỜI BẾN CẢNG NHÀ RỒNG",
      bullets: [
        { bold: "Tên gọi mới:", text: "Người thanh niên Nguyễn Tất Thành lấy tên là Văn Ba." },
        { bold: "Vị trí làm việc:", text: "Xin làm phụ bếp trên tàu buôn Pháp Đô đốc Latouche-Tréville." },
        { bold: "Hành trang:", text: "Lòng yêu nước nồng nàn và ý chí lao động bền bỉ." }
      ],
      scenicTheme: "ocean",
      videoLabel: "TÀU LATOUCHE-TRÉVILLE",
      bgImage: "https://cdn10.picryl.com/photo/1918/06/07/photograph-of-the-ss-amiral-latouche-treville-496e57-1024.jpg",
      imgUrl: "anh/istockphoto-2237105534-612x612.jpg",
      caption: "Con tàu viễn dương đưa anh Ba rời Bến Nhà Rồng năm 1911",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.85) 55%, rgba(18,19,22,0.2) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "12%", height: "4px", rotate: "0deg", opacity: 0.8 },
        pin: { left: "18%", top: "88%", label: "Bến Nhà Rồng • 1911" }
      }
    },
    {
      id: 4,
      eyebrow: "Ý CHÍ TỰ LỰC CÁNH SINH",
      title: "KHỞI ĐẦU TỪ ĐÔI BÀN TAY LAO ĐỘNG",
      highlight: "Tự nuôi sống bản thân bằng lao động chân chính để thực hiện hoài bão lớn.",
      bullets: [
        { bold: "Không dựa dẫm:", text: "Chấp nhận mọi công việc nặng nhọc nơi xứ người." },
        { bold: "Mục tiêu rõ ràng:", text: "Lao động để duy trì cuộc sống, đi đến nhiều nơi và học hỏi." }
      ],
      scenicTheme: "ocean",
      bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/f28549daa41841b085dfcf20af692870.jfif",
      caption: "Hành trình lao động tự lực vượt qua mọi thử thách vượt đại dương",
      maskStyle: "radial-gradient(circle at 75% 50%, rgba(18,19,22,0.25) 0%, #121316 72%)",
      morph: {
        line: { left: "6%", top: "88%", width: "16%", height: "4px", rotate: "0deg", opacity: 0.8 },
        pin: { left: "22%", top: "88%", label: "Tự lực" }
      }
    },
    {
      id: 5,
      eyebrow: "CÔNG VIỆC ĐẦU TIÊN TRÊN BIỂN",
      title: "PHỤ BẾP TRÊN TÀU VIỄN DƯƠNG",
      bigMetric: "16 – 17 Giờ / Ngày",
      bullets: [
        { bold: "Cường độ cao:", text: "Làm việc liên tục từ 4 giờ sáng đến 9 giờ tối." },
        { bold: "Môi trường khắc nghiệt:", text: "Nhóm lò, khuân than, rửa chén, sơ chế thực phẩm giữa hầm tàu nóng bức." }
      ],
      scenicTheme: "furnace",
      bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/images.jfif",
      caption: "Công việc phụ bếp trong không gian hầm tàu ngột ngạt và nóng bức",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.9) 55%, rgba(217,4,41,0.28) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "20%", height: "3px", rotate: "0deg", opacity: 0.8 },
        pin: { left: "26%", top: "88%", label: "Phụ bếp tàu" }
      }
    },
    {
      id: 6,
      eyebrow: "TINH THẦN HIẾU HỌC",
      title: "VỪA LAO ĐỘNG VỪA TỰ HỌC",
      bullets: [
        { bold: "Tận dụng thời gian:", text: "Đọc sách và ghi chép vào ban đêm sau ca làm việc mệt nhọc." },
        { bold: "Học ngoại ngữ:", text: "Chủ động học tiếng Pháp qua giao tiếp với các thủy thủ." },
        { bold: "Quan sát thực tiễn:", text: "Tìm hiểu đời sống của những người lao động trên tàu." }
      ],
      scenicTheme: "night",
      bgImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/18-06-2019-yeu-sach-cua-nhan-dan-an-nam-mot-the-ky-van-ven-nguyen-gia-tri-C357B2BA-details.webp",
      caption: "Bức ảnh Bác Hồ vừa học vừa tham gia Đại hội Tours.",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.9) 54%, rgba(18,19,22,0.2) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "24%", height: "3px", rotate: "0deg", opacity: 0.8 },
        pin: { left: "30%", top: "88%", label: "Tự học" }
      }
    },
    {
      id: 7,
      eyebrow: "HÀNH TRÌNH QUA CÁC CHÂU LỤC (1912 – 1913)",
      title: "BÔN BA QUA CHÂU PHI VÀ CHÂU MỸ",
      cardsCols: 3,
      cards: [
        { header: "Bến cảng Châu Phi", body: "Tận mắt chứng kiến nỗi thống khổ của người lao động thuộc địa." },
        { header: "New York (Mỹ)", body: "Làm thuê tại khu Brooklyn, vừa làm việc vừa tìm hiểu xã hội Mỹ." },
        { header: "Boston (Mỹ)", body: "Làm thợ phụ bánh tại khách sạn Omni Parker House." }
      ],
      scenicTheme: "ocean",
      bgImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/hanh-trinh-bac-ho-ra-di-tim-duong-cuu-nuoc.jpg",
      caption: "Hình ảnh nước Mỹ đầu thế kỷ XX – Nơi Bác từng dừng chân làm việc",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.92) 0%, rgba(18,19,22,0.75) 60%, #121316 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "28%", height: "4px", rotate: "0deg", opacity: 0.85 },
        pin: { left: "34%", top: "88%", label: "Mỹ & Châu Phi" }
      }
    },
    {
      id: 8,
      eyebrow: "NƯỚC ANH (1913 – 1917)",
      title: "LAO ĐỘNG GIỮA MÙA ĐÔNG LUÂN ĐÔN",
      bullets: [
        { bold: "Cào tuyết trường học:", text: "Làm việc ngoài trời giữa sương mù và giá rét khắc nghiệt." },
        { bold: "Đốt lò sưởi ngầm:", text: "Làm việc dưới tầng hầm nóng bức, thiếu ánh sáng." },
        { bold: "Kiên trì vượt khó:", text: "Dù vất vả vẫn dành tiền mua sách và học tiếng Anh mỗi ngày." }
      ],
      scenicTheme: "snow",
      videoLabel: "LUÂN ĐÔN MÙA ĐÔNG",
      bgImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/images (1).jfif",
      caption: "Khung cảnh Luân Đôn mùa đông giá lạnh năm 1913",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.86) 52%, rgba(18,19,22,0.2) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "32%", height: "3px", rotate: "0deg", opacity: 0.85 },
        pin: { left: "38%", top: "88%", label: "Luân Đôn (1913)" }
      }
    },
    {
      id: 9,
      eyebrow: "TRÁCH NHIỆM VÀ NHÂN CÁCH LAO ĐỘNG",
      title: "LÀM VIỆC TẠI KHÁCH SẠN CARLTON",
      cardsCols: 2,
      cards: [
        { header: "KỶ LUẬT LAO ĐỘNG", body: "Làm việc tỉ mỉ, sạch sẽ trong khu bếp của vua đầu bếp Escoffier." },
        { header: "LÒNG NHÂN ÁI", body: "Giữ lại phần thức ăn dư sạch sẽ để chuyển cho người nghèo." }
      ],
      scenicTheme: "snow",
      bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/images (3).jfif",
      caption: "Khách sạn Carlton Luân Đôn – Nơi Bác làm thợ phụ bếp",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.92) 0%, rgba(18,19,22,0.78) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "36%", height: "3px", rotate: "0deg", opacity: 0.9 },
        pin: { left: "42%", top: "88%", label: "Khách sạn Carlton" }
      }
    },
    {
      id: 10,
      eyebrow: "PHƯƠNG PHÁP TỰ HỌC KHOA HỌC",
      title: "CHINH PHỤC NGOẠI NGỮ NƠI XỨ NGƯỜI",
      cardsCols: 3,
      cards: [
        { header: "01. Học mọi lúc mọi nơi", body: "Tận dụng ngày nghỉ cuối tuần và giờ nghỉ giải lao." },
        { header: "02. Giao tiếp thực tế", body: "Đến công viên Hyde Park luyện nói trước đám đông." },
        { header: "03. Tích lũy tri thức", body: "Đọc báo chí, tài liệu bằng tiếng Anh để mở rộng tầm nhìn." }
      ],
      scenicTheme: "mountains",
      bgImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/images (4).jfif",
      caption: "Công viên Hyde Park tại Luân Đôn – Nơi Bác luyện tập phát âm tiếng Anh",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.85) 60%, rgba(18,19,22,0.3) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "40%", height: "4px", rotate: "0deg", opacity: 0.9 },
        pin: { left: "46%", top: "88%", label: "Hyde Park" }
      }
    },
    {
      id: 11,
      eyebrow: "NƯỚC PHÁP (1917 – 1923) • NGÕ COMPOINT",
      title: "NGHỀ THỢ ẢNH TẠI NGÕ HẺM PARIS",
      bullets: [
        { bold: "Không gian chật hẹp:", text: "Sống trong căn phòng nhỏ không có lò sưởi giữa mùa đông." },
        { bold: "Lao động khéo léo:", text: "Làm nghề phóng ảnh, rửa ảnh và vẽ đồ mỹ nghệ để kiếm sống." },
        { bold: "Phân bổ thời gian:", text: "Làm việc nửa ngày mưu sinh, nửa ngày hoạt động cách mạng." }
      ],
      scenicTheme: "night",
      bgImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/images (5).jfif",
      caption: "Căn ngõ Compoint tại thủ đô Paris, Pháp nơi Bác từng sinh sống",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.9) 55%, rgba(18,19,22,0.22) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "44%", height: "3px", rotate: "0deg", opacity: 0.9 },
        pin: { left: "50%", top: "88%", label: "Ngõ Compoint" }
      }
    },
    {
      id: 12,
      eyebrow: "BƯỚC NGOẶT LAO ĐỘNG TRÍ ÓC",
      title: "RÈN LUYỆN NGÒI BÚT BÁO CHÍ",
      cardsCols: 3,
      cards: [
        { header: "Bước 01", body: "Viết từng mẩu tin ngắn chỉ vài dòng trên báo Pháp." },
        { header: "Bước 02", body: "Kiên trì sửa chữa bản thảo để nâng cao văn phong." },
        { header: "Bước 03", body: "Sáng lập và làm chủ bút tờ báo Le Paria (Người Cùng Khổ)." }
      ],
      scenicTheme: "furnace",
      bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/13-hinh-anh-bac-ho-lam-viec-inkythuatso-04-12-12-54.jpg",
      caption: "Ngòi bút báo chí sắc bén – Vũ khí đấu tranh cách mạng của Bác",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.92) 0%, rgba(18,19,22,0.8) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "48%", height: "4px", rotate: "0deg", opacity: 0.95 },
        pin: { left: "54%", top: "88%", label: "Báo Le Paria" }
      }
    },
    {
      id: 13,
      eyebrow: "HOẠT ĐỘNG QUỐC TẾ (1923 – 1930)",
      title: "KHÔNG NGỪNG NGHỈ TRÊN ĐƯỜNG CÁCH MẠNG",
      cardsCols: 3,
      cards: [
        { header: "Liên Xô (1923 – 1924)", body: "Nghiên cứu lý luận, tham dự các hội nghị quốc tế." },
        { header: "Trung Quốc (1924 – 1927)", body: "Mở lớp đào tạo cán bộ, biên soạn Đường Kách Mệnh." },
        { header: "Thái Lan (1928 – 1929)", body: "Lao động đào giếng, khuân gạch, làm ruộng với kiều bào." }
      ],
      scenicTheme: "snow",
      bgImage: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/1368930895235.webp",
      caption: "Bác Hồ thời kỳ hoạt động cách mạng quốc tế tại Mát-scơ-va",
      maskStyle: "linear-gradient(135deg, #121316 0%, rgba(18,19,22,0.85) 65%, rgba(18,19,22,0.3) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "52%", height: "4px", rotate: "0deg", opacity: 0.95 },
        pin: { left: "58%", top: "88%", label: "Quốc tế" }
      }
    },
    {
      id: 14,
      eyebrow: "TRỞ VỀ TỔ QUỐC • MÙA XUÂN 1941",
      title: "BÁC VỀ PÁC BÓ (CAO BẰNG)",
      bigMetric: "Sau 30 năm bôn ba nơi xứ người",
      bullets: [
        { bold: "Điều kiện gian khổ:", text: "Sống và làm việc trong hang núi ẩm lạnh nơi biên cương." },
        { bold: "Tinh thần lạc quan:", text: "Biến bàn đá chông chênh bên suối thành nơi làm việc lịch sử." }
      ],
      scenicTheme: "stream",
      videoLabel: "PÁC BÓ - CAO BẰNG",
      bgImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/images (6).jfif",
      caption: "Hang Pác Bó và suối Lê-nin tại Cao Bằng – Nơi Bác về nước chỉ đạo cách mạng",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.86) 52%, rgba(18,19,22,0.18) 100%)",
      morph: {
        line: { left: "6%", top: "88%", width: "56%", height: "3px", rotate: "0deg", opacity: 0.95 },
        pin: { left: "62%", top: "88%", label: "Pác Bó (1941)" }
      }
    },
    {
      id: 15,
      eyebrow: "NHÌN LẠI HÀNH TRÌNH VĨ ĐẠI",
      title: "TỔNG KẾT NHỮNG CON SỐ BIẾT NÓI",
      cardsCols: 3,
      cards: [
        { stat: "30 Năm", header: "HÀNH TRÌNH VƯỢT ĐẠI DƯƠNG", body: "Bôn ba tìm đường cứu nước qua 3 đại dương, 4 châu lục." },
        { stat: "28+ Quốc gia", header: "KHẢO SÁT THỰC TIỄN", body: "Đặt chân đến, khảo sát và làm việc thực tế." },
        { stat: "12+ Nghề nghiệp", header: "LAO ĐỘNG CẦN CÙ", body: "Từ phụ bếp, cào tuyết, thợ ảnh đến nhà báo, nhà lý luận." }
      ],
      scenicTheme: "sunrise",
      bgImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80",
      imgUrl: "anh/images (7).jfif",
      caption: "Bản đồ hành trình 30 năm bôn ba khắp các châu lục của Chủ tịch Hồ Chí Minh",
      maskStyle: "radial-gradient(circle at center, rgba(18,19,22,0.82) 0%, #121316 90%)",
      morph: {
        line: { left: "6%", top: "88%", width: "60%", height: "5px", rotate: "0deg", opacity: 1 },
        pin: { left: "66%", top: "88%", label: "Tổng kết số liệu" }
      }
    },
    /* 5 CÂU HỎI TRẮC NGHIỆM TƯƠNG TÁC (SLIDES 16 - 20) - Chỉ xáo trộn nội dung, giữ nguyên nhãn A, B, C, D cố định tại 4 ô */
    {
      id: 16,
      layout: "quiz",
      eyebrow: "CÂU HỎI ÔN TẬP 01 / 05",
      title: "KIM CỔ KHỞI HÀNH",
      subtitle: "Hãy chọn đáp án đúng nhất dựa trên kiến thức lịch sử đã học.",
      question: "Câu 1: Bác Hồ rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước vào ngày tháng năm nào?",
      options: [
        { text: "05/06/1911", correct: true },
        { text: "19/05/1890", correct: false },
        { text: "03/02/1930", correct: false },
        { text: "28/01/1941", correct: false }
      ],
      explanation: "Rất chính xác! Ngày 05/06/1911, người thanh niên Nguyễn Tất Thành bước xuống con tàu Đô đốc Latouche-Tréville rời Bến Nhà Rồng.",
      scenicTheme: "sunrise",
      bgImage: "",
      maskStyle: "none",
      morph: {
        line: { left: "6%", top: "88%", width: "68%", height: "4px", rotate: "0deg", opacity: 1 },
        pin: { left: "72%", top: "88%", label: "Câu hỏi 1" }
      }
    },
    {
      id: 17,
      layout: "quiz",
      eyebrow: "CÂU HỎI ÔN TẬP 02 / 05",
      title: "HÀNH TRANG TỰ LỰC",
      subtitle: "Hãy chọn đáp án đúng nhất dựa trên kiến thức lịch sử đã học.",
      question: "Câu 2: Tên gọi và vị trí công việc đầu tiên của Bác khi làm việc trên con tàu Pháp là gì?",
      options: [
        { text: "Anh Ba - Phụ bếp", correct: true },
        { text: "Anh Văn - Thủy thủ", correct: false },
        { text: "Bác Lý - Thợ máy", correct: false },
        { text: "Nguyễn Ái Quốc - Đốt lò", correct: false }
      ],
      explanation: "Đúng rồi! Bác lấy tên là Văn Ba (Anh Ba) và đảm nhận công việc phụ bếp vất vả trên tàu.",
      scenicTheme: "furnace",
      bgImage: "",
      maskStyle: "none",
      morph: {
        line: { left: "6%", top: "88%", width: "72%", height: "4px", rotate: "0deg", opacity: 1 },
        pin: { left: "76%", top: "88%", label: "Câu hỏi 2" }
      }
    },
    {
      id: 18,
      layout: "quiz",
      eyebrow: "CÂU HỎI ÔN TẬP 03 / 05",
      title: "NHỮNG NĂM THÁNG Ở ANH",
      subtitle: "Hãy chọn đáp án đúng nhất dựa trên kiến thức lịch sử đã học.",
      question: "Câu 3: Trong thời gian sống tại Luân Đôn (Anh), Bác Hồ đã làm những công việc gì để mưu sinh?",
      options: [
        { text: "Cào tuyết cho trường học & Đốt lò sưởi", correct: true },
        { text: "Lái xe buýt hai tầng", correct: false },
        { text: "Dạy học tại trường tiểu học", correct: false },
        { text: "Sửa chữa đồng hồ", correct: false }
      ],
      explanation: "Chính xác! Giữa mùa đông khắc nghiệt ở Luân Đôn, Bác làm nghề cào tuyết và quét dọn, đốt lò sưởi ngầm.",
      scenicTheme: "snow",
      bgImage: "",
      maskStyle: "none",
      morph: {
        line: { left: "6%", top: "88%", width: "76%", height: "4px", rotate: "0deg", opacity: 1 },
        pin: { left: "80%", top: "88%", label: "Câu hỏi 3" }
      }
    },
    {
      id: 19,
      layout: "quiz",
      eyebrow: "CÂU HỎI ÔN TẬP 04 / 05",
      title: "NGỜI BÚT ĐẤU TRANH",
      subtitle: "Hãy chọn đáp án đúng nhất dựa trên kiến thức lịch sử đã học.",
      question: "Câu 4: Tờ báo nào do Bác Hồ cùng các đồng chí cách mạng thành lập tại Pháp năm 1922?",
      options: [
        { text: "Báo Le Paria (Người Cùng Khổ)", correct: true },
        { text: "Báo Thanh Niên", correct: false },
        { text: "Báo Nhân Dân", correct: false },
        { text: "Báo Việt Nam Độc Lập", correct: false }
      ],
      explanation: "Rất giỏi! Bác Hồ là sáng lập viên kiêm chủ bút tờ báo Le Paria (Người Cùng Khổ) vạch trần tội ác thực dân.",
      scenicTheme: "furnace",
      bgImage: "",
      maskStyle: "none",
      morph: {
        line: { left: "6%", top: "88%", width: "80%", height: "4px", rotate: "0deg", opacity: 1 },
        pin: { left: "84%", top: "88%", label: "Câu hỏi 4" }
      }
    },
    {
      id: 20,
      layout: "quiz",
      eyebrow: "CÂU HỎI ÔN TẬP 05 / 05",
      title: "BÀI HỌC VỀ Ý CHÍ LAO ĐỘNG",
      subtitle: "Hãy chọn đáp án đúng nhất dựa trên kiến thức lịch sử đã học.",
      question: "Câu 5: Trong các công việc sau, Bác Hồ CHƯA TỪNG trải qua công việc nào ở giai đoạn đầu bôn ba?",
      options: [
        { text: "Phi công lái máy bay thương mại", correct: true },
        { text: "Thợ phụ bánh tại khách sạn", correct: false },
        { text: "Thợ rửa ảnh và vẽ đồ mỹ nghệ", correct: false },
        { text: "Phụ bếp trên tàu viễn dương", correct: false }
      ],
      explanation: "Chính xác! Bác Hồ chưa từng làm phi công; Bác đã trải qua rất nhiều nghề chân tay và trí óc vất vả để mưu sinh.",
      scenicTheme: "sunrise",
      bgImage: "",
      maskStyle: "none",
      morph: {
        line: { left: "6%", top: "88%", width: "88%", height: "4px", rotate: "0deg", opacity: 1 },
        pin: { left: "88%", top: "88%", label: "Hoàn thành 5/5" }
      }
    }
  ];

  var currentSlideIndex = 0;
  var isEndOfShow = false;
  var isTransitioning = false;
  var activeScenicTheme = "ocean";

  var presentationStage = document.getElementById("presentationStage");
  var slideContentLayer = document.getElementById("slideContentLayer");
  var slideCounter = document.getElementById("slideCounter");
  var fsSlideIndicator = document.getElementById("fsSlideIndicator");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var endShowOverlay = document.getElementById("endShowOverlay");
  var laserPointerDot = document.getElementById("laserPointerDot");

  var thumbnailStrip = document.getElementById("thumbnailStrip");
  var slideBgImage = document.getElementById("slideBgImage");
  var scenicGradientMask = document.getElementById("scenicGradientMask");

  var morphTimelineLine = document.getElementById("MorphRedTimelineLine");
  var morphFocusPin = document.getElementById("MorphRedFocusPin");
  var pinLabel = document.getElementById("pinLabel");
  var canvas = document.getElementById("videoEffectCanvas");
  var ctx = canvas.getContext("2d");

  function shuffleArray(array) {
    var currentIndex = array.length, randomIndex, temporaryValue;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  var shuffledQuizOptions = {};

  function showEndOfPresentation() {
    isEndOfShow = true;
    endShowOverlay.classList.remove("hidden");
    slideCounter.textContent = "KẾT THÚC";
    fsSlideIndicator.textContent = "KẾT THÚC";
    nextBtn.disabled = true;
  }

  function hideEndOfPresentation() {
    isEndOfShow = false;
    endShowOverlay.classList.add("hidden");
    nextBtn.disabled = false;
  }

  function renderSlideContent(index) {
    currentSlideIndex = index;
    var slide = SLIDES_DATA[currentSlideIndex];

    var counterText = String(slide.id).padStart(2, "0") + " / " + SLIDES_DATA.length;
    slideCounter.textContent = counterText;
    fsSlideIndicator.textContent = counterText;

    prevBtn.disabled = (currentSlideIndex === 0);

    if (slide.bgImage) {
      slideBgImage.style.backgroundImage = "url('" + slide.bgImage + "')";
      slideBgImage.style.display = "block";
    } else {
      slideBgImage.style.backgroundImage = "none";
      slideBgImage.style.display = "none";
    }

    scenicGradientMask.style.background = slide.maskStyle;
    activeScenicTheme = slide.scenicTheme || "ocean";

    morphTimelineLine.style.left = slide.morph.line.left;
    morphTimelineLine.style.top = slide.morph.line.top;
    morphTimelineLine.style.width = slide.morph.line.width;
    morphTimelineLine.style.height = slide.morph.line.height;
    morphTimelineLine.style.transform = "rotate(" + slide.morph.line.rotate + ")";
    morphTimelineLine.style.opacity = slide.morph.line.opacity;

    morphFocusPin.style.left = slide.morph.pin.left;
    morphFocusPin.style.top = slide.morph.pin.top;
    pinLabel.textContent = slide.morph.pin.label;

    var html = "";

    if (slide.layout === "quiz") {
      if (!shuffledQuizOptions[slide.id]) {
        shuffledQuizOptions[slide.id] = shuffleArray(slide.options.slice());
      }
      var currentOptions = shuffledQuizOptions[slide.id];
      var slotLabels = ["A", "B", "C", "D"];

      html =
        '<div class="quiz-full-container">' +
          '<div class="eyebrow"><span>' + slide.eyebrow + '</span></div>' +
          '<h1 class="slide-title">' + slide.title + '</h1>' +
          '<p class="slide-subtitle">' + slide.subtitle + '</p>' +
          '<div class="quiz-question-text">' + slide.question + '</div>' +
          '<div class="quiz-options-grid">' +
            currentOptions.map(function (opt, idx) {
              var label = slotLabels[idx];
              return (
                '<div class="quiz-option" data-correct="' + opt.correct + '">' +
                  '<span>' + label + '. ' + opt.text + '</span>' +
                  '<span class="status-icon"></span>' +
                '</div>'
              );
            }).join("") +
          '</div>' +
          '<div id="quizFeedback" class="quiz-feedback" style="display:none;"></div>' +
        '</div>';
    } else {
      var leftContentHtml = "";
      leftContentHtml +=
        '<div class="eyebrow">' +
          '<span>' + slide.eyebrow + '</span>' +
          (slide.videoLabel ? '<span class="video-badge">▶ ' + slide.videoLabel + '</span>' : '') +
        '</div>' +
        '<h1 class="slide-title">' + slide.title + '</h1>';

      if (slide.subtitle) {
        leftContentHtml += '<p class="slide-subtitle">' + slide.subtitle + '</p>';
      }

      if (slide.highlight) {
        leftContentHtml +=
          '<div class="big-metric-box">' +
            '<div class="bullet-text" style="font-size:1.05rem;font-weight:700;color:#ffccd5;">“' + slide.highlight + '”</div>' +
          '</div>';
      }

      if (slide.bigMetric) {
        leftContentHtml +=
          '<div class="big-metric-box">' +
            '<div class="big-metric-value">' + slide.bigMetric + '</div>' +
          '</div>';
      }

      if (slide.bullets) {
        leftContentHtml +=
          '<ul class="red-bullet-list">' +
            slide.bullets.map(function (b) {
              return '<li class="red-bullet-item"><span class="bullet-square"></span><div class="bullet-text"><strong>' + b.bold + '</strong> ' + b.text + '</div></li>';
            }).join("") +
          '</ul>';
      }

      if (slide.cards) {
        leftContentHtml +=
          '<div class="cards-grid cols-' + (slide.cardsCols || 3) + '">' +
            slide.cards.map(function (c) {
              return (
                '<div class="red-card">' +
                  (c.stat ? '<div class="red-card-stat">' + c.stat + '</div>' : '') +
                  '<div class="red-card-header">' + c.header + '</div>' +
                  '<div class="red-card-body">' + c.body + '</div>' +
                '</div>'
              );
            }).join("") +
          '</div>';
      }

      if (slide.footerLabel) {
        leftContentHtml += '<div class="footer-callout">★ ' + slide.footerLabel + '</div>';
      }

      var rightImageHtml =
        '<div class="illustration-card">' +
          '<img class="illustration-img" src="' + slide.imgUrl + '" loading="lazy" alt="Hình minh họa" />' +
          '<div class="illustration-caption">' + slide.caption + '</div>' +
        '</div>';

      html =
        '<div class="slide-split-container">' +
          '<div class="slide-left-col">' + leftContentHtml + '</div>' +
          '<div class="slide-right-col">' + rightImageHtml + '</div>' +
        '</div>';
    }

    slideContentLayer.innerHTML = html;

    if (slide.layout === "quiz") {
      var optionElements = slideContentLayer.querySelectorAll(".quiz-option");
      var feedbackBox = document.getElementById("quizFeedback");
      for (var q = 0; q < optionElements.length; q++) {
        optionElements[q].addEventListener("click", function () {
          var isCorrect = this.getAttribute("data-correct") === "true";
          var iconSpan = this.querySelector(".status-icon");

          for (var k = 0; k < optionElements.length; k++) {
            optionElements[k].classList.remove("correct", "incorrect");
            optionElements[k].querySelector(".status-icon").textContent = "";
          }

          if (isCorrect) {
            this.classList.add("correct");
            iconSpan.textContent = "✓";
            feedbackBox.style.display = "block";
            feedbackBox.style.borderColor = "#10b981";
            feedbackBox.style.color = "#6ee7b7";
            feedbackBox.innerHTML = "✔ " + slide.explanation;
          } else {
            this.classList.add("incorrect");
            iconSpan.textContent = "✕";
            feedbackBox.style.display = "block";
            feedbackBox.style.borderColor = "#ef4444";
            feedbackBox.style.color = "#fca5a5";
            feedbackBox.innerHTML = "✖ Chưa chính xác. Hãy suy nghĩ lại câu hỏi và thử lại!";
          }
        });
      }
    }

    var thumbs = document.querySelectorAll(".thumb-item");
    for (var i = 0; i < thumbs.length; i++) {
      if (i === currentSlideIndex) {
        thumbs[i].classList.add("active");
        thumbs[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else {
        thumbs[i].classList.remove("active");
      }
    }
  }

  function renderSlide(targetIndex) {
    if (targetIndex < 0) return;
    if (targetIndex >= SLIDES_DATA.length) {
      showEndOfPresentation();
      return;
    }

    hideEndOfPresentation();

    if (isTransitioning) return;
    isTransitioning = true;

    slideContentLayer.classList.add("slide-exit");

    setTimeout(function () {
      slideContentLayer.classList.remove("slide-exit");
      renderSlideContent(targetIndex);

      isTransitioning = false;
    }, 280);
  }

  function goNext() {
    if (isEndOfShow) return;
    renderSlide(currentSlideIndex + 1);
  }

  function goPrev() {
    if (isEndOfShow) {
      renderSlide(SLIDES_DATA.length - 1);
      return;
    }
    renderSlide(currentSlideIndex - 1);
  }

  function startSlideShowFullscreen() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (presentationStage.requestFullscreen) {
        presentationStage.requestFullscreen();
      } else if (presentationStage.webkitRequestFullscreen) {
        presentationStage.webkitRequestFullscreen();
      }
    } else {
      exitSlideShowFullscreen();
    }
  }

  function exitSlideShowFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  presentationStage.addEventListener("mouseenter", function () {
    presentationStage.classList.add("laser-active");
  });

  presentationStage.addEventListener("mouseleave", function () {
    presentationStage.classList.remove("laser-active");
  });

  presentationStage.addEventListener("mousemove", function (e) {
    var rect = presentationStage.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    laserPointerDot.style.left = x + "px";
    laserPointerDot.style.top = y + "px";
  });

  var particles = [];
  for (var pIdx = 0; pIdx < 30; pIdx++) {
    particles.push({
      x: Math.random() * 1280,
      y: Math.random() * 720,
      r: Math.random() * 3 + 1.2,
      speedY: Math.random() * 1.4 + 0.5
    });
  }

  var tick = 0;
  canvas.width = 1280;
  canvas.height = 720;

  function drawScenicCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tick += 0.02;

    if (activeScenicTheme === "ocean") {
      for (var i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (var x = 0; x <= canvas.width; x += 40) {
          var y = 550 + i * 34 + Math.sin(x * 0.008 + tick + i) * 16;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = i === 0 ? "rgba(217, 4, 41, 0.12)" : "rgba(255, 255, 255, 0.04)";
        ctx.fill();
      }
    } else if (activeScenicTheme === "snow") {
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      for (var j = 0; j < particles.length; j++) {
        var p = particles[j];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speedY;
        if (p.y > canvas.height) {
          p.y = -5;
          p.x = Math.random() * canvas.width;
        }
      }
    }

    requestAnimationFrame(drawScenicCanvas);
  }

  function initThumbnails() {
    thumbnailStrip.innerHTML = SLIDES_DATA.map(function (s, idx) {
      return '<div class="thumb-item ' + (idx === 0 ? "active" : "") + '" data-index="' + idx + '">Slide ' + String(s.id).padStart(2, "0") + '</div>';
    }).join("");

    var items = thumbnailStrip.querySelectorAll(".thumb-item");
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function () {
        renderSlide(Number(this.getAttribute("data-index")));
      });
    }
  }

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  document.getElementById("fullscreenBtn").addEventListener("click", startSlideShowFullscreen);

  document.getElementById("fsPrevBtn").addEventListener("click", function (e) {
    e.stopPropagation();
    goPrev();
  });
  document.getElementById("fsNextBtn").addEventListener("click", function (e) {
    e.stopPropagation();
    goNext();
  });
  document.getElementById("fsExitBtn").addEventListener("click", function (e) {
    e.stopPropagation();
    exitSlideShowFullscreen();
  });

  document.getElementById("backToSlide20Btn").addEventListener("click", function (e) {
    e.stopPropagation();
    renderSlide(SLIDES_DATA.length - 1);
  });
  document.getElementById("restartShowBtn").addEventListener("click", function (e) {
    e.stopPropagation();
    renderSlide(0);
  });
  document.getElementById("exitEndShowBtn").addEventListener("click", function (e) {
    e.stopPropagation();
    hideEndOfPresentation();
    exitSlideShowFullscreen();
  });

  presentationStage.addEventListener("click", function (e) {
    if (document.fullscreenElement === presentationStage || document.webkitFullscreenElement === presentationStage) {
      if (!isEndOfShow && !e.target.closest(".ppt-laser-controls") && !e.target.closest(".end-show-box") && !e.target.closest(".quiz-option")) {
        goNext();
      }
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      goPrev();
    } else if (e.key.toLowerCase() === "f" || e.key === "F5") {
      e.preventDefault();
      startSlideShowFullscreen();
    }
  });

  initThumbnails();
  renderSlideContent(0);
  drawScenicCanvas();
})();