import { useState, useEffect } from "react";
import ProjectSlider from "../Projects/ProjectSlider.jsx";
import projectlist from "../../data/projectslist.js";
import GradientHr from "../../utils/GradientHr.jsx";
import ProjectBadge from "../../utils/ProjectBadge.jsx";

const PastProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectlist);
  }, []);

  const Projectbadge2023 = [
    <ProjectBadge key="react">React</ProjectBadge>,
    <ProjectBadge key="python">Python</ProjectBadge>,
    <ProjectBadge key="materialui">MaterialUI</ProjectBadge>,
    <ProjectBadge key="bootstrap">Bootstrap</ProjectBadge>,
    <ProjectBadge key="sass">SASS</ProjectBadge>,
  ];

  const Projectbadge2022 = [
    <ProjectBadge key="html">HTML</ProjectBadge>,
    <ProjectBadge key="css">CSS</ProjectBadge>,
    <ProjectBadge key="javascript">JavaScript</ProjectBadge>,
  ];
  return (
    <>
      <div>
        <GradientHr />
        <header className="text-xl md:text-4xl m-5 font-bold animate__animated animate__bounceIn">Past Projects</header>
        <GradientHr />
        <div className="grid grid-cols-1 md:grid-cols-2 animate__animated  animate__lightSpeedInLeft">
          <ProjectSlider year={2023} badge={Projectbadge2023} />
          <ProjectSlider year={2022} badge={Projectbadge2022} />
        </div>
      </div>
    </>
  );
};

export default PastProjects;
