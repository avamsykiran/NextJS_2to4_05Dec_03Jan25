import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./ui/Header";
import ContactsList from "./ui/ContactsList";
import ContactForm from "./ui/ContactForm";

const App: FC<any> = () => (
  <Router>
    
    <Header
      appTitle="Address Book"
      links={[
        { icon: "bi-person-lines-fill", text: "Contacts List", path: "/" },
        { icon: "bi-file-earmark-plus-fill", text: "New Contact", path: "/add" }
      ]}
    />

    <div className="container-fluid p-4">
      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/edit/:id" element={<ContactForm />} />
      </Routes>
    </div>

  </Router>
);

export default App;