import MsgBox from "@/components/MsgBox";
import { getContactById } from "@/lib/services/contactaApiService";
import { Suspense } from "react";
import { Contact } from "@/lib/models/Contact";
import ContactForm from "../../ContactForm";

const EditContactPage = async ({params}:{params:Promise<{id:number}>}) => {

    const {id} = await params;
    var contact: Contact | null = null;
    var errMsg: string | null = null;

    try {
        contact = await getContactById(id);
    } catch (err) {
        console.error(err);
        errMsg = "Unable to fetech data! Please retry later!";
    }

    return (
        <section className="m-4 p-4 border border-info">
            <h3>Edit Contact</h3>

            <Suspense
                fallback={<MsgBox msg="Please wait while laoding..." variant="info" />}>
                {errMsg && <MsgBox variant="danger" msg={errMsg} />}
                {contact && <ContactForm oldContact={contact} isEditing={true} />}
            </Suspense>
        </section>
    )

};

export default EditContactPage;