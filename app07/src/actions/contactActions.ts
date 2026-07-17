"use server";

import { db } from "@/lib/db";
import { Contact } from "@/lib/models/Contact";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllContacts() {
    return await db.contact.findMany();
}

export async function getContactById(id:string) {
    return await db.contact.findUnique({where:{id}});
}

export async function addContactServerAction(c: Contact) {
    await db.contact.create({
        data: { ...c, id: undefined },
    });
    revalidatePath('/contacts');
    redirect("/contacts");
}

export async function updateContactServerAction(c: Contact) {
    await db.contact.update({
        where: { id: c.id },
        data: { ...c, id: undefined },
    });
    revalidatePath('/contacts');
    redirect("/contacts");
}

export async function deleteContactServerAction(id: string) {
    await db.contact.delete({
        where: { id },
    });
    revalidatePath('/contacts');
}
