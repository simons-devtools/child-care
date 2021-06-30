import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from '../Components/Modal';
import Service from '../Components/Service';

const Services = () => {
    const [allServices, setAllServives] = useState([]);
    const [singleService, setSingleService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllServives(data))
    }, [])

    const getServiceBtn = (addedService) => {
        // console.log('Added by id', serv);
        setSingleService(addedService);
        const myModal = document.getElementById("myModal");
        myModal.style.display = "block";
    }

    function modalCloseBtn() {
        const myModal = document.getElementById("myModal");
        myModal.style.display = "none";
    }

    return (
        <section className="services-wrapper">
            <Container>
                {/* Modal contents */}
                <div id="myModal" className="modal">
                    <span onClick={modalCloseBtn} className="close-modal">X</span>
                    <div className="modal-contents">
                        <Modal
                            service={singleService}
                            modalCloseBtn={modalCloseBtn}
                        />
                    </div>
                </div>
                <div className="service-section">
                    <h1 className="text-center mb-5">ours services</h1>
                </div>
                <div className="row">
                    {
                        allServices.map(service => <Service
                            key={service._id}
                            service={service}
                            getServiceBtn={getServiceBtn}
                        />)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Services;