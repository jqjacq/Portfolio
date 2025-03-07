import { useState, useEffect } from "react";
import ProjectSlider from "./ProjectSlider";
import projectlist from "../data/projectslist.js";
import GradientHr from "../utils/GradientHr.jsx";
import ProjectBadge from "../utils/ProjectBadge.jsx";

const PastProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectlist);
  }, []);

  const Projectbadge2023 = [
    <ProjectBadge key="python">Python</ProjectBadge>,
    <ProjectBadge key="react">React</ProjectBadge>,
    <ProjectBadge key="materialui">MaterialUI</ProjectBadge>,
    <ProjectBadge key="bootstrap">Bootstrap</ProjectBadge>,
    <ProjectBadge key="sass">SASS</ProjectBadge>,
    <ProjectBadge key="html">HTML</ProjectBadge>,
    <ProjectBadge key="css">CSS</ProjectBadge>,
    <ProjectBadge key="javascript">JavaScript</ProjectBadge>,
  ];

  const Projectbadge2022 = [
    <ProjectBadge key="html">HTML</ProjectBadge>,
    <ProjectBadge key="css">CSS</ProjectBadge>,
    <ProjectBadge key="javascript">JavaScript</ProjectBadge>,
  ];
  return (
    <>
      <GradientHr />
      <header className="text-4xl m-5 font-bold"> Past Projects </header>
      <GradientHr />
      <ProjectSlider year={2023} badge={Projectbadge2023} />
      <ProjectSlider year={2022} badge={Projectbadge2022} />
    </>
  );
};

export default PastProjects;
