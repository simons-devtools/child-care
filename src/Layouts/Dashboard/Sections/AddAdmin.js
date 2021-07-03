import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const [photoUrl, setPhotoUrl] = useState(null);

    // Handle form Submition:
    const onSubmit = (data) => {
        const adminData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            image: photoUrl
        };
        fetch('https://childserver.herokuapp.com/addAdmins', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => {
                alert('Your admin is added to the mongodb admin storage!');
            });
    };

    // Handle Images Upload:
    const handleImageUpload = (e) => {
        const photoData = new FormData();
        photoData.set('key', '7d2598c0cf9adb7c67d11745142e540b'); // For the img hosting provider site api key here!!
        photoData.append('image', e.target.files[0])

        // GET imgbb photo-url and POST to MDB server:
        axios.post('https://api.imgbb.com/1/upload', photoData)
            .then(function (response) {
                setPhotoUrl(response.data.data.display_url);
                // console.log(response.data.data.display_url); // No 01
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div style={{ margin: '20px 10px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add admin component</h2>
                <div className="admin-wrapper">
                    <input type="name" placeholder="Admin Name" {...register("name", { required: true })} />
                    <input type="email" placeholder="Admin Email" {...register("email", { required: true })} />
                    <input type="phone" placeholder="Admin Phone" {...register("phone", { required: true })} />
                    <input type="file" onChange={handleImageUpload} />
                    <button type="submit" className="overall-btn">Add Now</button>
                </div>
            </form>
        </div>
    );
};

export default AddAdmin;