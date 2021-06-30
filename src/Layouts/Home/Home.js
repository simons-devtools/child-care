import React from 'react';
import Header from './Sections/Header';
import About from './Sections/About';
import Services from './Sections/Services';
import Teams from './Sections/Teams';
import Messages from './Sections/Messages';
import Footer from '../Default/Footer';
import Reviews from './Sections/Reviews';

const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <Services />
            <Teams />
            <Reviews />
            <Messages />
            <Footer />
        </main>
    );
};

export default Home;