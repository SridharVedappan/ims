import React, { useState } from "react";
import "./MentorRegistration.css";

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
  };

  const [role, setRole] = useState("");
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

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

  return (
    <div className="ims-mentor-conatiner">
      <div className="ims-mentor-inner-container">
        <div className="ims-mentor-left-section">left section</div>

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
          <form className="ims-mentor-reg-form">
            <div className="ims-mentor-form-row-container">
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
            </div>

            <div className="ims-mentor-form-row-container">
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
            </div>
            <div className="ims-mentor-form-row-container">
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
                <p>Separate multiple skills with commas</p>
              </div>

              <div className="mentor-input-conatiner">
                <label htmlFor="email">
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
              </div>
            </div>
            <div className="mentor-input-conatiner">
              <label htmlFor="bio">
                Bio / About You<span>*</span>
              </label>
              <textarea name="bio" id="bio" value={formValues.bio}></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
