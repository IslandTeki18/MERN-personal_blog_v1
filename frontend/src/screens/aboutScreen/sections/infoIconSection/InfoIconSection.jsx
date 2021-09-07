import React from "react";
import "./InfoIconSection.scss";

const InfoIconSection = () => {
    return (
        <section className="dkInfoIconSection">
            <div className="container-fluid no-gutters">
                <div className="icon-row">
                    <div className="icon-container">
                        <i className="fas fa-code icon-size pb-3"></i>
                        <h1>Coding</h1>
                    </div>
                    <div className="icon-container">
                        <i className="fas fa-dumbbell icon-size pb-3"></i>
                        <h1>Fitness</h1>
                    </div>
                    <div className="icon-container">
                        <i className="fas fa-route icon-size pb-3"></i>
                        <h1>Travel</h1>
                    </div>
                    <div className="icon-container">
                        <i className="fas fa-utensils icon-size pb-3"></i>
                        <h1>Food</h1>
                    </div>
                    <div className="icon-container">
                        <i className="fas fa-gamepad icon-size pb-3"></i>
                        <h1>Gaming</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoIconSection;
