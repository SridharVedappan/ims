import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LoginPage/InternLogin.css";
import GraduateCap from "../assets/login/graduate-cap.png";
import LoginRisingMark from "../assets/login/rise-mark.png";
import VectorStock from "../assets/login/login-vector-stock.png";
import BlueShield from "../assets/login/blue-shield.png";
import WhiteShield from "../assets/login/white-shield.png";
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

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let newErrors = {};

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required *";
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formValues.email.trim())
    ) {
      newErrors.email = "Enter a valid email *";
    }
    if (!formValues.password.trim()) {
      newErrors.password = "Password is required *";
    } else if (!passwordRegex.test(formValues.password.trim())) {
      newErrors.password =
        "Password contains at least 1 ( upper character, Lower character, Special character, Number )";
    }
    setErrors(newErrors);

    // No errors move to next page
    if (Object.keys(newErrors).length === 0) {
      setFormValues(initialValue);
      console.log("handleSubmit ran", formValues);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <div className="login-left-content">
          <header className="login-mainhead">
            <div className="login-logo">
              <img src={GraduateCap} alt="Graduate-Cap" />
            </div>
            <div className="login-mainheader">
              <h3>Internship Management System</h3>
              <p>
                Learn <span className="ims-login-dot"></span> Grow{" "}
                <span className="ims-login-dot"></span> Build Your Future
              </p>
            </div>
          </header>

          <div className="login-middlecontent">
            <div className="login-maincontent">
              <h2>
                Connecting academic talent with <br />
                career-defining corporate internships
              </h2>
              <p>
                The verified enterprise portal synchronizing university dean
                approvals, experiential learning hours <br />
                and Fortune 500 mentorship agreements
              </p>
            </div>

            <div className="login-Statistics">
              <div className="login-Stat-card">
                <div className="login-statcard-content">
                  <strong>14,200+</strong>
                  <span>ACTIVE INTERNS</span>
                  <small>
                    <img
                      src={LoginRisingMark}
                      alt="rise mark"
                      style={{
                        width: "14px",
                        height: "10px",
                        marginRight: "5px",
                      }}
                    />
                    24% Y/Y
                  </small>
                </div>
              </div>
              <div className="login-Stat-card">
                <div className="login-statcard-content">
                  <strong>98.4%</strong>
                  <span>CREDIT VERIFIED</span>
                  <small>
                    {" "}
                    <img
                      src={BlueShield}
                      alt="Blue-Shield"
                      style={{
                        width: "14px",
                        height: "14px",
                        marginRight: "5px",
                      }}
                    />
                    Deans Approved
                  </small>
                </div>
              </div>
              <div className="login-Stat-card">
                <div className="login-statcard-content">
                  <strong>14,200+</strong>
                  <span>ACTIVE INTERNS</span>
                  <small>
                    <img
                      src={LoginRisingMark}
                      alt="rise mark"
                      style={{
                        width: "14px",
                        height: "10px",
                        marginRight: "5px",
                      }}
                    />
                    24% Y/Y
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="login-imagecontent">
            <img
              src={VectorStock}
              alt="vector-stock"
              className="login-vector-stock"
            />
            <div className="login-bottom-card-container">
              <div className="login-bottomcard">
                <div className="login-bottomrightcard">
                  <img
                    src={WhiteShield}
                    alt="white-shield"
                    className="login-white-shield"
                  />
                </div>
                <div className="login-bottomcontent">
                  <strong>
                    “Automated audit trails cut academic credit clearance time
                    from 14 days to under 48 hours.”
                  </strong>
                  <p>
                    Dr. Elena Vance <span>&mdash;</span>{" "}
                    <span>
                      Dean of Experiential Education, Northeastern Consortium
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                {errors.email && (
                  <p className="ims-login-error-message">{errors.email}</p>
                )}
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
                  <p className="ims-login-error-message">{errors.password}</p>
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
                <span className="login-dot"></span>
                <Link to="/privacy" className="login-footer-link">
                  Privacy
                </Link>
                <span className="login-dot"></span>
                <Link to="/terms" className="login-footer-link">
                  Terms
                </Link>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};
