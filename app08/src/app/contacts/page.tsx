import ContactsList from "./ContactsList";
import { Contact } from "@/lib/models/Contact";
import { ContactsStoreProvider } from "@/lib/state/ContactsStoreProvider";
import ContactsFilterForm from "./ContactsFilterForm";
import { getAllContactsServerAction } from "@/actions/contactActions";

const ContactsListPage = async () => {

    var contacts: Contact[] = await getAllContactsServerAction();

    return (
        <ContactsStoreProvider initialData={{ contacts }}>
            <ContactsFilterForm />
            <ContactsList />
        </ContactsStoreProvider>
    )

};

export default ContactsListPage;