import React from 'react';
import Payment from '../../Payment/Payment';

const Modal = (props) => {
    const { service, modalCloseBtn } = props;
    const { image, name, price, description } = service;

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="modal-body">
                    <Payment
                        service={service}
                        modalCloseBtn={modalCloseBtn}
                    />
                </div>
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