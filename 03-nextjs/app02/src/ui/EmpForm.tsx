"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { Fragment } from "react";

const EmpForm = () => {

    const pathname = usePathname();
    const params = useSearchParams();

    return (

        <Fragment>
            <h3> {pathname?.endsWith("edit")?"Edit Employee#" + params?.get("empId"):"New Employee"}</h3>
            <form></form>
        </Fragment>
        
    );
};

export default EmpForm;