import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Home/AvailableListings.css";
import emailjs from "emailjs-com";

const AvailableListings = React.forwardRef<HTMLDivElement>((_, ref) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [selectedAddress, setSelectedAddress] = useState<string>("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (formRef.current) {
			emailjs
				.sendForm("Waitlist-form", "template_mp5k3xl", formRef.current, "1WSF14RNa_njICkvf")
				.then(() => {
					alert("Thank you for joining the waitlist! We will get in touch with you soon.");
					formRef.current?.reset();
				})
				.catch((error) => {
					alert("Sorry, there was an issue with your submission. Please try again later.");
					console.error(error.text);
				});
		}
	};

	const mapUrl = (address: string) =>
		`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

	return (
		<Container ref={ref} fluid className="available-listings-section my-5">
			<h2 className="section-title">
				<b>Available Listings</b>
			</h2>
			<Row>
				<Col md={6} lg={4} className="mb-4">
					<Card className="listing-card h-100">
						<Card.Img variant="top" src="/house_1/House1.jpg" alt="753 Rae Street" />
						<Card.Body>
							<Card.Title className="listing-title">753 Rae Street</Card.Title>
							<Card.Text className="listing-location">Regina, Saskatchewan</Card.Text>
							<Card.Text className="listing-description">
								Description below:
								This charming 2-bedroom house offers a cozy and comfortable living space, perfect for small families or couples. The home features a single bathroom, a well-equipped kitchen, and a welcoming living room, ideal for relaxation and entertaining. Located in a convenient spot, the house is situated right behind Giant Tiger, providing easy access to shopping essentials. Additionally, it’s close to Canadian Tire, making it a prime location for all your needs. Enjoy the blend of comfort and convenience in this lovely home!
								Utilities Not included in the rent.
							</Card.Text>
							<Button
								variant="primary"
								className="action-btn btn-sm" /* Smaller button */
								onClick={() => window.open(mapUrl("753 Rae Street, Regina, Saskatchewan"), "_blank")}
							>
								View on Map
							</Button>
							<Button
								variant="primary"
								className="action-btn mt-2"
								data-bs-toggle="modal"
								data-bs-target="#waitlistModal"
								onClick={() => setSelectedAddress("753 Rae Street, Regina, Saskatchewan")}
							>
								Join the Waitlist
							</Button>
						</Card.Body>
					</Card>
				</Col>

				<Col md={6} lg={4} className="mb-4">
					<Card className="listing-card h-100 text-center">
						<Card.Body>
							<Card.Title className="listing-title">Coming Soon!</Card.Title>
							<Card.Text className="listing-description">
								We are preparing new listings that will be available soon. Stay tuned for updates!
							</Card.Text>
							<Button
								variant="primary"
								className="action-btn"
								data-bs-toggle="modal"
								data-bs-target="#waitlistModal"
								onClick={() => setSelectedAddress("Coming Soon!")}
							>
								Contact Us
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			{/* Waitlist Modal */}
			<div
				className="modal fade"
				id="waitlistModal"
				tabIndex={-1}
				aria-labelledby="waitlistModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="waitlistModalLabel">
								Join the Waitlist
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<Form ref={formRef} onSubmit={handleSubmit}>
								<Form.Group controlId="formName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" name="from_name" required />
								</Form.Group>
								<Form.Group controlId="formEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" name="from_email" required />
								</Form.Group>
								<Form.Group controlId="formPhone">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control type="tel" name="phone_number" />
								</Form.Group>
								<Form.Group controlId="formMessage">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" name="message" rows={3} />
								</Form.Group>
								{/* Hidden input to include the selected address */}
								<Form.Control type="hidden" name="listing_address" value={selectedAddress} />
								<Button variant="primary" type="submit" className="mt-3">
									Submit
								</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
});

export default AvailableListings;
