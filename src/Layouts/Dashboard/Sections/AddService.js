import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// npm install axios
// npm install react-hook-form

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [photoUrl, setPhotoUrl] = useState(null);

    // Handle form Submition:
    const onSubmit = (data) => {
        const servicesData = {
            name: data.name,
            price: data.price,
            description: data.description,
            image: photoUrl
        };
        const url = `http://localhost:5000/addServices`;
        // console.log(url); // No 02
        // console.log(servicesData); // No 03
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(servicesData)
        })
            .then(res => {
                // console.log('From server response', res) // No 04
                // const message = document.getElementById("myMessage");
                // message.style.display = "block";
                alert('Your service is added to the mongodb server storage!');
            });
    };

    // Handle Images Upload:
    const handleImageUpload = (e) => {
        // console.log(e.target.files[0]);
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
        <>
            <h2>Add service component</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-contents">
                    <input type="name" placeholder="Service Name" {...register("name", { required: true })} /> <br />
                    <input type="price" placeholder="Service Price" {...register("price", { required: true })} /> <br />
                    <input type="file" onChange={handleImageUpload} /> <br />
                    <textarea type="description" placeholder="Service Description" {...register("description", { required: true })} />
                    <button type="submit" className="overall-btn">Post now</button>
                </div>
            </form>
        </>
    );
};

export default AddService;