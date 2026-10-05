import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components-LoginPage/ResetPassword.css";
import GraduateCap from "../assets/login/graduate-cap.png";
import WhiteShield from "../assets/login/white-shield.png";
import SetPasswordIllustration from "../assets/login/set-password-vector-illustration.png";
import ResetIcon from "../assets/login/reset-icon.png";
import UnCheck from "../assets/login/uncheck.png";
import Check from "../assets/login/check.png";
import PasswordIcon from "../assets/login/PasswordIcon.png";
import SecureShield from "../assets/login/secure-shield.png";

export const ResetPassword = () => {
  const initialValue = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const [formValue, setFormValue] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const isPasswordLengthValid = formValue.newPassword.length >= 8;

  const isPasswordMatchValid =
    formValue.confirmNewPassword.length > 0 &&
    formValue.newPassword === formValue.confirmNewPassword;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    let newError = {};

    if (!formValue.newPassword.trim()) {
      newError.newPassword = "New password is required *";
    }

    if (!formValue.confirmNewPassword.trim()) {
      newError.confirmNewPassword = "Confirm password is required *";
    }

    if (formValue.newPassword && !isPasswordLengthValid) {
      newError.newPassword = "Password must be at least 8 characters *";
    }

    if (formValue.confirmNewPassword && !isPasswordMatchValid) {
      newError.confirmNewPassword = "Passwords do not match *";
    }

    setErrors(newError);

    if (Object.keys(newError).length === 0) {
      alert("Password updated successfully");
      setFormValue(initialValue);
      navigate("/password-resetSucess");
    }
  };

  return (
    <div className="ims-rp-container">
      <div className="ims-rp-inner-container">
        <div className="ims-rp-left-content">
          <header className="ims-rp-left-header">
            <div className="ims-rp-logo-container">
              <img src={GraduateCap} alt="Graduate Cap" />
            </div>

            <div className="ims-rp-main-header">
              <h3>Internship Management System</h3>
              <p>
                Learn <span className="ims-rs-dot"></span> Grow{" "}
                <span className="ims-rs-dot"></span> Build Your Future
              </p>
            </div>
          </header>

          <div className="ims-rp-middle-content">
            <div className="ims-rp-main-content">
              <h2>Set a Strong Master Password</h2>
              <p>
                Protect your internship credentials, academic clearance records,
                and enterprise
                <br />
                and active corporate placements.
              </p>
            </div>
          </div>

          <div className="ims-rp-image-content">
            <img
              src={SetPasswordIllustration}
              alt="Set Password Illustration"
              className="ims-rp-illustration"
            />

            <div className="ims-rp-bottom-card-container">
              <div className="ims-rp-bottom-card">
                <div className="ims-rp-bottomright-card">
                  <img
                    src={WhiteShield}
                    alt="White Shield"
                    className="ims-rp-white-shield"
                  />
                </div>

                <div className="ims-rp-bottom-content">
                  <strong>
                    “Automated credential audit enforces strict NIST 800-63B
                    password guidelines and institutional
                    <br />
                    SSO policies.”
                  </strong>

                  <p>
                    Campus Identity & Access Management (IAM) Protocol
                    <span> • Verified Institutional Security</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ims-rp-right-container">
          <header className="ims-rp-header">
            <img src={ResetIcon} alt="Reset Icon" />

            <h1>Set New Password</h1>

            <p>
              Your new password must be different from
              <br />
              previous passwords.
            </p>
          </header>

          <form onSubmit={handleUpdate} className="ims-rp-form-container">
            <div className="ims-rp-input-container">
              <label htmlFor="new-password">New Password</label>

              <div className="ims-rp-input-wrapper">
                <img
                  src={PasswordIcon}
                  alt="Password Icon"
                  className="ims-rp-password-icon"
                />

                <input
                  id="new-password"
                  type="password"
                  name="newPassword"
                  placeholder="Min. 8 characters"
                  value={formValue.newPassword}
                  onChange={handleChange}
                  className={
                    errors.newPassword
                      ? "ims-rp-input ims-rp-input-error"
                      : "ims-rp-input"
                  }
                />
              </div>
              {errors.newPassword && (
                <p className="ims-rs-error-message">{errors.newPassword}</p>
              )}
            </div>

            <div className="ims-rp-input-container">
              <label htmlFor="confirm-password">Confirm New Password</label>

              <div className="ims-rp-input-wrapper">
                <img src={SecureShield} alt="" className="ims-rp-shield-icon" />

                <input
                  id="confirm-password"
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Repeat your password"
                  value={formValue.confirmNewPassword}
                  onChange={handleChange}
                  className={
                    errors.confirmNewPassword
                      ? "ims-rp-input ims-rp-input-error"
                      : "ims-rp-input"
                  }
                />
              </div>
              {errors.confirmNewPassword && (
                <p className="ims-rs-error-message">
                  {errors.confirmNewPassword}
                </p>
              )}
            </div>

            <div className="ims-rp-password-rules">
              <div className="ims-rp-rule">
                <img
                  src={!isPasswordLengthValid ? Check : UnCheck}
                  alt="Checker"
                  className="ims-rp-checker-icon"
                />

                <span>At least 8 characters</span>
              </div>

              <div className="ims-rp-rule">
                <img
                  src={!isPasswordMatchValid ? Check : UnCheck}
                  alt="Checker"
                  className="ims-rp-checker-icon"
                />

                <span>Passwords match</span>
              </div>
            </div>

            <button type="submit" className="ims-rp-update-button">
              Update Password
            </button>
          </form>
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};
