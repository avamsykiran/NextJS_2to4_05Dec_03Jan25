import ContactsList from "./ContactsList";
import { Contact } from "@/lib/models/Contact";
import { ContactsStoreProvider } from "@/lib/state/ContactsStoreProvider";
import ContactsFilterForm from "./ContactsFilterForm";
import { getAllContacts } from "@/actions/contactActions";

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