"use client"

import { addDept, deleteDeptById, getAllDepts, updateDept } from "@/lib/DeptApiCalls";
import Dept from "@/models/Dept";
import { Fragment, useEffect, useState } from "react";
import DeptForm from "./DeptForm";
import DeptRow from "./DeptRow";

const DeptsList = () => {

    let [depts, setDepts] = useState<Dept[] | null>(null);
    let [isLoading, setLoading] = useState<boolean>(true);
    let [errMsg, setErrMsg] = useState<string | null>(null);

    const loadData = (): void => {
        getAllDepts()
            .then(resp => {
                setDepts(resp.data);
                setLoading(false);
                setErrMsg(null);
            }).catch(err => {
                console.log(err);
                setLoading(false);
                setErrMsg("Unable to refresh data! Please retry later!");
            })
    }

    const del = (id: number): void => {
        deleteDeptById(id)
            .then(resp => {
                setDepts(depts?.filter(d => d.deptId!== id) ?? []);
            }).catch(err => {
                console.log(err);
                setLoading(false);
                setErrMsg("Unable to delete data! Please retry later!");
            })
    }

    const edit = (id: number): void => {
        setDepts(depts?.map( d => d.deptId===id?{...d,editable:true}:d) ?? []);
    }

    const cancelEdit = (id: number): void => {
        setDepts(depts?.map( d => d.deptId===id?{...d,editable:undefined}:d) ?? []);
    }
    
    const add = (dept:Dept): void => {
        addDept(dept)
            .then(resp => {
               setDepts([...(depts??[]),{...resp.data}]);
            }).catch(err => {
                console.log(err);
                setLoading(false);
                setErrMsg("Unable to save data! Please retry later!");
            })
    }

    const update = (dept:Dept): void => {
        updateDept(dept)
            .then(resp => {
                setDepts(depts?.map( d => d.deptId===dept.deptId?dept:d) ?? []);
            }).catch(err => {
                console.log(err);
                setLoading(false);
                setErrMsg("Unable to save data! Please retry later!");
            })
    }

    useEffect(loadData, []);

    return (
        <Fragment>

            {errMsg && (
                <div className="alert alert-danger p-2 fw-bold">
                    {errMsg}
                </div>
            )}

            {isLoading && (
                <div className="alert alert-info p-2 fw-bold">
                    Please wati while refreshing data
                </div>
            )}

            {depts && depts.length === 0 && (
                <div className="alert alert-info p-2 fw-bold">
                    No records found to display
                </div>
            )}

            {depts && depts.length > 0 && (
                <Fragment>
                    <div className="row border-bottom border-dark p-2 fw-bold text-center">
                        <div className="col-2">
                            DeptId
                        </div>
                        <div className="col">
                            Title
                        </div>
                        <div className="col-2">

                        </div>
                    </div>

                    <DeptForm save={add} />

                    {depts?.map(dept => (
                        dept.editable?
                        <DeptForm key={dept.deptId} save={update} dept={dept} cancelEdit={cancelEdit} /> :
                        <DeptRow key={dept.deptId} dept={dept} edit={edit} del={del} />
                    ))}
                </Fragment>
            )}
        </Fragment>
    );
}

export default DeptsList;