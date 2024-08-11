import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Residents/Form.css';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaComment } from 'react-icons/fa'; // Importing icons

const ResidentQueryForm = () => 
    {
    return (
        <div className="form-container">
            <h1 className="form-header">Resident Query Form</h1>
            <p className="form-subheader">If you're a current resident and have any queries, Please fill out the form below. Our team will respond promptly.</p>
            <p className="form-required">"*" Indicates required fields</p>
            <form>
                <div className="form-group">
                    <FaUser className="form-icon" />
                    <label htmlFor="name" className="form-label">Name*</label>
                    <input type="text" className="form-control form-control-icon" id="name" required />
                </div>
                <div className="form-group">
                    <FaEnvelope className="form-icon" />
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input type="email" className="form-control form-control-icon" id="email" required />
                </div>
                <div className="form-group">
                    <FaPhone className="form-icon" />
                    <label htmlFor="phone" className="form-label">Phone*</label>
                    <input type="tel" className="form-control form-control-icon" id="phone" required />
                </div>
                
                <div className="form-group">
                    <FaBuilding className="form-icon" />
                    <label htmlFor="building" className="form-label">Home Address</label>
                    <input type="text" className="form-control form-control-icon" id="building" />
                </div>
                <div className="form-group">
                    <FaComment className="form-icon" />
                    <label htmlFor="message" className="form-label">Message*</label>
                    <textarea className="form-control form-control-icon" id="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ResidentQueryForm;
