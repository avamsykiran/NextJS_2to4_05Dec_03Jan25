"use client"

import { usePathname } from "next/navigation";
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

const Header = ({ title }: { title: string }) => {

    const pathname = usePathname()

    return (
        <Navbar expand="sm" className="bg-dark navbar-dark" collapseOnSelect>
            <Container>
                <NavbarBrand href="/">{title}</NavbarBrand>

                <NavbarToggle aria-controls="adb-top-nav-bar" />

                <NavbarCollapse id="adb-top-nav-bar">
                    <Nav className="me-auto">
                        <NavLink href="/" className={pathname==="/" ? "active":''}>Home</NavLink>
                        <NavLink href="/contacts" className={pathname==="/contacts" ? "active":''}>Contacts</NavLink>
                        <NavLink href="/aboutUs" className={pathname==="/aboutUs" ? "active":''}>About Us</NavLink>
                        <NavLink href="/contactUs" className={pathname==="/contactUs" ? "active":''}>Reach Us</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}
export default Header;