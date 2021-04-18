import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostCard = ({ id, image, title, createdAt, summary }) => {
    return (
        <div className="card">
            <Link to={`/post/${id}`}>
                <img src={image} className="card-img-top" alt="postimage" />
            </Link>
            <div className="card-body">
                <Link to={`/post/${id}`}>
                    <h5 className="card-title">{title}</h5>
                </Link>
                <p className="card-text">
                    <small className="text-muted">
                        Created {moment(createdAt).calendar()}
                    </small>
                </p>
                <p className="card-text desc-truncate">{summary}</p>
            </div>
        </div>
    );
};

PostCard.defaultProps = {
    id: "123",
    image: "http://placehold.it/400x300",
    title: "Post Title",
    createdAt: Date.now(),
    summary:
        "I am a basic summary whose only purpose is to be a placeholder for an actual summary description",
};

export default PostCard;
