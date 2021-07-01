import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from '../Components/Modal';
import Service from '../Components/Service';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const Services = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allServices, setAllServives] = useState([]);
    const [singleService, setSingleService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllServives(data))
    }, [])

    const history = useHistory();
    const getServiceBtn = (addedService) => {
        if (!loggedInUser.isSiggedIn) {
            history.push('/login');
        }
        else {
            setSingleService(addedService);
            const myModal = document.getElementById("myModal");
            myModal.style.display = "block";
        }
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
                            loggedInUser={loggedInUser}
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