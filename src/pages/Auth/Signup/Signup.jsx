import "./Signup.css";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";

export const Signup = () => {
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const { handleSignup } = useAuth();

  const [hidePassword, setHidePassword] = useState(true);
  return (
    <main className="signup-page-container">
      <section>
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
      <section className="signup-form-container">
        <h3>Signup here</h3>
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
          <div className="firstname-container">
            <label htmlFor="firstname">First Name *</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, firstName: e.target.value });
              }}
              id="firstname"
            />
          </div>

          <div className="lastname-container">
            <label htmlFor="lastname">Last Name *</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, lastName: e.target.value });
              }}
              id="lastname"
            />
          </div>

          <div className="email-container">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, email: e.target.value });
              }}
              id="email"
            />
          </div>

          <div className="username-container">
            <label htmlFor="signup-username">User Name *</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setSignupForm({ ...signupForm, username: e.target.value });
              }}
              id="signup-username"
            />
          </div>

          <div className="password-container">
            <label htmlFor="password">Password *</label>
            <div>
              <input
                type={!hidePassword ? "text" : "password"}
                required
                onChange={(e) => {
                  setSignupForm({ ...signupForm, password: e.target.value });
                }}
                id="password"
              />
              {hidePassword ? (
                <BsEyeSlash onClick={() => setHidePassword(false)} />
              ) : (
                <BsEye
                  onClick={() => {
                    setHidePassword(true);
                  }}
                />
              )}
            </div>
          </div>

          <div className="confirm-password-container">
            <label htmlFor="confirm-password">Confirm Password *</label>
            <div>
              <input
                type={!hidePassword ? "text" : "password"}
                required
                onChange={(e) => {
                  setSignupForm({
                    ...signupForm,
                    confirmPassword: e.target.value,
                  });
                }}
                id="confirm-password"
              />
              {hidePassword ? (
                <BsEyeSlash onClick={() => setHidePassword(false)} />
              ) : (
                <BsEye
                  onClick={() => {
                    setHidePassword(true);
                  }}
                />
              )}
            </div>
          </div>

          <input id="confirm" type="checkbox" />
          <label htmlFor="confirm">I accept all terms and conditions</label>

          <div className="btn-container">
            <input value="Sign Up" type="submit" />
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </main>
  );
};
