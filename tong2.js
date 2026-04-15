// dữ liệu:
// một số gồm 2 chữ số 
// xử lí:
// lấy dữ liệu mà người dùng đã nhập
// tính tổng 2 số đó
// đầu ra:
// in ra kết quả vừa có được 


function submid(){
    let n = Number(document.getElementById('inputNumber').value);
    if(n<10 || n>99||Number.isNaN(n)){
        alert('xin vui lòng nhập lại');
        return;
    }
    let hangChuc = Math.floor(n/10);
    let hangDonVi = n % 10;
    let tong = hangChuc + hangDonVi;
    document.getElementById("ketQua").innerText = tong.toLocaleString();

}