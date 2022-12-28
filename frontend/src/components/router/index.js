import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout";
import ProfileDetail from "../profile-detail";
import ProfileInputForm from "../profile-input-form";
import ProfileList from "../profile-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/profile-list", element: <ProfileList /> },
      {
        path: "/register-profile",
        element: <ProfileInputForm />,
      },
      {
        path: "profile-list/:id",
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
