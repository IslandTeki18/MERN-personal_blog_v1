import React from "react";
import ContactForm from "../components/ContactForm";

const ContactScreen = () => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3>Contact Me</h3>
                    <h6 className="text-muted mb-5">Contact me if you have any questions or concerns</h6>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactScreen;
