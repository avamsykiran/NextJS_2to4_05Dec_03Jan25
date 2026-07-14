"use client";

import { Contact } from "@/lib/models/Contact";
import { ContactsFilterInputsType, FilterInputsType } from "@/lib/state/contactsStore";
import { useContactsStore } from "@/lib/state/ContactsStoreProvider";
import { FC, useEffect, useState } from "react";
import { Col, Form, FormControl, FormGroup, FormLabel, FormSelect, FormText, Row } from "react-bootstrap";

const ContactsFilterForm = () => {

    const [filterInputs, setFilterInputs] = useState<ContactsFilterInputsType>({ field: "all", value: "" });
    const filter = useContactsStore((state) => state.filter);

    useEffect(()=>{
        filter(filterInputs);
    },[filterInputs]);

    return (
        <Form className="p-2 m-2 mb-0">
            <FormGroup as={Row} className="m-2">
                <FormLabel column sm="1">Filter </FormLabel>
                <Col sm="2">
                    <FormSelect value={filterInputs.field}
                        onChange={e => {
                            setFilterInputs({ ...filterInputs, field: e.target.value as typeof filterInputs.field });                            
                        }}>
                        <option value="all">No Filter</option>
                        <option value="id">Contact Id</option>
                        <option value="name">Name</option>
                        <option value="mobile">Mobile Number</option>
                        <option value="mailId">Mail Id</option>
                    </FormSelect>
                </Col>
                <Col sm>
                    <FormControl type="text"
                        value={filterInputs.value}
                        disabled={filterInputs.field==="all"}
                        onChange={e => { setFilterInputs({ ...filterInputs, value: e.target.value }); }} />
                </Col>
            </FormGroup>
        </Form >
    );
};

export default ContactsFilterForm;