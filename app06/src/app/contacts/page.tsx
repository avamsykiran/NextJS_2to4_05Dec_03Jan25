import MsgBox from "@/components/MsgBox";
import { getAllContacts } from "@/lib/services/contactaApiService";
import { Suspense } from "react";
import ContactsList from "./ContactsList";
import { Contact } from "@/lib/models/Contact";
import { ContactsStoreProvider } from "@/lib/state/ContactsStoreProvider";

const ContactsListPage = async () => {

    var contacts: Contact[] = await getAllContacts();

    return (
        <ContactsStoreProvider initialData={{ contacts }}>
            <ContactsList />
        </ContactsStoreProvider>
    )

};

export default ContactsListPage;