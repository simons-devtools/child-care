import React from 'react';
import MyServices from './Sections/MyServices';
import UserProfile from './Sections/UserProfile';
import AddService from './Sections/AddService';
import AddAdmin from './Sections/AddAdmin';
import AllServices from './Sections/AllServices';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admins, setAdmins] = useState(false);

    useEffect(() => {
        fetch('https://childserver.herokuapp.com/checkAdmins', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmins(data))
    })

    const routes = [
        {
            path: "/",
            exact: true,
            sidebar: () => '',
            main: () => <h2>Home</h2>
        },
        {
            path: "/my-services",
            sidebar: () => '',
            main: () => <MyServices />
        },
        {
            path: "/my-profile",
            sidebar: () => '',
            main: () => <UserProfile />
        },
        {
            path: "/all-services",
            sidebar: () => '',
            main: () => <AllServices />
        },
        {
            path: "/add-service",
            sidebar: () => '',
            main: () => <AddService />
        },
        {
            path: "/add-admin",
            sidebar: () => '',
            main: () => <AddAdmin />
        }
    ];

    return (
        <div>
            <Router>
                <div className="row">
                    <div className="col-md-2">
                        <div className="sidebar-wrapper">
                            <div className="sidebar-menus">
                                <h2>Dashboard</h2>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/my-services">My Services</Link></li>
                                    <li><Link to="/my-profile">My Profile</Link></li>
                                    {admins &&
                                        <>
                                            <li><Link to="/all-services">All services</Link></li>
                                            <li><Link to="/add-service">Add services</Link></li>
                                            <li><Link to="/add-admin">Add admin</Link></li>
                                        </>
                                    }
                                </ul>
                            </div>
                            <button onClick={() => setLoggedInUser({})} className="overall-btn">Log out</button>
                        </div>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.sidebar />}
                                />
                            ))}
                        </Switch>
                    </div>

                    <div className="col-md-10">
                        <div className="dash-service-wrapper">
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </div >
    );
};

export default Dashboard;