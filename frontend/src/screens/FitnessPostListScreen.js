import React from "react";
import HeroBanner from "../components/HeroBanner";
import PostCard from "../components/PostCard";

const FitnessPostListScreen = () => {
    const renderPostListCards = () => {
        const mockCards = [
            <PostCard />,
            <PostCard />,
            <PostCard />,
            <PostCard />,
            <PostCard />,
            <PostCard />,
        ];

        return (
            <>
                {mockCards.map((post) => (
                    <div className="col-md-4 py-3">{post}</div>
                ))}
            </>
        );
    };
    return (
        <div className="blogPostListScreen">
            <HeroBanner title="My Fitness Blog" />
            <section className="py-5" id="post-list-section">
                <div className="container">
                    <div className="row">{renderPostListCards()}</div>
                </div>
            </section>
        </div>
    );
};

export default FitnessPostListScreen;
