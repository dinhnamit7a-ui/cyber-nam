// + dữ liệu: điểm 3 môn, các trường hợp khu vực ưu tiên, đối tượng ưu tiên và điểm chuẩn ( do người dùng nhập), 
// +xử lí:
//    tạo 2 hàm : cái thứ nhất xử lí điểm ưu tiên theo đối tượng nếu ko thuộc một trong ba thì điểm ưu tiên sẽ là 0. cái thứ 2 xử lí điểm ưu tiên 
//    theo khu vực cũng như vậy            
//    tính tổng điểm ưu tiên ( ưu tiên theo khu vực + ưu tiên theo đối tượng)
//    lấy tổng điểm 3 môn cộng với điểm ưu tiên để ra được điểm tổng kết
//    nếu điểm tổng kết >= điểm chuẩn in ra kết quả đỗ
//    nếu có 1 trong 3 môn được 0 điểm = trượt luôn
//    trường hợp còn lại thì là trượt do thiếu điểm
// + đầu ra
//  DOM đến thẻ kết quả và log ra số điểm 
const showinfor = document.getElementById('showinfor');
showinfor.onclick = function(){

    const soDiem = Number(document.getElementById('soDiem').value);
    const soDiem2 = Number(document.getElementById('soDiem2').value);
    const soDiem3 = Number(document.getElementById('soDiem3').value);
    const diemChuan = Number(document.getElementById('diemChuan').value);
    const chonKhuVuc =document.getElementById('chonKhuVuc').value;
    const chonDoiTuong = document.getElementById('chonDoiTuong').value;

    function diemDoiTuong(chonDoiTuong){
        if(chonDoiTuong == 1) return 2.5;
        if(chonDoiTuong == 2) return 1.5;
        if(chonDoiTuong == 3) return 1;
        return 0;
    }
    function diemKhuVuc(chonKhuVuc){
        if(chonKhuVuc == 'A') return 2;
        if(chonKhuVuc == 'B') return 1;
        if(chonKhuVuc == 'C') return 0.5;
        return 0;
    }
    let diemUuTien = diemDoiTuong(chonDoiTuong) + diemKhuVuc(chonKhuVuc);
    let diemTongKet = (soDiem + soDiem2 + soDiem3) + diemUuTien;

    const ketQua = document.getElementById('ketQua');
    if(soDiem <= 0 || soDiem2 <= 0 || soDiem3 <=0){
        ketQua.innerText = "Chúc bạn may mắn lần sau";
    }else if(diemTongKet >= diemChuan){
          ketQua.innerText = `Chúc mừng bạn đã trúng tuyển với số điểm:${diemTongKet}Đ`;
    }else {
        ketQua.innerText = `Tiếc quá còn xíu nữa là được! số điểm của bạn là: ${diemTongKet}Đ`;
    }

    
}



