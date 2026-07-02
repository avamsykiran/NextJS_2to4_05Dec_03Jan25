import "server-only";
import { Contact } from "../models/Contact";

const API_URL = "http://loca;lhost:9999/contacts";

export const getAll = async () => {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("failed retriving records");
    }

    return res.json();
}

export const getById = async (id: number) => {
    const res = await fetch(API_URL + "/" + id);

    if (!res.ok) {
        throw new Error("failed retriving records");
    }

    return res.json();
}

export const addContact = async (c: Contact) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(c)
    });

    if (!res.ok) {
        throw new Error("failed saving records");
    }

    return res.json();
}

export const updateContact = async (c: Contact) => {
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

    return res.json();
}

export const deleteById = async (id: number) => {
    const res = await fetch(API_URL + "/" + id, {
        method: "DELETE"
    });

    if (!res.ok) {
        throw new Error("failed saving records");
    }
}