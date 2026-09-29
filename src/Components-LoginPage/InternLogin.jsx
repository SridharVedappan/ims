import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LoginPage/InternLogin.css";
import MailIcon from "../assets/login/MailIcon.png";
import PasswordIcon from "../assets/login/PasswordIcon.png";
import RightArrow from "../assets/login/right-arrow.png";
import GoogleIcon from "../assets/login/google-icon.png";

export const InternLogin = () => {
  return (
    <div className="login-container">
      <div className="login-left-container">left</div>
      {/* -------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="login-right-container">
        <form className="login-form">
          <header className="login-right-header">
            <h1>Welcome Back</h1>
            <p>Manage your career journey</p>
          </header>

          <div className="login-form-container">
            <div className="login-email-container">
              <label htmlFor="email" className="login-input-label">
                Email Address
              </label>
              <div className="login-email-wrapper">
                <img src={MailIcon} alt="Email" className="input-mail-icon" />
                <input
                  type="email"
                  id="email"
                  className="login-inputs"
                  placeholder="Enter Email address"
                />
              </div>
            </div>

            <div className="login-password-container">
              <div className="password-label-row">
                <label htmlFor="password" className="login-input-label">
                  Password
                </label>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <div className="login-password-wrapper">
                <img
                  src={PasswordIcon}
                  alt="Password"
                  className="input-password-icon"
                />

                <input
                  type="password"
                  id="password"
                  className="login-inputs"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="login-checkbox">
              <input type="checkbox" className="login-keep-signed-in" />
              <label htmlFor="keep-signed-in">Keep me signed in</label>
            </div>

            <button className="signin-button-for-login">
              <span>Sign In</span>
              <img src={RightArrow} alt="Arrow" className="right-arrow" />
            </button>
          </div>

          <div className="login-divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <div className="login-google-btn-conatiner">
            <button className="google-login-container">
              <img
                src={GoogleIcon}
                alt="google-icon"
                className="google-login"
              />
              <span>Google</span>
            </button>
          </div>

          <footer className="login-footer">
            <div className="login-create-account-container">
              <p>
                Don't have an account? <span>Create Account</span>
              </p>
            </div>

            <div className="login-footer-links">
              <Link href="/help" className="login-footer-link">
                Help
              </Link>
              <span className="login-dot"></span>
              <Link href="/privacy" className="login-footer-link">
                Privacy
              </Link>
              <span className="login-dot"></span>
              <Link href="/terms" className="login-footer-link">
                Terms
              </Link>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};
