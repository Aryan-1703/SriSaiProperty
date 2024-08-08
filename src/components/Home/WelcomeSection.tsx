import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home/WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <Container fluid className="welcome-section text-center">
      <Row>
        <Col>
          <h2 className="welcome-heading">Welcome Home.</h2>
          <p className="welcome-description">
            Make renting with Sri Sai Property the start of your next chapter. Discover your dream living space in
            the vibrant communities we call home in Regina, Saskatchewan, and Edmonton, Alberta.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeSection;