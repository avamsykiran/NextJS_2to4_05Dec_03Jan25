import MsgBox from "@/components/MsgBox";
import { getAllContacts } from "@/lib/services/contactaApiService";
import { Suspense } from "react";
import ContactsList from "./ContactsList";
import { Contact } from "@/lib/models/Contact";

const ContactsListPage = async () => {

    var contacts: Contact[] | null = null;
    var errMsg: string | null = null;

    try {
        contacts = await getAllContacts();
    } catch (err) {
        console.error(err);
        errMsg = "Unable to fetech data! Please retry later!";
    }

    return (
        <Suspense
            fallback={<MsgBox msg="Please wait while laoding..." variant="info" />}>
            {errMsg && <MsgBox variant="danger" msg={errMsg} />}
            {contacts && <ContactsList contacts={contacts} />}
        </Suspense>
    )

};

export default ContactsListPage;