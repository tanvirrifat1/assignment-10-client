import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebse/firebase.config"
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app);
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {

        return signOut(auth);
    }
    const handleUpdateProfile = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url
        })
    }

    useEffect(() => {

        const unsubscribe = () => onAuthStateChanged(auth, (currentUer) => {
            setUser(currentUer);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }






    const authInfo = { createUser, signIn, logOut, user, setUser, handleGithubSignIn, handleGoogleSignIn, handleUpdateProfile, loading, setLoading }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;