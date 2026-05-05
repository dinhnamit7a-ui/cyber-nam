// + đầu vào:  mã khách hàng,số kênh cao cấp. số kết nối( người dùng nhập)
// + xử lí: tạo một hàm với điều kiện khi người dùng bấm chọn vào khách hàng doanh nghiệp thì hiện ra input số kết nối,
//     nếu người dùng bấm khách hàng cá nhân thì ẩn. 

//     tạo biến hóa đơn
//     với khách hàng doanh nghiệp: soKetNoi <= 10 tính tiền theo côgn thức: hoaDon =  15 + 75 + (kenhCaoCap * 50)
//                                  soKetNoi > 10 :  hoaDon = 15 + (75 + (soKetNoi-10) * 5 + (kenhCaoCap * 50))
//     với khách hàng cá nhân: hoaDon = 4.5 + 20.5 + (kenhCaoCap * 7.5);

// + đầu ra in ra mã khách hàng và số tiền cần nộp.
function hienKetNoi() {
    const khachHang = document.getElementById('khachHang').value;
    const ketNoi = document.getElementById('ketNoi');
    if (khachHang === 'doanhNghiep') {
        ketNoi.style.display = 'block';

    } else {
        ketNoi.style.display = 'none';
    }
}

const showinfor3 = document.getElementById('showinfor3');
showinfor3.onclick = function () {
    const khachHang = document.getElementById('khachHang').value;
    const maKhachHang = document.getElementById('maKhachHang').value * 1;
    const kenhCaoCap = document.getElementById('kenhCaoCap').value * 1;
    const soKetNoi = document.getElementById('soKetNoi').value * 1;
    
    let hoaDon =0;
     if(khachHang === 'doanhNghiep' && soKetNoi <= 10){
        hoaDon =  15 + 75 + (kenhCaoCap * 50);

     }else if(khachHang === 'doanhNghiep' && soKetNoi > 10) {
        hoaDon = 15 + (75 + (soKetNoi-10) * 5 + (kenhCaoCap * 50));
     }else {
        hoaDon = 4.5 + 20.5 + (kenhCaoCap * 7.5);
     } 
     const ketQua3 = document.getElementById('ketQua3');
     ketQua3.innerText = `Mã khách hàng : ${maKhachHang} =>
     Số tiền bạn cần thanh toán là :$${hoaDon.toFixed(2)}`;

}
