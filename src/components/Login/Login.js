import "./Login.css";
import React, { useContext, useState } from "react";
import {
  faFacebookF,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import {
  handleFacebookSignIn,
  handleGithubSignIn,
  handleGoogleSignIn,
  initializeLoginFramework,
  SignInWithPassword,
  createWithEmailAndPassword,
  firebaseIdToken,
} from "./LoginManager";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
  const { register: registerSignIn, handleSubmit: handleSignIn } = useForm();
  const { register: registerSignUp, handleSubmit: handleSignUp } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  console.log(loggedInUser);
  const [newUser, setNewUser] = useState(false);

  const navigate = useNavigate();

  // Handle Google SignIn

  const GoogleSignIn = () => {
    const loading = toast.loading("Please wait...");
    initializeLoginFramework();
    handleGoogleSignIn()
      .then((res) => {
        toast.dismiss(loading);
        HandleResponse(res);
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };
  // Handle Facebook SignIn

  const facebookSignIn = () => {
    const loading = toast.loading("Please wait...");
    initializeLoginFramework();
    handleFacebookSignIn()
      .then((res) => {
        toast.dismiss(loading);
        HandleResponse(res);
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };

  // Handle Github SignIn

  const githubSignIn = () => {
    const loading = toast.loading("Please wait...");
    initializeLoginFramework();
    handleGithubSignIn()
      .then((res) => {
        toast.dismiss(loading);
        HandleResponse(res);
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };

  const onSubmit = (data) => {
    const loading = toast.loading("Please wait...");
    const { name, email, password } = data;
    if (newUser && name && email && password) {
      initializeLoginFramework();
      createWithEmailAndPassword(name, email, password)
        .then((res) => {
          toast.dismiss(loading);
          toast.success("Successfully Signed Up!");
        })
        .catch((err) => {
          toast.dismiss(loading);
          toast.error(err.message);
        });
    }

    if (!newUser && email && password) {
      initializeLoginFramework();
      SignInWithPassword(email, password)
        .then((res) => {
          toast.dismiss(loading);
          HandleResponse(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const HandleResponse = (res) => {
    firebaseIdToken();
    setLoggedInUser(res);
    toast.success("Successfully Logged In!");
    navigate("/");

    setInterval(function () {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <Header />
      <div className="root-login">
        <div
          className={newUser ? "container right-panel-active" : ""}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form className="form" onSubmit={handleSignUp(onSubmit)}>
              <h1>Create Account</h1>
              <div className="social-container">
                <li>
                  <FontAwesomeIcon className="social" icon={faGoogle} />
                </li>
                <li>
                  <FontAwesomeIcon className="social" icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon className="social" icon={faGithub} />
                </li>
              </div>
              <span>or use your email for registration</span>
              <input
                placeholder="Name"
                {...registerSignUp("name", { required: true })}
                type="text"
              />
              <input
                placeholder="Email"
                {...registerSignUp("email", { required: true })}
                type="email"
              />
              <input
                placeholder="Password"
                {...registerSignUp("password", { required: true })}
                type="password"
              />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form" onSubmit={handleSignIn(onSubmit)}>
              <h1>Sign in</h1>
              <div className="social-container">
                <li>
                  <FontAwesomeIcon
                    onClick={GoogleSignIn}
                    className="social"
                    icon={faGoogle}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    onClick={facebookSignIn}
                    className="social"
                    icon={faFacebookF}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    onClick={githubSignIn}
                    className="social"
                    icon={faGithub}
                  />
                </li>
              </div>
              <span>or use your account</span>
              <input
                placeholder="Email"
                {...registerSignIn("email", { required: true })}
                type="email"
              />
              <input
                placeholder="Password"
                {...registerSignIn("password", { required: true })}
                type="password"
              />
              <small style={{ color: "blue", cursor: "pointer" }}>
                Forgot your password?
              </small>
              <button className="ghost">Log In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={() => setNewUser(!newUser)}
                  className="ghost"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <img id="profile-image" src={loggedInUser.photo} alt="" />
                <h1>Hello {loggedInUser.name || "Friend!"}</h1>
                {loggedInUser.IsSignedIn ? (
                  <p>Let's start journey with us</p>
                ) : (
                  <p>Enter your personal details and start journey with us</p>
                )}
                <button
                  onClick={() => setNewUser(!newUser)}
                  className="ghost"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
