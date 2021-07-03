import React from 'react';

const Service = (props) => {
    const { service, getServiceBtn } = props;
    const { image, name, price, description } = service;

    return (
        <div className="col-md-4">
            <div className="services mb-5">
                <div className="ser-photo">
                    <img src={image} className="img-fluid" alt="" />
                </div>
                <h5>{name}</h5>
                <strong>Service Price ${price}</strong>
                <p>{description}</p>
                <button onClick={() => getServiceBtn(service)} className="header-btn">Get Now</button>
            </div>
        </div>
    );
};

export default Service;