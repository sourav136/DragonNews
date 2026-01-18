import { createContext, useContext, useEffect, useState } from "react";

import { auth } from './../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";


export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = async (name, email, password) => {
        // Registration logic will go here
        const result = await createUserWithEmailAndPassword(auth, email, password);
        // updating user profile with name
        await updateProfile(result.user, { displayName: name });

        await sendEmailVerification(result.user);

        return result.user;

    }

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = async () => await signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        }); 
        return () => unsubscribe();
    }, []);

    const authData = {
        user,
        loading,
        register,
        login,
        logOut,
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}