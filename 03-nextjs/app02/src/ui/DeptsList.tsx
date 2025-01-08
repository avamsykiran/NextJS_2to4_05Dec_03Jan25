"use client"

import { getAllDepts } from "@/lib/DeptApiCalls";
import Dept from "@/models/Dept";
import { Fragment, useEffect, useState } from "react";

const DeptsList = () => {

    let [depts, setDepts] = useState<Dept[] | null>(null);
    let [isLoading, setLoading] = useState<boolean>(true);
    let [errMsg, setErrMsg] = useState<string | null>(null);

    const loadData = ():void => {
        getAllDepts()
            .then(resp => {
                setDepts(resp.data);
                setLoading(false);
                setErrMsg(null);
            }).catch(() => {
                setLoading(false);
                setErrMsg("Unable to refresh data! Please retry later!");
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
                    </div>

                    {depts?.map(dept => (
                        <div className="row border-bottom border-primary p-2">
                            <div className="col-2">
                                {dept.deptId}
                            </div>
                            <div className="col">
                                {dept.name}
                            </div>
                        </div>
                    ))}
                </Fragment>
            )}
        </Fragment>
    );
}

export default DeptsList;