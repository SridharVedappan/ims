import React from "react";
import "../Components-Registration/Welcome.css";
import DownArrow from "../assets/registration/welcome/down-arrow.png";
import Profile from "../assets/registration/welcome/welcom-profile-icon.png";
import VerifiedShield from "../assets/registration/welcome/verified-shield-icon.png";
import WelcomeIllustartion from "../assets/registration/welcome/welcome-illustartion.png";

export const Welcome = () => {
  return (
    <div className="ims-welcome-container">
      <div className="ims-welcome-inner-container">
        <div className="ims-welcome-left-section">left</div>

        <div className="ims-welcome-right-section">right</div>
      </div>
    </div>
  );
};
