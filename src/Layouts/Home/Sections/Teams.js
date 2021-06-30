import React from 'react';
import Container from 'react-bootstrap/Container';
import image from '../../../assets/images/background.jpg';
import facebook from '../../../assets/icons/facebook.png';
import Team from '../Components/Team';

const Teams = () => {
    const servicesArray = [
        {
            "_id": 1,
            "image": image,
            "facebook": facebook,
            "twitter": facebook,
            "google": facebook,
            "name": "Sr. Stive Jobs",
            "title": "Apple ceo",
        },
        {
            "_id": 2,
            "image": image,
            "facebook": facebook,
            "twitter": facebook,
            "google": facebook,
            "name": "Sr. Bil Gates",
            "title": "Microsoft seo",
        },
        {
            "_id": 3,
            "image": image,
            "facebook": facebook,
            "twitter": facebook,
            "google": facebook,
            "name": "Sr. Sundar pichai",
            "title": "Google ceo",
        },
        {
            "_id": 4,
            "image": image,
            "facebook": facebook,
            "twitter": facebook,
            "google": facebook,
            "name": "Sr. Mark Jocker",
            "title": "Facebook ceo",
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