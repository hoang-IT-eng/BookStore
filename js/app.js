// Modern Library - Shareable State & Functional Simulation Engine using localStorage

const DEFAULT_BOOKS = [
    { id: "1", title: "Nghệ Thuật Tư Duy Rành Mạch", author: "Rolf Dobelli", price: 185000, oldPrice: 250000, discount: 25, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6P0tOLuNrmiCmipF4c_DOg4D0_DYFHPTQlaEjnio9FTlLQThU5qqwDHk_sI5rh-LR3M6zF0ADnQNRdwLJtu89mfLq1BmPmPTrIn5I8UbHzJ4PnOY2xYoxuwzglNb9G64mmNszTpkHjZptvuvFpu8x6HpikLHozlYXWhltaX0uHOHAEwNoeWY1sWvx8W2CpuV0Dk74deu8cTbpSuEfnwUJcLWWpy-P8t-O1CVHi3f4LdXOdCY9wYXctLW_mnzYY-6YthqdbqhxaCk", stock: 45, bestseller: true },
    { id: "2", title: "Sống Clean", author: "Alejandro Junger", price: 180000, oldPrice: 240000, discount: 25, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6AQO0RdwctFP45dFW3CeMdCqxxhka2_LWM2ED_lzgYzIamoJm0BnmuZesCaeU-Xa4egZLaz60EaNXV9yb7iUJvznwNWyH9ZGDtLGu47DaT6ucX16yS2s-10gbEHzhRv0YrM9c-V_IXtRPMz9X1Xl3vWMFSNYOgx5YzZRELDhjVTMw-IhgGjgx_aAFz55Y3kizvuWaPZ8LK5nXfPCi9bUz5jVhXGvbfppneIftG32Q8TclY57VDJQ60S-TbJStb7i4bHBNPVYGjGw", stock: 22, bestseller: false },
    { id: "3", title: "Kỹ năng Tập trung", author: "Cal Newport", price: 150000, oldPrice: 250000, discount: 40, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6D6NFYSjD7q01TTrlDlROcV9ZA5sV3grPh20u6IaD0nTh0NXH85Z28POMA7MoCxZ2g13fEZJSGKNa4mAGJVhLySu80yXFtSdAiehXKoJewvjOqWFWjdWxoqTTUwbw-5S61pYd7sZsaaP4ZV23bPS7Geyl1d8MnMz_cznJ7XlbIdHOG-CcQ8xLjsJGKm8ZGMplIJivdb0GKiv2kysJESz-cxkxYXnHz9xNbM5bS49bEdiwVOAtwmFtYkt61uU8lCZNwRXGWq6oX9-os", stock: 8, bestseller: true },
    { id: "4", title: "Chiến lược Kinh doanh", author: "Michael Porter", price: 320000, oldPrice: 380000, discount: 15, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAszWcHQEZoZE2LH8RTT68WKUMQFfuokqLybOZ2TcnGQ2MtCw8950FtkdRI_7zEznxJcA6cYfWvFBlvTcGz1HNulzdklorolNYhMkSmdAaBx6vf73i6L2FbUvjoXbNIKwlXneXyox2sp_2ewkm3VtTCa2hTZEbNzPoAPmIvQIUKq0QNkZdQwCwfjApYpXyEz9gbUI0UenmwxuIeCbh6ZcSYDd3oPe154kgsjDdNpB23I3IcbtMYuEvM4cdsFbWMol_P0jh5kOCAIgQ", stock: 15, bestseller: false },
    { id: "5", title: "Tâm lý học Hành vi", author: "Daniel Kahneman", price: 280000, oldPrice: 350000, discount: 20, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFDznnKjF1-GJkCtvaicvDplQIgUEfH91vjTOtp62PoNlXZB4ZmTeixIbRbtC--DdFtV_8eXzhTDI_WxaUn7PksPRs1jDAWfndL9u_WkGzlE7IDKVLulpnHyrbqh-J9TNMm5LYqV7GL_93Y8r6h2U0JOqqyKO4XU9BeLC6uXmopT-Yv185OYmSbnPslYd8Com7OLbcFDJjUaTun8Elmk2CihPWQimuwT-ulEUhTbUFziEMGYZyvbZSX5nTfHLPE3LJXBM3xLp9rgg", stock: 3, bestseller: true },
    { id: "6", title: "Kiến trúc Tối giản", author: "John Pawson", price: 245000, oldPrice: 320000, discount: 23, category: "literature", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWavHsKjaufLrp5E96frwJeV_xRYc7QiD9WMVn8DHYEn5e56QSP8VnEiR0adBtG2FOUxNr5q7kUenEQ-M5dxtIeYrqn3GkU6ACQ6_dnaJz175rRQvNAdBNXo1vLm0T56cfISMs_ZCSKu45-Z_gP6_uBRpYfH_2FjqrOkaF71MKNl1-j8o59-Y6yby9EMMtCOGheJPDmZUV-rWm1NlzAbJKlIKBFqXEZT8qogHkOfPstNjg1YNOqT7H-9dy3ZVbZVPfRyjXbT-78YA", stock: 12, bestseller: false },
    { id: "7", title: "Kỹ thuật Số Tương lai", author: "Hiroshi Sugimoto", price: 190000, oldPrice: 190000, discount: 0, category: "academic", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2H19qERKoI5bP8hnsXRtI925s3uxYkIcubro7aFjx1pm7RzPVHcqAdBSreXE4IO8TPl5EcNfPt2UAJUXRzjRYw---G8o9N4014ltHaz8QjyuafsWwMme58q4ops6aEli8nyZXdQ6KaO_SqDD2RfmkkojguYA53TCKlPQdtDFlrmc6ZkCUn3yuPW_qvD-AFTa8nuI754zZB39du7M6SPAOMWEhdhF7jMETodafZ_1RK6uyC4c2aZkWfzcYSBV34ZsBpaBb5dGOYE4", stock: 25, bestseller: false },
    { id: "8", title: "Thiết kế & Đạo đức", author: "Alice Rawsthorn", price: 175000, oldPrice: 175000, discount: 0, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN6pnSurDjoAybXAmCiUdaYIBIEZ9jKJTUx_3c2BkgJZZAfFz1ovgB25z5MX0bIOiWYk8dgnwYXAVFi0-9zD8hACXOBy_-MQjHT5uhigBaG1DywFtKOHgp7RzWIvYt8tnRy_79u0Gz1jReTy47FFPmDVWfo_lX5hDoBJKmaDDETBqhV7b99c3yK3m4qr2KPSgZyxIrgq1iSBzqxzy9w30k3UNIb9Ke-jqKRZcfRH_Ph2UMYvarQ0Nwr75zyd6G8KeYlVd3qtI7cRs", stock: 14, bestseller: false },
    { id: "9", title: "Sắc màu Cuộc sống", author: "Various Authors", price: 110000, oldPrice: 110000, discount: 0, category: "children", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3kMctUse9dcKLtjsryPzkc8nmTo_BgvqQHdUuQUn4AfV1EVSFzOO3_uMnR0qUZ5aGZGaaP9efrx-LVwy9gpuY0wonwPKR2TjGIk_oWsUScMVKpkDLUsDdj9iWxd3hjva7SXQiN1RaaxMMEff81eeIaGNHWjgZiYOPDeXAitT239C_vecWs5nR7Hu_sZmObQdFhQkZKFsVeyqOKATT3hAir1WYqZt3IO1d-JOblnirVCHPp53GD4KKUy-_jSOdeKdNLhgrVZoBYsY", stock: 30, bestseller: false },
    { id: "10", title: "Lịch sử Thế giới", author: "Andrew Marr", price: 350000, oldPrice: 350000, discount: 0, category: "literature", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvVAQkA_vlWsEzw4t8g65BBXC3wnvPtYiC7SvUEp-3JB-u40rICnQ57M8PwpN-5rL7WWc2VIuyvDB0mpbpxg0qQIc6elhIZ-xMtiDUykIUYHvIy45oMw1m-k5o9sI1Vdw-qUpBTUKZPtOch-9ufO20zGCM-31ddkruzpcWo9cONYcY0DywW5xiDRkNlXcpwTpIBm1ckiOGocKKB5FR9McmZocdtom-9P21GED0hdVkVxje-mcyzSE41iNQqaSb0nRTuPBU4QWGJD8", stock: 19, bestseller: false },
    { id: "11", title: "Nghệ Thuật Của Sự Tĩnh Lặng", author: "Pico Iyer", price: 189000, oldPrice: 245000, discount: 25, category: "literature", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsPeCh7UeYB40ISsrCsx6n0NWGV6GwfbE8j6-Bxn2g5PsyEZUYek1tvOc9lPe50BQ7hjzvV1bPI5EKZjqQVCgjDrAo0kvPdh3orYdDkprbcl0Y4LdKaOlBv9BM1PL7bsc63vOZjyOrgs4-Ar4Q4fBMvo5XwQQSM9NC84asMyfopwobb-zxJGbiEHbg3U6lktuBtg25GU7-734O_y7cPeCdDHqJhnD3T2c1QJN7ntsr7671Qqk3_O_6rostfbMB1P52Bl0NrkAQWlQ", stock: 50, bestseller: true },
    { id: "12", title: "Tư Duy Phản Biện", author: "Richard Paul", price: 210000, oldPrice: 210000, discount: 0, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhb4z_y7sDLQ3Q5D9PKHFX2RFrp_K8a5R_Yw58-jNYiWmUPUtJAHg4YWYwfyagjML-TmGXELEZrcIIwzcv2-xAPLh0KHLJXemwlHvi5TZPm8zfCChJaLE4RkVlvbvV3qWSY3IVNxFrmjktj8CxZ_NoKalqdenJMTOUncFfHSagNTjcdUdDmqgyN-lQt4O1affWbztlguXPd1XM-MBMD0l_cElA_AQGUEqe1UfA_km4jOLYuXc-UId0xYLdt4V6gjOLtVIlm9p-fyA", stock: 12, bestseller: false },
    { id: "13", title: "Sức Mạnh Của Thói Quen", author: "Charles Duhigg", price: 155000, oldPrice: 155000, discount: 0, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd7vJZVwpsfT7etF-tcfcrn9mI749mM2VHkzYKYM-txZ02aZ-9gpRsnJwev5VfHIeArcheMoANyWmODhrSgCU5CH0H8eedWANgCuPrxuUfL2btj-uyd6e1Kmp0GPddls7UXP6nw2LcO-cev_-XvEwraoW6SnbLKGzfKO4nKWT3lAKOg6afmDSCrr0n-29KNZ6HS49ZhZcb1TG0LKhGAJo6jsweYHsGh_PT8dvLB68hdwedWmM1_SIBQRn5T8EYPE9hGPGuzhsSanA", stock: 35, bestseller: false },
    { id: "14", title: "Nhà Giả Kim", author: "Paulo Coelho", price: 89000, oldPrice: 89000, discount: 0, category: "literature", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoaUDe1mIOocHk1mIJT1Y3k3StIQPfW9Ww9LHWEVyrSo1lBIrSEyq5Krx7otELQxTYqrGyZx2svBZVVTGgEyeTVcmpd4SxqCUmourEyzcDH-MGaVDrzcFsMvh2mXGFSrNP0ULoU973an-bjSHhzDwxBNAShYYJ34fuqcQRDsdy4bogz7kcXo8S-zZGuIwn9-aQK2J8uvAEXbQSzkQc8qzIDTNREDyk2G-A5sGWTZeHUgfDy_RpjNiO0JXzkpX0tt-_QBi9JygCjSY", stock: 80, bestseller: false },
    { id: "15", title: "Thoát Khỏi Vùng An Toàn", author: "Andy Molinsky", price: 178000, oldPrice: 178000, discount: 0, category: "skills", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJOkclUEPnYMkKlrbTzDXzyIMYePtsYp6tpa8Ikmd4YVY_O6dWZMWLNWchX4G2Im0M7iVHyDi-45rAybat5SROm3BC98ZBRmC1-E4a13Vj3X-b8ZRO5o-YYT24j5-tzCxmglI0dLcqXS9_GfVhWlx6HKNS2QNFRpI0r8sGs0j0PNb1hj4GA6wqmWdm47fsgg8iGgOQQR7kjfaFeTXhrpVngSgBNyhoPxDFH_OgXq-b0Pmrv28-wZ45sniQ20a4FGAoxiEVh3kfOOw", stock: 18, bestseller: false }
];

const DEFAULT_USERS = [
    { username: "minh.nguyen@example.com", password: "123456", name: "Nguyễn Minh", phone: "0901 234 567", dob: "1995-08-15" }
];

const DEFAULT_ORDERS = [
    { id: "ML-202401", date: "15/05/2024", total: 450000, itemsCount: 2, status: "Đã giao", customerEmail: "minh.nguyen@example.com", items: [{ id: "1", title: "Nghệ Thuật Tư Duy Rành Mạch", quantity: 1, price: 185000 }, { id: "3", title: "Kỹ năng Tập trung", quantity: 1, price: 150000 }] },
    { id: "ML-202402", date: "18/05/2024", total: 225000, itemsCount: 1, status: "Đang vận chuyển", customerEmail: "minh.nguyen@example.com", items: [{ id: "11", title: "Nghệ Thuật Của Sự Tĩnh Lặng", quantity: 1, price: 189000 }] }
];

const DEFAULT_BLOG_POSTS = [
    { id: "1", title: "5 cuốn sách thay đổi cách bạn tư duy", excerpt: "Khám phá những tác phẩm kinh điển giúp mở rộng tầm nhìn và phát triển tư duy phản biện.", content: "Trong thế giới đầy biến động, việc nuôi dưỡng tư duy rành mạch là kỹ năng sống còn. Cuốn \"Nghệ Thuật Tư Duy Rành Mạch\" của Rolf Dobelli mang đến 52 quy tắc tư duy thực tiễn, giúp bạn tránh các sai lầm nhận thức phổ biến.\n\nBên cạnh đó, \"Kỹ năng Tập trung\" của Cal Newport nhấn mạnh giá trị của sự tập trung sâu trong thời đại phân tâm. Đây là hai cuốn sách không thể bỏ qua cho bất kỳ ai muốn nâng cao năng suất và chất lượng cuộc sống.", author: "Nguyễn Minh", date: "12/05/2024", category: "Review", bookId: "1", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6P0tOLuNrmiCmipF4c_DOg4D0_DYFHPTQlaEjnio9FTlLQThU5qqwDHk_sI5rh-LR3M6zF0ADnQNRdwLJtu89mfLq1BmPmPTrIn5I8UbHzJ4PnOY2xYoxuwzglNb9G64mmNszTpkHjZptvuvFpu8x6HpikLHozlYXWhltaX0uHOHAEwNoeWY1sWvx8W2CpuV0Dk74deu8cTbpSuEfnwUJcLWWpy-P8t-O1CVHi3f4LdXOdCY9wYXctLW_mnzYY-6YthqdbqhxaCk", readTime: "5 phút" },
    { id: "2", title: "Review: Nghệ Thuật Của Sự Tĩnh Lặng", excerpt: "Pico Iyer dẫn dắt chúng ta tìm về sự bình an giữa nhịp sống hối hả.", content: "Trong cuốn sách này, Pico Iyer chia sẻ hành trình tìm kiếm sự tĩnh lặng giữa thế giới ồn ào. Tác giả khéo léo kết hợp trải nghiệm cá nhân với triết lý sống, khuyến khích độc giả dành thời gian cho chính mình.\n\nĐiểm mạnh của cuốn sách nằm ở ngôn từ nhẹ nhàng nhưng sâu sắc. Mỗi chương như một bài thiền ngắn, giúp bạn thở chậm lại và lắng nghe bản thân.", author: "Trần Linh", date: "08/05/2024", category: "Review", bookId: "11", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsPeCh7UeYB40ISsrCsx6n0NWGV6GwfbE8j6-Bxn2g5PsyEZUYek1tvOc9lPe50BQ7hjzvV1bPI5EKZjqQVCgjDrAo0kvPdh3orYdDkprbcl0Y4LdKaOlBv9BM1PL7bsc63vOZjyOrgs4-Ar4Q4fBMvo5XwQQSM9NC84asMyfopwobb-zxJGbiEHbg3U6lktuBtg25GU7-734O_y7cPeCdDHqJhnD3T2c1QJN7ntsr7671Qqk3_O_6rostfbMB1P52Bl0NrkAQWlQ", readTime: "7 phút" },
    { id: "3", title: "Nhà Giả Kim - Hành trình tìm kho báu nội tâm", excerpt: "Paulo Coelho kể câu chuyện Santiago và bài học về việc theo đuổi ước mơ.", content: "\"Nhà Giả Kim\" là một trong những cuốn sách bán chạy nhất mọi thời đại. Câu chuyện về chàng chăn cừu Santiago và hành trình tìm kho báu ở Ai Cập đã chạm đến trái tim hàng triệu độc giả.\n\nThông điệp cốt lõi: kho báu thực sự thường nằm ngay nơi bạn bắt đầu. Cuốn sách phù hợp với mọi lứa tuổi, đặc biệt là những ai đang tìm kiếm ý nghĩa cuộc sống.", author: "Hoàng Anh", date: "01/05/2024", category: "Review", bookId: "14", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoaUDe1mIOocHk1mIJT1Y3k3StIQPfW9Ww9LHWEVyrSo1lBIrSEyq5Krx7otELQxTYqrGyZx2svBZVVTGgEyeTVcmpd4SxqCUmourEyzcDH-MGaVDrzcFsMvh2mXGFSrNP0ULoU973an-bjSHhzDwxBNAShYYJ34fuqcQRDsdy4bogz7kcXo8S-zZGuIwn9-aQK2J8uvAEXbQSzkQc8qzIDTNREDyk2G-A5sGWTZeHUgfDy_RpjNiO0JXzkpX0tt-_QBi9JygCjSY", readTime: "6 phút" },
    { id: "4", title: "Sách kỹ năng cho người mới đi làm", excerpt: "Danh sách gợi ý giúp bạn tự tin hơn trong môi trường công sở.", content: "Bước vào thế giới công việc, bạn cần trang bị nhiều kỹ năng mềm và cứng. \"Tư Duy Phản Biện\" giúp bạn đánh giá thông tin khách quan hơn. \"Sức Mạnh Của Thói Quen\" hướng dẫn xây dựng thói quen tích cực.\n\n\"Thoát Khỏi Vùng An Toàn\" của Andy Molinsky là cuốn sách lý tưởng cho những ai muốn vượt qua nỗi sợ và thử thách bản thân.", author: "Nguyễn Minh", date: "25/04/2024", category: "Gợi ý", bookId: "12", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhb4z_y7sDLQ3Q5D9PKHFX2RFrp_K8a5R_Yw58-jNYiWmUPUtJAHg4YWYwfyagjML-TmGXELEZrcIIwzcv2-xAPLh0KHLJXemwlHvi5TZPm8zfCChJaLE4RkVlvbvV3qWSY3IVNxFrmjktj8CxZ_NoKalqdenJMTOUncFfHSagNTjcdUdDmqgyN-lQt4O1affWbztlguXPd1XM-MBMD0l_cElA_AQGUEqe1UfA_km4jOLYuXc-UId0xYLdt4V6gjOLtVIlm9p-fyA", readTime: "8 phút" },
    { id: "5", title: "Tâm lý học trong cuộc sống hàng ngày", excerpt: "Daniel Kahneman và những insight về cách não bộ ra quyết định.", content: "\"Tâm lý học Hành vi\" là cuốn sách đáng đọc cho ai quan tâm đến hành vi con người. Kahneman phân biệt hai hệ thống tư duy: nhanh (cảm tính) và chậm (lý trí).\n\nHiểu được cơ chế này giúp bạn đưa ra quyết định tài chính, công việc và cuộc sống tốt hơn.", author: "Trần Linh", date: "20/04/2024", category: "Review", bookId: "5", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFDznnKjF1-GJkCtvaicvDplQIgUEfH91vjTOtp62PoNlXZB4ZmTeixIbRbtC--DdFtV_8eXzhTDI_WxaUn7PksPRs1jDAWfndL9u_WkGzlE7IDKVLulpnHyrbqh-J9TNMm5LYqV7GL_93Y8r6h2U0JOqqyKO4XU9BeLC6uXmopT-Yv185OYmSbnPslYd8Com7OLbcFDJjUaTun8Elmk2CihPWQimuwT-ulEUhTbUFziEMGYZyvbZSX5nTfHLPE3LJXBM3xLp9rgg", readTime: "10 phút" },
    { id: "6", title: "Đọc sách cho trẻ: Gợi ý từ BOOKSTORE", excerpt: "Những cuốn sách thiếu nhi giúp con phát triển trí tưởng tượng.", content: "\"Sắc màu Cuộc sống\" là lựa chọn tuyệt vời cho trẻ em với hình ảnh sinh động và nội dung dễ hiểu. Đọc sách cùng con từ nhỏ giúp xây dựng thói quen học tập suốt đời.\n\nBOOKSTORE luôn cập nhật danh mục sách thiếu nhi chất lượng, an toàn cho mọi lứa tuổi.", author: "Hoàng Anh", date: "15/04/2024", category: "Gợi ý", bookId: "9", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3kMctUse9dcKLtjsryPzkc8nmTo_BgvqQHdUuQUn4AfV1EVSFzOO3_uMnR0qUZ5aGZGaaP9efrx-LVwy9gpuY0wonwPKR2TjGIk_oWsUScMVKpkDLUsDdj9iWxd3hjva7SXQiN1RaaxMMEff81eeIaGNHWjgZiYOPDeXAitT239C_vecWs5nR7Hu_sZmObQdFhQkZKFsVeyqOKATT3hAir1WYqZt3IO1d-JOblnirVCHPp53GD4KKUy-_jSOdeKdNLhgrVZoBYsY", readTime: "4 phút" }
];

const BOOK_REVIEWS = {
    default: [
        { author: "Nguyễn Minh", rating: 5, text: "Cuốn sách rất hay, nội dung sâu sắc và dễ áp dụng vào cuộc sống hàng ngày." },
        { author: "Trần Linh", rating: 4, text: "Đọc xong cảm thấy có thêm nhiều góc nhìn mới. Giao hàng nhanh, sách đẹp." },
        { author: "Hoàng Anh", rating: 5, text: "Một trong những cuốn sách đáng đọc nhất trong năm. Highly recommended!" }
    ]
};

const CHAT_FAQ = [
    { keywords: ["giao hàng", "ship", "vận chuyển"], reply: "Chúng tôi giao hàng miễn phí cho đơn từ 500.000đ tại TP.HCM và Hà Nội. Thời gian giao 2-5 ngày làm việc." },
    { keywords: ["đổi trả", "hoàn", "trả hàng"], reply: "Bạn có thể đổi trả trong 30 ngày nếu sách có lỗi sản xuất. Liên hệ hotline 1900-xxxx để được hỗ trợ." },
    { keywords: ["giảm giá", "coupon", "mã"], reply: "Mã GIAM20 giảm 20% tối đa 50.000đ. Mã FREESHIP miễn phí vận chuyển. Áp dụng tại trang thanh toán." },
    { keywords: ["admin", "quản trị"], reply: "Đăng nhập admin: admin@themodernlibrary.com / admin123" }
];

function initLocalStorage() {
    if (!localStorage.getItem("books")) localStorage.setItem("books", JSON.stringify(DEFAULT_BOOKS));
    if (!localStorage.getItem("users")) localStorage.setItem("users", JSON.stringify(DEFAULT_USERS));
    if (!localStorage.getItem("orders")) localStorage.setItem("orders", JSON.stringify(DEFAULT_ORDERS));
    if (!localStorage.getItem("blogPosts")) localStorage.setItem("blogPosts", JSON.stringify(DEFAULT_BLOG_POSTS));
    if (!localStorage.getItem("wishlist")) localStorage.setItem("wishlist", JSON.stringify([]));
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([
            { id: "1", title: "Nghệ Thuật Tư Duy Rành Mạch", author: "Rolf Dobelli", price: 185000, quantity: 1, image: DEFAULT_BOOKS[0].image },
            { id: "2", title: "Sống Clean", author: "Alejandro Junger", price: 180000, quantity: 1, image: DEFAULT_BOOKS[1].image }
        ]));
    }
}

initLocalStorage();

function getBooks() { return JSON.parse(localStorage.getItem("books")) || DEFAULT_BOOKS; }
function saveBooks(books) { localStorage.setItem("books", JSON.stringify(books)); }
function getCart() { return JSON.parse(localStorage.getItem("cart")) || []; }
function saveCart(cart) { localStorage.setItem("cart", JSON.stringify(cart)); updateCartBadges(); }
function getCurrentUser() { return JSON.parse(localStorage.getItem("currentUser")) || null; }
function saveCurrentUser(user) {
    if (user) { localStorage.setItem("currentUser", JSON.stringify(user)); localStorage.removeItem("loggedOut"); }
    else { localStorage.removeItem("currentUser"); localStorage.setItem("loggedOut", "true"); }
    updateProfileBadges();
}
function getOrders() { return JSON.parse(localStorage.getItem("orders")) || DEFAULT_ORDERS; }
function saveOrders(orders) { localStorage.setItem("orders", JSON.stringify(orders)); }
function getUsers() { return JSON.parse(localStorage.getItem("users")) || DEFAULT_USERS; }
function saveUsers(users) { localStorage.setItem("users", JSON.stringify(users)); }
function getWishlist() { return JSON.parse(localStorage.getItem("wishlist")) || []; }
function saveWishlist(list) { localStorage.setItem("wishlist", JSON.stringify(list)); }
function getBlogPosts() { return JSON.parse(localStorage.getItem("blogPosts")) || DEFAULT_BLOG_POSTS; }
function getBlogPost(id) { return getBlogPosts().find(p => p.id === id); }

function isInWishlist(bookId) { return getWishlist().includes(bookId); }

function toggleWishlist(bookId) {
    let list = getWishlist();
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    if (list.includes(bookId)) {
        list = list.filter(id => id !== bookId);
        saveWishlist(list);
        showNotification(`Đã xóa "${book?.title || 'sách'}" khỏi yêu thích.`);
        return false;
    }
    list.push(bookId);
    saveWishlist(list);
    showNotification(`Đã thêm "${book?.title || 'sách'}" vào yêu thích!`);
    return true;
}

function removeFromWishlist(bookId) {
    saveWishlist(getWishlist().filter(id => id !== bookId));
}

function loginUser(email, password) {
    if ((email === 'admin' || email === 'admin@themodernlibrary.com') && password === 'admin123') {
        const admin = { username: email, name: "Quản trị viên", isAdmin: true };
        saveCurrentUser(admin);
        return { success: true, user: admin, isAdmin: true };
    }
    const users = getUsers();
    const found = users.find(u => u.username.toLowerCase() === email.toLowerCase());
    if (!found) return { success: false, message: "Tài khoản không tồn tại!" };
    if (found.password && found.password !== password) return { success: false, message: "Mật khẩu không đúng!" };
    saveCurrentUser(found);
    return { success: true, user: found };
}

function registerUser(email, password, name) {
    const users = getUsers();
    if (users.find(u => u.username.toLowerCase() === email.toLowerCase())) {
        return { success: false, message: "Email này đã được đăng ký!" };
    }
    const newUser = { username: email, password, name, phone: "", dob: "" };
    users.push(newUser);
    saveUsers(users);
    saveCurrentUser(newUser);
    return { success: true, user: newUser };
}

function requireAdmin() {
    const user = getCurrentUser();
    if (!user || !user.isAdmin) {
        window.location.href = 'dang-nhap-dang-ky.html';
        return false;
    }
    return true;
}

function getCustomerForOrder(order) {
    if (order.customerEmail) {
        const user = getUsers().find(u => u.username.toLowerCase() === order.customerEmail.toLowerCase());
        return { name: user?.name || order.customerEmail.split('@')[0], email: order.customerEmail };
    }
    return { name: "Khách lẻ", email: "—" };
}

function filterBooks(books, options = {}) {
    let filtered = [...books];
    if (options.search) {
        const q = options.search.toLowerCase();
        filtered = filtered.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    }
    if (options.category) filtered = filtered.filter(b => b.category === options.category);
    if (options.filter === 'bestseller') filtered = filtered.filter(b => b.bestseller);
    else if (options.filter === 'new') filtered = filtered.filter(b => b.stock >= 20);
    else if (options.filter === 'deals') filtered = filtered.filter(b => b.discount > 0);
    if (options.maxPrice) filtered = filtered.filter(b => b.price <= options.maxPrice);
    return filtered;
}

function getReportStats() {
    const orders = getOrders();
    const books = getBooks();
    const monthNames = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
    const now = new Date();
    const monthlyRevenue = [];
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const m = d.getMonth();
        const y = d.getFullYear();
        const rev = orders.filter(o => {
            const parts = o.date.split('/');
            if (parts.length !== 3) return false;
            return parseInt(parts[1]) - 1 === m && parseInt(parts[2]) === y;
        }).reduce((s, o) => s + o.total, 0);
        monthlyRevenue.push({ label: monthNames[m], value: rev });
    }
    const maxRev = Math.max(...monthlyRevenue.map(m => m.value), 1);
    const bookSales = {};
    orders.forEach(o => {
        (o.items || []).forEach(item => {
            bookSales[item.id] = (bookSales[item.id] || 0) + (item.quantity || 1);
        });
    });
    const topBooks = Object.entries(bookSales)
        .map(([id, count]) => ({ book: books.find(b => b.id === id), count }))
        .filter(x => x.book)
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    const lowStock = books.filter(b => b.stock < 10);
    return {
        totalRevenue: orders.reduce((s, o) => s + o.total, 0),
        totalOrders: orders.length,
        totalUsers: getUsers().length,
        lowStockCount: lowStock.length,
        monthlyRevenue,
        maxRev,
        topBooks,
        lowStock
    };
}

function addToCart(bookId, quantity = 1) {
    const books = getBooks();
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    let cart = getCart();
    const idx = cart.findIndex(item => item.id === bookId);
    if (idx > -1) cart[idx].quantity += quantity;
    else cart.push({ id: book.id, title: book.title, author: book.author, price: book.price, quantity, image: book.image });
    saveCart(cart);
    showNotification(`Đã thêm "${book.title}" vào giỏ hàng!`);
}

function removeFromCart(bookId) { saveCart(getCart().filter(item => item.id !== bookId)); }
function clearCart() { saveCart([]); }

function updateCartQuantity(bookId, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === bookId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== bookId);
        saveCart(cart);
    }
}

function updateCartBadges() {
    const totalQty = getCart().reduce((acc, item) => acc + item.quantity, 0);
    document.querySelectorAll('[data-icon="shopping_cart"] + span, .shopping-cart-badge').forEach(badge => {
        badge.textContent = totalQty;
        badge.style.display = totalQty > 0 ? 'flex' : 'none';
    });
}

function updateProfileBadges() { patchPersonClicks(); }

function patchPersonClicks() {
    document.querySelectorAll('.material-symbols-outlined').forEach(sym => {
        const text = sym.textContent.trim();
        const parent = sym.parentElement;
        if (!parent || (parent.tagName !== 'BUTTON' && parent.tagName !== 'A')) return;
        if (text === 'person') {
            parent.onclick = (e) => {
                e.preventDefault();
                window.location.href = getCurrentUser() ? 'trang-ca-nhan.html' : 'dang-nhap-dang-ky.html';
            };
        }
        if (text === 'shopping_cart') {
            parent.onclick = (e) => {
                e.preventDefault();
                window.location.href = 'gio-hang-thanh-toan.html';
            };
        }
    });
}

function showNotification(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-lg left-lg z-[999] flex flex-col gap-sm pointer-events-none';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'bg-primary text-on-primary px-lg py-md rounded-lg shadow-lg flex items-center gap-sm transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto border border-outline-variant';
    toast.innerHTML = `<span class="material-symbols-outlined text-secondary">check_circle</span><span class="font-label-md">${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-4', 'opacity-0'), 50);
    setTimeout(() => { toast.classList.add('opacity-0', '-translate-y-4'); setTimeout(() => toast.remove(), 300); }, 3000);
}

function initGlobalSearch() {
    document.querySelectorAll('input[placeholder*="Tìm kiếm"]').forEach(input => {
        const parent = input.parentElement;
        const searchBtn = parent ? parent.querySelector('.material-symbols-outlined') : null;
        const doSearch = () => {
            const val = input.value.trim();
            if (val) window.location.href = `danh-muc-sach.html?search=${encodeURIComponent(val)}`;
        };
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
        if (searchBtn) { searchBtn.style.cursor = 'pointer'; searchBtn.onclick = doSearch; }
    });
}

function formatVND(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', 'đ');
}

function renderBookCard(book, layout = 'grid') {
    const discountBadge = book.discount > 0 ? `<div class="absolute top-sm right-sm bg-secondary text-on-secondary px-sm py-xs rounded-full font-label-sm">-${book.discount}%</div>` : '';
    const oldPriceHtml = book.oldPrice && book.oldPrice > book.price ? `<span class="font-label-sm text-on-surface-variant line-through text-xs">${formatVND(book.oldPrice)}</span>` : '';

    if (layout === 'flash') {
        return `<div class="group bg-surface rounded-xl p-md book-card-shadow border border-outline-variant flex flex-col">
            <a href="chi-tiet-sach.html?id=${book.id}" class="relative aspect-[3/4] mb-md overflow-hidden rounded-lg block">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="${book.image}" alt="${book.title}"/>${discountBadge}
            </a>
            <h3 class="font-headline-sm text-[18px] text-on-surface line-clamp-1 mb-xs"><a href="chi-tiet-sach.html?id=${book.id}" class="hover:text-primary transition-colors">${book.title}</a></h3>
            <p class="font-label-md text-on-surface-variant mb-md">${book.author}</p>
            <div class="mt-auto"><div class="flex items-center gap-sm mb-md"><span class="font-title-lg text-secondary">${formatVND(book.price)}</span>${oldPriceHtml}</div>
            <button onclick="addToCart('${book.id}')" class="w-full py-sm bg-secondary text-on-secondary rounded font-label-md hover:opacity-90 transition-colors">Thêm vào giỏ</button></div></div>`;
    }
    if (layout === 'carousel') {
        return `<div class="flex-none w-64 group cursor-pointer" onclick="window.location.href='chi-tiet-sach.html?id=${book.id}'">
            <div class="relative aspect-[2/3] mb-md overflow-hidden rounded-lg shadow-sm">
                <img class="w-full h-full object-cover" src="${book.image}" alt="${book.title}"/>
                <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span class="px-lg py-sm bg-surface text-primary rounded-full font-label-sm shadow-md">Xem chi tiết</span>
                </div>
            </div>
            <h4 class="font-title-lg text-on-surface mb-xs hover:text-primary transition-colors line-clamp-1">${book.title}</h4>
            <p class="font-label-md text-on-surface-variant">${book.author}</p></div>`;
    }
    let statusText = book.stock > 0 ? 'Còn hàng' : 'Hết hàng';
    let statusClass = book.stock > 0 ? 'text-primary' : 'text-outline';
    if (book.bestseller) { statusText = 'Bestseller'; statusClass = 'text-secondary'; }
    return `<div class="bg-white border border-outline-variant rounded-xl overflow-hidden book-card-shadow flex flex-col">
        <div class="relative aspect-[3/4] overflow-hidden bg-surface-container">
            <a href="chi-tiet-sach.html?id=${book.id}" class="block w-full h-full"><img class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="${book.image}" alt="${book.title}"/></a>${discountBadge}
        </div>
        <div class="p-md flex-1 flex flex-col gap-xs">
            <span class="text-label-sm ${statusClass} uppercase tracking-wider font-bold">${statusText}</span>
            <h3 class="font-headline-sm text-headline-sm text-on-surface leading-tight hover:text-primary transition-colors"><a href="chi-tiet-sach.html?id=${book.id}">${book.title}</a></h3>
            <p class="text-label-md text-on-surface-variant">${book.author}</p>
            <div class="mt-auto pt-sm flex flex-col gap-xs">
                <div class="flex items-center gap-sm"><span class="font-title-lg text-title-lg text-primary">${formatVND(book.price)}</span>${book.oldPrice && book.oldPrice > book.price ? `<span class="text-label-sm text-on-surface-variant line-through ml-sm">${formatVND(book.oldPrice)}</span>` : ''}</div>
                <button onclick="addToCart('${book.id}')" class="w-full mt-sm py-sm bg-secondary text-white font-bold rounded-lg hover:bg-on-secondary-container transition-colors active:scale-95 duration-100 flex items-center justify-center gap-sm">
                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span> Thêm vào giỏ</button>
            </div>
        </div></div>`;
}

function renderHomeSections() {
    const books = getBooks();
    const flashGrid = document.getElementById('flash-sale-grid');
    if (flashGrid) {
        const flashBooks = books.filter(b => b.discount > 0).sort((a, b) => b.discount - a.discount).slice(0, 5);
        flashGrid.innerHTML = flashBooks.map(b => renderBookCard(b, 'flash')).join('');
    }
    const recCarousel = document.getElementById('recommendations-carousel');
    if (recCarousel) {
        const recBooks = [...books].sort(() => Math.random() - 0.5).slice(0, 5);
        recCarousel.innerHTML = recBooks.map(b => renderBookCard(b, 'carousel')).join('');
    }
    const bestsellerGrid = document.getElementById('bestseller-grid');
    if (bestsellerGrid) {
        const best = books.filter(b => b.bestseller).slice(0, 4);
        bestsellerGrid.innerHTML = best.map(b => renderBookCard(b, 'flash')).join('');
    }
}

function renderWishlistTab(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const wishlist = getWishlist();
    const books = getBooks();
    if (wishlist.length === 0) {
        container.innerHTML = `<div class="col-span-full py-xl text-center flex flex-col items-center gap-md">
            <span class="material-symbols-outlined text-[48px] text-outline">favorite</span>
            <p class="text-body-md text-on-surface-variant">Danh sách yêu thích trống.</p>
            <a href="danh-muc-sach.html" class="px-md py-sm bg-primary text-on-primary rounded-lg text-sm font-bold">Khám phá sách</a></div>`;
        return;
    }
    container.innerHTML = '';
    wishlist.forEach(id => {
        const book = books.find(b => b.id === id);
        if (!book) return;
        const div = document.createElement('div');
        div.className = 'group';
        div.innerHTML = `<div class="relative aspect-[2/3] overflow-hidden rounded-lg bg-surface-container-high border border-outline-variant transition-all hover:shadow-xl">
            <a href="chi-tiet-sach.html?id=${book.id}"><img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="${book.image}" alt="${book.title}"/></a>
            <button onclick="removeFromWishlist('${book.id}'); renderWishlistTab('wishlist-grid'); showNotification('Đã xóa khỏi yêu thích.');" class="absolute top-sm right-sm p-xs bg-surface/80 backdrop-blur rounded-full text-error hover:bg-error/10 transition-colors">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span></button></div>
            <div class="mt-md"><h3 class="font-headline-sm text-[18px] text-primary truncate"><a href="chi-tiet-sach.html?id=${book.id}">${book.title}</a></h3>
            <p class="text-label-md text-on-surface-variant mb-sm">${book.author}</p>
            <div class="flex items-center justify-between"><span class="font-bold text-on-surface">${formatVND(book.price)}</span>
            <button onclick="addToCart('${book.id}')" class="text-secondary font-bold text-label-md hover:underline">Thêm vào giỏ</button></div></div>`;
        container.appendChild(div);
    });
}

function initMobileMenu() {
    if (document.getElementById('mobile-menu-drawer')) return;
    const overlay = document.createElement('div');
    overlay.id = 'mobile-menu-overlay';
    overlay.className = 'mobile-menu-overlay';
    const drawer = document.createElement('div');
    drawer.id = 'mobile-menu-drawer';
    drawer.className = 'mobile-menu-drawer';
    drawer.innerHTML = `<div class="p-lg border-b border-outline-variant flex justify-between items-center">
        <span class="font-display-lg text-primary text-xl">BOOKSTORE</span>
        <button id="mobile-menu-close" class="p-xs"><span class="material-symbols-outlined">close</span></button></div>
        <nav class="p-lg flex flex-col gap-md">
        <a class="text-primary font-bold py-sm border-b border-outline-variant" href="danh-muc-sach.html">Danh mục</a>
        <a class="text-on-surface-variant font-medium py-sm" href="danh-muc-sach.html?filter=bestseller">Bán chạy</a>
        <a class="text-on-surface-variant font-medium py-sm" href="danh-muc-sach.html?filter=new">Sách mới</a>
        <a class="text-on-surface-variant font-medium py-sm" href="danh-muc-sach.html?filter=deals">Khuyến mãi</a>
        <a class="text-on-surface-variant font-medium py-sm" href="blog-review-sach.html">Blog</a>
        <a class="text-on-surface-variant font-medium py-sm" href="trang-ca-nhan.html">Tài khoản</a>
        <a class="text-on-surface-variant font-medium py-sm" href="gio-hang-thanh-toan.html">Giỏ hàng</a></nav>`;
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    const open = () => { overlay.classList.add('open'); drawer.classList.add('open'); };
    const close = () => { overlay.classList.remove('open'); drawer.classList.remove('open'); };
    document.querySelectorAll('button .material-symbols-outlined').forEach(sym => {
        if (sym.textContent.trim() === 'menu') {
            sym.parentElement.classList.add('mobile-menu-btn');
            sym.parentElement.onclick = (e) => { e.preventDefault(); open(); };
        }
    });
    document.getElementById('mobile-menu-close').onclick = close;
    overlay.onclick = close;
}

function initNewsletterForm() {
    document.querySelectorAll('footer').forEach(footer => {
        const emailInput = footer.querySelector('input[type="email"]');
        const submitBtn = emailInput?.parentElement?.querySelector('button');
        if (submitBtn && emailInput) {
            submitBtn.onclick = (e) => {
                e.preventDefault();
                if (emailInput.value.trim()) {
                    showNotification('Đã đăng ký nhận tin thành công!');
                    emailInput.value = '';
                } else showNotification('Vui lòng nhập email!');
            };
        }
    });
}

function initChatWidget() {
    const chatToggle = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = chatWindow?.querySelector('.overflow-y-auto, [class*="overflow-y-auto"]');
    const chatInput = chatWindow?.querySelector('input[type="text"]');
    const sendBtn = chatWindow?.querySelector('.material-symbols-outlined');
    if (!chatToggle || !chatWindow) return;
    chatToggle.onclick = () => chatWindow.classList.toggle('hidden');
    if (chatClose) chatClose.onclick = () => chatWindow.classList.add('hidden');
    const reply = (text) => {
        if (!chatMessages) return;
        const div = document.createElement('div');
        div.className = 'bg-surface p-sm rounded-lg rounded-tl-none self-start max-w-[80%] text-sm shadow-sm';
        div.textContent = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };
    const handleSend = () => {
        if (!chatInput?.value.trim()) return;
        const msg = chatInput.value.trim().toLowerCase();
        const userDiv = document.createElement('div');
        userDiv.className = 'bg-primary-container p-sm rounded-lg rounded-tr-none self-end max-w-[80%] text-sm shadow-sm ml-auto';
        userDiv.textContent = chatInput.value.trim();
        chatMessages?.appendChild(userDiv);
        chatInput.value = '';
        setTimeout(() => {
            const faq = CHAT_FAQ.find(f => f.keywords.some(k => msg.includes(k)));
            reply(faq ? faq.reply : 'Cảm ơn bạn! Nhân viên sẽ phản hồi sớm. Hotline: 1900-xxxx.');
        }, 500);
    };
    if (sendBtn) sendBtn.onclick = handleSend;
    if (chatInput) chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });
}

function initSharedNav() {
    document.querySelectorAll('header nav a, header nav a').forEach(link => {
        const text = link.textContent.trim();
        if (text === 'Categories' || text === 'Danh mục') link.href = 'danh-muc-sach.html';
        else if (text === 'Bestsellers' || text === 'Bán chạy') link.href = 'danh-muc-sach.html?filter=bestseller';
        else if (text === 'New Releases' || text === 'Sách mới') link.href = 'danh-muc-sach.html?filter=new';
        else if (text === 'Deals' || text === 'Khuyến mãi') link.href = 'danh-muc-sach.html?filter=deals';
    });
}

function fixFooterLinks() {
    const map = {
        'Privacy Policy': 'chinh-sach.html', 'Chính sách bảo mật': 'chinh-sach.html',
        'Terms of Service': 'dieu-khoan.html', 'Điều khoản': 'dieu-khoan.html',
        'Shipping Info': 'chinh-sach.html', 'Thông tin vận chuyển': 'chinh-sach.html',
        'Contact Us': 'lien-he.html', 'Liên hệ': 'lien-he.html',
        'Điều khoản dịch vụ': 'dieu-khoan.html', 'Chính sách đổi trả': 'chinh-sach.html',
        'Thông tin giao hàng': 'chinh-sach.html', 'Newsletter': 'lien-he.html',
        'Câu hỏi thường gặp': 'lien-he.html', 'Hệ thống cửa hàng': 'lien-he.html',
        'Tất cả sản phẩm': 'danh-muc-sach.html',
        'Sách bán chạy': 'danh-muc-sach.html?filter=bestseller',
        'Sách mới về': 'danh-muc-sach.html?filter=new',
        'Khuyến mãi': 'danh-muc-sach.html?filter=deals'
    };
    document.querySelectorAll('footer a').forEach(a => {
        const text = a.textContent.trim();
        if (map[text]) a.href = map[text];
        else if (a.getAttribute('href') === '#') a.href = 'lien-he.html';
    });
}

const ADMIN_NAV_ITEMS = [
    { id: 'dashboard', href: 'admin-dashboard.html', icon: 'dashboard', label: 'Tổng quan' },
    { id: 'products', href: 'admin-san-pham.html', icon: 'menu_book', label: 'Sản phẩm' },
    { id: 'orders', href: 'admin-don-hang.html', icon: 'shopping_bag', label: 'Đơn hàng' },
    { id: 'customers', href: 'admin-khach-hang.html', icon: 'group', label: 'Khách hàng' },
    { id: 'reports', href: 'admin-bao-cao.html', icon: 'analytics', label: 'Báo cáo' }
];

function initAdminSidebar(activeId) {
    const sidebar = document.getElementById('admin-sidebar');
    if (!sidebar) return;

    const user = getCurrentUser();
    const adminName = user?.name || 'Quản trị viên';

    const navLinks = ADMIN_NAV_ITEMS.map(item => {
        const isActive = item.id === activeId;
        const cls = isActive
            ? 'flex items-center gap-md px-md py-md rounded-lg bg-primary-container text-on-primary-container transition-all duration-200'
            : 'flex items-center gap-md px-md py-md rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all duration-200';
        const iconFill = isActive ? "style=\"font-variation-settings: 'FILL' 1;\"" : '';
        return `<a class="${cls}" href="${item.href}">
            <span class="material-symbols-outlined" ${iconFill}>${item.icon}</span>
            <span class="font-label-md">${item.label}</span>
        </a>`;
    }).join('');

    const productBtn = activeId === 'products' ? `
        <div class="px-md pb-md">
            <button id="btn-add-product" type="button" class="w-full flex items-center justify-center gap-sm py-md rounded-xl bg-secondary text-on-secondary font-label-md hover:bg-secondary-container transition-colors">
                <span class="material-symbols-outlined">add</span> Thêm sách mới
            </button>
        </div>` : '';

    sidebar.innerHTML = `
        <div class="p-lg flex items-center gap-md">
            <span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">auto_stories</span>
            <h1 class="font-headline-sm text-primary tracking-tight">BOOKSTORE</h1>
        </div>
        <nav class="flex-1 px-md py-md space-y-xs overflow-y-auto">
            <div class="px-md py-sm text-label-sm text-outline uppercase tracking-widest font-bold">Menu Chính</div>
            ${navLinks}
            <div class="pt-xl px-md py-sm text-label-sm text-outline uppercase tracking-widest font-bold">Cửa hàng</div>
            <a class="flex items-center gap-md px-md py-md rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-all duration-200" href="index.html">
                <span class="material-symbols-outlined">storefront</span>
                <span class="font-label-md">Về cửa hàng</span>
            </a>
        </nav>
        ${productBtn}
        <div class="p-lg border-t border-outline-variant bg-surface-container-lowest space-y-sm">
            <div class="flex items-center gap-md">
                <div class="w-10 h-10 rounded-full overflow-hidden bg-primary-fixed ring-1 ring-outline-variant flex items-center justify-center text-primary font-bold">${adminName.charAt(0)}</div>
                <div class="flex flex-col min-w-0">
                    <span class="font-label-md text-on-surface font-bold truncate">${adminName}</span>
                    <span class="text-label-sm text-outline">Quản trị viên</span>
                </div>
            </div>
            <button id="admin-logout-btn" type="button" class="w-full flex items-center justify-center gap-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors text-sm">
                <span class="material-symbols-outlined text-[18px]">logout</span> Đăng xuất
            </button>
        </div>`;

    document.getElementById('admin-logout-btn')?.addEventListener('click', () => {
        saveCurrentUser(null);
        showNotification('Đã đăng xuất!');
        setTimeout(() => { window.location.href = 'dang-nhap-dang-ky.html'; }, 800);
    });

    document.querySelectorAll('[data-admin-add-product]').forEach(btn => {
        btn.onclick = () => { window.location.href = 'admin-san-pham.html'; };
    });
}

function initAdminLayout() {
    const sidebar = document.getElementById('admin-sidebar');
    if (!sidebar) return;
    const pageMap = {
        'admin-dashboard.html': 'dashboard',
        'admin-san-pham.html': 'products',
        'admin-don-hang.html': 'orders',
        'admin-khach-hang.html': 'customers',
        'admin-bao-cao.html': 'reports'
    };
    const page = pageMap[window.location.pathname.split('/').pop() || ''];
    if (page) initAdminSidebar(page);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadges();
    patchPersonClicks();
    initGlobalSearch();
    initMobileMenu();
    initNewsletterForm();
    initChatWidget();
    initSharedNav();
    fixFooterLinks();
    renderHomeSections();
    initAdminLayout();
    const footers = document.querySelectorAll('footer');
    footers.forEach(footer => {
        const copyright = footer.querySelector('p, div');
        if (copyright && copyright.textContent.includes('All rights reserved') && !footer.querySelector('a[href="admin-dashboard.html"]')) {
            const adminLink = document.createElement('a');
            adminLink.href = 'admin-dashboard.html';
            adminLink.className = 'text-xs text-on-surface-variant hover:text-primary transition-colors underline ml-lg';
            adminLink.textContent = 'Trang Quản Trị Admin';
            copyright.parentElement.appendChild(adminLink);
        }
    });
});
