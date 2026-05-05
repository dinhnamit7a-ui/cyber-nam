// + đầu vào: họ tên, thu nhập, số người phụ thuộc( người dùng nhập);
// + xử lí: 
//      tạo một biến tính: mức thu nhập bị chịu thuế (lương - 4triệu -(số người phụ thuộc *1triệu6))
//      nếu mức thu nhập chịu thuế nhỏ hơn 0 thì ko cần đóng. 
//      tạo một biến tính tiền thuế phải nộp: tiền thuế sẽ tính theo công thức: 
//          (mức thu nhập chịu thế * phần trăm theo từng mức thu nhập, thu nhập càng cao càng phải chịu nhiều thuế)
// + đầu ra: in ra kết quả có được, dùng localstring cho dễ nhìn

const showinfor3 = document.getElementById('showinfor3');
showinfor3.onclick = function () {
    const userName2 = document.getElementById('userName2').value;
    const money = Number(document.getElementById('money').value);
    const nguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value);


    let thuNhapChiuThue = (money - 4000000 - (nguoiPhuThuoc  * 1600000));
    let thuePhaiNop = 0;

    if (thuNhapChiuThue < 60000000) {
        thuePhaiNop = thuNhapChiuThue * (5 / 100);
    } else if (thuNhapChiuThue >= 60000000 && thuNhapChiuThue < 120000000) {
        thuePhaiNop = thuNhapChiuThue * (10 / 100);
    }
    else if (thuNhapChiuThue >= 120000000 && thuNhapChiuThue < 210000000) {
        thuePhaiNop = thuNhapChiuThue * (15 / 100);
    } else if (thuNhapChiuThue >= 210000000 && thuNhapChiuThue < 384000000) {
        thuePhaiNop = thuNhapChiuThue * (20 / 100);
    } else if (thuNhapChiuThue >= 384000000 && thuNhapChiuThue < 624000000) {
        thuePhaiNop = thuNhapChiuThue * (25 / 100);
    } else if (thuNhapChiuThue >= 624000000 && thuNhapChiuThue < 960000000) {
        thuePhaiNop = thuNhapChiuThue * (30 / 100);
    } else {
        thuePhaiNop = thuNhapChiuThue * (35 / 100);
    }
    const ketQua3 = document.getElementById('ketQua3');
    if(thuNhapChiuThue <= 0){
        ketQua3.innerText = "Bạn không cần đóng thuế";
    }else {
        ketQua3.innerText = `Họ và Tên : ${userName2}
        Số tiền bạn cần nộp là : ${thuePhaiNop.toLocaleString()}`;
    }
}