import React from "react";
import "./AboutScreen.scss";
import HeaderSection from "./sections/headerSection/HeaderSection";
import InfoIconSection from "./sections/infoIconSection/InfoIconSection";
import AboutSection from "./sections/aboutSection/AboutSection";

const AboutScreen = () => {
    return (
        <div className="dkAboutScreen">
            <HeaderSection />
            <InfoIconSection />
            <AboutSection />
        </div>
    );
};

export default AboutScreen;
