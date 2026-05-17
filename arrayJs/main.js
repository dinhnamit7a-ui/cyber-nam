



let arrayNumber = [];

const addNumber = document.getElementById('addNumber');
addNumber.onclick = function () {
    const inputNumber = document.getElementById('inputNumber').value * 1;
    arrayNumber.push(inputNumber);

    const showInputNubmer = document.getElementById('showInputNubmer').innerHTML = arrayNumber;
}
/**
 * tính tổng số dương:
 *   - tạo biến sum = 0;
 *   - chạy vòng lặp từ i = 0; i < chiều dài mảng; i++
 *   - tạo biến number và gán các giá trị có được
 *   - đặt đk if( number > 0) => cộng dồn sum+ = number;
 *   - show ra màn hình bằng id showinfor 
 */

function tongSoDuong() {
    let sum = 0;

    for (let i = 0; i < arrayNumber.length; i++) {
        const number = arrayNumber[i];
        if (number > 0) {
            sum += number;
        }
    }

    const showInfor = document.getElementById('showInfor').innerHTML = `Tổng các số dương là: ${sum}`;
}
/**
 * đếm số dương :
 *  - tạo biến cout = 0;
 *   - chạy vòng lặp từ i = 0; i< arrayNumber.leng; i++
 *   - đặt đk if(arrayNumber[i] > 0)  => cộng dồn vào biến cout;
 *     - show ra màn hình bằng id showInfor 
 */
function demSoDuong() {
    let cout = 0;

    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            cout++;
        }

    }
    const showInfor = document.getElementById('showInfor').innerHTML = `trong mảng có: ${cout} số dương`;

}
/**
   tìm số nhỏ nhất trong mảng:
     - tạo biến min gán giá trị arrayNumber[0];
     -chạy vòng lặp từ i = 0; i< arrayNumber.leng; i++
      if(arayNumber[i] < min) = > min = arrayNumber[i]
      -  in ra màn hình 
 */
function soNhoNhat() {
    let min = arrayNumber[0];

    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] < min) {
            min = arrayNumber[i];
        }
    }
    const showInfor = document.getElementById('showInfor').innerHTML = `Số nhỏ nhất trong mảng là: ${min} `;
}
/**
   tìm số dương nhỏ nhất trong mảng:
     tạo biến arrayDuong = [];
     chạy vòng lặp for (let i = 0; i < arrayNumber.length; i++)
     - đk if(arrayNumber[i] > 0)  => gom nó vào biến arrayDuong.push
     -tạo biến minDuong = arrayDuong[0]
     -chạy thêm vòng lặp thứ 2: for (let j = 0; j < arrayDuong.length; j++)
     - dk if(minDuong > arrayDuong[j])  =>  minDuong = arayDuong[j]
     - show ra màn hình 
 */
function soDuongNhoNhat() {
    let arrayDuong = [];

    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            arrayDuong.push(arrayNumber[i]);
        }
    }

    let minDuong = arrayDuong[0];
    for (let j = 0; j < arrayDuong.length; j++) {
        if (minDuong > arrayDuong[j]) {
            minDuong = arrayDuong[j];
        }
    }
    const showInfor = document.getElementById('showInfor').innerHTML = `Số dương nhỏ nhất trong mảng là: ${minDuong} `;
}
/**
 tìm số chẵn cuối:
   - tạo biến let soChanCuoi = -1;
   - chạy vòng lặp : for (let i = arrayNumber.length - 1; i >= 0; i--) i chạy từ cuối lên 
   - if(arayNumber[i] % 2 === 0)  => số chẵn cuối = arrayNumber[i] => break và thoát ra luôn 
   show kết quả 
 */
function soChanCuoi() {
    let soChanCuoi = -1;

    for (let i = arrayNumber.length - 1; i >= 0; i--) {
        if (arrayNumber[i] % 2 === 0) {
            soChanCuoi = arrayNumber[i];
            break;
        }
    }
    const showInfor = document.getElementById('showInfor').innerHTML = `Số chẵn cuối  trong mảng là: ${soChanCuoi} `;
}
/**
 đổi chỗ 2 phần tử 
   -dom đến 2 ô input do người dùng nhập
   - dk: number > 0 và < chiều dài mảng
   - tạo biến tạm temp = arrayNumber[number1] 
                 gán: arrayNumber[number1] = arrayNumber[number2]  
                 tiêp gán:  arrayNumber[number2] = temp
    show kết quả ra màn hình 
 */
function doiCho() {
    const number1 = document.getElementById('number1').value * 1;
    const number2 = document.getElementById('number2').value * 1;

    if (number1 < 0 || number1 >= arrayNumber.length || number2 < 0 || number2 >= arrayNumber.length) {
        alert('Dữ liệu ko hợp lệ vui lòng nhập lại');
        return;
    }

    let temp = arrayNumber[number1];
    arrayNumber[number1] = arrayNumber[number2];
    arrayNumber[number2] = temp;

    const showInfor = document.getElementById('showInfor').innerHTML = `Mảng sau khi đã đổi chỗ: ${arrayNumber} `;
}
/**
xếp tăng dần:
  - chạy 2 vòng lăp lồng nhau for (let i = 0; i < arrayNumber.length - 1; i++) (vòng lặp i sẽ chạy từ vị trí idex số 0)
                                      for (let j = i + 1; j < arrayNumber.length; j++) (còn vòng lặp j sẽ chạy từ giá trị con số i +1 )
  - điều điện if(arrayNumber[j] < arrayNumber[i] )  => gán biến tạm giống như bài đổi chỗ bên trên 
                                      - show kết quả 
 */
