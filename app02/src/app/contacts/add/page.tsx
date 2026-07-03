import ContactForm from "../ContactForm";

const AddContactPage = () => (
    <section className="m-4 p-4 border border-info">
        <h3>New Contact </h3>
        <ContactForm isEditing={false} />
    </section>
);

export default AddContactPage;