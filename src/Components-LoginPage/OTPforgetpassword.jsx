import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Components-Loginpage/OTPforgetpassword.css";
import GraduateCap from "../assets/login/graduate-cap.png";
import Otpforgetmainimage from "../assets/login/Intern-verify-otp-illustration.png";
import WhiteShield from "../assets/login/login-shield-with-checkmark.png";
import Rightarrowotpforget from "../assets/login/right-arrow.png";
import Endtoendforgetotp from "../assets/login/End-to-end-lock.png";
import Secureforgetotp from "../assets/login/Secure-shield-black.png";

export const OTPforgetpassword = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

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
      alert("Please enter the 6-digit verification code.");
      return;
    }
    navigate("/reset-Password");
  };

  return (
    <div className="Ims-otpforget-container">
      <div className="Ims-otpforget-innercontainer">
        <div className="Ims-otpforget-leftcontent">
          <header className="Ims-otpforget-mainhead">
            <div className="Ims-otpforget-logo">
              <img src={GraduateCap} alt="Graduate-Cap" />
            </div>
            <div className="Ims-otpforget-mainheader">
              <h3>Internship Management System</h3>
              <p>
                Learn <span className="otp-fp-dot"></span> Grow{" "}
                <span className="otp-fp-dot"></span> Build Your Future
              </p>
            </div>
          </header>

          <div className="Ims-otpforget-middlecontent">
            <div className="Ims-otpforget-maincontent">
              <h2>
                Verify Identity & Enter <br /> Security Code
              </h2>
              <p>
                A 6-digit one-time password has been transmitted to your
                registered
                <br />
                institutional credentials.
              </p>
            </div>
          </div>

          <div className="Ims-otpforget-imagecontent">
            <img
              src={Otpforgetmainimage}
              alt="Otp forget mainimage"
              className="Ims-otpforget-image"
            />
            <div className="Ims-otpforget-bottomcard-container">
              <div className="Ims-otpforget-bottomcard">
                <div className="Ims-otpforget-bottomrightcard">
                  <img
                    src={WhiteShield}
                    alt="white-shield"
                    className="Ims-otpforget-whiteshield"
                  />
                </div>
                <div className="Ims-otpforget-bottomcontent">
                  <strong>
                    “Credential change verified across university registrars,
                    Dean approvals, and
                    <br />
                    enterprise partner portals.”
                  </strong>
                  <p>
                    Enterprise IAM & Security Operations —{" "}
                    <span>Zero Trust Protocol Active</span>
                  </p>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>

        <div className="ims-otpforget-right">
          <div className="ims-otpforget-form-wrapper">
            <div className="ims-otpforget-form-heading">
              <h2>Enter Verification Code</h2>

              <p>
                We've sent a 6-digit code to your registered Email and phone
                number. The code will expire in{" "}
                <span style={{ color: "#132A56" }}>09:59</span> minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="ims-otpforget-inputs">
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
                    aria-label={`OTP digit ${index + 1}`}
                  />
                ))}
              </div>

              <button type="submit" className="ims-otpforget-verifybtn">
                Verify and Continue
                <img
                  src={Rightarrowotpforget}
                  alt="arrow mark"
                  style={{ width: "12px", height: "12px" }}
                />
              </button>

              <div className="ims-otpforget-resend">
                <span className="ims-otpforget-resend-span">
                  Didn't receive the code?
                </span>
                <button type="button">Resend</button>
                <span>(in 00:55)</span>
              </div>
            </form>

            <div className="ims-otpforget-divider"></div>

            <div className="ims-otpforget-securityinfo">
              <span>
                <span>
                  <img
                    src={Endtoendforgetotp}
                    alt="End to End icon"
                    className="ims-otpforget-securityicon"
                  />
                </span>
                END-TO-END ENCRYPTED
              </span>

              <span>
                <span>
                  <img
                    src={Secureforgetotp}
                    alt="Secure icon"
                    className="ims-otpforget-securityicon"
                  />
                </span>
                SECURE HANDSHAKE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
