import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components-LoginPage/PasswordResetSuccess.css";
import BlueGraduateCap from "../assets/login/blue-garduate-cap.png";
import ResetSuccessRightmark from "../assets/login/reset-sucess.png";
import Resetsuccesssecuritylock from "../assets/login/reset-sucess securityl-ock.png";
import PasswordResetSuccessIllustration from "../assets/login/password-reset-success.png";
import WhiteShield from "../assets/login/white-shield.png";

export const PasswordResetSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="Ims-Resetsucess-container">
      <div className="Ims-Resetsucess-innercontainer">
        <div className="Ims-Resetsucess-leftcontent">
          <header className="ims-prs-header">
            <div className="ims-prs-logo-container">
              <img src={BlueGraduateCap} alt="Graduate Cap" />
            </div>

            <div className="ims-prs-main-header">
              <h3>Internship Management System</h3>
              <p>
                Learn <span className="ims-prs-dot"></span> Grow{" "}
                <span className="ims-prs-dot"></span> Build Your Future
              </p>
            </div>
          </header>

          <div className="ims-prs-middle-content">
            <div className="ims-prs-main-content">
              <h2>
                Account Secured & Access <br />
                Restored
              </h2>
              <p>
                Quickly regain access to your verified internship credentials,
                university approvals,
                <br /> and active corporate placements.
              </p>
            </div>
          </div>

          <div className="ims-prs-image-content">
            <img
              src={PasswordResetSuccessIllustration}
              alt="Password Reset Success Illustration"
              className="ims-prs-illustration"
            />

            <div className="ims-prs-bottom-card-container">
              <div className="ims-prs-bottom-card">
                <div className="ims-prs-bottomright-card">
                  <img
                    src={WhiteShield}
                    alt="White Shield"
                    className="ims-prs-white-shield"
                  />
                </div>

                <div className="ims-prs-bottom-content">
                  <strong>
                    “Credential change verified across university registrars,
                    Dean approvals, and
                    <br />
                    enterprise partner portals.”
                  </strong>

                  <p>
                    Enterprise IAM & Security Operations
                    <span> &mdash; Verified Institutional Security</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right-content */}
        <div className="Ims-Resetsuccess-right">
          <div className="Ims-Resetsuccess-form-wrapper">
            <img
              src={ResetSuccessRightmark}
              alt="Reset success Rightmark"
              className="Ims-Resetsuccess-Rightmark"
            />

            <div className="Ims-Resetsuccess-securitystatus">
              <img
                src={Resetsuccesssecuritylock}
                alt="Resetsucees security lock"
                className="Ims-Resetsuccess-securitylock"
              />
              <span>RECOVERY COMPLETED &#9679; 256-BIT ENCRYPTED</span>
            </div>

            <h1 className="Ims-Resetsuccess-title">
              Password Reset Successful!
            </h1>

            <p className="Ims-Resetsuccess-description">
              Your account credentials have been securely updated. All
              <br />
              active enterprise and university sessions have been
              <br />
              refreshed.
            </p>

            <button
              className="Ims-Resetsuccess-backloginbutton"
              onClick={() => {
                navigate("/login");
              }}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
