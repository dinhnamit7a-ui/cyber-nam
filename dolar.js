// bài 2:
// dữ liệu:
// +giá đô: 1 đô bằng 23500vnd
// +Số tiền việt mà người dùng nhâp
// xử lí:
// lấy dữ liệu khi người dùng gõ
// lấy số tiền việt * tỉ giá đô 23000 = số tiền nhận được
// đầu ra:
// hiển thị ra số tiền nhận được 





function quyDoi(){
    const usd = document.getElementById('tienDolar').value;
    const tyGia = 23500;
    if(usd ==='' || usd<=0){
        alert('vui long nhap du lieu');
        return;
    }
    const soTien = usd * tyGia;
    document.getElementById('nhanTien').innerText = soTien.toLocaleString();
}