import { FC, useEffect, useState } from "react";
import Contact from "../models/Contact";
import { getAll } from "../services/ContactService";
import { Link } from "react-router-dom";
import { deleteById } from '../services/ContactService';

const ContactsList: FC<any> = () => {

    let [contacts, setContacts] = useState<Contact[]>([]);
    let [isLoading, setLoading] = useState<boolean>(true);
    let [errMsg, setErrMsg] = useState<string | null>(null);

    useEffect(() => {
        getAll()
            .then(resp => {
                setContacts(resp.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                setErrMsg("Unable to fetech data! Please retry later!");
            })
    }, []);

    const deleteContact = (id:number) => {
        if(window.confirm(`Are you sure of deleting contact#${id}`)){
            deleteById(id)
            .then( _resp => setContacts(contacts.filter(c => c.id!==id)) )
            .catch(err => {
                console.error(err);              
                setErrMsg("Unable to delete data! Please retry later!");
            })
        }
    }

    return (
        <section className="col-9 mx-auto">
            <h4><i className="bi-person-lines-fill" /> Contacts List</h4>

            {
                isLoading && (
                    <div className="alert alert-info p-4 fw-bold text-center">
                        Please wait while loading data
                    </div>
                )
            }

            {
                errMsg && (
                    <div className="alert alert-danger p-4 fw-bold text-center">
                        {errMsg}
                    </div>
                )
            }

            {
                !isLoading && contacts.length === 0 && (
                    <div className="alert alert-info p-4 fw-bold text-center">
                        No records to display
                    </div>
                )
            }

            {
                contacts.length > 0 && (
                    <table className="table table-striped table-hovered">
                        <thead>
                            <tr>
                                <th>Contact#</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Mail Id</th>
                                <th>Actions</th>
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
                                        <td>
                                            <Link to={"/edit/"+c.id} className="btn btn-sm btn-secondary me-1">
                                                <i className="bi-pen-fill"></i> Edit
                                            </Link>
                                            <button type="button" className="btn btn-sm btn-danger" 
                                                onClick={ _e => deleteContact(c.id)}
                                            >
                                                <i className="bi-trash-fill"></i> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </section>
    );
};

export default ContactsList;