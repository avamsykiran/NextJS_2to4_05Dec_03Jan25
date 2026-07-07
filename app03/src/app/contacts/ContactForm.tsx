"use client";

import { addContactServerAction, updateContactServerAction } from "@/actions/contactActions";
import { Contact } from "@/lib/models/Contact";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm, type SubmitHandler } from 'react-hook-form';

const ContactForm: FC<{oldContact?:Contact,isEditing:boolean}> = ({oldContact,isEditing}) => {
    
    const router = useRouter();

    const {
        register,
        handleSubmit,        
        formState: { errors },
    } = useForm<Contact>({
        defaultValues: !isEditing ? { id: 0, name: '', mobile: '', mailId: '' } : {...oldContact}
    });

    const save: SubmitHandler<Contact> = (contact:Contact) => {
        
        if(isEditing){
            updateContactServerAction(contact);
        } else {
            addContactServerAction(contact);
        }

        //router.push('/contacts'); this is done already via redirect in server-actions.
    };

    return (
            <section className="col-5 mx-auto p-4">
                <h4> 
                    <i className={isEditing ? "bi-pen-fill" : "bi-file-earmark-plus-fill"} />
                    {isEditing ? "Edit" : "New"} Contact Details
                </h4>
           
                <form onSubmit={handleSubmit(save)}>
                    <div className="form-group">
                        <label className="form-label">Contact Id</label>
                        <input type="number" className="form-control" {...register("id")} readOnly={true} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" {...register("name", { required: true })} />
                        {errors.name?.type === 'required' && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label className="form-label">Mobile</label>
                        <input type="text" className="form-control" 
                        {...register("mobile", { required: true, pattern: /[1-9][0-9]{9}/ })} />
                        {errors.mobile?.type === 'required' && <span>This field is required</span>}
                        {errors.mobile?.type === 'pattern' && <span>A 10 digit number expected</span>}
                    </div>
                    <div className="form-group">
                        <label className="form-label">Mail Id</label>
                        <input type="email" className="form-control" 
                        {...register("mailId", { required: true })} />
                        {errors.mailId?.type === 'required' && <span>This field is required</span>}
                    </div>
                    <div className="d-grid mt-1">
                        <button className="btn btn-primary">
                            <i className="bi-floppy" /> SAVE
                        </button>
                    </div>
                </form>
            </section>
        );
};

export default ContactForm;