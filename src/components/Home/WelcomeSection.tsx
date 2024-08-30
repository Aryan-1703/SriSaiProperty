import  { useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home/WelcomeSection.css';
import AvailableListings from './AvailableListings'; // Adjust the import path as necessary

const WelcomeSection = () => {
  const listingsRef = useRef<HTMLDivElement>(null);

  const scrollToListings = () => {
    if (listingsRef.current) {
      listingsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Container fluid className="welcome-section text-center my-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6}>
            <h2 className="welcome-heading">Welcome Home</h2>
            <p className="welcome-description">
              Begin your next chapter with Sri Sai Property. Our dedicated team is here to make your journey seamless and exciting, helping you discover a living space that truly feels like home.
            </p>
            <p className="welcome-text">
              Whether you're looking for a cozy apartment, a spacious family home, or a stylish condo, we offer a diverse range of rental options to suit every lifestyle and budget. Our listings span across vibrant and dynamic communities, each offering its own unique charm and amenities.
            </p>
            <p className="location-title">Explore Our Key Locations:</p>
            <Row className="locations mb-4">
              <Col md={6}>
                <Card className="location-card">
                  <Card.Body>
                    <Card.Title>Regina, Saskatchewan</Card.Title>
                    <Card.Text>
                      Embrace the warmth and hospitality of Regina, a city known for its rich history, cultural events, and friendly neighborhoods. From charming historic areas to modern developments, Regina has something for everyone.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="location-card">
                  <Card.Body>
                    <Card.Title>Calgary, Alberta</Card.Title>
                    <Card.Text>
                      Experience the energy and excitement of Edmonton, a city renowned for its vibrant arts scene, diverse dining options, and family-friendly activities. Whether you're drawn to its bustling downtown or serene suburban areas, Edmonton offers a variety of living environments to match your preferences.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <p className="why-choose-us-title">Why Choose Us?</p>
            <ul className="why-choose-us-list">
              <li><strong>Personalized Service:</strong> Our team is committed to understanding your needs and guiding you to the ideal property that fits your lifestyle and goals. We take pride in offering a personalized approach to every client, ensuring a smooth and enjoyable renting experience.</li>
              <li><strong>Local Expertise:</strong> With deep-rooted knowledge of the Regina and Edmonton markets, we provide valuable insights and recommendations that help you make informed decisions. Our local expertise ensures that you find a home that aligns perfectly with your desires and expectations.</li>
              <li><strong>Comprehensive Support:</strong> From the initial search to the final paperwork, we are here to assist you every step of the way. Our goal is to make your transition to a new home as seamless as possible, allowing you to focus on what truly matters—enjoying your new space and community.</li>
            </ul>
            <Button variant="primary" className="explore-button" onClick={scrollToListings}>
              Explore Our Listings
            </Button>
          </Col>
        </Row>
      </Container>
      <AvailableListings ref={listingsRef} />
    </>
  );
};

export default WelcomeSection;
