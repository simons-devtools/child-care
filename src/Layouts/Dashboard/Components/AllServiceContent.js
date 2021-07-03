import React from 'react';

const AllServiceContent = (props) => {
    const { service, handleUpdateBtn, handleDeleteBtn } = props;
    const { _id, name, price, image } = service;

    return (
        <div className="dash-service">
            <div>
                <span><img src={image} alt="" /></span>
                <span className="service-name">{name}</span>
                <span className="">${price}</span>
            </div>
            <div>
                <button onClick={() => handleUpdateBtn(service)} className="user-btn view">View</button>
                <button onClick={() => handleDeleteBtn(_id)} className="user-btn cancel">Delete</button>
            </div>
        </div>
    );
};

export default AllServiceContent;