import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InternLogin } from "./Components-LoginPage/InternLogin";
import { ForgotPassword } from "./Components-LoginPage/ForgotPassword";
import { ResetPassword } from "./Components-LoginPage/ResetPassword.jsx";
import { OTPforgetpassword } from "./Components-LoginPage/OTPforgetpassword.jsx";
import { PasswordResetSucess } from "./Components-LoginPage/PasswordResetSucess.jsx";
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
  { path: "/password-resetSucess", element: <PasswordResetSucess /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
