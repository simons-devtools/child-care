import React from 'react';

const Profile = () => {
    return (
        <div className="main-profile">

            <div className="profile-left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                <ul>
                    <li style={{ fontWeight: 'bold' }}>Login account status</li>
                    <li>simonhembrom</li>
                    <li>cmoxsh@gmail.com</li>
                    <li>pass: abcd1234</li>
                    <li>active: 02/06/2021</li>
                    <li>status: admin</li>
                </ul>
            </div>

            <div className="profile-right">
                <div className="content-top">
                    <div className="">
                        <h3>Mr. simon hembrom</h3>
                        <h4 style={{ color: 'blueviolet' }}>Web Developer and Designer</h4>
                        <p>Complete order: 8/2021</p>
                    </div>
                    <div className="">
                        <button>Edit Profile</button>
                    </div>
                </div>

                <div>
                    <h4 style={{ borderBottom: '1px solid #7270701e' }}>User basic shipment information</h4>
                    <div className="tween-content">
                        <div className="user-title">
                            <ul>
                                <li>User ID</li>
                                <li>First name</li>
                                <li>Last name</li>
                                <li>Username</li>
                                <li>Email address</li>
                                <li>Phone no</li>
                                <li>Address</li>
                                <li>User status</li>
                            </ul>
                        </div>
                        <div className="user-info">
                            <ul>
                                <li>df4564dfd547df125jh5</li>
                                <li>Mr. simon</li>
                                <li>hembrom</li>
                                <li>simonhembrom</li>
                                <li>simonhembrom.dev@gmail.com</li>
                                <li>+880 1799867752</li>
                                <li>Salna-bazar, Gazipur-shadar, Dhaka, BD</li>
                                <li style={{ color: 'greenyellow' }}>Active</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;