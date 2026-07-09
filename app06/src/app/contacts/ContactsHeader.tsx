"use client";

import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";

const ContactsHeader = () => {

    const pathname = usePathname()

    return (
        <Nav variant="tabs">
            <NavItem>
                <NavLink href="/contacts" className={pathname === '/contacts' ? 'active' : ''}> List </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contacts/add" className={pathname === '/contacts/add' ? 'active' : ''}> New </NavLink>
            </NavItem>
        </Nav>
    );
}

export default ContactsHeader;