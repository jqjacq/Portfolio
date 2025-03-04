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
      <hr className="w-1/2 h-2 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 my-5" />
      <header className="text-4xl m-5 font-bold"> Past Projects </header>
      <hr className="w-1/2 h-2 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 my-5" />
      <ProjectSlider year={2023} />
      <ProjectSlider year={2022} />
    </>
  );
};

export default PastProjects;
