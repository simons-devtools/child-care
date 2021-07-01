import React from 'react';

const AllServiceContent = (props) => {
    const { service, handleDeleteBtn } = props;
    const { _id, name, image } = service;

    return (
        <div className="dash-service">
            <div>
                <span><img src={image} alt="" /></span>
                <span className="service-name">{name}</span>
            </div>
            <div>
                <span className="pending">View</span>
                <span onClick={() => handleDeleteBtn(_id)} className="cancel">Delete</span>
            </div>
        </div>
    );
};

export default AllServiceContent;