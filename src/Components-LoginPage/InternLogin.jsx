import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LoginPage/InternLogin.css";
import MailIcon from "../assets/login/MailIcon.png";
import PasswordIcon from "../assets/login/PasswordIcon.png";
import RightArrow from "../assets/login/right-arrow.png";
import GoogleIcon from "../assets/login/google-icon.png";
import EyeOpen from "../assets/login/eye-open.png";
import EyeClose from "../assets/login/eye-close.png";

export const InternLogin = () => {
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [passwordShow, setPasswordShow] = useState(true);

  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShow((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required *";
    }
    if (!formValues.password.trim()) {
      newErrors.password = "Password is required *";
    }
    setErrors(newErrors);

    // No errors move to next page
    if (Object.keys(newErrors).length === 0) {
      alert("Login successful!");
      setFormValues(initialValue);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-container">left</div>
      {/* -------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="login-right-container">
        <form onSubmit={handleSubmit} className="login-form">
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
                  name="email"
                  placeholder="Enter Email address"
                  value={formValues.email}
                  onChange={handleChange}
                  className={
                    errors.email ? "login-inputs input-error" : "login-inputs"
                  }
                />
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
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
                  type={passwordShow ? "password" : "text"}
                  name="password"
                  placeholder="Enter your password"
                  value={formValues.password}
                  onChange={handleChange}
                  className={
                    errors.password
                      ? "login-inputs input-error"
                      : "login-inputs"
                  }
                />
                <span className="password-eye-icon" onClick={togglePassword}>
                  <img
                    src={passwordShow ? EyeOpen : EyeClose}
                    className={passwordShow ? "eye-open" : "eye-close"}
                    alt="show-hide"
                  />
                </span>
              </div>
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>

            <div className="login-checkbox">
              <input
                type="checkbox"
                id="keep-signed-in"
                className="login-keep-signed-in"
              />
              <label htmlFor="keep-signed-in">Keep me signed in</label>
            </div>

            <button type="submit" className="signin-button-for-login">
              <span>Sign In</span>
              <img src={RightArrow} alt="Arrow" className="right-arrow" />
            </button>
          </div>

          <div className="login-divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <div className="login-google-btn-conatiner">
            <button type="button" className="google-login-container">
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
              <Link to="/help" className="login-footer-link">
                Help
              </Link>

              <Link to="/privacy" className="login-footer-link">
                Privacy
              </Link>

              <Link to="/terms" className="login-footer-link">
                Terms
              </Link>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};
