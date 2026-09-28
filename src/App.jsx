import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {InternLogin} from "./Components-LoginPage/InternLogin"
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <InternLogin/>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
