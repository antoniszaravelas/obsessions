import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import styled from "styled-components";


const Header = () => {

   const StyledNavbar = styled(Navbar)`
    background-color: black !important;
   `
   

    return ( 
        <StyledNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Clownisch World</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/about">About us</Nav.Link>
                    <Nav.Link href="#history">History</Nav.Link>
                    <NavDropdown title="Menu" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/menu/obsessions">Obsessions</NavDropdown.Item>
                        <NavDropdown.Item href="/menu/stories">Stories</NavDropdown.Item>
                        <NavDropdown.Item href="/menu/poetry">Poetry</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/menu/other">Other Scripts</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/contact">Contact us</Nav.Link>
                    <Nav.Link eventKey={2} href="/login">
                        Login
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="/register">
                        Register
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
     );
}
 
export default Header;