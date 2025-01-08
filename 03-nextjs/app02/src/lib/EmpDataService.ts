import DataService from "./DataService";
import Emp from "@/models/Emp";

export default class EmpDataService extends DataService<Emp>{
    
    constructor(dataStore:string){
        super(dataStore);
    }

    getId(emp:Emp):number{
        return emp.empId;
    }

    getAllByDeptId(deptId:number):Emp[]{
        return this.getAll().filter(e => e.deptId===deptId);
    }
}