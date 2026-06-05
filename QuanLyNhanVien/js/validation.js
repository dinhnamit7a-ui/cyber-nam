function getId(tk){
    return document.getElementById(tk);
}

class Validation {
    kiemTraTaiKhoan(tk){
        if(tk === '') {
            return "Tài khoản không được để chống";
        }
        if (tk.length < 4 || tk.length > 6){
            return "Tài khoản phải từ 4-6 ký tự";
        }
        return '';
    }

    kiemTraHoTen(hoten){
        if(hoten === ''){
            return "Họ tên không được để trống";
        }

        const regex = /^[a-zA-ZÀ-ỹ\s]+$/;
        if(!regex.test(hoten)){
            return "Họ tên không được chứa kí tự đặc biệt";
        }
        return '';
    }

    kiemTraEmail(email){
        if(email === ''){
            return "Email không được để chống";
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(email)){
            return "Email không đúng định dạng";
        }
        return "";
    }

    kiemTraMatKhau(mk){
        if(mk === ''){
            return "Mật khẩu không được để trống";
        }
        if(mk.length < 6 || mk.length > 10){
            return "Mật khẩu phải từ 6 - 10 ký tự";
        }
        if(!/[0-9]/.test(mk)){
            return "Mật khẩu phải có ít nhất 1 số";
        }
        if(!/[A-Z]/.test(mk)){
            return "Mật khẩu phải có ít nhất 1 chữ in hoa";
        }
        if(!/[!@#$%^&*]/.test(mk)){
            return "Mật khẩu phải có ít nhất 1 ký tự đặc biệt";
        }
        return "";

        
        }

        kiemTraNgayLam(ngay){
            if(ngay === ""){
                return "Ngày làm không được để trống";
            }
            const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
            if(!regex.test(ngay)){
                return "Ngày làm phải đúng định dạng mm/dd/yyyy";
            }
            return "";
        }

        kiemTraLuong(luong){
            if(luong === ""){
                return "Lương cơ bản không được để trống";
            }
            const soLuong = luong * 1;

            if(isNaN(soLuong)){
                return "Lươnng phải là số";
            }
            if(soLuong < 1000000 || soLuong > 20000000) {
                return "Lương phải từ 1,000,000 đến 20,000,000";
            }
            return "";
        }

        kiemTraChucVu(cv){
            const danhSachHopLe = ["Sếp", "Trưởng phòng", "Nhân viên"];

            if(!danhSachHopLe.includes(cv)){
                return "Vui lòng chọn chức vụ hợp lệ";
            }

            return "";
        }

        kiemTraGioLam(gio) {
            if(gio === ""){
                return "Giờ làm không được để trống";
            }
            const soGio = gio * 1;
            if(isNaN(soGio)){
                return "Giờ làm phải là số";
            }
            if(soGio < 80 || soGio > 200){
                return " Giờ làm phải từ 80 đến 200";
            }
            return "";
        }
          
    }


    export default Validation;