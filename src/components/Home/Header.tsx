import React from "react";
import { Navbar, Nav, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Home/Header.css";

const Header = () => {
	return (
		<Navbar bg="white" expand="lg" className="header">
			<Container>
				<Navbar.Brand href="/">
					<img
						src="/logo.jpg"
						alt="Logo"
						className="d-inline-block align-top logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
					<Nav className="mx-auto nav-center">
						<Nav.Link href="/" className="mx-3 nav-link">
							Home
						</Nav.Link>
						<Nav.Link href="/residents" className="mx-3 nav-link">
							Residents
						</Nav.Link>
						<Nav.Link href="/about" className="mx-3 nav-link">
							About
						</Nav.Link>
						<Nav.Link href="/contact" className="mx-3 nav-link">
							Contact
						</Nav.Link>
					</Nav>
					<Button variant="secondary" className="ml-lg-3 btn-custom">
						Find My Dream Place
					</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
