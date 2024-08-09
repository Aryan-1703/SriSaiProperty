import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Contact/Form.css';

const Form = () => {
    return (
        <div className="form-container">
            <h1 className="form-header">Have questions or just want to chat?</h1>
            <p className="form-subheader">Fill out the form below and our team will get back to you as soon as possible.</p>
            <p className="form-required">"*" Indicates required fields</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name*</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone*</label>
                    <input type="tel" className="form-control" id="phone" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Address" className="form-label">Home Address*</label>
                    <input type="text" className="form-control" id="address" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message*</label>
                    <textarea className="form-control" id="message"  required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};
export default Form;