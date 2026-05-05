// +dữ liệu đầu vào: họ và tên, số kw điện ( người dùng nhập)
// +xử lí
    //  tạo một biến tổng bằng 0 trước;
//   điều kiện: từ 1-50kw = số kw * 500d
//              từ 51-100kw = (50 * 500) + (số kw vượt - 50 *650)
//             từ 101-200kw = (số kw * 500) + (số kw vượt - 50 *650) +(số kw vượt - 100*850)
//             từ 200-350kw = (số kw * 500) + (số kw vượt - 50 *650) +(số kw vượt - 100*850) + (số kw vượt - 200*1100)
//             còn lại tính 1300 * số kw 
//   + đầu ra: in ra kết quả vừa tính được, dùng localstring do dễ quan sát số:
           


const showinfor2 = document.getElementById('showinfor2');
showinfor2.onclick = function(){
    const userName = document.getElementById('userName').value;
    const suDungDien = Number(document.getElementById('suDungDien').value);
    let tong =0;;
    if(suDungDien >0 && suDungDien <= 50){
        tong = suDungDien * 500;
    }else if(suDungDien > 50 && suDungDien <=100){
        tong = (50 * 500) + ((suDungDien-50) * 650);
    }else if (suDungDien > 100 && suDungDien <=200){
        tong = (50*500) + ((100 -50) *650) + ((suDungDien - 100) * 850);
    }else if(suDungDien > 200 && suDungDien <= 350){
         tong = (50*500) + ((100-50) *650) + ((200-100)*850 ) + ((suDungDien -200) *1100)
    }else if (suDungDien > 350){
        tong = (50*500) + ((100-50) *650) + ((200-100)*850 ) + ((350 -200) *1100) + ((suDungDien - 350)* 1300);
    }
    const ketQua2 = document.getElementById('ketQua2');
    ketQua2.innerText = `Tiền điện của bạn hết :${tong.toLocaleString()}VND`;
}
