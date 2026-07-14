import { getAllContacts } from "@/lib/services/contactaApiService";
import ContactsList from "./ContactsList";
import { Contact } from "@/lib/models/Contact";
import { ContactsStoreProvider } from "@/lib/state/ContactsStoreProvider";
import ContactsFilterForm from "./ContactsFilterForm";

const ContactsListPage = async () => {

    var contacts: Contact[] = await getAllContacts();

    return (
        <ContactsStoreProvider initialData={{ contacts }}>
            <ContactsFilterForm />
            <ContactsList />
        </ContactsStoreProvider>
    )

};

export default ContactsListPage;