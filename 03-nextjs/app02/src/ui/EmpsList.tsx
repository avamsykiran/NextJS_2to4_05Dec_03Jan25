"use client"

import { getAllEmps } from "@/lib/EmpApiCalls";
import Emp from "@/models/Emp";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const EmpsList = () => {

    let [emps, setEmps] = useState<Emp[] | null>(null);
    let [isLoading, setLoading] = useState<boolean>(true);
    let [errMsg, setErrMsg] = useState<string | null>(null);

    const loadData = (): void => {
        getAllEmps()
            .then(resp => {
                setEmps(resp.data);
                setLoading(false);
                setErrMsg(null);
            }).catch(err => {
                console.log(err);
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

            {emps && emps.length === 0 && (
                <div className="alert alert-info p-2 fw-bold">
                    No records found to display
                </div>
            )}

            {emps && emps.length > 0 && (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Emp#</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>DoJ</th>
                            <th>Mobile</th>
                            <th>Mail Id</th>
                            <th>DeptId</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp => (
                            <tr key={emp.empId}>
                                <td>{emp.empId}</td>
                                <td>{emp.fullName}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.dateOfJoining}</td>
                                <td>{emp.mobile}</td>
                                <td>{emp.mailId}</td>
                                <td>{emp.deptId}</td>
                                <td>
                                    <Link className="btn btn-sm me-1" href={{ pathname: "/emps/edit", query: { empId: emp.empId } }}>
                                        <i className="bi bi-pen" />
                                    </Link>
                                    <button type="button" className="btn btn-sm">
                                        <i className="bi bi-trash" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Fragment>
    );
}

export default EmpsList;