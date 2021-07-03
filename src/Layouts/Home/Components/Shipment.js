import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const Shipment = (props) => {
    const { service, modalCloseBtn, orderId } = props;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const { image, name, price, description } = service;

    // Handle form Submition:
    const onSubmit = (data) => {
        let shipmentData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
        };
        const serviceData = { price, name, image, description }
        const newOrder = { ...loggedInUser, shipment: shipmentData, service: serviceData, orderId: orderId, status: 'pending' };
        // console.log(newOrder); // No 01
        fetch('https://childserver.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => {
                // console.log('From server response', res) // No 02
                alert('Your order is successfully');
                modalCloseBtn();
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
                <h3>Your contact information here</h3>
                <input placeholder="Your Name" type="name" {...register("name", { required: true })} />
                <input placeholder="Your Email" type="email" {...register("email", { required: true })} />
                <input placeholder="Your Phone" type="phone" {...register("phone", { required: true })} />
                <button type="submit" className="overall-btn">Submit now</button>
            </div>
        </form>
    );
};

export default Shipment;