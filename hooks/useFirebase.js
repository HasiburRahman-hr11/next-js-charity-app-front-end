import { useState, useEffect } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    updateProfile,
    getIdToken,
    signOut
} from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";

// Redux
import { useDispatch } from 'react-redux';
import { getUserSuccess, logoutSuccess } from "../redux/user/userActions";

// Toastify
import {errorNotify, successNotify} from '../utils/toastify';

initializeFirebase();


export const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Sign Up with email and password
    const signUpWithEmailPassword = (name, email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 
                setUser({
                    email: email,
                    displayName: name,
                });

                successNotify('Registration Successful');

                // Update user profile to Firebase
                updateProfile(auth.currentUser, {
                    email: email,
                    displayName: name,
                }).then(() => {

                }).catch((error) => {
                    console.log(error)
                });

                setError('');
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                errorNotify(error.message);
                setLoading(false);
            });
    };

    // Sign In with email and password
    const signInWithEmailPassword = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);

                successNotify('Successfully Logged In');

                setError('');
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
                errorNotify(error.message);
            });
    }

   
    // Google Sign In
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                setError('');
                setLoading(false);
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                errorNotify(error.message);
                setLoading(false);
            });
    }

    // Sign In with Facebook
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                setError('');
                setLoading(false);
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                errorNotify(error.message);
                setLoading(false);
            });
    }

    // Sign In with Github
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                setError('');
                setLoading(false);
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
                errorNotify(error.message);
                setLoading(false);
            });
    }

     // Sign Out
     const signOutController = () => {
        signOut(auth).then(() => {
            setUser({});
            dispatch(logoutSuccess());
        }).catch((error) => {
            setError(error.message);
            errorNotify(error.message);
        });
    }

    // Check Auth State Change
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
                // console.log(user);

                // Get AccessToken
                setIdToken(user);
            } else {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);


    const setIdToken = (user) => {
        getIdToken(user)
            .then((idToken) => {
                setToken(idToken);
                const userData = {
                    displayName: user.displayName,
                    email: user.email,
                    token: idToken
                }
                dispatch(getUserSuccess(userData));
            })
    }

    return {
        user,
        token,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        signUpWithEmailPassword,
        signInWithEmailPassword,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
        signOutController
    }
}
