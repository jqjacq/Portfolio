import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home.jsx";
import RecentProjects from "../components/RecentProjects.jsx";
import PastProjects from "../components/PastProjects.jsx";
import Certification from "../components/CertificateEducation.jsx";
import Contact from "../components/Contact.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Layout from "../components/Layout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "recent-projects",
        element: <RecentProjects />,
      },
      {
        path: "past-projects",
        element: <PastProjects />,
      },
      {
        path: "certification-education",
        element: <Certification />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
