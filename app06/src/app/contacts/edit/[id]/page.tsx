import MsgBox from "@/components/MsgBox";
import { getContactById } from "@/lib/services/contactaApiService";
import { Suspense } from "react";
import { Contact } from "@/lib/models/Contact";
import ContactForm from "../../ContactForm";

const EditContactPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;
    var contact = await getContactById(Number(id));

    return <ContactForm oldContact={contact} isEditing={true} />

};

export default EditContactPage;