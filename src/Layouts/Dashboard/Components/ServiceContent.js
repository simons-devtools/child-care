import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const ServiceContent = (props) => {
    const { service, handleUpdateBtn } = props;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, image, price } = service.service;
    const [admins, setAdmins] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/checkAdmins', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmins(data))
    })

    return (
        <tbody>
            <td><img src={image} alt="" /></td>
            <td>{name}</td>
            <td className="middle">{price}</td>
            <td>{service.shipment.name}</td>
            <td>{service.shipment.email}</td>
            <td className="phonee">{service.shipment.phone}</td>
            <td>{service.orderId}</td>
            <td>
                <span className="user-btn status">{service.status}</span>
                {admins && <button onClick={() => handleUpdateBtn(service)} className="user-btn view">update</button>}
            </td>
        </tbody>
    );
};

export default ServiceContent;