import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceContent from '../Components/ServiceContent';
import { UserContext } from '../../../App';

const MyServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);

    // Get users "WISHLIST PRODUCTS" from mongodb cloud:
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [loggedInUser.email])

    // .....
    const handleCancelBtn = (addedId) => {
        console.log('Servicee id', addedId);
    }

    return (
        <>
            <h2>My services component</h2>
            <div>
                <table>
                    <thead>
                        <th>Images</th>
                        <th>Services Name</th>
                        <th className="middle">Price($)</th>
                        <th>Users Name</th>
                        <th>Users Email</th>
                        <th>Users Phone</th>
                        <th>Users Action Button</th>
                    </thead>
                    {
                        services.map(service =>
                            <ServiceContent
                                key={service._id}
                                service={service}
                                handleCancelBtn={handleCancelBtn}
                            />
                        )
                    }
                </table>
            </div>
        </>
    );
};

export default MyServices;