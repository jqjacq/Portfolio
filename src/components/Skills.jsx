import React from "react";
import allskills from "../data/skills.js";
import GradientHr from "../utils/GradientHr.jsx";
import SkillIcon from "../utils/SkillIcons.jsx";

const SkillsGrid = () => {
  return (
    <div className="container mx-auto animate__animated animate__bounceIn">
      <GradientHr />
      <header className="text-xl md:text-4xl m-5 animate__animated animate__bounceIn">Skills </header>
      <GradientHr />

      <div className="grid md:grid-cols-2 gap-3">
        <div className="col-span-10 grid grid-rows-1 gap-3 md:grid-rows-2  md:col-span-4">
          <div className="border-3 rounded-lg bg-gray-100 p-3">
            <h2 className="text-md md:text-2xl mb-4 underline decoration-sky-500">Languages</h2>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <SkillIcon skills={allskills[0].skills} />
            </div>
          </div>

          <div className="border-3 rounded-lg bg-gray-100 p-3">
            <h2 className="text-md md:text-2xl mb-4 underline decoration-sky-500">Database</h2>
            <div className="grid grid-cols-2">
              <SkillIcon skills={allskills[2].skills} />
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-6">
          <div className="border-3 rounded-lg bg-gray-100 p-3 md:pt-15 md:pb-16">
            <h2 className="text-md md:text-2xl mb-4 underline decoration-sky-500">Web Development</h2>
            <div className="grid grid-row-2 grid-cols-4 md:grid-cols-5 gap-2 md:gap-4">
              <SkillIcon skills={allskills[1].skills} />
            </div>
          </div>
        </div>

        <div className="col-span-10 grid grid-cols-10 gap-3 ">
          <div className="col-span-10">
            <div className="border-3 rounded-lg bg-gray-100 p-3 ">
              <h2 className="text-md md:text-2xl mb-4 underline decoration-sky-500">DevOps</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
                <SkillIcon skills={allskills[3].skills} />
              </div>
            </div>
          </div>

          <div className="col-span-10">
            <div className="border-3 rounded-lg bg-gray-100 p-5">
              <h2 className="text-xl md:text-lg mb-4 underline decoration-sky-500">Tools & Technologies</h2>
              <div className="grid grid-rows-1 grid-cols-4 md:grid-cols-7 gap-2 md:gap-4">
                <SkillIcon skills={allskills[4].skills} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
