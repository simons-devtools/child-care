import React from 'react';
import Container from 'react-bootstrap/Container';
import image1 from '../../../assets/images/member-1.jpg';
import image2 from '../../../assets/images/member-2.jpg';
import image3 from '../../../assets/images/member-3.jpg';
import image4 from '../../../assets/images/member-4.jpg';
import facebook from '../../../assets/icons/facebook.png';
import Team from '../Components/Team';

const Teams = () => {
    const servicesArray = [
        {
            "_id": 1,
            "image": image1,
            "facebook": facebook,
            "twitter": facebook,
            "google": facebook,
            "name": "Chris brown",
            "title": "Project seo",
        },
        {
            "_id": 2,
            "image": image2,
            "facebook": facebook,
            "twitter": facebook,
            "google": facebook,
            "name": "Lily watson",
            "title": "Head learner",
        },
        {
            "_id": 3,
            "image": image3,
            "facebook": facebook,
            "twitter": facebook,
            "google": facebook,
            "name": "Adreash gragory",
            "title": "Project manager",
        },
        {
            "_id": 4,
            "image": image4,
            "facebook": facebook,
            "twitter": facebook,
            "google": facebook,
            "name": "Luija chosta",
            "title": "Department controler",
        },
    ];

    return (
        <section>
            <Container>
                <div className="team-section">
                    <h1 className="text-center mb-5 text-muted">ours teams</h1>
                </div>
                <div className="row">
                    {
                        servicesArray.map(team => <Team team={team} key={team._id} />)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Teams;