import React from "react";

const HeroBanner = ({ title }) => {
    return (
        <section className="hero-banner bg-primary">
            <div className="container py-5 text-center">
                <h1 className="text-uppercase text-white title">{title}</h1>
            </div>
        </section>
    );
};

HeroBanner.defaultProps = {
    title: "placeholder",
};

export default HeroBanner;
