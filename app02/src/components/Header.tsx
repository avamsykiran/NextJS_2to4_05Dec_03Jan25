import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const Header = ({title}:{title:string}) => (
    <Navbar expand="sm" className="bg-dark navbar-dark">
        <Container>
            <NavbarBrand href="/">{title}</NavbarBrand>
        </Container>
    </Navbar>
);

export default Header;