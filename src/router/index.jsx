import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home.jsx";
import Projects from "../components/Projects/Projects.jsx";
// import RecentProjects from "../components/Projects/RecentProjects.jsx";
// import PastProjects from "../components/Projects/PastProjects.jsx";
import Certification from "../components/CertificateEducation.jsx";
import Contact from "../components/Contact.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Layout from "../components/Layout.jsx";
import Skills from "../components/Skills.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      // {
      //   path: "recent-projects",
      //   element: <RecentProjects />,
      // },
      // {
      //   path: "past-projects",
      //   element: <PastProjects />,
      // },
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
