import GradientHr from "../utils/GradientHr";
import recentlist from "../data/recentlist";
import ProjectBadge from "../utils/ProjectBadge";

const RecentProjects = () => {
  const RecentProjects = recentlist.map((project) => {
    const imageSrc = `/src/assets/recent/${project.img}`;

    return (
      <div key={project.id} className="recentproject p-5">
        <h2 className="!font-bold underline decoration-sky-500">{project.name}</h2>
        <ProjectBadge>{project.tools}</ProjectBadge>
        <div className="flex justify-center items-center">
          <a href={project.link} target="_blank" rel="noreferrer">
            <img className="w-100" src={imageSrc} alt={project.name} />
          </a>
        </div>
        <p className="p-5 underline decoration-sky-500"> {project.description} </p>
      </div>
    );
  });
  return (
    <div>
      <GradientHr />
      <header className="text-4xl m-5 font-bold animate__animated animate__bounceIn"> Recent Projects </header>
      <GradientHr />

      <div className="w-full h-full grid grid-cols-1 gap-2 md:place-items-center place-items-star">
        {RecentProjects}
      </div>
    </div>
  );
};

export default RecentProjects;
