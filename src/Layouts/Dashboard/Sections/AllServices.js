import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllServiceContent from '../Components/AllServiceContent';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://childserver.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    // Update service from mongodb cloud:
    const handleUpdateBtn = (addedService) => {
        console.log(addedService);
    }


    // Delete service from mongodb cloud:
    const handleDeleteBtn = (addedId) => {
        // console.log('Servicee id', addedId);
        fetch(`https://childserver.herokuapp.com/deleteServiceOne/${addedId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // console.log('Deleted is', result);
                alert('You sure successfully delete this service.');
                for (let i = 0; i < allServices.length; i++) {
                    const service = allServices[i];
                    if (service._id === addedId) {
                        allServices.splice(i, 1);
                        let newServices = [...allServices];
                        setAllServices(newServices);
                    }
                }
            })
    }

    return (
        <div style={{ margin: '20px 10px' }}>
            <h2>Your all services is below</h2>
            <div>
                {
                    allServices.map(service =>
                        <AllServiceContent
                            key={service._id}
                            service={service}
                            handleUpdateBtn={handleUpdateBtn}
                            handleDeleteBtn={handleDeleteBtn}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default AllServices;