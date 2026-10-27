import React, { useState, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Header } from "../Reusable-Components/Header.jsx";
import "../Components-Registration/RegistrationOTP.css";
import RegistrationOtp from "../assets/registration/otp/registartion-otp-illustartion.png";
import WhiteShiled from "../assets/registration/otp/white-shield.png";
import RightArrow from "../assets/registration/otp/right-arrow.png";
import BackToVerification from "../assets/registration/otp/back-to-verification.png";

export const RegistrationOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errors, setErrors] = useState({});
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const location = useLocation();

  const verificationType = location.state?.verificationType;
  const email = location.state?.email;
  const phoneNumber = location.state?.phoneNumber;
  const countryCode = location.state?.countryCode;

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length !== 6) {
      setErrors({
        verificationCode: "Please enter the 6-digit verification code *",
      });
      return;
    }

    const savedData = location.state;

    if (!savedData?.formValues || !savedData?.verificationType) {
      setErrors({
        verificationCode: "Registration session not found. Please try again.",
      });
      return;
    }

    const fieldToVerify = verificationType === "email" ? "email" : "phone";

    const updatedVerifiedFields = {
      ...(savedData.verifiedFields || {
        email: false,
        phone: false,
      }),
      [fieldToVerify]: true,
    };

    setErrors({});

    navigate("/Components-Registration/Mentor-Registration", {
      state: {
        formValues: savedData.formValues,
        termsAccepted: savedData.termsAccepted,
        verifiedFields: updatedVerifiedFields,
        selectRole: savedData.selectRole,
      },
    });
  };
  return (
    <div className="ims-reg-otp-container ">
      <div className="ims-reg-otp-inner-container">
        <div className="ims-reg-otp-left-content">
          <Header />

          <div className="ims-reg-otp-middle-content">
            <div className="ims-reg-otp-main-content">
              <h2>
                Verify your student email to
                <br />
                activate your account
              </h2>
              <p>
                Verify your institutional credentials to gain access to
                accredited corporate
                <br />
                internships, Dean-approved academic credits, and top-tier
                mentorship programs.
              </p>
            </div>
          </div>

          <div className="ims-otp-reg-image-container">
            <img
              src={RegistrationOtp}
              alt="Otp-forget-main-image"
              className="ims-reg-otp-image"
            />
            <div className="ims-reg-otp-bottom-card-container">
              <div className="ims-reg-otp-bottom-card">
                <div className="Ims-reg-otp-bottom-right-card">
                  <img
                    src={WhiteShiled}
                    alt="white-shield"
                    className="ims-reg-otp-whiteshield"
                  />
                </div>
                <div className="ims-reg-otp-bottom-content">
                  <strong>
                    “Institutional email verification secures university credit
                    transfer and immediate eligibility for Fortune 500
                    placements.”
                  </strong>
                  <p>
                    Academic Partnerships Office{" "}
                    <span>— Verified University Gateway</span>
                  </p>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div className="ims-otp-reg-right">
          <div className="ims-otp-reg-form-wrapper">
            <div className="ims-otp-reg-form-heading">
              <h2>Enter Verification Code</h2>

              <p>
                We've sent a 6-digit code to your registered Email and phone
                number. The code will expire{" "}
                <span style={{ color: "#132A56" }}>09:59</span> minutes.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="ims-reg-otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      inputRefs.current[index] = element;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={
                      errors.verificationCode
                        ? "ims-otp-inputs ims-input-error"
                        : "ims-otp-inputs"
                    }
                  />
                ))}
              </div>

              {errors.verificationCode && (
                <div className="ims-error-reg-otp">
                  {errors.verificationCode}
                </div>
              )}

              <button type="submit" className="ims-otp-verify-and-continue">
                Verify and Continue
                <img
                  src={RightArrow}
                  alt="right-arrow"
                  style={{ width: "12px", height: "12px" }}
                />
              </button>
              <div className="ims-otp-reg-resend">
                <span className="ims-otp-reg-resend-span">
                  Didn't receive the code?
                </span>
                <button type="button">Resend</button>
                <span>(in00:55)</span>
              </div>
            </form>
            <div className="back-to-verification-container">
              <img
                src={BackToVerification}
                alt="Back-To-Verification"
                className="back-to-verification-image"
              />
              <span className="back-to-verify-span">
                Back to verification options
              </span>
            </div>

            <div className="ims-reg-otp-link-container">
              {" "}
              <Link to="/contact-support" className="ims-reg-otp-link">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
