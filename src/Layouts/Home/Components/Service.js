import React from 'react';

const Service = (props) => {
    const { service, getServiceBtn } = props;
    const { image, name, description } = service;

    return (
        <div className="col-md-4">
            <div className="services">
                <img src={image} className="img-fluid" alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
                <button onClick={() => getServiceBtn(service)} className="header-btn">Get Now</button>
            </div>
        </div>
    );
};

export default Service;