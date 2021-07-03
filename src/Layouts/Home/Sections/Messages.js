import React from "react";
import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const Messages = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    // Handle form Submition:
    const onSubmit = (data) => {
        const messagesData = {
            name: data.name,
            email: data.email,
            designation: data.designation,
            description: data.description,
            image: loggedInUser.photo,
        };
        // console.log(messagesData); // No 01
        if (!loggedInUser.isSiggedIn) {
            alert('Hey! Please sign in after follow this form.');
        }
        else {
            fetch('https://childserver.herokuapp.com/addReviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(messagesData)
            })
                .then(res => {
                    // console.log('From server response', res) // No 02
                    alert('Your are successfully review our project');
                });
        }
    };

    return (
        <section>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)} className="contact-wrapper">
                    <h5>Review our project</h5>
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