import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

//   console.log(loading,userData);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUserWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userEmailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  }

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  }

  const signOutUser = () => {
    return signOut(auth);
  };

  const resetUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUserData(currentUser);
        setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    userData,
    loading,
    setLoading,
    setUserData,
    createUserWithEmail,
    userEmailVerification,
    signInUserWithEmail,
    signInWithGoogle,
    signInWithGithub,
    updateUserProfile,
    signOutUser,
    resetUserPassword
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