function xepTangDan() {

    for (let i = 0; i < arrayNumber.length - 1; i++) {
        for (let j = i + 1; j < arrayNumber.length; j++) {
            if (arrayNumber[j] < arrayNumber[i]) {
                let temp = arrayNumber[i];
                arrayNumber[i] = arrayNumber[j]
                arrayNumber[j] = temp;
            }
        }
    }
    const showInfor = document.getElementById('showInfor').innerHTML = `Mảng sau khi đã sắp xếp: ${arrayNumber} `;
}


/**
 tìm số nguyên tố: số nguyên tố là số chia chỉ chia hết cho 1 và chính nó
   - tạo một hàm xác định xem số đó có phải số nguyên tố hay ko:
        + timSNT(n) => 
            + if(n<2)   lập tức dừng lại luôn 
        + for(let i = 2; i < n; i++)
        + đk  if(n % i === 0 ) =>  dừng lại và thoát 
        + nếu n > 2 và ko thỏa mãn điều kiện if bên trên thì trả về giá trị true tức là đó chính là số nguyên tố. 
    - hàm chính :
      + tạo biến  soNguyeToFirt = -1   
      + chạy vòng lặp for(i = 0; i < arrayNumber.length; i++) =>gán giá trị có được vào biến temp 
      + if(timSNT(temp) === true)  tức là số sau khi đã duyệt qua vòng lặp trả về giá trị true thì số đó chính là số nguyên tố đầu tiên
                                   vì i chạy từ giá trị 0 .

      + gán soNguyeToFirt = temp  và thoát vòng lặp 
      + show ra màn hình 
 */ 
function timSNT(n){

    if(n < 2) return false;
    for(let i = 2; i < n; i++){
        if(n % i ===0 ) return false;
    }
    return true;
}

function soNguyenTo(){
    let soNguyeToFirt = -1;

    for(i = 0; i < arrayNumber.length; i++){
        let temp = arrayNumber[i];

        if(timSNT(temp) === true){
            soNguyeToFirt = temp;
            break;
        }
    }

    const showInfor = document.getElementById('showInfor').innerHTML = `Số nguyên tố đầu tiên là: ${soNguyeToFirt} `;
}

/**
cho người dùng nhập mảng số thực và tìm số nguyên tố:
  + tạo biến soThucArray = []
  gán sự kiện onclick và dom tới ô input
  + hàm chính :
    - tạo mảng rỗng  mangSoNguyenTo = []
    - lặp for(let i = 0; i < soThucArray.length; i++)
    - dùng lại hàm if(timSNT(temp2) === true) => push vào  mangSoNguyenTo
    - lấy số lượng phần tử trong mảng gán vào biến soLuong
    - in ra màn hình 
 */
let soThucArray = [];
const addNumberSothuc = document.getElementById('addNumberSoThuc');
addNumberSothuc.onclick = function(){
    

    const soThucInput = document.getElementById('soThucInput').value*1;

    soThucArray.push(soThucInput);
     const showInputNubmer = document.getElementById('showInputNubmer').innerHTML = soThucArray;
    
}

function timSoNguyen(){
    let mangSoNguyenTo = [];

        for(let i = 0; i < soThucArray.length; i++){
            let temp2 = soThucArray[i];
            if(timSNT(temp2) === true){
                
                mangSoNguyenTo.push(temp2);
            }
        }
        let soLuong = mangSoNguyenTo.length;

        const showInfor = document.getElementById('showInfor').innerHTML = `Mảng có tổng cộng: ${soLuong}  số nguyên tố
        
        <br> là:${mangSoNguyenTo} `;
}

/**
 * so sánh số lượng số dương và số âm
 *  + tạo 2 hàm để tìm số âm và số dương 
 *   - tạo 2 biến let soLuongDuong = 0
 *                let soLuongAm = 0
 *   - chạy vòng lặp > 0 và < 0 sau đó push những phần tử có được vào 2 mảng riêng
 *   - gán những giá trị hợp lệ vào 2 biến số lượng riêng biệt
 *   - dùng hàm so sánh :
 *     + gọi là 2 hàm soduong và soAm
 *     + đặt đk và in ra câu chữ thích hợp 
 */
let soLuongDuong = 0;
function timSoDuong(){
    let mangSoDuong = [];

    for(let i = 0; i < arrayNumber.length; i++){
        if(arrayNumber[i] > 0){
            let soDuong = arrayNumber[i];
            mangSoDuong.push(soDuong);
        }
    }
     soLuongDuong = mangSoDuong.length;
    
}
let soLuongAm = 0;
function timSoAm(){
    let mangSoAm = [];

    for(let i = 0; i < arrayNumber.length; i++){
        if(arrayNumber[i] < 0){
            let soAm = arrayNumber[i];
            mangSoAm.push(soAm);
        }
    }
     soLuongAm = mangSoAm.length;
    
}

function soSanh(){
    timSoAm();
    timSoDuong();
    if(soLuongAm < soLuongDuong){
        const showInfor = document.getElementById('showInfor').innerHTML = `Mảng có: ${soLuongDuong} số dương và ${soLuongAm} số âm
        <br> => số dương nhiều hơn số âm`;
    }else if(soLuongAm > soLuongDuong){
        const showInfor = document.getElementById('showInfor').innerHTML = `Mảng có: ${soLuongDuong} số dương và ${soLuongAm} số âm
        <br> => số âm nhiều hơn số dương`;
    }else{
        const showInfor = document.getElementById('showInfor').innerHTML = `Mảng có: ${soLuongDuong} số dương và ${soLuongAm} 
        <br> => số âm và số dương bằng nhau`;
    }
}

