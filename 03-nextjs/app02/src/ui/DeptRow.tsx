import Dept from "@/models/Dept";

const DeptRow = ({ dept,edit,del }: { dept: Dept,edit:(id:number)=>void,del:(id:number)=>void }) => (
    <div className="row border-bottom border-primary p-2">
        <div className="col-2 text-end">
            {dept.deptId}
        </div>
        <div className="col">
            {dept.name}
        </div>
        <div className="col-2">
            <button className="btn btn-sm me-1" onClick={e => edit(dept.deptId)}>
                <i className="bi bi-pen" />
            </button>
            <button className="btn btn-sm" onClick={e => del(dept.deptId)}>
                <i className="bi bi-trash" />
            </button>
        </div>
    </div>
);

export default DeptRow;