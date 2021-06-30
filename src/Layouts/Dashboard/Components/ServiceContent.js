import React from 'react';

const ServiceContent = (props) => {
    const { service, handleCancelBtn } = props;
    const { _id, name, image } = service;

    return (
        <div className="dash-service">
            <div>
                <span><img src={image} className="img-fluid" alt="" /></span>
                <span className="service-name">{name}</span>
            </div>
            <div>
                <span className="status">Pending</span>
                <span onClick={() => handleCancelBtn(_id)} className="cancel">Cancel</span>
            </div>
        </div>
    );
};

export default ServiceContent;