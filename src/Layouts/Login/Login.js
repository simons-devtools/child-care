import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSiggedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    // Google Sign In Func
    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((res) => {
                // console.log(res.user);
                const { photoURL, displayName, email } = res.user;
                const siggedInUser = {
                    isSiggedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                // setUser(siggedInUser);
                setLoggedInUser(siggedInUser);
                storeAuthToken(); // Store Auth Token
                // console.log(siggedInUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                // Send token to your backend via HTTPS
                sessionStorage.setItem('token', idToken);
                history.replace(from);
                // console.log(idToken);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Google Sign Out Func
    const googleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const siggedOutUser = {
                    isSiggedIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(siggedOutUser);
                setLoggedInUser(siggedOutUser);
                // console.log(siggedOutUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Google authentication</h1>
            {
                user.isSiggedIn ? <button onClick={googleSignOut}>Google Sign Out</button> :
                    <button onClick={googleSignIn} style={{ padding: "10px 30px" }}>Google Sign In</button>
            }
        </div>
    );
};

export default Login;