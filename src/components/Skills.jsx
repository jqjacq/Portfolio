import React from "react";
import { Icon } from "@iconify/react";
import allskills from "../data/skills.js";
import GradientHr from "../utils/GradientHr.jsx";

const SkillsGrid = () => {
  return (
    <div className="container mx-auto p-6">
      <GradientHr />
      <header className="text-4xl m-5">Skills </header>
      <GradientHr />

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-6 grid grid-rows-2 gap-3">
          <div className="border-2 rounded-lg bg-gray-100 p-5">
            <h2 className="text-2xl mb-4 underline decoration-sky-500">Languages</h2>
            <div className="grid grid-cols-2">
              {allskills[0].skills.map((skill) => (
                <div className="flex flex-col justify-center items-center" key={skill.name}>
                  <Icon icon={skill.icon} width={50} height={50} />
                  <p className="text-center text-xs mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 rounded-lg bg-gray-100 p-5">
            <h2 className="text-2xl mb-4 underline decoration-sky-500">Database</h2>
            <div className="grid grid-cols-2">
              {allskills[2].skills.map((skill) => (
                <div className="flex flex-col justify-center items-center" key={skill.name}>
                  <Icon icon={skill.icon} width={50} height={50} />
                  <p className="text-center text-xs mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="border-2 rounded-lg bg-gray-100 p-5 pt-15 pb-16">
            <h2 className="text-2xl mb-4 underline decoration-sky-500">Web Development</h2>
            <div className="grid grid-row-2 grid-cols-5 gap-4">
              {allskills[1].skills.map((skill) => (
                <div className="flex flex-col justify-center items-center" key={skill.name}>
                  <Icon icon={skill.icon} width={50} height={50} />
                  <p className="text-center text-xs mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-3 ">
          <div className="col-span-12">
            <div className="border-2 rounded-lg bg-gray-100 p-5 ">
              <h2 className="text-2xl mb-4 underline decoration-sky-500">DevOps</h2>
              <div className="grid grid-cols-6 gap-4">
                {allskills[3].skills.map((skill) => (
                  <div className="flex flex-col justify-center items-center" key={skill.name}>
                    <Icon icon={skill.icon} width={50} height={50} />
                    <p className="text-center text-xs mt-2">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="border-2 rounded-lg bg-gray-100 p-5">
              <h2 className="text-2xl mb-4 underline decoration-sky-500">Tools & Technologies</h2>
              <div className="grid grid-rows-1 grid-cols-7 ">
                {allskills[4].skills.map((skill) => (
                  <div className="flex flex-col justify-center items-center p-3" key={skill.name}>
                    <Icon icon={skill.icon} width={50} height={50} />
                    <p className="text-center text-xs mt-2">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
