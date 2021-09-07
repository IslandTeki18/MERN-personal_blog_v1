import React from "react";
import {Link} from "react-router-dom"
import "./HeaderSection.scss";

const HeaderSection = () => {
    return (
        <section className="dkHeaderSection">
            <div className="container-fluid no-gutters">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-white pb-4 display-4">About Island Teki</h1>
                        <h4 className="text-white">
                            Check out the most recent posts on Coding, Lifting, and Life.
                        </h4>
                        <Link to="/blog-list" className="btn btn-primary">
                            Go to Posts
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
