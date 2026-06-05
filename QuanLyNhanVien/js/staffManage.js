class StaffManage {
    constructor(){
        this.arrayStaff = [];
    }

    addStaff(staff){
        this.arrayStaff.push(staff);
    }

     findIndexStaff(account){
        let index = -1;
        for(let i = 0; i < this.arrayStaff.length; i++){
            const staffItem = this.arrayStaff[i];
            if(staffItem.account === account){
                index = i;
                break;
            }
            
        }

        return index;
     }

     deleteStaff(account){
        const index = this.findIndexStaff(account);
        if(index !== -1){
            this.arrayStaff.splice(index, 1);
        }
     }


}

export default StaffManage;




