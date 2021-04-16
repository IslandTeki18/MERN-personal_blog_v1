import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostCard = ({id, image, title, createdAt, summary}) => {
    return (
        <div className="card">
            <Link to={`/post/${id}`}>
                <img
                    src={image}
                    className="card-img-top"
                    alt="postimage"
                />
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

export default PostCard;
