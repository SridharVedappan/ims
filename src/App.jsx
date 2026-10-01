import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InternLogin } from "./Components-LoginPage/InternLogin";
import { ForgotPassword } from "./Components-LoginPage/ForgotPassword";
import { ResetPassword } from "./Components-LoginPage/ResetPassword.jsx";
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
    path: "/reset-Password",
    element: <ResetPassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
