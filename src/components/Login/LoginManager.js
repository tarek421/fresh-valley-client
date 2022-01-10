import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebase.config";
import jwt_decode from "jwt-decode";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
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
    displayName: name,
  });
};

export const firebaseIdToken = () => {
  getAuth()
    .currentUser.getIdToken(true)
    .then((idToken) => {
      localStorage.setItem("token", idToken);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDecodedUser = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return {};
  }
  const { name, picture, email } = jwt_decode(token);
  const decodedUser = {
    signInUser: true,
    name: name,
    email: email,
    photo: picture || "https://i.ibb.co/5GzXkwq/user.png",
  };
  return decodedUser;
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


export const handleSignOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      localStorage.removeItem("token");
      window.location.reload();
      const signedOutUser = {
        signInUser: false,
        userName: "",
        email: "",
        userPhoto: "",
      };
      return signedOutUser;
    })
    .catch((error) => console.log(error.message));
};
