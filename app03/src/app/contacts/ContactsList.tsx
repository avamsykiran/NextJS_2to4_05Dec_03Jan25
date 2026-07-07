"use client";

import { deleteContactServerAction } from "@/actions/contactActions";
import { Contact } from "@/lib/models/Contact";
import Link from "next/link";
import { Button, Table } from "react-bootstrap";

const ContactsList = ({ contacts }: { contacts: Contact[] }) => (
    <Table striped hover bordered>
        <thead>
            <tr>
                <th>Contact#</th>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Mail Id</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                contacts.map(c => (
                    <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.mobile}</td>
                        <td>{c.mailId}</td>
                        <td>
                            <Link href={`/contacts/edit/${c.id}`} className="btn btn-sm btn-secondary me-1">
                                <i className="bi-pen-fill" />
                                EDIT
                            </Link>

                            <Button variant="danger" size="sm" onClick={_e => deleteContactServerAction(c.id) }>
                                <i className="bi-trash" />
                                DELETE
                            </Button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
);

export default ContactsList;