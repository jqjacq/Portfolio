import { useState, useEffect } from "react";
import ProjectSlider from "./ProjectSlider";
import projectlist from "../data/projectslist.js";

const PastProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectlist);
  }, []);

  return (
    <>
      <ProjectSlider year={2023} />
      <ProjectSlider year={2022} />
    </>
  );
};

export default PastProjects;
