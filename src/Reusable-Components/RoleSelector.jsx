import React from "react";
import "../Reusable-Components/RoleSelector.css";
import { useNavigate } from "react-router-dom";

export const RoleSelector = ({ selectRole = "", onChange }) => {
  const roleRoutes = {
    intern: "/Intern-Registration",
    mentor: "/Mentor-Registration",
    hr: "/Hr-Registration",
    company: "/Company-Registration",
    admin: "/Admin-Registration",
  };

  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const role = e.target.value;

    if (onChange) {
      onChange(role);
    }

    navigate(roleRoutes[role], {
      state: { selectRole: role },
    });
  };

  return (
    <div className="ims-welcome-role-selector">
      <label htmlFor="role" className="ims-welcome-select-role-label">
        Registering As <span className="ims-welcome-asterisk">*</span>
      </label>

      <select
        id="role"
        value={selectRole}
        onChange={handleRoleChange}
        className="ims-welcome-selector"
      >
        <option value="" disabled>
          Select role
        </option>
        <option value="intern">Intern</option>
        <option value="mentor">Mentor</option>
        <option value="hr">HR</option>
        <option value="company">Company</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};
