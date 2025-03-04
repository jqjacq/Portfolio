import { useState, useEffect } from "react";
import ProjectSlider from "./ProjectSlider";
import projectlist from "../data/projectslist.js";
import GradientHr from "../utils/GradientHr.jsx";

const PastProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectlist);
  }, []);

  return (
    <>
      <GradientHr />
      <header className="text-4xl m-5 font-bold"> Past Projects </header>
      <GradientHr />
      <ProjectSlider year={2023} />
      <ProjectSlider year={2022} />
    </>
  );
};

export default PastProjects;
