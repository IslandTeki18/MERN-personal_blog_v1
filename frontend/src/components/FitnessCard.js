import React from "react";

const FitnessCard = ({ fitImage, fitDescription, fitIndex }) => {
    return (
        <div className="card">
            <img
                src={`${fitImage}`}
                className="card-img-top"
                alt={`Fitness pic-${fitIndex}`}
            />
            <div className="card-body">
                <p className="card-text">{fitDescription}</p>
            </div>
        </div>
    );
};

export default FitnessCard;
