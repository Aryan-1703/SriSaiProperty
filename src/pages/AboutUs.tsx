import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "/Users/ak/srisaiproject/SriSaiProperty/src/styles/AboutUs/AboutUs.css";

const AboutUs: React.FC = () => {
    return (
        <Container className="about-us-container">
            <Card className="border-0">
                <Card.Body>
                    <Row className="mb-4">
                        <Col>
                            <h1 className="about-us-title text-center">
                                <span className="text-dark">Sri Sai Property</span>
                            </h1>
                            <p className="about-us-subtitle text-center">
                                Your Trusted Partner in Real Estate
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <p className="about-us-content">
                                Welcome to <span className="about-us-highlight">Sri Sai Property</span>, your trusted partner in real estate. With years of experience and a commitment to excellence, we specialize in helping individuals and families find their dream homes, investment properties, and commercial spaces.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md={6}>
                            <h3 className="about-us-section-title">Who We Are</h3>
                            <p className="about-us-content">
                                At Sri Sai Property, we pride ourselves on being more than just a real estate agency. We are a team of dedicated professionals passionate about delivering personalized services that meet the unique needs of each client. Our in-depth knowledge of the local market, combined with a deep understanding of real estate trends, enables us to provide expert guidance at every step of your real estate journey.
                            </p>
                        </Col>
                        <Col md={6}>
                            <h3 className="about-us-section-title">Our Mission</h3>
                            <p className="about-us-content">
                                Our mission is simple: to help you find the perfect property that fits your lifestyle and investment goals. Whether you’re a first-time homebuyer, a seasoned investor, or a business looking for commercial space, we are here to ensure that your experience is smooth, transparent, and rewarding.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <h3 className="about-us-section-title">Why Choose Sri Sai Property?</h3>
                            <ul className="about-us-list">
                                <li>
                                    <span className="about-us-highlight">Expertise:</span> Our team consists of highly experienced real estate agents who have an in-depth understanding of the market. We stay updated with the latest trends to give you the best advice.
                                </li>
                                <li>
                                    <span className="about-us-highlight">Personalized Service:</span> We understand that every client is unique, and so are their real estate needs. We take the time to listen to your requirements and tailor our services accordingly.
                                </li>
                                <li>
                                    <span className="about-us-highlight">Trust and Transparency:</span> Building trust with our clients is at the core of our business. We ensure full transparency throughout the process, providing clear and honest communication.
                                </li>
                                <li>
                                    <span className="about-us-highlight">Wide Range of Properties:</span> From luxury homes to commercial spaces, we offer a diverse portfolio of properties to meet all your real estate needs.
                                </li>
                                <li>
                                    <span className="about-us-highlight">Local Market Knowledge:</span> Our deep roots in the community give us unparalleled insights into the local real estate market, ensuring that you get the best possible deals.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <h3 className="about-us-section-title">Our Services</h3>
                            <ul className="about-us-list">
                                <li>
                                    <span className="about-us-highlight">Residential Sales and Rentals:</span> Whether you are looking to buy or rent a home, we offer a variety of residential properties to suit every budget and preference.
                                </li>
                                <li>
                                    <span className="about-us-highlight">Commercial Real Estate:</span> We provide expert assistance in finding the ideal commercial property for your business needs, from office spaces to retail locations.
                                </li>
                                <li>
                                    <span className="about-us-highlight">Property Management:</span> Our property management services are designed to help property owners maximize their investments with minimal hassle.
                                </li>
                                <li>
                                    <span className="about-us-highlight">Real Estate Investment Consultation:</span> We offer professional advice and strategies for those looking to invest in real estate, ensuring profitable and sustainable investment decisions.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="about-us-section-title">Our Commitment to You</h3>
                            <p className="about-us-content">
                                At Sri Sai Property, our clients are our priority. We are committed to providing exceptional service that not only meets but exceeds your expectations. Our goal is to build long-lasting relationships based on trust, integrity, and mutual respect.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-us-footer">
                            <p>
                                <strong>Sri Sai Property</strong><br />
                                Your trusted real estate partner.
                            </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AboutUs;
