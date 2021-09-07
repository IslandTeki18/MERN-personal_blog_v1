import React from "react";
import "./HeaderSection.scss";

const HeaderSection = () => {
    return (
        <section className="dkHeaderSection">
            <div className="container-fluid no-gutters">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-white pb-4 display-4">
                            Contact Us
                        </h1>
                        <h4 className="text-white">
                            We'd love to hear from you!
                        </h4>
                        <button
                            className="btn btn-primary"
                            onClick={() => window.scrollTo(0, 500, "smooth")}
                        >
                            talk to us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
