// phân tích:
// dữ liệu:
// 5 số thực do người dùng nhập vào
// xử lí:
// lấy dữ liệu khi người dùng nhập số
// cộng các số vừa lấy được và chia cho 5
// đầu ra:
// in ra kết quả vừa tính được 

function subMid(){
    let tong  = 0 ;
    const inputs = document.querySelectorAll('.inputSoThuc');
    for ( const input of inputs){
        tong +=Number(input.value);
    }
    const trungBinh = tong / inputs.length;
    const hienThi = document.getElementById('ketQua');
    hienThi.innerText = trungBinh.toFixed(2);
    hienThi.classList.add('test')
   
    
}
function reload(){
    const inputs = document.querySelectorAll('.inputSoThuc');
    for(const input of inputs){
        input.value = '';
    }
    document.getElementById('ketQua').innerText = '';
}