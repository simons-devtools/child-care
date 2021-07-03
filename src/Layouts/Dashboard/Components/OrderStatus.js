import React from 'react';

const OrderStatus = (props) => {
    const { singleServices, updateStatus, } = props;
    const { _id, status } = singleServices;

    return (
        <div className="update-statuss">
            <h2>Update Order status</h2>
            <input type="status" defaultValue={status} className="order-status" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, earum quam molestias architecto fugit aliquam?</p>
            <button onClick={() => updateStatus(_id)} className="overall-btn">Update Status</button>
        </div>
    );
};

export default OrderStatus;