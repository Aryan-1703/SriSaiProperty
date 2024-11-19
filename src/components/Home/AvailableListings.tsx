import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Carousel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Home/AvailableListings.css";
import emailjs from "emailjs-com";

const AvailableListings = React.forwardRef<HTMLDivElement>((_, ref) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [selectedAddress, setSelectedAddress] = useState<string>("");
	const [showGallery, setShowGallery] = useState<boolean>(false);

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

	// House images array
	const houseImages = Array.from({ length: 17 }, (_, i) => `/house_2/img${i + 1}.jpg`);

	return (
		<Container ref={ref} fluid className="available-listings-section my-5">
			<h2 className="section-title">
				<b>Available Listings</b>
			</h2>
			<Row>
				<Col md={6} lg={4} className="mb-4">
					<Card className="listing-card h-100">
						<Card.Img variant="top" src="/house_2/img7.jpg" alt="3218 Daphne Street" />
						<Card.Body>
							<Card.Title className="listing-title">3218 Daphne Street</Card.Title>
							<Card.Text className="listing-location">Regina, Saskatchewan</Card.Text>
							<Card.Text className="listing-description">
							Discover this cozy 2-bedroom home offering a warm living room, functional kitchen, and single bathroom—perfect for small families or couples. Conveniently located behind Giant Tiger and near Canadian Tire, it provides easy access to shopping, schools, and public transport in a quiet, family-friendly neighborhood.

Enjoy natural light, a practical layout, and a prime location for everyday comfort.

Schedule your viewing today!
							</Card.Text>
							<Button
								variant="primary"
								className="action-btn btn-sm"
								onClick={() => window.open(mapUrl("3218 Daphne Street, Saskatchewan"), "_blank")}
							>
								View on Map
							</Button>
							<Button
								variant="primary"
								className="action-btn mt-2"
								onClick={() => setShowGallery(true)} // Open photo gallery
							>
								View the House
							</Button>
							<Button
								variant="primary"
								className="action-btn mt-2"
								data-bs-toggle="modal"
								data-bs-target="#waitlistModal"
								onClick={() => setSelectedAddress("3218 Daphne Street, Regina, Saskatchewan")}
							>
								Join the Waitlist
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			{/* Modal for Photo Gallery */}
			<Modal show={showGallery} onHide={() => setShowGallery(false)} size="lg" centered>
				<Modal.Header closeButton>
					<Modal.Title>Gallery: 3218 Daphne Street</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Carousel>
						{houseImages.map((image, index) => (
							<Carousel.Item key={index}>
								<img className="d-block w-100" src={image} alt={`House Image ${index + 1}`} />
							</Carousel.Item>
						))}
					</Carousel>
				</Modal.Body>
			</Modal>

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
