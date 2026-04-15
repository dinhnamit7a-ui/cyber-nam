// bài 1:
// dữ liệu: 
// - lương ngày: 100k
// - số ngày làm
// - người dùng nhâp số ngày làm việc và lương ngày 
// xử lí:
//  lấy số ngày làm việc * lương ngày
//  kết quả:
//  - hiển thị kết quả có được 
function tinhtien(){
    const nhapdulieu = document.getElementById('soCong').value;
    const luongNgay = document.getElementById('tienLuong').value;
    if(nhapdulieu ==="" || luongNgay ===''){
        alert('ban chua nhap du lieu');
        return;
    }
    const soTien= nhapdulieu * luongNgay;
    document.getElementById('ketQua').innerText = soTien.toLocaleString('vi-VN');
}

