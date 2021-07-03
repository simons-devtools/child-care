import React from 'react';
import Container from 'react-bootstrap/Container'
import AboutImg from '../../../assets/images/about.jpg';

const About = () => {
    return (
        <section>
            <Container>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt architecto iste adipisci, aut necessitatibus id placeat non quibusdam voluptatem animi molestias quam nihil, repudiandae alias ad inventore rem provident illum, labore eligendi corrupti vel natus voluptas? Quibusdam autem ad reprehenderit, mollitia, consequuntur dolores itaque consectetur amet eveniet tempore, repellat blanditiis impedit! Vero vel dicta autem atque. Perferendis, cum rerum neque maxime, saepe pariatur voluptates et adipisci necessitatibus recusandae, a possimus eveniet minima voluptatem aspernatur hic quis possimus libero porro odio at.</p>
                            <button className="overall-btn">About us</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <img src={AboutImg} className="img-fluid about-img" alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;