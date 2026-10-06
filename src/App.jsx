import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InternLogin } from "./Components-LoginPage/InternLogin";
import { ForgotPassword } from "./Components-LoginPage/ForgotPassword";
import { ResetPassword } from "./Components-LoginPage/ResetPassword.jsx";
import { OTPforgetpassword } from "./Components-LoginPage/OTPforgetpassword.jsx";
import { PasswordResetSuccess } from "./Components-LoginPage/PasswordResetSuccess.jsx";
import "./App.css";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
