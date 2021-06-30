import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar className="navigation-wrapper pt-5" expand="lg">
            <div className="brand-logo">
                <Link to="/home">CHILD-CARE</Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav toogle-bar">
                <Nav className="ml-auto">
                    <Link to="/home" className="nav-text">Home</Link>
                    <Link to="/login" className="nav-text">Login</Link>
                    <Link to="/admin" className="nav-text">Admin</Link>
                    <Link to="/blog" className="nav-text">Blogs</Link>
                    <Link to="/dashboard" className="nav-text">Dashboard</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;