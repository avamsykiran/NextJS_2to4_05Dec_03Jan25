"use client";

import { Contact } from "@/lib/models/Contact";
import { Table } from "react-bootstrap";

const ContactsList  = ({contacts}:{contacts:Contact[]}) => (
    <Table striped hover bordered>
        <thead>
            <tr>
                <th>Contact#</th>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Mail Id</th>
            </tr>
        </thead>
        <tbody>
            {
                contacts.map( c => (
                    <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.mobile}</td>
                        <td>{c.mailId}</td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
);

export default ContactsList;