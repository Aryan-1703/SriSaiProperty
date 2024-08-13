import React, { useRef } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home/AvailableListings.css';
import emailjs from 'emailjs-com';

const AvailableListings = React.forwardRef<HTMLDivElement>((_, ref) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (formRef.current) {
      emailjs.sendForm('service01', 'template_mp5k3xl', formRef.current, '1WSF14RNa_njICkvf')
        .then((result) => {
          alert('Thank you for joining the waitlist! We will get in touch with you soon.');
          formRef.current?.reset();
        }, (error) => {
          alert('Sorry, there was an issue with your submission. Please try again later.');
          console.error(error.text);
        });
    }
  };

  const mapUrl = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <Container ref={ref} fluid className="available-listings-section my-5">
      <h2 className="text-center mb-4"><b>Available Listings</b></h2>
      <Row>
        {/* Listing Example */}
        <Col md={6} lg={4} className="mb-4">
          <Card className="project-card h-100">
            <Card.Img variant="top" src="/house_1/House1.jpg" alt="Project Image" />
            <Card.Body>
              <Card.Title className="font-weight-bold">753 Rae Street</Card.Title>
              <Card.Text className="text-muted">Regina, Saskatchewan</Card.Text>
              <Button 
                variant="primary" 
                className="join-waitlist-btn" 
                onClick={() => window.open(mapUrl('753 Rae Street, Regina, Saskatchewan'), '_blank')}
              >
                View on Map
              </Button>
              <Button 
                variant="secondary" 
                className="join-waitlist-btn mt-2" 
                data-bs-toggle="modal" 
                data-bs-target="#waitlistModal"
              >
                Join the Waitlist
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Placeholder Content */}
        <Col md={6} lg={4} className="mb-4 centered-content">
          <Card className="placeholder-card text-center">
            <Card.Body>
              <Card.Title className="font-weight-bold">Stay Tuned!</Card.Title>
              <Card.Text>
                We are updating our listings and will have more properties available soon. 
                In the meantime, feel free to reach out to us for any inquiries or to get on our waitlist.
              </Card.Text>
              <Button 
                variant="primary" 
                className="join-waitlist-btn" 
                onClick={() => window.open('https://www.google.com/maps', '_blank')}
              >
                Contact Us
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Waitlist Modal */}
      <div className="modal fade" id="waitlistModal" tabIndex={-1} aria-labelledby="waitlistModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="waitlistModalLabel">Join the Waitlist</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" required />
                </Form.Group>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" name="phone" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={3} />
                </Form.Group>
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
