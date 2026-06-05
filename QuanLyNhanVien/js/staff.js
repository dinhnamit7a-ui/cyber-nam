class Staff {
    constructor(_account, _name, _email, _password, _workDay, _salary, _position, _timeWork) {
        this.account = _account;
        this.name = _name;
        this.email = _email;
        this.password = _password;
        this.workDay = _workDay;
        this.salary = _salary;
        this.position = _position;
        this.timeWork = _timeWork;
        this.salarySum = this.tinhLuong();  
        this.staffType = this.xepLoai();
    }

    tinhLuong() {  
        if (this.position === 'Sếp') {
            return this.salary * 3;
        } else if (this.position === 'Trưởng phòng') {
            return this.salary * 2;
        } else if (this.position === 'Nhân viên') {
            return this.salary * 1;
        }
        return 0;
    }

    xepLoai() {
        if (this.timeWork >= 192) return "Nhân viên xuất sắc";
        else if (this.timeWork >= 176) return "Nhân viên giỏi";
        else if (this.timeWork >= 160) return "Nhân viên khá";
        else return "Nhân viên trung bình";
    }
}

export default Staff;
 


