import React from "react";
import ContactFormSection from "./sections/contactFormSection/ContactFormSection";
import HeaderSection from "./sections/headerSection/HeaderSection";

const ContactScreen = () => {
    return (
        <div className="dkContactScreen">
            <HeaderSection />
            <ContactFormSection />
        </div>
    );
};

export default ContactScreen;
