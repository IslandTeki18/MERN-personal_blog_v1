import React from "react";
import ContactForm from "../../../../components/ContactForm";
import "./ContactFormSection.scss";

const ContactFormSection = () => {
    return (
        <section className="dkContactFormSection">
            <div className="container-fluid no-gutters">
                <div className="row py-5">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <div className="contact-icon-wrapper">
                            <i className="fas fa-phone icon-size text-white"></i>
                        </div>
                    </div>
                    <div className="col-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
