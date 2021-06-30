import Container from 'react-bootstrap/Container';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <Container>
                    <div className="row">
                        <div className="col-md-3">
                            <h2><a href="/">CHILD-CARE</a></h2>
                            <ul className="logo-div">
                                <li><a href="/">icon</a></li>
                                <li><a href="/">icon</a></li>
                                <li><a href="/">icon</a></li>
                                <li><a href="/">icon</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Privacy Policy FAQs</a></li>
                                <li><a href="/">Terms of Use</a></li>
                                <li><a href="/">Do Not Sell My Personal Information</a></li>
                                <li><a href="/">Request Personal Information</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li><a href="/">Contact Me</a></li>
                                <li><a href="/">Help Center</a></li>
                                <li><a href="/">Track Your Order</a></li>
                                <li><a href="/">Start A Return</a></li>
                                <li><a href="/">Email Preferences</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li><strong>Customer Service</strong></li>
                                <li>Sat - Thu: 9 am - 10 pm BD</li>
                                <li>Friday: Closed</li>
                                <li>Root# Gazipur, Dhaka</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer-end">
                <p>&copy; Copyright 2020-2021 by Child-Care. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;