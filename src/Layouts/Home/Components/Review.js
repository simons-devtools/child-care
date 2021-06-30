import React from 'react';

const Review = (props) => {
    const { image, name, designation, description } = props.review;

    return (
        <div className="col-md-4">
            <div className="review">
                <img src={image} className="img-fluid" alt="" />
                <h4>{name}</h4>
                <strong>
                    <span>--</span>
                    <span>{designation}</span>
                    <span>--</span>
                </strong>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;