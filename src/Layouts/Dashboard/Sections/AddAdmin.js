import React from 'react';

const AddAdmin = () => {
    return (
        <div>
            <h2>Add admin component</h2>
            <div className="admin-wrapper">
                <input type="text" placeholder="Admin Name" />
                <input type="text" placeholder="Admin Email" />
                <input type="file" />
                <button className="overall-btn">Add Now</button>
            </div>
        </div>
    );
};

export default AddAdmin;