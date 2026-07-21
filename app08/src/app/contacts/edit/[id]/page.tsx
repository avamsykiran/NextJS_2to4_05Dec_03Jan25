import ContactForm from "../../ContactForm";
import { getContactByIdServerAction } from "@/actions/contactActions";

const EditContactPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;
    var contact = await getContactByIdServerAction(id);

    if(contact===null){
        throw new Error("No such record Found to edit");
    }

    return <ContactForm oldContact={contact} isEditing={true} />

};

export default EditContactPage;