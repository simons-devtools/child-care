import React from 'react';

const Team = (props) => {
    const { image, name, title, facebook, twitter, google } = props.team;

    return (
        <div className="col-md-3">
            <div className="teams text-center">
                <img src={image} className="img-fluid" alt="" />
                <h5 className="text-uppercase">{name}</h5>
                <strong>{title}</strong>
                <div className="social-icons">
                    <span><img src={google} className="img-fluid" alt="" /></span>
                    <span><img src={facebook} className="img-fluid" alt="" /></span>
                    <span><img src={twitter} className="img-fluid" alt="" /></span>
                    <span><img src={google} className="img-fluid" alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default Team;