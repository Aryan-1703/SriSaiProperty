import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Residents/Form.css";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaComment } from "react-icons/fa";
import emailjs from "emailjs-com";

const ResidentQueryForm = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (formRef.current) {
			emailjs
				.sendForm("Resident_form", "template_a7u9bie", formRef.current, "1WSF14RNa_njICkvf")
				.then(() => {
					alert("Thank you for reaching out! We will get back to you shortly.");
					formRef.current?.reset();
				})
				.catch(error => {
					alert("Sorry, there was an issue with your submission. Please try again later.");
					console.error(error.text);
				});
		}
	};

	return (
		<div className="form-container">
			<h1 className="form-header">Resident Query Form</h1>
			<p className="form-subheader">
				If you're a current resident and have any queries, please fill out the form below.
				Our team will respond promptly.
			</p>
			<p className="form-required">* Indicates required fields</p>
			<form ref={formRef} onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<FaUser className="form-icon" />
							<label htmlFor="name" className="form-label">
								Name*
							</label>
							<input
								type="text"
								className="form-control form-control-icon"
								id="name"
								name="from_name"
								required
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<FaEnvelope className="form-icon" />
							<label htmlFor="email" className="form-label">
								Email*
							</label>
							<input
								type="email"
								className="form-control form-control-icon"
								id="email"
								name="from_email"
								required
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<FaPhone className="form-icon" />
					<label htmlFor="phone" className="form-label">
						Phone*
					</label>
					<input
						type="tel"
						className="form-control form-control-icon"
						id="phone"
						name="phone_number"
						required
					/>
				</div>
				<div className="form-group">
					<FaBuilding className="form-icon" />
					<label htmlFor="building" className="form-label">
						Home Address
					</label>
					<input
						type="text"
						className="form-control form-control-icon"
						id="building"
						name="building"
					/>
				</div>
				<div className="form-group">
					<FaComment className="form-icon" />
					<label htmlFor="message" className="form-label">
						Message*
					</label>
					<textarea
						className="form-control form-control-icon"
						id="message"
						name="message"
						required
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ResidentQueryForm;
