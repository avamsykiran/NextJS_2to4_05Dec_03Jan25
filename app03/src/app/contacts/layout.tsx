import ContactsHeader from "./ContactsHeader";

export default function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-2 mx-auto p-2">
      <ContactsHeader />
      <div className="card card-primary border-top-0">
        {children}
      </div>
    </div>
  );
}
