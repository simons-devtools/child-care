import React from 'react';
// import { useContext } from 'react';
// import { useForm } from "react-hook-form";
// import { UserContext } from "../../../App";
import PaymentProccess from '../../PaymentProccess/PaymentProccess';

const Modal = (props) => {
    const { service, modalCloseBtn } = props;
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { image, name, price, description } = service;
    // const { register, handleSubmit } = useForm();

    // // Handle form Submition:
    // const onSubmit = (data) => {
    //     let shipmentData = {
    //         name: data.name,
    //         email: data.email,
    //         phone: data.phone,
    //     };
    //     const serviceData = { price, name, image, description }
    //     const newOrder = { ...loggedInUser, shipment: shipmentData, service: serviceData, status: 'pending' };
    //     console.log(newOrder); // No 01
    //     fetch('http://localhost:5000/addOrder', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newOrder)
    //     })
    //         .then(res => {
    //             // console.log('From server response', res) // No 02
    //             alert('Your service is added to the mongodb server storage!');
    //             modalCloseBtn();
    //         });
    // };

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="modal-body">
                    <PaymentProccess
                        service={service}
                        modalCloseBtn={modalCloseBtn}
                    />
                </div>

                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-body-two">
                        <div className="modal-body">
                            <h3>Your contact information here</h3>
                            <input placeholder="Your Name" type="name" {...register("name", { required: true })} />
                            <input placeholder="Your Email" type="email" {...register("email", { required: true })} />
                            <input placeholder="Your Phone" type="phone" {...register("phone", { required: true })} />
                            <button type="submit" className="overall-btn">Submit now</button>
                        </div>
                    </div>
                </form> */}
            </div>

            <div className="col-md-6">
                <h3 className="pl-3">You are choose this service</h3>
                <div className="modal-body">
                    <img src={image} className="img-fluid" alt="" />
                    <h5>{name}</h5>
                    <h5>Services Price ${price}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;