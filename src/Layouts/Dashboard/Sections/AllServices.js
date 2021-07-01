import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllServiceContent from '../Components/AllServiceContent';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    // .....
    const handleDeleteBtn = (addedId) => {
        console.log('Servicee id', addedId);
    }

    return (
        <>
            <h2>All services component</h2>
            <div>
                {
                    allServices.map(service =>
                        <AllServiceContent
                            key={service._id}
                            service={service}
                            handleDeleteBtn={handleDeleteBtn}
                        />
                    )
                }
            </div>
        </>
    );
};

export default AllServices;