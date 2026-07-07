import "server-only";
import { Contact } from "../models/Contact";

const API_URL = "http://localhost:9999/contacts";

export const getAllContacts = async () : Promise<Contact[]> => {
    const res = await fetch(API_URL,{
        next: {
            revalidate: 3600, //fetech contacts list only once per hour
            tags: ['contacts-list'] //this tag can be used to force revalidation.
        }
    });

    if (!res.ok) {
        throw new Error("failed retriving records");
    }

    return res.json() as Promise<Contact[]>;
}

export const getContactById = async (id: number) : Promise<Contact> => {
    const res = await fetch(API_URL + "/" + id);

    if (!res.ok) {
        throw new Error("failed retriving records");
    }

    return res.json() as Promise<Contact>;
}

export const addContact = async (c: Contact) : Promise<Contact> => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...c,id:undefined})
    });

    if (!res.ok) {
        throw new Error("failed saving records");
    }

    //revalidateTag("contacts-list","max"); instead move this to relevant ServerAction 

    return res.json() as Promise<Contact>;
}

export const updateContact = async (c: Contact) : Promise<Contact> => {
    const res = await fetch(API_URL + "/" + c.id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(c)
    });

    if (!res.ok) {
        throw new Error("failed saving records");
    }

    //revalidateTag("contacts-list","max"); instead move this to relevant ServerAction 

    return res.json() as Promise<Contact>;
}

export const deleteContactById = async (id: number) => {
    const res = await fetch(API_URL + "/" + id, {
        method: "DELETE"
    });

    if (!res.ok) {
        throw new Error("failed saving records");
    }

    //revalidateTag("contacts-list","max"); instead move this to relevant ServerAction 
}