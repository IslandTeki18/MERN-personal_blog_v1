import React from "react";
import HeroBanner from "../../components/HeroBanner";
import PostCard from "../../components/PostCard";
import "./BlogPostListScreen.scss";

const BlogPostListScreen = () => {
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
        <div className="dkBlogPostListScreen">
            <HeroBanner title="My Blog" />
            <section className="py-5" id="post-list-section">
                <div className="container">
                    <div className="row">{renderPostListCards()}</div>
                </div>
            </section>
        </div>
    );
};

export default BlogPostListScreen;
