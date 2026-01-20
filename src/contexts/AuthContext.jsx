import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { getAuthErrorMessage } from "../utils/AuthErrorMessage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const register = async (name, email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(result.user, { displayName: name });

      await sendEmailVerification(result.user);

      await signOut(auth);
    } catch (error) {
      throw new Error(getAuthErrorMessage(error));
    }
  };

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await result.user.reload();
      return result.user;
    } catch (error) {
      throw new Error(getAuthErrorMessage(error));
    }
  };

  const logOut = async () => await signOut(auth);

  const authData = {
    user,
    loading,
    register,
    login,
    logOut,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
