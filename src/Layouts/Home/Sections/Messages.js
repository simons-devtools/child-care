import React from "react";
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";
// npm install react-hook-form

const Messages = () => {
    const { register, handleSubmit } = useForm();

    // Handle form Submition:
    const onSubmit = (data) => {
        const messagesData = {
            name: data.name,
            email: data.email,
            designation: data.designation,
            description: data.description,
        };
        const url = `http://localhost:5000/addReviews`;
        // console.log(url); // No 02
        // console.log(messagesData); // No 03
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messagesData)
        })
            .then(res => {
                // console.log('From server response', res) // No 04
                alert('Your message is added to the mongodb server storage!');
            });
    };

    return (
        <section>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)} className="contact-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-input">
                                <input type="name" placeholder="Your Name" {...register("name", { required: true })} />
                                <input type="email" placeholder="Your Email" {...register("email", { required: true })} />
                                <input type="designation" placeholder="Your designation" {...register("designation", { required: true })} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <textarea type="description" placeholder="Your Message" {...register("description", { required: true })} />
                        </div>
                    </div>
                    <button type="submit" className="overall-btn">submit now</button>
                </form>
            </Container>
        </section>
    );
};

export default Messages;