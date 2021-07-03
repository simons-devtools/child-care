import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceContent from '../Components/ServiceContent';
import { UserContext } from '../../../App';
import OrderStatus from '../Components/OrderStatus';

const MyServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    const [singleServices, setSingleServices] = useState({});

    // Get users "WISHLIST PRODUCTS" from mongodb cloud:
    useEffect(() => {
        fetch('https://childserver.herokuapp.com/orders?email=' + loggedInUser.email, {
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

    // Open orders service modal:
    const handleUpdateBtn = (addedService) => {
        const myModal = document.getElementById("myModal");
        myModal.style.display = "block";
        setSingleServices(addedService);
    }

    // Close orders service modal
    function modalCloseBtn() {
        const myModal = document.getElementById("myModal");
        myModal.style.display = "none";
    }

    // Update the pending service status
    const updateStatus = (serviceId) => {
        const status = document.querySelector(".order-status").value;
        const newStatus = { status };

        fetch(`https://childserver.herokuapp.com/serviceUpdate/${serviceId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    // alert('Your ordered service status is successfully updated.');
                    modalCloseBtn();
                }
            })
    }

    return (
        <>
            {/* Update status modal content */}
            <div id="myModal" className="my-modal">
                <span onClick={modalCloseBtn} className="close-modal">X</span>
                <div className="my-modal-content">
                    <OrderStatus
                        singleServices={singleServices}
                        updateStatus={updateStatus}
                    />
                </div>
            </div>

            <div style={{ margin: '20px 10px' }}>
                <h2>Your all order services is below</h2>
                <div>
                    <table>
                        <thead>
                            <th>Images</th>
                            <th>Services name</th>
                            <th className="middle">Price($)</th>
                            <th>Name</th>
                            <th>Email address</th>
                            <th className="phonee">Phone No</th>
                            <th>Order ID of service</th>
                            <th>Service status</th>
                        </thead>
                        {
                            services.map(service =>
                                <ServiceContent
                                    key={service._id}
                                    service={service}
                                    handleUpdateBtn={handleUpdateBtn}
                                />
                            )
                        }
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyServices;