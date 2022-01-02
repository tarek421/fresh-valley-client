import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebase.config";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const initializeLoginFramework = () => {
  initializeApp(firebaseConfig);
};

export const handleGoogleSignIn = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider).then((result) =>
    handleResponse(result)
  );
};

export const handleFacebookSignIn = () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider).then((res) => handleResponse(res));
};

export const handleGithubSignIn = () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider).then((res) => handleResponse(res));
};


export const createWithEmailAndPassword = (name, email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password).then((res) => {
    updateUserName(name);
    handleResponse(res);
  });
};

export const SignInWithPassword = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password).then((res) =>
    handleResponse(res)
  );
};

const updateUserName = (name) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: name
  })
};

const handleResponse = (res) => {
  const { displayName, email, photoURL } = res.user;
  const signInUser = {
    IsSignedIn: true,
    name: displayName,
    email: email,
    photo: photoURL || "https://i.ibb.co/5GzXkwq/user.png",
  };
  return signInUser;
};
