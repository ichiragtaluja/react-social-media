import "./Signup.css";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";
import { Fade } from "react-awesome-reveal";

export const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/v1687674108/socialMedia/avatar/83bc8b88cf6bc4b4e04d153a418cde62_edxivy.jpg",
  });

  const { handleSignup } = useAuth();

  const [hidePassword, setHidePassword] = useState(true);
  return (
    <main className="login-page-container">
      <section className="login-video-container">
        <ReactPlayer
          url="https://res.cloudinary.com/darwtgzlk/video/upload/v1686325123/socialMedia/heroVideo/pexels-kampus-production-7800162-2160x3840-25fps_bepbjw.mp4"
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </section>
      <section className="login-form-container">
        <h3 className="login-heading">Sign-Up</h3>
        <form
          onSubmit={(e) => {
            handleSignup(e, signupForm);
            setSignupForm({
              firstName: "",
              lastName: "",
              email: "",
              username: "",
              password: "",
              confirmPassword: "",
            });
          }}
          className="signup-form-body"
        >
          <div className="username-container">
            <input
              placeholder="First Name"
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, firstName: e.target.value });
              }}
              id="username"
            />
          </div>

          <div className="username-container">
            <input
              placeholder="Last Name"
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, lastName: e.target.value });
              }}
              id="username"
            />
          </div>

          <div className="username-container">
            <input
              placeholder="Email"
              type="email"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, email: e.target.value });
              }}
              id="username"
            />
          </div>

          <div className="username-container">
            <input
              placeholder="Username"
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, username: e.target.value });
              }}
              id="username"
            />
          </div>

          <div className="password-container">
            <div>
              <input
                minlength="8"
                placeholder="Password"
                type={!hidePassword ? "text" : "password"}
                required
                onChange={(e) => {
                  setSignupForm({ ...signupForm, password: e.target.value });
                }}
                id="password"
              />
              {hidePassword ? (
                <BsEyeSlash
                  className="password-eye"
                  onClick={() => setHidePassword(false)}
                />
              ) : (
                <BsEye
                  className="password-eye"
                  onClick={() => {
                    setHidePassword(true);
                  }}
                />
              )}
            </div>
          </div>

          <div className="password-container">
            <div>
              <input
                minlength="8"
                placeholder="Confirm Password"
                type={!hidePassword ? "text" : "password"}
                required
                onChange={(e) => {
                  setSignupForm({
                    ...signupForm,
                    confirmPassword: e.target.value,
                  });
                }}
                id="password"
              />
              {hidePassword ? (
                <BsEyeSlash
                  className="password-eye"
                  onClick={() => setHidePassword(false)}
                />
              ) : (
                <BsEye
                  className="password-eye"
                  onClick={() => {
                    setHidePassword(true);
                  }}
                />
              )}
            </div>
          </div>
          <div className="accept-conditions">
            <input required id="confirm" type="checkbox" />
            <label htmlFor="confirm">I accept all terms and conditions</label>
          </div>

          <div className="btn-container">
            <button type="submit">
              <Fade cascade duration={150}>
                Sign-Up
              </Fade>
            </button>
          </div>
          <p className="switch-to-signup">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </main>
  );
};
