import React from 'react';

const ServiceContent = (props) => {
    const { service, handleCancelBtn } = props;
    const { name, image, price } = service.service;
    // console.log(service);

    return (
        <tbody>
            <td><img src={image} alt="" /></td>
            <td className="service-">{name}</td>
            <td className="middle">{price}</td>
            <td>{service.shipment.name}</td>
            <td>{service.shipment.email}</td>
            <td>{service.shipment.phone}</td>
            <td>
                <span className="pending">Pending</span>
                <span onClick={() => handleCancelBtn(service._id)} className="cancel">Cancel</span>
            </td>
        </tbody>
    );
};

export default ServiceContent;