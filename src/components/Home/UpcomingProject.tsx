import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/UpcomingProjects.css";

interface Project {
	address: string;
	city: string;
	imageUrl: string;
}

const projectData: Project[] = [
	{
		address: "2339 Willow Road",
		city: "Regina, Saskatchewan",
		imageUrl: "/background1.jpg",
	},
	{
		address: "2151 Anaquod Road",
		city: "Regina, Saskatchewan",
		imageUrl: "/background1.jpg",
	},
	{
		address: "229 Street NW",
		city: "Edmonton, Alberta",
		imageUrl: "/background1.jpg",
	},
	{
		address: "1701 Barley Street",
		city: "Regina, Saskatchewan",
		imageUrl: "/background1.jpg",
	},
];

const UpcomingProjects: React.FC = () => {
	return (
		<Container className="upcoming-projects-container my-5">
			<h2 className="text-center mb-4">Upcoming Development Projects</h2>
			<Row>
				{projectData.map((project, index) => (
					<Col key={index} md={3} className="mb-4">
						<Card className="project-card h-100">
							<Card.Img variant="top" src={project.imageUrl} alt="Project Image" />
							<Card.Body>
								<Card.Title className="font-weight-bold">{project.address}</Card.Title>
								<Card.Text className="text-muted">{project.city}</Card.Text>
								<Button variant="primary" className="join-waitlist-btn">
									Join the Waitlist
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default UpcomingProjects;
