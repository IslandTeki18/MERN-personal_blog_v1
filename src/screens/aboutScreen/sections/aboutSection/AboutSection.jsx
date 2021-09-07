import React from "react";
import "./AboutSection.scss";
import Paragraph from "../../../../components/paragraph/Paragraph";

const AboutSection = () => {
    return (
        <section className="dkAboutSection">
            <div className="container-fluid no-gutters">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img
                            className="rounded img-fluid"
                            src={"https://via.placeholder.com/400x500"}
                            alt="placeholder"
                        />
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <Paragraph color="#ffffff" size={20}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                            <br />
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
