import Dept from "@/models/Dept";
import { SyntheticEvent, useState } from "react";

const DeptForm = ({ dept, save,cancelEdit }: { dept?: Dept, save: (dept: Dept) => void,cancelEdit?:(id:number)=>void }) => {

    let [deptId, setDeptId] = useState<number>(dept?.deptId ?? 0);
    let [name, setName] = useState<string>(dept?.name ?? "");

    const formSubmitted = (event: SyntheticEvent):void => {
        let d: Dept = { deptId, name };
        save(d);
        if (!dept) {
            setDeptId(0);
            setName("");
        }
        event.preventDefault();
    }

    const cancel= (event: SyntheticEvent):void => {
        if (!dept) {
            setDeptId(0);
            setName("");
        }else{
            cancelEdit(dept.deptId);
        }
        event.preventDefault();
    }

    return (
        <form className="row border-bottom border-primary p-2" onSubmit={formSubmitted}>
            <div className="col-2 text-end">
                <input type="text" className="form-control"
                    placeholder="Dept Name" value={deptId} onChange={e => setDeptId(Number(e.target.value))} />
            </div>
            <div className="col">
                <input type="text" className="form-control"
                    placeholder="Dept Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="col-2">
                <button className="btn btn-sm me-1" type="submit">
                    <i className="bi bi-check-lg" />
                </button>
                <button className="btn btn-sm" type="button" onClick={cancel}>
                    <i className="bi bi-x-lg" />
                </button>
            </div>
        </form>
    )
};

export default DeptForm;