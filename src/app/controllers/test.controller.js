import {responseSuccess} from "@/utils/helpers";

export async function getData(req, res) {
    const data = [
        {
            "id": 1,
            "name": "Lạc Trôi",
            "author": "Sơn Tùng M-TP",
            "url": "https://example.com/lac-troi.mp3",
            "genre": "Pop",
            "releaseYear": 2017,
            "rating": 4.8,
            "description": "Một bài hát nổi tiếng của Sơn Tùng M-TP với giai điệu bắt tai và lời ca đầy cảm xúc."
        },
        {
            "id": 2,
            "name": "Bạc Phận",
            "author": "Jack, K-ICM",
            "url": "https://example.com/bac-phan.mp3",
            "genre": "Ballad",
            "releaseYear": 2019,
            "rating": 4.7,
            "description": "Bài hát mang phong cách ballad với câu chuyện tình buồn và giai điệu sâu lắng."
        },
        {
            "id": 3,
            "name": "Người Lạ Ơi",
            "author": "Karik, Orange",
            "url": "https://example.com/nguoi-la-oi.mp3",
            "genre": "Rap",
            "releaseYear": 2018,
            "rating": 4.6,
            "description": "Một bản rap kết hợp với giọng ca nữ đầy nội lực, truyền tải thông điệp về sự cô đơn trong tình yêu."
        },
        {
            "id": 4,
            "name": "Hồng Nhan",
            "author": "Jack",
            "url": "https://example.com/hong-nhan.mp3",
            "genre": "Pop",
            "releaseYear": 2019,
            "rating": 4.5,
            "description": "Bài hát gây sốt trong cộng đồng giới trẻ với giai điệu vui tươi và ca từ dễ nhớ."
        },
        {
            "id": 5,
            "name": "Đừng Quên Tên Anh",
            "author": "Hoa Vinh",
            "url": "https://example.com/dung-quen-ten-anh.mp3",
            "genre": "Ballad",
            "releaseYear": 2018,
            "rating": 4.4,
            "description": "Ca khúc ballad nhẹ nhàng với lời ca chân thành và giai điệu dễ chịu."
        },
        {
            "id": 6,
            "name": "Em Gái Mưa",
            "author": "Hương Tràm",
            "url": "https://example.com/em-gai-mua.mp3",
            "genre": "Ballad",
            "releaseYear": 2017,
            "rating": 4.9,
            "description": "Một bài hát ballad nổi tiếng của Hương Tràm, kể về tình yêu đơn phương và những cảm xúc sâu lắng."
        },
        {
            "id": 7,
            "name": "Cơn Mưa Ngang Qua",
            "author": "Sơn Tùng M-TP",
            "url": "https://example.com/con-mua-ngang-qua.mp3",
            "genre": "Pop",
            "releaseYear": 2012,
            "rating": 4.7,
            "description": "Bài hát đầu tiên đưa tên tuổi của Sơn Tùng M-TP đến với công chúng, với giai điệu dễ nhớ và ca từ sâu sắc."
        },
        {
            "id": 8,
            "name": "Tình Yêu Hoa Gió",
            "author": "Trương Thế Vinh",
            "url": "https://example.com/tinh-yeu-hoa-gio.mp3",
            "genre": "Pop",
            "releaseYear": 2016,
            "rating": 4.3,
            "description": "Ca khúc pop với giai điệu nhẹ nhàng, lãng mạn, phù hợp với những khoảnh khắc tình yêu."
        },
        {
            "id": 9,
            "name": "Anh Ơi Ở Lại",
            "author": "Chi Pu",
            "url": "https://example.com/anh-oi-o-lai.mp3",
            "genre": "Ballad",
            "releaseYear": 2019,
            "rating": 4.5,
            "description": "Một bản ballad cảm động với giai điệu buồn và ca từ chân thành, dễ đi vào lòng người."
        },
        {
            "id": 10,
            "name": "Chạy Ngay Đi",
            "author": "Sơn Tùng M-TP",
            "url": "https://example.com/chay-ngay-di.mp3",
            "genre": "Pop",
            "releaseYear": 2018,
            "rating": 4.6,
            "description": "Ca khúc đầy sôi động với giai điệu mạnh mẽ và phong cách biểu diễn ấn tượng của Sơn Tùng M-TP."
        },
        {
            "id": 11,
            "name": "Có Chắc Yêu Là Đây",
            "author": "Sơn Tùng M-TP",
            "url": "https://example.com/co-chac-yeu-la-day.mp3",
            "genre": "Pop",
            "releaseYear": 2020,
            "rating": 4.8,
            "description": "Một bản hit khác của Sơn Tùng M-TP với giai điệu vui tươi và ca từ đáng yêu."
        },
        {
            "id": 12,
            "name": "Gửi Anh Xa Nhớ",
            "author": "Bích Phương",
            "url": "https://example.com/gui-anh-xa-nho.mp3",
            "genre": "Pop",
            "releaseYear": 2017,
            "rating": 4.5,
            "description": "Ca khúc ngọt ngào, lãng mạn với giọng ca nhẹ nhàng của Bích Phương."
        },
        {
            "id": 13,
            "name": "Hãy Trao Cho Anh",
            "author": "Sơn Tùng M-TP ft. Snoop Dogg",
            "url": "https://example.com/hay-trao-cho-anh.mp3",
            "genre": "Pop",
            "releaseYear": 2019,
            "rating": 4.9,
            "description": "Bài hát hợp tác giữa Sơn Tùng M-TP và rapper nổi tiếng Snoop Dogg, với giai điệu sôi động và hiện đại."
        },
        {
            "id": 14,
            "name": "Hạnh Phúc Mới",
            "author": "Noo Phước Thịnh",
            "url": "https://example.com/hanh-phuc-moi.mp3",
            "genre": "Ballad",
            "releaseYear": 2016,
            "rating": 4.4,
            "description": "Ca khúc ballad ngọt ngào của Noo Phước Thịnh, với lời ca đầy tình cảm."
        },
        {
            "id": 15,
            "name": "Anh Nhà Ở Đâu Thế",
            "author": "AMEE ft. B Ray",
            "url": "https://example.com/anh-nha-o-dau-the.mp3",
            "genre": "Pop",
            "releaseYear": 2019,
            "rating": 4.6,
            "description": "Bài hát vui tươi, đáng yêu của AMEE và rapper B Ray, với giai điệu dễ nhớ."
        },
        {
            "id": 16,
            "name": "Em Không Là Duy Nhất",
            "author": "Tóc Tiên",
            "url": "https://example.com/em-khong-la-duy-nhat.mp3",
            "genre": "Ballad",
            "releaseYear": 2018,
            "rating": 4.7,
            "description": "Ca khúc ballad buồn của Tóc Tiên, kể về sự chia tay trong tình yêu."
        },
        {
            "id": 17,
            "name": "Một Nhà",
            "author": "Da LAB",
            "url": "https://example.com/mot-nha.mp3",
            "genre": "Pop",
            "releaseYear": 2015,
            "rating": 4.8,
            "description": "Bài hát với giai điệu vui tươi và ca từ dễ thương, kể về cuộc sống gia đình hạnh phúc."
        },
        {
            "id": 18,
            "name": "Phía Sau Một Cô Gái",
            "author": "Soobin Hoàng Sơn",
            "url": "https://example.com/phia-sau-mot-co-gai.mp3",
            "genre": "Ballad",
            "releaseYear": 2016,
            "rating": 4.9,
            "description": "Ca khúc ballad nổi tiếng của Soobin Hoàng Sơn, với giai điệu buồn và lời ca đầy cảm xúc."
        },
        {
            "id": 19,
            "name": "Lỡ Thương Một Người",
            "author": "Nguyễn Đình Vũ",
            "url": "https://example.com/lo-thuong-mot-nguoi.mp3",
            "genre": "Ballad",
            "releaseYear": 2017,
            "rating": 4.3,
            "description": "Bài hát kể về nỗi lòng của người đã lỡ yêu một người không thể quên."
        },
        {
            "id": 20,
            "name": "Nơi Này Có Anh",
            "author": "Sơn Tùng M-TP",
            "url": "https://example.com/noi-nay-co-anh.mp3",
            "genre": "Pop",
            "releaseYear": 2017,
            "rating": 4.8,
            "description": "Ca khúc ngọt ngào của Sơn Tùng M-TP, với giai điệu vui tươi và lời ca yêu đời."
        },
        {
            "id": 21,
            "name": "Đi Để Trở Về",
            "author": "Soobin Hoàng Sơn",
            "url": "https://example.com/di-de-tro-ve.mp3",
            "genre": "Pop",
            "releaseYear": 2017,
            "rating": 4.6,
            "description": "Bài hát về tình cảm gia đình và quê hương, với giai điệu dễ thương và ca từ ý nghĩa."
        },
        {
            "id": 22,
            "name": "Yêu Là Tha Thu",
            "author": "OnlyC",
            "url": "https://example.com/yeu-la-tha-thu.mp3",
            "genre": "Pop",
            "releaseYear": 2017,
            "rating": 4.7,
            "description": "Bài hát với giai điệu vui tươi, kể về tình yêu và sự tha thứ trong mối quan hệ."
        },
        {
            "id": 23,
            "name": "Đã Lỡ Yêu Em Nhiều",
            "author": "JustaTee",
            "url": "https://example.com/da-lo-yeu-em-nhieu.mp3",
            "genre": "Pop",
            "releaseYear": 2017,
            "rating": 4.5,
            "description": "Ca khúc ngọt ngào của JustaTee, kể về tình yêu sâu đậm và những cảm xúc khó quên."
        },
        {
            "id": 24,
            "name": "Yêu Một Người Vô Tâm",
            "author": "Bảo Anh",
            "url": "https://example.com/yeu-mot-nguoi-vo-tam.mp3",
            "genre": "Ballad",
            "releaseYear": 2016,
            "rating": 4.4,
            "description": "Bài hát ballad buồn của Bảo Anh, kể về tình yêu đơn phương và nỗi lòng của người yêu."
        },
        {
            "id": 25,
            "name": "Ánh Nắng Của Anh",
            "author": "Đức Phúc",
            "url": "https://example.com/anh-nang-cua-anh.mp3",
            "genre": "Ballad",
            "releaseYear": 2017,
            "rating": 4.9,
            "description": "Ca khúc ngọt ngào của Đức Phúc, kể về tình yêu đẹp và sự ấm áp của người yêu."
        },
        {
            "id": 26,
            "name": "Hương Đêm Bay Xa",
            "author": "Hari Won",
            "url": "https://example.com/huong-dem-bay-xa.mp3",
            "genre": "Pop",
            "releaseYear": 2016,
            "rating": 4.5,
            "description": "Bài hát vui tươi của Hari Won, với giai điệu bắt tai và ca từ dễ nhớ."
        },
        {
            "id": 27,
            "name": "Sao Em Nỡ",
            "author": "JayKii",
            "url": "https://example.com/sao-em-no.mp3",
            "genre": "Ballad",
            "releaseYear": 2018,
            "rating": 4.6,
            "description": "Ca khúc buồn của JayKii, kể về nỗi đau và sự tiếc nuối khi tình yêu tan vỡ."
        },
        {
            "id": 28,
            "name": "Chạm Đáy Nỗi Đau",
            "author": "Erik",
            "url": "https://example.com/cham-day-noi-dau.mp3",
            "genre": "Ballad",
            "releaseYear": 2018,
            "rating": 4.7,
            "description": "Bài hát ballad đầy cảm xúc của Erik, kể về nỗi đau và sự tổn thương trong tình yêu."
        },
        {
            "id": 29,
            "name": "Từ Ngày Em Đến",
            "author": "Da LAB",
            "url": "https://example.com/tu-ngay-em-den.mp3",
            "genre": "Pop",
            "releaseYear": 2017,
            "rating": 4.8,
            "description": "Ca khúc vui tươi của Da LAB, kể về niềm vui và hạnh phúc khi có người yêu bên cạnh."
        },
        {
            "id": 30,
            "name": "Thằng Điên",
            "author": "JustaTee ft. Phương Ly",
            "url": "https://example.com/thang-dien.mp3",
            "genre": "Pop",
            "releaseYear": 2018,
            "rating": 4.9,
            "description": "Bài hát với giai điệu vui tươi và ca từ dễ thương, kể về một chàng trai điên vì yêu."
        }
    ];

    return responseSuccess(res, data, 201);
}
