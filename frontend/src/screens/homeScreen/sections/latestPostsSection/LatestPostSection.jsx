import React from "react";
import "./LatestPostSection.scss";

const LatestPostSection = ({ posts }) => {
    function renderPostCards() {
        return (
            <>
                {posts.map((post) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 p-2">
                        {post}
                    </div>
                ))}
            </>
        );
    }
    return (
        <section id="home-blog-list-section">
            <div className="container py-4">
                <div className="text-center pb-3">
                    <h3>My Latest Posts</h3>
                </div>
                <div className="row">{renderPostCards()}</div>
            </div>
        </section>
    );
};

export default LatestPostSection;
