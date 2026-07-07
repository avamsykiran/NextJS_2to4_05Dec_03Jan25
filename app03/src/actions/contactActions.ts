 "use server";

import { Contact } from "@/lib/models/Contact";
import { addContact, deleteContactById, updateContact } from "@/lib/services/contactaApiService";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function addContactServerAction(c:Contact) {
    await addContact(c);
    updateTag('contacts-list'); //revalidating
    redirect("/contacts");
}

export async function updateContactServerAction(c:Contact) {
    await updateContact(c);
    updateTag('contacts-list');
    redirect("/contacts");
}

export async function deleteContactServerAction(id:number) {
    await deleteContactById(id);
    updateTag('contacts-list');
}
