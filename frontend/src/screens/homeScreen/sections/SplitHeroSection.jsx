import React from "react";
import "./SplitHeroSection.scss";

const SplitHeroSection = () => {
    return (
        <section className="dkSplitHeroSection pb-5" id="home-hero-section">
            <div className="container-fluid no-padding">
                <div className="row no-gutters">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="img-left title-center">
                            <h1>
                                <a href="/blog-list" className="title">
                                    blog
                                </a>
                            </h1>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="img-right title-center">
                            <h1>
                                <a href="/fitness-list" className="title">
                                    fitness
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitHeroSection;
