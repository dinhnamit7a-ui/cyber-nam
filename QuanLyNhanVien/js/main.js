import Staff from "./staff.js";
import StaffManage from "./staffManage.js";
import Validation from "./validation.js";

const staffManage = new StaffManage();

const validation = new Validation();


function getId(tk) {
    return document.getElementById(tk);
}

function getInforStaff() {
    const account = getId("tknv").value;
    const name = getId("name").value;
    const email = getId("email").value;
    const password = getId("password").value;
    const dateWork = getId("datepicker").value;
    const salary = getId("luongCB").value * 1;
    const position = getId("chucvu").value;
    const timeWork = getId("gioLam").value * 1;



    const staff = new Staff(account, name, email, password, dateWork, salary, position, timeWork,);

    return staff;
}


function loadListStaff(list) {
    let contentHtml = "";

    for (let i = 0; i < list.length; i++) {
        const staffItem = list[i];
        contentHtml += `
        <tr>

	        <td>${staffItem.account}</td>
	        <td>${staffItem.name}</td>

	        <td>${staffItem.email}</td>

	        <td>${staffItem.workDay}</td>

	        <td>${staffItem.position}</td>

	        <td>${staffItem.salarySum}</td>

	        <td>${staffItem.staffType}</td>

            <td>
                
                <button class="btn btn-danger btn-sm" onclick="xoaNV('${staffItem.account}')">
                    <i class="fa fa-trash"></i>
                </button>
                <button class="btn btn-warning btn-sm" onclick="suaNV('${staffItem.account}')">
                    <i class="fa fa-edit"></i>
                </button>
            </td>


        </tr>
        
        `
    }

    getId('tableDanhSach').innerHTML = contentHtml;

}

function setLocalStorage() {
    const dataString = JSON.stringify(staffManage.arrayStaff);
    localStorage.setItem("LIST_STAFF", dataString);
}
window.xoaNV = function (account) {
    staffManage.deleteStaff(account);
    loadListStaff(staffManage.arrayStaff);
    setLocalStorage();
}

function getLocalStorage() {
    const dataString = localStorage.getItem("LIST_STAFF");

    if (dataString) {
        staffManage.arrayStaff = JSON.parse(dataString);
        loadListStaff(staffManage.arrayStaff);
    }
}

getLocalStorage();

/**
 * them nhan vien
 */

const btnThemNV = getId('btnThemNV');
btnThemNV.onclick = function () {

    if (!valiDateForm()) {
        return;
    }

    const staff = getInforStaff();

    staffManage.addStaff(staff);

    loadListStaff(staffManage.arrayStaff);

    setLocalStorage();

    $("#myModal").modal("hide");

}

function hienLoi(idSpan, thongBao) {
    
    getId(idSpan).innerHTML = thongBao;
}

function clearErro() {
    const danhSanhId = ["tbTKNV", "tbTen", "tbEmail", "tbMatKhau", "tbNgay", "tbLuongCB", "tbChucVu", "tbGiolam"];
    danhSanhId.forEach(id => {
        
        getId(id).innerText = "";
    });
}

function valiDateForm() {
    clearErro();

    const tk = getId("tknv").value;
    const ten = getId("name").value;
    const email = getId("email").value;
    const mk = getId("password").value;
    const ngay = getId("datepicker").value;
    const luong = getId("luongCB").value;
    const cv = getId("chucvu").value;
    const gio = getId("gioLam").value;

    let checked = true;

    if (validation.kiemTraTaiKhoan(tk) !== "") {
        hienLoi("tbTKNV", validation.kiemTraTaiKhoan(tk));
        checked = false;
    }

    if (validation.kiemTraHoTen(ten) !== "") {
        hienLoi("tbTen", validation.kiemTraHoTen(ten));
        checked = false;
    }

    if (validation.kiemTraEmail(email) !== "") {
        hienLoi("tbEmail", validation.kiemTraEmail(email));
        checked = false;
    }

    if (validation.kiemTraNgayLam(ngay) !== "") {
        hienLoi("tbNgay", validation.kiemTraNgayLam(ngay));
        checked = false;
    }

    if (validation.kiemTraMatKhau(mk) !== "") {
        hienLoi("tbMatKhau", validation.kiemTraMatKhau(mk));
        checked = false;
    }

    if (validation.kiemTraChucVu(cv) !== "") {
        hienLoi("tbChucVu", validation.kiemTraChucVu(cv));
        checked = false;
    }

    if (validation.kiemTraLuong(luong) !== "") {
        hienLoi("tbLuongCB", validation.kiemTraLuong(luong));
        checked = false;
    }

    if (validation.kiemTraGioLam(gio) !== "") {
        hienLoi("tbGiolam", validation.kiemTraGioLam(gio));
        checked = false;
    }

    return checked;
}


let suaNhanVien = -1;

window.suaNV = function(account){
    suaNhanVien = staffManage.arrayStaff.findIndex(nv => nv.account === account);

    const nhanVien = staffManage.arrayStaff[suaNhanVien];

    getId("tknv").value     = nhanVien.account;
    getId("name").value     = nhanVien.name;
    getId("email").value    = nhanVien.email;
    getId("password").value = nhanVien.password;
    getId("datepicker").value = nhanVien.workDay;
    getId("luongCB").value  = nhanVien.salary;
    getId("chucvu").value   = nhanVien.position;
    getId("gioLam").value   = nhanVien.timeWork;

    getId("tknv").disabled = true;
    getId("btnThemNV").style.display = "none";
    getId("btnCapNhat").style.display = "block";

    $("#myModal").modal("show");
}


getId("btnCapNhat").onclick = function(){
    if(!valiDateForm()){
        return;
    }

    const nhanVienMoi = getInforStaff();

    staffManage.arrayStaff[suaNhanVien] = nhanVienMoi;

    loadListStaff(staffManage.arrayStaff);
    setLocalStorage();

    $("#myModal").modal("hide");

    getId("tknv").disabled = false;
    suaNhanVien = -1;

    getId("btnThemNV").style.display = "block";
    getId("btnCapNhat").style.display = "none";

}


getId("btnTimNV").onclick = function(){
    timKiem();
}

getId("searchName").onkeyup = function(data){
    if(data.key === "Enter") timKiem();
}

function timKiem() {
    const kyWord = getId("searchName").value.toLowerCase();

    if(kyWord === ""){
        loadListStaff(staffManage.arrayStaff);
        return;
    }

    const resul = staffManage.arrayStaff.filter(function(nv){

        return nv.staffType.toLowerCase().includes(kyWord);
    });

    loadListStaff(resul);
}




