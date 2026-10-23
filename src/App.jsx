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
    path: "/Login",
    element: <InternLogin />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/OTPforgetpassword",
    element: <OTPforgetpassword />,
  },
  {
    path: "/reset-Password",
    element: <ResetPassword />,
  },
  {
    path: "/password-resetSuccess",
    element: <PasswordResetSuccess />,
  },
  {
    path: "/Mentor-Registration",
    element: <MentorRegistration />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/Admin-Registration",
    element: <AdminRegistration />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
