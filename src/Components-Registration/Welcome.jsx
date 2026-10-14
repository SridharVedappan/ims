import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components-Registration/Welcome.css";
import Profile from "../assets/registration/welcome/welcom-profile-icon.png";
import VerifiedShield from "../assets/registration/welcome/verified-shield-icon.png";
import WelcomeIllustartion from "../assets/registration/welcome/welcome-illustartion.png";
import BarChart from "../assets/registration/welcome/bar-chart-icon.png";

export const Welcome = () => {
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;

    setRole(selectedRole);

    if (selectedRole === "intern") {
      navigate("/intern-login");
    } else if (selectedRole === "mentor") {
      navigate("/Mentor-Registeration");
    } else if (selectedRole === "hr") {
      navigate("/hr-login");
    } else if (selectedRole === "company") {
      navigate("/company-login");
    } else if (selectedRole === "admin") {
      navigate("/admin-login");
    }
  };

  return (
    <div className="ims-welcome-container">
      <div className="ims-welcome-inner-container">
        <div className="ims-welcome-left-section">
          <header className="ims-welcome-right-header">
            <div className="ims-welcom-right-header-container">
              <h1 className="ims-welcome-header-title">
                Welcome to your career collaborative workspace.
              </h1>
              <p className="ims-welcome-sub-header-title">
                Join over 14,000+ ambitious students, corporate mentors, leading
                enterprises, and academic institutions shaping the future of
                workforce talent.
              </p>
            </div>
          </header>

          <img
            src={WelcomeIllustartion}
            alt="welcome-illustartion"
            className="ims-welcome-illustration"
          />
          <div className="ims-welcome-outer-bottom-container">
            <div className="ims-welcome-bottom-cards-container">
              <div className="ims-welcome-bottom-card">
                <div className="ims-welcome-bar-chart-conatiner">
                  <img
                    src={BarChart}
                    alt="bar-chart"
                    className="ims-welcome-bar-chart"
                  />
                </div>
                <div className="ims-welcome-sub-headings-container">
                  <h1 className="ims-welcome-sub-heading-title">
                    Unified Platform
                  </h1>
                  <p className="ims-welcome-discription">
                    Seamless identity, role-based workflows, and organizational
                    compliance
                  </p>
                </div>
              </div>
              <div className="ims-welcome-bottom-card">
                <div className="ims-welcome-bar-chart-conatiner">
                  <img
                    src={VerifiedShield}
                    alt="verified-shield"
                    className="ims-welcome-verified-shield"
                  />
                </div>
                <div className="ims-welcome-sub-headings-container">
                  <h1 className="ims-welcome-sub-heading-title">
                    Enterprise Security
                  </h1>
                  <p className="ims-welcome-discription">
                    Zero-trust access with automated audit logs and real-time
                    governance.
                  </p>
                </div>
              </div>
            </div>
            <div className="ims-welcome-bottom-container">
              <p className="ims-welcome-bottom-para">
                “Empowering our cross-functional teams with seamless access,
                verified identity governance, and automated onboarding at global
                scale.”
              </p>
              <div className="ims-welcome-image-and-description">
                <img
                  src={Profile}
                  alt="Profile"
                  className="ims-welcome-profile-image"
                />
                <p className="ims-welcome-profile-description">
                  Dr. Elena Vance <span>&mdash;</span> Dean of Experiential
                  Education, Global University Network
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ims-welcome-right-section">
          <div className="ims-welcome-right-inner-container">
            <header className="ims-welcome-right-header-container">
              <h1 className="ims-welcome-right-title">
                Your Journey Starts Here
              </h1>
              <p className="ims-welcome-right-sub-title">
                Select your account type below to begin your tailored
                registration
              </p>
            </header>

            <div className="ims-welcome-role-selector">
              <label className="ims-welcome-select-role-label">
                Registering As <span className="ims-welcome-asterisk">*</span>
              </label>

              <select
                value={role}
                onChange={handleRoleChange}
                className="ims-welcome-selector"
              >
                <option value="">Select role</option>
                <option value="intern">Intern</option>
                <option value="mentor">Mentor</option>
                <option value="hr">HR</option>
                <option value="company">Company</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
