// phân tích:
// dữ liệu:
// chiều dài và chiều rộng từ người dùng nhâp
// công thức tích chu vị và diện tích
// xử lí:
// lấy dữ liệu từ 2 ô input khi người dùng gõ
// áp dụng công thức tích chu vi:(dài+rộng)*2
//                   diện tích: dài * rộng
// đầu ra:
// in ra kết quả của cả hai vừa tính được;

function submid(){
    const dai = Number(document.getElementById('chieuDai').value);
    const rong = Number(document.getElementById('chieuRong').value);
    if(dai <= 0 || rong <=0 ){
        alert("xin vui lòng nhập lại ");
        return;
    }
    const dienTich = dai * rong;
    const chuVi = (dai +rong)*2;

    document.getElementById('ketQuaS').innerText = dienTich.toLocaleString();
    document.getElementById('ketQuaC').innerText = chuVi.toLocaleString();
}