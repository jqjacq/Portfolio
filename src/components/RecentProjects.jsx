import GradientHr from "../utils/GradientHr";
import recentlist from "../data/recentlist";
import ProjectBadge from "../utils/ProjectBadge";

const RecentProjects = () => {
  const RecentProjects = recentlist.map((project) => {
    const imageSrc = `/src/assets/recent/${project.img}`;

    return (
      <div key={project.id} className="recentproject">
        <h2 className="underline decoration-sky-500">{project.name}</h2>
        <ProjectBadge>{project.tools}</ProjectBadge>

        <a href={project.link} target="_blank" rel="noreferrer">
          <img className="w-full h-100 p-5 border-2 rounded-lg bg-gray-100" src={imageSrc} alt={project.name} />
        </a>
        <p className="p-5 underline decoration-sky-500"> {project.description} </p>
      </div>
    );
  });
  return (
    <div>
      <GradientHr />
      <header className="text-4xl m-5 font-bold"> Recent Projects </header>
      <GradientHr />

      <div className="w-full h-full grid grid-cols-2 gap-2 md:place-items-center place-items-start">
        {RecentProjects}
      </div>
    </div>
  );
};

export default RecentProjects;
