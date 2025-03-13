import { Icon } from "@iconify/react";

const Icons = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <div className="flex flex-col justify-center items-center " key={skill.name}>
          <Icon icon={skill.icon} width={50} height={50} />
          <p className="text-center text-xs mt-2">{skill.name}</p>
        </div>
      ))}
    </>
  );
};

export default Icons;
