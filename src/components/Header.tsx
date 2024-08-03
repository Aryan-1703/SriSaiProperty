import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = () => {
	return (
		<Navbar bg="white" expand="lg" className="py-5 border-bottom">
			<Container>
				<Navbar.Brand href="/">
					<img
						src="/path-to-your-logo.png"
						alt="Logo"
						height="40"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto align-items-center">
						<Nav.Link href="/" className="mx-2 text-dark">
							Home
						</Nav.Link>
						<NavDropdown title="Rent With Us" id="rent-dropdown" className="mx-2">
							<NavDropdown.Item href="/residential">Residential</NavDropdown.Item>
							<NavDropdown.Item href="/commercial">Commercial</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/about" className="mx-2 text-dark">
							About
						</Nav.Link>
						<Nav.Link href="/contact" className="mx-2 text-dark">
							Contact
						</Nav.Link>
						<Nav.Link href="/iwd2024" className="mx-2 text-dark">
							IWD 2024
						</Nav.Link>
					</Nav>
					<Button variant="dark" className="ml-lg-3 px-3">
						Find My Dream Place
					</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
