"use client"

import { useTheme } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import { Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

const Header = ({ title }: { title: string }) => {

    const pathname = usePathname()

    const themeContext = useTheme();

    if(!themeContext) return <></>;

    const { theme, toggleTheme } = themeContext;
    
    // Compute the inverse theme string explicitly
    const oppositeTheme = theme === "light" ? "dark" : "light";
    
    return (
        <Navbar expand="sm" collapseOnSelect data-bs-theme={oppositeTheme} bg={oppositeTheme}>
            <Container>
                <NavbarBrand href="/">{title}</NavbarBrand>

                <NavbarToggle aria-controls="adb-top-nav-bar" />

                <NavbarCollapse id="adb-top-nav-bar">
                    <Nav className="me-auto">
                        <NavLink href="/" className={pathname === "/" ? "active" : ''}>Home</NavLink>
                        <NavLink href="/contacts" className={pathname === "/contacts" ? "active" : ''}>Contacts</NavLink>
                        <NavLink href="/aboutUs" className={pathname === "/aboutUs" ? "active" : ''}>About Us</NavLink>
                        <NavLink href="/contactUs" className={pathname === "/contactUs" ? "active" : ''}>Reach Us</NavLink>
                    </Nav>
                    <Button                        
                        onClick={toggleTheme}
                        className="d-flex align-items-center gap-2"
                    >
                        { theme === "light" ? 
                            <i className="bi bi-moon" /> : 
                            <i className="bi bi-brightness-high" />
                        }
                    </Button>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}
export default Header;