import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import ProfileDetail from "./components/profile-detail";
import ProfileList from "./components/profile-list";
import ProfileRegistrationForm from "./components/profile-registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/profile-list", element: <ProfileList /> },
      {
        path: "/register-profile",
        element: <ProfileRegistrationForm />,
      },
      {
        path: "/profile-list/:id",
        element: <ProfileDetail />,
      },
    ],
  },
]);

export const RootRoute = ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
