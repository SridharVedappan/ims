import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InternLogin } from "./Components-LoginPage/InternLogin";
import { ForgotPassword } from "./Components-LoginPage/ForgotPassword";
import { ResetPassword } from "./Components-LoginPage/ResetPassword.jsx";
import { OTPforgetpassword } from "./Components-LoginPage/OTPforgetpassword.jsx";
import { PasswordResetSuccess } from "./Components-LoginPage/PasswordResetSuccess.jsx";
import { MentorRegistration } from "./Components-Registration/MentorRegistration.jsx";
import { AdminRegistration } from "./Components-Registration/AdminRegistration.jsx";
import { Welcome } from "./Components-Registration/Welcome.jsx";

const router = createBrowserRouter([
  {
    path: "/Components-LoginPage/Login",
    element: <InternLogin />,
  },
  {
    path: "/Components-LoginPage/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/Components-LoginPage/OTPforgetpassword",
    element: <OTPforgetpassword />,
  },
  {
    path: "/Components-LoginPage/reset-Password",
    element: <ResetPassword />,
  },
  {
    path: "/Components-LoginPage/password-resetSuccess",
    element: <PasswordResetSuccess />,
  },
  {
    path: "/Components-Registration/Mentor-Registration",
    element: <MentorRegistration />,
  },
  {
    path: "/Components-Registration/welcome",
    element: <Welcome />,
  },
  {
    path: "/Components-Registration/Admin-Registration",
    element: <AdminRegistration />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
