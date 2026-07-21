"use server";


import { Contact } from "../models/Contact";
import { db } from "./db";

export async function getAllContacts() {
    return await db.contact.findMany();
}

export async function getContactById(id:string) {
    return await db.contact.findUnique({where:{id}});
}

export async function addContact(c: Contact) {
    await db.contact.create({
        data: { ...c, id: undefined },
    });    
}

export async function updateContact(c: Contact) {
    await db.contact.update({
        where: { id: c.id },
        data: { ...c, id: undefined },
    });    
}

export async function deleteContact(id: string) {
    await db.contact.delete({
        where: { id },
    });    
}
