(function () {
  "use strict";

  var SLIDES_DATA = [
    // PHẦN I: SLIDES 1 - 4
    {
      id: 1,
      eyebrow: "CHỦ ĐỀ THUYẾT TRÌNH",
      title: "TẤM GƯƠNG LAO ĐỘNG CẦN CÙ CỦA BÁC HỒ",
      subtitle: "Hành trình tự lực cánh sinh trên con đường tìm đường cứu nước (1911 – 1941)",
      footerLabel: "Bài học về ý chí, nghị lực và giá trị của sức lao động",
      scenicTheme: "ocean",
      videoLabel: "VIDEO LOOP: SÓNG BIỂN BÌNH MINH",
      bgImage: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.86) 50%, rgba(18,19,22,0.2) 100%)",
      morph: {
        bar: { left: "3.2%", top: "14%", width: "10px", height: "72%", opacity: 1, radius: "6px" },
        line: { left: "6%", top: "88%", width: "88%", height: "3px", rotate: "0deg", opacity: 0.7 },
        pin: { left: "82%", top: "88%", label: "1911 • Khởi hành" }
      }
    },
    {
      id: 2,
      eyebrow: "BỐI CẢNH LỊCH SỬ",
      title: "ĐẤT NƯỚC ĐẦU THẾ KỶ XX",
      bullets: [
        { bold: "Khủng hoảng đường lối:", text: "Các phong trào yêu nước truyền thống đều rơi vào bế tắc." },
        { bold: "Trăn trở lớn:", text: "Cần tìm một con đường mới để giải phóng dân tộc." },
        { bold: "Tầm nhìn vượt thời đại:", text: "Quyết định đi sang phương Tây để tìm hiểu thực tế." }
      ],
      scenicTheme: "mountains",
      bgImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.9) 52%, rgba(18,19,22,0.25) 100%)",
      morph: {
        bar: { left: "6.5%", top: "28%", width: "260px", height: "6px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "90%", width: "45%", height: "3px", rotate: "0deg", opacity: 0.5 },
        pin: { left: "51.5%", top: "90%", label: "Việt Nam • Đầu TK XX" }
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
      videoLabel: "CINEMAGRAPH: BẾN CẢNG NHÀ RỒNG",
      bgImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.85) 55%, rgba(18,19,22,0.2) 100%)",
      morph: {
        bar: { left: "4.2%", top: "16%", width: "8px", height: "68%", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "90%", width: "80%", height: "4px", rotate: "0deg", opacity: 0.9 },
        pin: { left: "30%", top: "90%", label: "Bến Nhà Rồng • 05/06/1911" }
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
      maskStyle: "radial-gradient(circle at 75% 50%, rgba(18,19,22,0.25) 0%, #121316 72%)",
      morph: {
        bar: { left: "6.5%", top: "10%", width: "87%", height: "6px", opacity: 0.9, radius: "8px" },
        line: { left: "6.5%", top: "90%", width: "87%", height: "4px", rotate: "0deg", opacity: 0.9 },
        pin: { left: "50%", top: "90%", label: "Đôi bàn tay tự lực" }
      }
    },

    // PHẦN II: SLIDES 5 - 11
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
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.9) 55%, rgba(217,4,41,0.28) 100%)",
      morph: {
        bar: { left: "3.5%", top: "30%", width: "12px", height: "48%", opacity: 1, radius: "6px" },
        line: { left: "6.5%", top: "90%", width: "65%", height: "3px", rotate: "0deg", opacity: 0.7 },
        pin: { left: "38%", top: "90%", label: "Tàu Latouche-Tréville" }
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
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.9) 54%, rgba(18,19,22,0.2) 100%)",
      morph: {
        bar: { left: "6.5%", top: "26%", width: "180px", height: "5px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "90%", width: "75%", height: "3px", rotate: "0deg", opacity: 0.7 },
        pin: { left: "48%", top: "90%", label: "Tự học ban đêm" }
      }
    },
    {
      id: 7,
      eyebrow: "HÀNH TRÌNH QUA CÁC CHÂU LỤC (1912 – 1913)",
      title: "Bôn Ba Qua Châu Phi Và Châu Mỹ",
      cardsCols: 3,
      cards: [
        { header: "Bến cảng Châu Phi", body: "Tận mắt chứng kiến nỗi thống khổ của người lao động thuộc địa." },
        { header: "New York (Mỹ)", body: "Làm thuê tại khu Brooklyn, vừa làm việc vừa tìm hiểu xã hội Mỹ." },
        { header: "Boston (Mỹ)", body: "Làm thợ phụ bánh tại khách sạn Omni Parker House." }
      ],
      scenicTheme: "ocean",
      bgImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.92) 0%, rgba(18,19,22,0.75) 60%, #121316 100%)",
      morph: {
        bar: { left: "6.5%", top: "24%", width: "220px", height: "5px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "89%", width: "87%", height: "4px", rotate: "0deg", opacity: 1 },
        pin: { left: "62%", top: "89%", label: "New York & Boston (1912–1913)" }
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
      videoLabel: "VIDEO LOOP: TUYẾT RƠI MÙA ĐÔNG LUÂN ĐÔN",
      bgImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.86) 52%, rgba(18,19,22,0.2) 100%)",
      morph: {
        bar: { left: "2.8%", top: "12%", width: "14px", height: "76%", opacity: 1, radius: "6px" },
        line: { left: "6.5%", top: "90%", width: "82%", height: "3px", rotate: "0deg", opacity: 0.8 },
        pin: { left: "70%", top: "90%", label: "Luân Đôn (1913–1917)" }
      }
    },
    {
      id: 9,
      eyebrow: "TRÁCH NHIỆM VÀ NHÂN CÁCH LAO ĐỘNG",
      title: "LÀM VIỆC TẠI KHÁCH SẠN CARLTON",
      cardsCols: 2,
      cards: [
        { header: "KỶ LUẬT LAO ĐỘNG", body: "Làm việc tỉ mỉ, sạch sẽ và nghiêm túc trong khu bếp của vua đầu bếp Escoffier." },
        { header: "LÒNG NHÂN ÁI", body: "Giữ lại phần thức ăn dư sạch sẽ để chuyển cho người nghèo thay vì đổ bỏ." }
      ],
      scenicTheme: "snow",
      bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.92) 0%, rgba(18,19,22,0.78) 100%)",
      morph: {
        bar: { left: "6.5%", top: "26%", width: "320px", height: "5px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "90%", width: "82%", height: "3px", rotate: "0deg", opacity: 0.6 },
        pin: { left: "73%", top: "90%", label: "Khách sạn Carlton • Anh" }
      }
    },
    {
      id: 10,
      eyebrow: "PHƯƠNG PHÁP TỰ HỌC KHOA HỌC",
      title: "CHINH PHỤC NGOẠI NGỮ NƠI XỨ NGƯỜI",
      cardsCols: 3,
      cards: [
        { header: "01. Học mọi lúc mọi nơi", body: "Tận dụng ngày nghỉ cuối tuần và giờ nghỉ giải lao." },
        { header: "02. Giao tiếp thực tế", body: "Đến công viên Hyde Park lắng nghe và luyện nói trước đám đông." },
        { header: "03. Tích lũy tri thức", body: "Đọc báo chí, tài liệu bằng tiếng Anh để mở rộng tầm nhìn." }
      ],
      scenicTheme: "mountains",
      bgImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.85) 60%, rgba(18,19,22,0.3) 100%)",
      morph: {
        bar: { left: "6.5%", top: "25%", width: "240px", height: "5px", opacity: 1, radius: "4px" },
        line: { left: "93%", top: "18%", width: "60%", height: "4px", rotate: "90deg", opacity: 0.75 },
        pin: { left: "93%", top: "48%", label: "Hyde Park • Luân Đôn" }
      }
    },
    {
      id: 11,
      eyebrow: "NƯỚC PHÁP (1917 – 1923) • NGÕ COMPOINT",
      title: "NGHỀ THỢ ẢNH TẠI NGÕ HẺM PARIS",
      bullets: [
        { bold: "Không gian chật hẹp:", text: "Sống trong căn phòng nhỏ không có lò sưởi giữa mùa đông lạnh giá." },
        { bold: "Lao động khéo léo:", text: "Làm nghề phóng ảnh, rửa ảnh và vẽ đồ mỹ nghệ để kiếm sống." },
        { bold: "Phân bổ thời gian:", text: "Làm việc nửa ngày để mưu sinh, nửa ngày hoạt động yêu nước." }
      ],
      scenicTheme: "night",
      bgImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.9) 55%, rgba(18,19,22,0.22) 100%)",
      morph: {
        bar: { left: "95.5%", top: "12%", width: "10px", height: "76%", opacity: 1, radius: "6px" },
        line: { left: "6.5%", top: "90%", width: "85%", height: "3px", rotate: "0deg", opacity: 0.85 },
        pin: { left: "78%", top: "90%", label: "Ngõ Compoint • Paris" }
      }
    },

    // PHẦN III: SLIDES 12 - 16
    {
      id: 12,
      eyebrow: "BƯỚC NGOẶT LAO ĐỘNG TRÍ ÓC",
      title: "RÈN LUYỆN NGÒI BÚT BÁO CHÍ",
      cardsCols: 3,
      cards: [
        { header: "Bước 01", body: "Viết từng mẩu tin ngắn chỉ vài dòng trên báo Pháp." },
        { header: "Bước 02", body: "Kiên trì sửa chữa, đối chiếu bản thảo để nâng cao văn phong." },
        { header: "Bước 03", body: "Sáng lập và làm chủ bút tờ báo Le Paria (Người Cùng Khổ)." }
      ],
      scenicTheme: "furnace",
      bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.92) 0%, rgba(18,19,22,0.8) 100%)",
      morph: {
        bar: { left: "6.5%", top: "25%", width: "280px", height: "5px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "55%", width: "87%", height: "4px", rotate: "0deg", opacity: 0.5 },
        pin: { left: "82%", top: "89%", label: "Báo Le Paria • Paris" }
      }
    },
    {
      id: 13,
      eyebrow: "HOẠT ĐỘNG QUỐC TẾ (1923 – 1930)",
      title: "KHÔNG NGỪNG NGHỈ TRÊN ĐƯỜNG CÁCH MẠNG",
      cardsCols: 3,
      cards: [
        { header: "Liên Xô (1923 – 1924)", body: "Nghiên cứu lý luận, viết báo và tham dự các hội nghị quốc tế." },
        { header: "Trung Quốc (1924 – 1927)", body: "Mở lớp đào tạo cán bộ, biên soạn sách Đường Kách Mệnh." },
        { header: "Thái Lan (1928 – 1929)", body: "Cùng lao động đào giếng, khuân gạch, làm ruộng với kiều bào." }
      ],
      scenicTheme: "snow",
      bgImage: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(135deg, #121316 0%, rgba(18,19,22,0.85) 65%, rgba(18,19,22,0.3) 100%)",
      morph: {
        bar: { left: "6.5%", top: "24%", width: "260px", height: "5px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "90%", width: "88%", height: "4px", rotate: "-4deg", opacity: 0.85 },
        pin: { left: "84%", top: "86%", label: "Liên Xô • Trung Quốc • Thái Lan" }
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
      videoLabel: "VIDEO LOOP: SUỐI LÊ-NIN & RỪNG PÁC BÓ",
      bgImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(90deg, #121316 0%, rgba(18,19,22,0.86) 52%, rgba(18,19,22,0.18) 100%)",
      morph: {
        bar: { left: "3.2%", top: "15%", width: "10px", height: "70%", opacity: 1, radius: "6px" },
        line: { left: "6.5%", top: "90%", width: "88%", height: "3px", rotate: "0deg", opacity: 0.9 },
        pin: { left: "86%", top: "90%", label: "Pác Bó • Cao Bằng (1941)" }
      }
    },
    {
      id: 15,
      eyebrow: "NẾP SỐNG LAO ĐỘNG HÀNG NGÀY",
      title: "TẤM GƯƠNG CẦN CÙ NƠI CHIẾN KHU",
      cardsCols: 4,
      cards: [
        { header: "Lãnh đạo kháng chiến", body: "Soạn thảo tài liệu, chỉ đạo công việc từ sáng sớm đến khuya." },
        { header: "Tăng gia sản xuất", body: "Trực tiếp cuốc đất, trồng rau, tưới cây sau giờ làm việc." },
        { header: "Rèn luyện sức khỏe", body: "Tập thể dục, leo núi, bơi lội đều đặn mỗi ngày." },
        { header: "Gần gũi nhân dân", body: "Cùng ăn, cùng ở, cùng làm việc với đồng bào và chiến sĩ." }
      ],
      scenicTheme: "stream",
      bgImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.9) 0%, rgba(18,19,22,0.82) 100%)",
      morph: {
        bar: { left: "6.5%", top: "23%", width: "220px", height: "5px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "92%", width: "87%", height: "3px", rotate: "0deg", opacity: 0.6 },
        pin: { left: "88%", top: "92%", label: "Chiến khu Việt Bắc" }
      }
    },
    {
      id: 16,
      eyebrow: "NHÌN LẠI HÀNH TRÌNH VĨ ĐẠI",
      title: "NHỮNG CON SỐ BIẾT NÓI",
      cardsCols: 3,
      cards: [
        { stat: "30 Năm", header: "HÀNH TRÌNH VƯỢT ĐẠI DƯƠNG", body: "Bôn ba tìm đường cứu nước qua 3 đại dương, 4 châu lục." },
        { stat: "28+ Quốc gia", header: "KHẢO SÁT THỰC TIỄN", body: "Đặt chân đến, khảo sát và làm việc thực tế." },
        { stat: "12+ Nghề nghiệp", header: "LAO ĐỘNG CẦN CÙ", body: "Từ phụ bếp, cào tuyết, thợ ảnh đến nhà báo, nhà lý luận." }
      ],
      scenicTheme: "sunrise",
      bgImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "radial-gradient(circle at center, rgba(18,19,22,0.82) 0%, #121316 90%)",
      morph: {
        bar: { left: "6.5%", top: "24%", width: "300px", height: "6px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "88%", width: "87%", height: "5px", rotate: "0deg", opacity: 1 },
        pin: { left: "50%", top: "88%", label: "30 Năm • 28+ Quốc gia • 12+ Nghề" }
      }
    },

    // PHẦN IV: SLIDES 17 - 20
    {
      id: 17,
      layout: "split4060",
      eyebrow: "GIÁ TRỊ CỐT LÕI",
      title: "QUAN ĐIỂM VỀ LAO ĐỘNG",
      bullets: [
        { bold: "Mọi nghề đều vinh quang:", text: "Lao động chân tay hay lao động trí óc đều đáng trân trọng nếu có ích cho xã hội." },
        { bold: "Đức tính Cần – Kiệm:", text: "Cần cù luôn phải đi đôi với tiết kiệm, có kế hoạch và sáng tạo." },
        { bold: "Nói đi đôi với làm:", text: "Luôn nêu gương trước trong mọi công việc từ nhỏ đến lớn." }
      ],
      scenicTheme: "sunrise",
      bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(90deg, rgba(18,19,22,0.2) 0%, rgba(18,19,22,0.88) 42%, #121316 100%)",
      morph: {
        bar: { left: "0%", top: "0%", width: "38%", height: "100%", opacity: 0.92, radius: "0px" },
        line: { left: "42%", top: "90%", width: "52%", height: "3px", rotate: "0deg", opacity: 0.7 },
        pin: { left: "38%", top: "50%", label: "Cần • Kiệm • Nêu Gương" }
      }
    },
    {
      id: 18,
      eyebrow: "LIÊN HỆ THỰC TIỄN",
      title: "BÀI HỌC CHO THẾ HỆ TRẺ HÔM NAY",
      cardsCols: 3,
      cards: [
        { header: "01. TỰ LẬP & CHỦ ĐỘNG", body: "Không ỷ lại, sẵn sàng bắt đầu từ những công việc nhỏ nhất để rèn luyện bản thân." },
        { header: "02. HỌC TẬP SUỐT ĐỜI", body: "Kiên trì trau dồi tri thức, ngoại ngữ và kỹ năng số trong kỷ nguyên mới." },
        { header: "03. SỐNG CÓ LÝ TƯỞNG", body: "Gắn mục tiêu phát triển cá nhân với sự phồn vinh của đất nước." }
      ],
      scenicTheme: "sunrise",
      bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.92) 0%, rgba(18,19,22,0.8) 100%)",
      morph: {
        bar: { left: "6.5%", top: "24%", width: "260px", height: "5px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "90%", width: "87%", height: "3px", rotate: "0deg", opacity: 0.8 },
        pin: { left: "50%", top: "90%", label: "Thanh niên & Học sinh" }
      }
    },
    {
      id: 19,
      eyebrow: "HÀNH ĐỘNG CỤ THỂ",
      title: "RÈN LUYỆN THEO GƯƠNG BÁC MỖI NGÀY",
      cardsCols: 4,
      cards: [
        { header: "Trong học tập", body: "Chuyên cần trên lớp, chủ động tự học và nghiên cứu tài liệu." },
        { header: "Trong lao động", body: "Tích cực tham gia hoạt động tình nguyện, giữ gìn vệ sinh trường lớp." },
        { header: "Trong quản lý thời gian", body: "Làm việc có kế hoạch, quý trọng từng giờ từng phút." },
        { header: "Trong rèn luyện ý chí", body: "Kiên trì vượt qua khó khăn, không bỏ cuộc trước thử thách." }
      ],
      scenicTheme: "mountains",
      bgImage: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "linear-gradient(180deg, rgba(18,19,22,0.9) 0%, rgba(18,19,22,0.84) 100%)",
      morph: {
        bar: { left: "49.8%", top: "32%", width: "3px", height: "54%", opacity: 0.65, radius: "2px" },
        line: { left: "6.5%", top: "59%", width: "87%", height: "3px", rotate: "0deg", opacity: 0.65 },
        pin: { left: "50%", top: "59%", label: "4 Hành động mỗi ngày" }
      }
    },
    {
      id: 20,
      eyebrow: "TỔNG KẾT BÀI THUYẾT TRÌNH",
      title: "TRÂN TRỌNG CẢM ƠN CÔ VÀ CÁC BẠN ĐÃ LẮNG NGHE!",
      subtitle: "Lao động cần cù, tự lực cánh sinh và học tập không ngừng chính là chìa khóa mở ra tương lai.",
      footerLabel: "Rất mong nhận được câu hỏi và ý kiến đóng góp từ Cô và tập thể lớp!",
      scenicTheme: "sunrise",
      videoLabel: "VIDEO LOOP: BÌNH MINH TRÊN NON SÔNG VIỆT NAM",
      bgImage: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=80",
      maskStyle: "radial-gradient(circle at center, rgba(18,19,22,0.55) 0%, #121316 88%)",
      morph: {
        bar: { left: "6.5%", top: "18%", width: "160px", height: "6px", opacity: 1, radius: "4px" },
        line: { left: "6.5%", top: "86%", width: "87%", height: "4px", rotate: "0deg", opacity: 0.9 },
        pin: { left: "50%", top: "86%", label: "Cảm ơn & Thảo luận (Q&A)" }
      }
    }
  ];

  var currentSlideIndex = 0;
  var isEndOfShow = false;
  var activeScenicTheme = "ocean";

  var presentationStage = document.getElementById("presentationStage");
  var slideContentLayer = document.getElementById("slideContentLayer");
  var slideCounter = document.getElementById("slideCounter");
  var fsSlideIndicator = document.getElementById("fsSlideIndicator");
  var prevBtn = document.getElementById("prevBtn");
  var nextBtn = document.getElementById("nextBtn");
  var endShowOverlay = document.getElementById("endShowOverlay");

  var thumbnailStrip = document.getElementById("thumbnailStrip");
  var slideBgImage = document.getElementById("slideBgImage");
  var scenicGradientMask = document.getElementById("scenicGradientMask");

  var morphAccentBar = document.getElementById("MorphRedAccentBar");
  var morphTimelineLine = document.getElementById("MorphRedTimelineLine");
  var morphFocusPin = document.getElementById("MorphRedFocusPin");
  var pinLabel = document.getElementById("pinLabel");
  var canvas = document.getElementById("videoEffectCanvas");
  var ctx = canvas.getContext("2d");

  // Hiển thị màn hình báo kết thúc bài thuyết trình (khi bấm Tiếp ở Slide 20)
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

  function renderSlide(index) {
    // Chặn lùi quá Slide 01
    if (index < 0) {
      return;
    }

    // Nếu vượt quá Slide 20 -> Không lặp lại Slide 01 mà hiện màn hình Báo kết thúc
    if (index >= SLIDES_DATA.length) {
      showEndOfPresentation();
      return;
    }

    hideEndOfPresentation();
    currentSlideIndex = index;
    var slide = SLIDES_DATA[currentSlideIndex];

    var counterText = String(slide.id).padStart(2, "0") + " / " + SLIDES_DATA.length;
    slideCounter.textContent = counterText;
    fsSlideIndicator.textContent = counterText;

    // Khóa nút Trước khi đang ở Slide 01
    prevBtn.disabled = (currentSlideIndex === 0);

    slideBgImage.style.backgroundImage = "url('" + slide.bgImage + "')";
    scenicGradientMask.style.background = slide.maskStyle;
    activeScenicTheme = slide.scenicTheme || "ocean";

    morphAccentBar.style.left = slide.morph.bar.left;
    morphAccentBar.style.top = slide.morph.bar.top;
    morphAccentBar.style.width = slide.morph.bar.width;
    morphAccentBar.style.height = slide.morph.bar.height;
    morphAccentBar.style.opacity = slide.morph.bar.opacity;
    morphAccentBar.style.borderRadius = slide.morph.bar.radius;

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

    if (slide.layout === "split4060") {
      html =
        '<div class="split-40-60">' +
          '<div class="split-left-red">' +
            '<div class="eyebrow" style="background:rgba(0,0,0,0.28);color:#fff;border-color:#fff;">' + slide.eyebrow + '</div>' +
            '<h1 class="slide-title">' + slide.title + '</h1>' +
          '</div>' +
          '<div class="split-right-content">' +
            '<ul class="red-bullet-list" style="max-width:100%;">' +
              slide.bullets.map(function (b) {
                return '<li class="red-bullet-item"><span class="bullet-square"></span><div class="bullet-text"><strong>' + b.bold + '</strong> ' + b.text + '</div></li>';
              }).join("") +
            '</ul>' +
          '</div>' +
        '</div>';
    } else {
      html +=
        '<div class="eyebrow">' +
          '<span>' + slide.eyebrow + '</span>' +
          (slide.videoLabel ? '<span class="video-badge">▶ ' + slide.videoLabel + '</span>' : '') +
        '</div>' +
        '<h1 class="slide-title">' + slide.title + '</h1>';

      if (slide.subtitle) {
        html += '<p class="slide-subtitle">' + slide.subtitle + '</p>';
      }

      if (slide.highlight) {
        html +=
          '<div class="big-metric-box">' +
            '<div class="bullet-text" style="font-size:1.12rem;font-weight:700;color:#ffccd5;">“' + slide.highlight + '”</div>' +
          '</div>';
      }

      if (slide.bigMetric) {
        html +=
          '<div class="big-metric-box">' +
            '<div class="big-metric-value">' + slide.bigMetric + '</div>' +
          '</div>';
      }

      if (slide.bullets) {
        html +=
          '<ul class="red-bullet-list">' +
            slide.bullets.map(function (b) {
              return '<li class="red-bullet-item"><span class="bullet-square"></span><div class="bullet-text"><strong>' + b.bold + '</strong> ' + b.text + '</div></li>';
            }).join("") +
          '</ul>';
      }

      if (slide.cards) {
        html +=
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
        html += '<div class="footer-callout">★ ' + slide.footerLabel + '</div>';
      }
    }

    slideContentLayer.innerHTML = html;

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

  function goNext() {
    if (isEndOfShow) return;
    renderSlide(currentSlideIndex + 1);
  }

  function goPrev() {
    if (isEndOfShow) {
      // Đang ở màn hình Kết thúc bấm Lùi sẽ quay lại Slide 20
      renderSlide(SLIDES_DATA.length - 1);
      return;
    }
    renderSlide(currentSlideIndex - 1);
  }

  // CHỨC NĂNG BẮT ĐẦU TRÌNH CHIẾU: CHỈ PHÓNG TOÀN MÀN HÌNH KHUNG SLIDE (#presentationStage)
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

  // Hiệu ứng Video/Canvas
  var particles = [];
  for (var pIdx = 0; pIdx < 70; pIdx++) {
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

    var bgGlow = ctx.createRadialGradient(960, 320, 40, 960, 320, 620);
    bgGlow.addColorStop(0, "rgba(217, 4, 41, 0.22)");
    bgGlow.addColorStop(1, "rgba(18, 19, 22, 0)");
    ctx.fillStyle = bgGlow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (activeScenicTheme === "ocean") {
      for (var i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (var x = 0; x <= canvas.width; x += 20) {
          var y = 550 + i * 34 + Math.sin(x * 0.008 + tick + i) * 16;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = i === 0 ? "rgba(217, 4, 41, 0.16)" : "rgba(255, 255, 255, 0.06)";
        ctx.fill();
      }
    } else if (activeScenicTheme === "snow") {
      ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
      for (var j = 0; j < particles.length; j++) {
        var p = particles[j];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speedY;
        p.x += Math.sin(tick + p.y * 0.01) * 0.5;
        if (p.y > canvas.height) {
          p.y = -5;
          p.x = Math.random() * canvas.width;
        }
      }
    } else if (activeScenicTheme === "stream" || activeScenicTheme === "mountains") {
      ctx.beginPath();
      ctx.moveTo(450, canvas.height);
      ctx.lineTo(720, 290);
      ctx.lineTo(980, 490);
      ctx.lineTo(1160, 240);
      ctx.lineTo(1280, 420);
      ctx.lineTo(1280, canvas.height);
      ctx.fillStyle = "rgba(217, 4, 41, 0.12)";
      ctx.fill();
    } else if (activeScenicTheme === "sunrise" || activeScenicTheme === "furnace") {
      var sun = ctx.createRadialGradient(980, 240, 15, 980, 240, 460);
      sun.addColorStop(0, "rgba(217, 4, 41, 0.35)");
      sun.addColorStop(0.5, "rgba(251, 191, 36, 0.14)");
      sun.addColorStop(1, "rgba(18, 19, 22, 0)");
      ctx.fillStyle = sun;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
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

  // Sự kiện nút bấm trên thanh công cụ
  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  document.getElementById("fullscreenBtn").addEventListener("click", startSlideShowFullscreen);

  // Sự kiện cụm nút điều khiển mờ khi đang trình chiếu toàn màn hình
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

  // Sự kiện các nút trên màn hình Kết thúc bài thuyết trình
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

  // Khi đang ở chế độ Trình chiếu toàn màn hình, nhấp chuột trái vào slide sẽ tự tiến tới slide tiếp theo (giống PowerPoint)
  presentationStage.addEventListener("click", function (e) {
    if (document.fullscreenElement === presentationStage || document.webkitFullscreenElement === presentationStage) {
      if (!isEndOfShow && !e.target.closest(".ppt-laser-controls") && !e.target.closest(".end-show-box")) {
        goNext();
      }
    }
  });

  // Điều khiển bằng bàn phím
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

  // Xuất file PowerPoint (.pptx)
  document.getElementById("exportPptxBtn").addEventListener("click", function () {
    if (typeof PptxGenJS === "undefined") {
      alert("Không thể tải thư viện PptxGenJS khi mất kết nối mạng.");
      return;
    }
    var pptx = new PptxGenJS();
    pptx.layout = "LAYOUT_16x9";

    SLIDES_DATA.forEach(function (s) {
      var slide = pptx.addSlide();
      slide.background = { color: "121316" };

      slide.addShape(pptx.ShapeType.rect, {
        x: s.layout === "split4060" ? 0 : 0.4,
        y: s.layout === "split4060" ? 0 : 0.6,
        w: s.layout === "split4060" ? 3.8 : 0.12,
        h: s.layout === "split4060" ? 5.625 : 4.2,
        fill: { color: "D90429" },
        objectName: "!!RedAccentBar"
      });

      slide.addText(s.eyebrow, {
        x: 0.75, y: 0.55, w: 8.5, h: 0.35,
        fontSize: 11, bold: true, color: "D90429"
      });

      slide.addText(s.title, {
        x: 0.75, y: 0.95, w: 8.5, h: 0.95,
        fontSize: 24, bold: true, color: "FFFFFF"
      });
    });

    pptx.writeFile({ fileName: "Tam_Guong_Lao_Dong_Bac_Ho_20Slides.pptx" });
  });

  var vbaModal = document.getElementById("vbaModal");
  var vbaCodeArea = document.getElementById("vbaCodeArea");

  document.getElementById("vbaBtn").addEventListener("click", function () {
    vbaCodeArea.value =
      "Sub EnableMorphAll20Slides()\n" +
      "  Dim sld As Slide\n" +
      "  For Each sld In ActivePresentation.Slides\n" +
      "    sld.SlideShowTransition.EntryEffect = ppEffectMorph\n" +
      "    sld.SlideShowTransition.Duration = 1.25\n" +
      "  Next sld\n" +
      "End Sub";
    vbaModal.classList.remove("hidden");
  });

  document.getElementById("closeModalBtn").addEventListener("click", function () {
    vbaModal.classList.add("hidden");
  });

  document.getElementById("copyVbaBtn").addEventListener("click", function () {
    vbaCodeArea.select();
    navigator.clipboard.writeText(vbaCodeArea.value);
  });

  initThumbnails();
  renderSlide(0);
  drawScenicCanvas();
})();