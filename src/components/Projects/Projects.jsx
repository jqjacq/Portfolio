import React from "react";
import RecentProjects from "./RecentProjects";
import PastProjects from "./PastProjects";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <RecentProjects />
      <PastProjects />
    </div>
  );
};

export default Projects;
