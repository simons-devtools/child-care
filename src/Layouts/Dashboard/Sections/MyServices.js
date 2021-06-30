import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceContent from '../Components/ServiceContent';

const MyServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // .....
    const handleCancelBtn = (addedId) => {
        console.log('Servicee id', addedId);
    }

    return (
        <>
            <h2>My services component</h2>
            <div>
                {
                    services.map(service =>
                        <ServiceContent
                            key={service._id}
                            service={service}
                            handleCancelBtn={handleCancelBtn}
                        />
                    )
                }
            </div>
        </>
    );
};

export default MyServices;