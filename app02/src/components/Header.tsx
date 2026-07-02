import { Container, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

const Header = ({title}:{title:string}) => (
    <Navbar expand="sm" className="bg-dark navbar-dark" collapseOnSelect>
        <Container>
            <NavbarBrand href="/">{title}</NavbarBrand>

            <NavbarToggle aria-controls="adb-top-nav-bar" />

            <NavbarCollapse id="adb-top-nav-bar">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/contactUs">Contact Us</NavLink>
                <NavLink href="/aboutUs">About Us</NavLink>
            </NavbarCollapse>
        </Container>
    </Navbar>
);

export default Header;