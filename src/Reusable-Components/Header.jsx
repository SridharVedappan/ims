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
        <p className="ims-reusable-header-subtitle">
          Learn <span className="ims-reusable-header-dot">&bull;</span> Grow{" "}
          <span className="ims-reusable-header-dot">&bull;</span> Build Your
          Future
        </p>
      </div>
    </header>
  );
};
