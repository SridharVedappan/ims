import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LoginPage/ForgotPassword.css";
import GraduateCap from "../assets/login/graduate-cap.png";
import WhiteShield from "../assets/login/white-shield.png";
import SecureVector from "../assets/login/secure-vector-img.png";
import ResetIcon from "../assets/login/reset-icon.png";
import MailIcon from "../assets/login/mail.png";
import MobileIcon from "../assets/login/mobile.png";
import RightArrow from "../assets/login/right-arrow.png";
import LeftArrow from "../assets/login/left-arrow.png";

export const ForgotPassword = () => {
  const [radio, setRadio] = useState("email");

  const navigate = useNavigate();

  const handleSendCode = () => {
    navigate("/OTPforgetpassword", {
      state: {
        method: radio,
        value: radio === "email" ? "j**n@g***l.com" : "+91 9•••• 5678",
      },
    });
  };

  return (
    <div className="fp-container">
      <div className="fp-inner-container">
        <div className="fp-left-content">
          <header className="fp-left-header">
            <div className="fp-logo-container">
              <img src={GraduateCap} alt="Graduate-Cap" />
            </div>
            <div className="fp-main-header">
              <h3>Internship Management System</h3>
              <p>
                Learn <span className="ims-fp-dot"></span> Grow{" "}
                <span className="ims-fp-dot"></span> Build Your Future
              </p>
            </div>
          </header>

          <div className="fp-middle-content">
            <div className="fp-main-content">
              <h2>
                Secure Account Recovery &<br />
                Identity Protection
              </h2>
              <p>
                Quickly regain access to your verified internship credentials,
                university approvals,
                <br />
                and active corporate placements.
              </p>
            </div>
          </div>

          <div className="fp-image-content">
            <img
              src={SecureVector}
              alt="vector-stock"
              className="fp-vector-stock"
            />
            <div className="fp-bottom-card-container">
              <div className="fp-bottom-card">
                <div className="fp-bottomright-card">
                  <img
                    src={WhiteShield}
                    alt="white-shield"
                    className="fp-white-shield"
                  />
                </div>
                <div className="fp-bottom-content">
                  <strong>
                    All password reset requests are cryptographically signed and
                    logged according to institutional FERPA <br />& SOC-2
                    compliance standards.
                  </strong>
                  <p>
                    Campus Identity & Access Management (IAM) Protocol
                    <span> &#9679; Verified Institutional Security</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fp-right-container">
          <header className="fp-right-header">
            {" "}
            <img
              src={ResetIcon}
              alt="forgot-passord-icon"
              className="fp-icon"
            />
            <h1>Forgot Password?</h1>
            <p>
              Choose your preferred method to receive a one-time
              <br /> verification code.
            </p>
          </header>
          <div className="ims-fp-selection">
            <p className="ims-verification-method-title">Verification Method</p>

            <div className="ims-fp-outer-container">
              <div
                className={radio === "email" ? " ims-active" : "ims-inactive"}
                onClick={() => setRadio("email")}
              >
                <div className="fp-radio-container">
                  <div className="fp-inner-conatiner">
                    <img src={MailIcon} alt="mail" />
                    <div className="ims-fp-title-container">
                      <p className="fp-input-title">Email Address</p>
                      <p className="fp-input-subtitle">
                        Send code to j**n@g***l.com
                      </p>
                    </div>
                    <div className="ims-fp-radio-btn-conatiner">
                      {" "}
                      <input
                        type="radio"
                        name="radio"
                        className="fp-radio-btn"
                        checked={radio === "email"}
                        onChange={() => setRadio("email")}
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div
                className={radio === "phone" ? " ims-active" : "ims-inactive"}
                onClick={() => setRadio("phone")}
              >
                <div className="fp-radio-container">
                  <div className="fp-inner-conatiner">
                    <img src={MobileIcon} alt="phone" />
                    <div className="ims-fp-title-container">
                      <p className="fp-input-title">SMS / Text Message</p>
                      <p className="fp-input-subtitle">
                        Send code to +91 9•••• •5678
                      </p>
                    </div>
                    <div className="ims-fp-radio-btn-conatiner">
                      <input
                        type="radio"
                        name="radio"
                        className="fp-radio-btn"
                        checked={radio === "phone"}
                        onChange={() => setRadio("phone")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="fp-send-verification" onClick={handleSendCode}>
              Send Verification Code
              <span>
                <img
                  src={RightArrow}
                  alt="right-arrow"
                  className="ims-fp-right-arrow"
                />
              </span>
            </button>

            <div className="ims-fp-back-to-login-wrapper">
              <Link to="/login" className="ims-fp-back-to-login">
                <img
                  src={LeftArrow}
                  alt="left-arrow"
                  className="ims-left-arrow-icon"
                />
                <span>Back to Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
