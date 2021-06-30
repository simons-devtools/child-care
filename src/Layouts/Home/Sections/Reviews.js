import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
// import image from '../../../assets/images/background.jpg';
import Review from '../Components/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <Container>
                <div className="review-section">
                    <h1 className="text-center mb-5 text-muted border-bottom">parents review</h1>
                </div>
                <div className="row">
                    {
                        reviews.map(review => <Review review={review} key={review._id} />)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Reviews;