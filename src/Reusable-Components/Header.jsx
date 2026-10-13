import React from "react";
import GraduateCap from "../assets/registration/graduate-cap.png";
import "../Reusable-Components/Header.css";

export const Header = () => {
  return (
    <header className="Ims-MentorRegister-leftheader">
      <div className="Ims-MentorRegister-logo-container">
        <img src={GraduateCap} alt="Graduate-Cap" />
      </div>
      <div className="Ims-MentorRegister-main-header">
        <h3>Internship Management System</h3>
        <p>Learn • Grow • Build Your Future</p>
      </div>
    </header>
  );
};
