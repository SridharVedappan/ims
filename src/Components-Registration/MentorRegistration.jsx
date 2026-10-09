import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MentorRegistration.css";
import GraduateCap from "../assets/login/graduate-cap.png";
import MentorRegistermainimage from "../assets/login/Mentor register main image.png";
import MentorRegisterWhiteShield from "../assets/login/Mentorregister insustryshield.png";
import MentorRegisterconnections from "../assets/login/Mentor Register Connections.png";
import MentorRegisterstars from "../assets/login/MentorRegister Stars.png";

import EyeOpenIcon from "../assets/login/eye-open.png";
import EyeCloseIcon from "../assets/login/eye-close.png";

export const MentorRegistration = () => {
  const initialValues = {
    fullName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    professionalTitle: "",
    skills: "",
    YearOfExperience: "",
    bio: "",
    password: "",
    confirmPassword: "",
    termsAccepted: "",
  };

  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleToggle = (field) => {
    if (field === "password") {
      setPasswordShow((prev) => !prev);
    } else if (field === "confirmPassword") {
      setConfirmPasswordShow((prev) => !prev);
    } else if (field === "termsAccepted") {
      setTermsAccepted((prev) => !prev);
    }
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

  const handleKeyDown = (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let newErrors = {};
    if (!formValues.fullName.trim()) {
      newErrors.fullName = "Your full name is required*";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required*";
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formValues.email.trim())
    ) {
      newErrors.email = "Enter a valid email*";
    }

    if (!formValues.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required*";
    }

    if (!formValues.skills.trim()) {
      newErrors.skills = "Skills / Expertise is required*";
    }

    if (!formValues.professionalTitle.trim()) {
      newErrors.professionalTitle = "Professional title is required*";
    }

    if (!formValues.YearOfExperience) {
      newErrors.YearOfExperience = "Please select your experience*";
    }

    if (!formValues.bio.trim()) {
      newErrors.bio = "Please enter your bio*";
    }

    if (!termsAccepted) {
      newErrors.termsAccepted =
        "Please accept the Terms of Service and Privacy Policy*";
    }

    if (!formValues.password.trim()) {
      newErrors.password = "Password is required*";
    } else if (!passwordRegex.test(formValues.password.trim())) {
      newErrors.password =
        "Password contains at least 1 ( upper character, Lower character, Special character)*";
    }

    if (!formValues.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required*";
    } else if (!formValues.password.trim()) {
      newErrors.confirmPassword = "Please enter password first*";
    } else if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = "Passwords do not match *";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormValues(initialValues);
      console.log("handleSubmit ran", formValues);
      navigate("/");
    }
  };

  return (
    <div className="ims-mentor-conatiner">
      <div className="ims-mentor-inner-container">
        <div className="ims-mentor-left-section">
          <header className="Ims-MentorRegister-leftheader">
            <div className="Ims-MentorRegister-logo-container">
              <img src={GraduateCap} alt="Graduate-Cap" />
            </div>
            <div className="Ims-MentorRegister-main-header">
              <h3>Internship Management System</h3>
              <p>Learn • Grow • Build Your Future</p>
            </div>
          </header>

          <div className="Ims-MentorRegister-middle-content">
            <div className="Ims-MentorRegister-main-content">
              <h2>
                Empower the next generation of <br />
                talent.
              </h2>
              <p>
                Join a community of experts dedicated to guiding students
                through their career
                <br /> journey. Share yourwisdom, foster growth, and shape the
                industry's future.
              </p>
            </div>
          </div>

          <div className="Ims-MentorRegister-image-content">
            <img
              src={MentorRegistermainimage}
              alt="MentorRegister mainimage"
              className="Ims-MentorRegister-vector-stock"
            />

            {/* Bottom card one */}
            <div className="Ims-MentorRegister-bottomcard-container">
              <div className="Ims-MentorRegister-bottomcard">
                <div className="Ims-MentorRegister-bottomrightcard">
                  <img
                    src={MentorRegisterWhiteShield}
                    alt="Mentor-white-shield"
                    className="Ims-MentorRegister-whiteshield"
                  />
                </div>
                <div className="Ims-MentorRegister-bottomcontent">
                  <strong>Industry Impact</strong>
                  <p>
                    Bridge the gap between academic learning and real-world
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom card two */}
            <div className="Ims-MentorRegister-bottomcardtwo-container">
              <div className="Ims-MentorRegister-bottomcard">
                <div className="Ims-MentorRegister-bottomrightcard">
                  <img
                    src={MentorRegisterconnections}
                    alt="Mentor-connections"
                    style={{
                      color: "#FFFFFF",
                      width: "16px",
                      height: "9px",
                    }}
                  />
                </div>
                <div className="Ims-MentorRegister-bottomcontent">
                  <strong>Meaningful Connections</strong>
                  <p>
                    Build lasting professional relationships with ambitious
                    young minds.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom card three */}
            <div className="Ims-MentorRegister-bottomcardthree-container">
              <div className="Ims-MentorRegister-bottomcard">
                <div className="Ims-MentorRegister-bottomrightcard">
                  <img
                    src={MentorRegisterstars}
                    alt="Mentor-Stars-image"
                    style={{
                      color: "#FFFFFF",
                      width: "16px",
                      height: "15px",
                    }}
                  />
                </div>
                <div className="Ims-MentorRegister-bottomcontent">
                  <strong>Personal Growth</strong>
                  <p>
                    Enhance your leadership and communication skills through
                    mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ims-mentor-right-section">
          <div className="ims-mentor-header-conatiner">
            <header className="ims-mentor-header">
              <h1>Create your account</h1>
              <p>Complete your profile to start connecting with students.</p>
            </header>
            <div className="mentor-role-selector">
              <label>
                Registering As <span>*</span>
              </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select role</option>
                <option value="intern">Intern</option>
                <option value="mentor">Mentor</option>
                <option value="hr">HR</option>
                <option value="company">Company</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="ims-mentor-reg-form">
            <div className="ims-mentor-form-row-container">
              <div className="ims-mentor-input-outer-container">
                <div className="mentor-input-conatiner">
                  <label htmlFor="fullName">
                    Full Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formValues.fullName}
                    onChange={handleChange}
                  />
                </div>
                {errors.fullName && (
                  <p className="ims-mentor-error-message">{errors.fullName}</p>
                )}
              </div>

              <div className="ims-mentor-input-outer-container">
                <div className="mentor-input-conatiner">
                  <label htmlFor="email">
                    Email Address<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <p className="ims-mentor-error-message">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="ims-mentor-form-row-container">
              <div className="ims-mentor-input-outer-container">
                <div className="mentor-input-conatiner">
                  <label htmlFor="phoneNumber">
                    Phone Number<span>*</span>
                  </label>
                  <div className="ims-mentor-phoneNumber-conatiner">
                    {" "}
                    <select
                      name="countryCode"
                      id="countryCode"
                      value={formValues.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                      <option value="+971">+971</option>
                      <option value="+43">+43</option>
                      <option value="+55">+55</option>
                      <option value="+86">+86</option>
                    </select>
                    <input
                      type="tel"
                      inputMode="numeric"
                      name="phoneNumber"
                      id="phoneNumber"
                      onKeyDown={handleKeyDown}
                      placeholder="Enter your number"
                      value={formValues.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {errors.phoneNumber && (
                  <p className="ims-mentor-error-message">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <div className="ims-mentor-input-outer-container">
                <div className="mentor-input-conatiner">
                  <label htmlFor="professionalTitle">
                    Professional Title<span>*</span>
                  </label>
                  <input
                    type="text"
                    id="professionalTitle"
                    name="professionalTitle"
                    value={formValues.professionalTitle}
                    placeholder="e.g., Senior Software Engineer"
                    onChange={handleChange}
                  />
                </div>
                {errors.professionalTitle && (
                  <p className="ims-mentor-error-message">
                    {errors.professionalTitle}
                  </p>
                )}
              </div>
            </div>
            <div className="ims-mentor-form-row-container">
              <div className="ims-mentor-input-outer-container">
                <div className="mentor-input-conatiner">
                  <label htmlFor="skills">
                    Skills / Expertise<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    placeholder="e.g., UI/UX, React, Mentoring"
                    value={formValues.skills}
                    onChange={handleChange}
                  />
                  {!errors.skills && (
                    <p>Separate multiple skills with commas</p>
                  )}
                </div>{" "}
                {errors.skills && (
                  <p className="ims-mentor-skill-error-message">
                    {errors.skills}
                  </p>
                )}
              </div>
              <div className="ims-mentor-input-outer-container">
                <div className="mentor-input-conatiner">
                  <label htmlFor="YearOfExperience">
                    Year of Experience<span>*</span>
                  </label>
                  <div className="ims-mentor-Experience">
                    <select
                      name="YearOfExperience"
                      id="YearOfExperience"
                      value={formValues.YearOfExperience}
                      onChange={handleChange}
                    >
                      <option value="">Select the experience level</option>{" "}
                      <option value="0-1 year">0-1 year</option>
                      <option value="1-3 years">1-3 years </option>
                      <option value="3-5 years">3-5 years </option>
                      <option value="5-8 years">5-8 years</option>
                      <option value="8-12 years">8-12 years</option>
                      <option value="12-15 years">12-15 years </option>
                      <option value="15+ years">15+ years</option>
                    </select>
                  </div>
                </div>{" "}
                {errors.YearOfExperience && (
                  <p className="ims-mentor-skill-error-message">
                    {errors.YearOfExperience}
                  </p>
                )}
              </div>
            </div>

            <div className="ims-mentor-input-outer-container">
              <div className="mentor-input-conatiner">
                <label htmlFor="bio">
                  Bio / About You<span>*</span>
                </label>
                <p>0/500</p>

                <textarea
                  name="bio"
                  id="bio"
                  placeholder="Tell us about yourself, your background and why you're passionate about mentoring..."
                  value={formValues.bio}
                  onChange={handleChange}
                ></textarea>
              </div>
              {errors.bio && (
                <p className="ims-mentor-error-message">{errors.bio}</p>
              )}
            </div>

            <div className="ims-mentor-form-row-container">
              <div className="ims-mentor-input-outer-container">
                {" "}
                <div className="mentor-input-conatiner">
                  <label htmlFor="password">
                    Password<span>*</span>
                  </label>
                  <div className="ims-mentor-input-inner-container">
                    <input
                      type={passwordShow ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Create a strong password"
                      value={formValues.password}
                      onChange={handleChange}
                      className="ims-mentor-password"
                    />
                    <span
                      onClick={() => {
                        handleToggle("password");
                      }}
                    >
                      <img
                        src={passwordShow ? EyeOpenIcon : EyeCloseIcon}
                        className={
                          passwordShow
                            ? "ims-mentor-password-eye-open"
                            : "ims-mentor-password-eye-close"
                        }
                        alt="passwordIcon"
                      />
                    </span>
                  </div>
                </div>
                {errors.password && (
                  <p className="ims-mentor-error-message">{errors.password}</p>
                )}
              </div>
              <div className="ims-mentor-input-outer-container">
                <div className="mentor-input-conatiner">
                  <label htmlFor="confirmPassword">
                    Confirm Password<span>*</span>
                  </label>

                  <div className="ims-mentor-input-inner-container">
                    <input
                      type={confirmPasswordShow ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      value={formValues.confirmPassword}
                      onChange={handleChange}
                      className="ims-mentor-confirm-password"
                    />

                    <span onClick={() => handleToggle("confirmPassword")}>
                      <img
                        src={confirmPasswordShow ? EyeOpenIcon : EyeCloseIcon}
                        className={
                          confirmPasswordShow
                            ? "ims-mentor-password-eye-open"
                            : "ims-mentor-password-eye-close"
                        }
                        alt={
                          confirmPasswordShow
                            ? "Hide password"
                            : "Show password"
                        }
                      />
                    </span>
                  </div>
                </div>

                {errors.confirmPassword && (
                  <p className="ims-mentor-error-message">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div className="ims-mentor-checkbox-container">
              <div className="ims-mentor-checkbox-inner-container">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => {
                    handleToggle("termsAccepted");
                  }}
                  className="ims-mentor-checkbox"
                />{" "}
                <label className="ims-mentor-checkbox-label">
                  I agree to the <span>Terms of Service</span> and{" "}
                  <span>Privacy Policy</span>
                </label>
              </div>
              <div className="ims-mentor-checkbox-error-conatiner">
                {errors.termsAccepted && (
                  <p className="ims-mentor-error-message">
                    {errors.termsAccepted}
                  </p>
                )}
              </div>
            </div>

            <button type="submit" className="ims-mentor-submit-btn">
              Create Account
            </button>
          </form>

          <div className="ims-mentor-divider-container">
            <hr className="ims-mentor-divider" />
            <span>OR</span>
            <hr className="ims-mentor-divider" />
          </div>

          <div className="ims-mentor-signin-container">
            <p className="ims-mentor-signin-text">
              Already have an account?{" "}
              <Link to="/login" className="ims-mentor-signin-link">
                {" "}
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
