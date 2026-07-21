"use server";

import { Contact } from "@/lib/models/Contact";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as contacstDAL from "@/lib/data-access-layer/contactsDAL"

export async function getAllContactsServerAction() {
    return await contacstDAL.getAllContacts();
}

export async function getContactByIdServerAction(id:string) {
    return await contacstDAL.getContactById(id);
}

export async function addContactServerAction(c: Contact) {
    await contacstDAL.addContact(c);
    revalidatePath('/contacts');
    redirect("/contacts");
}

export async function updateContactServerAction(c: Contact) {
    await contacstDAL.updateContact(c);
    revalidatePath('/contacts');
    redirect("/contacts");
}

export async function deleteContactServerAction(id: string) {
    await contacstDAL.deleteContact(id);
    revalidatePath('/contacts');
}
