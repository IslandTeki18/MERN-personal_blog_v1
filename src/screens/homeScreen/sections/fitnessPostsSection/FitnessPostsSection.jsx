import React from "react";
import "./FitnessPostsSection.scss";

const FitnessPostsSection = ({ posts }) => {
    function renderPosts() {
        return (
            <>
                {posts.map((post) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 py-3">
                        {post}
                    </div>
                ))}
            </>
        );
    }
    return (
        <section id="home-fitness-list-section">
            <div className="container py-4">
                <div className="text-center pb-3">
                    <h3>My Fitness Journey</h3>
                </div>
                <div className="row">{renderPosts()}</div>
            </div>
        </section>
    );
};

export default FitnessPostsSection;
