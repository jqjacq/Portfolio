import GradientHr from "../../utils/GradientHr";
import recentlist from "../../data/recentlist";
import ProjectBadge from "../../utils/ProjectBadge";

const RecentProjects = () => {
  const RecentListProjects = recentlist.map((project) => {
    const imageSrc = `/projects/recent/${project.img}`;

    return (
      <div
        key={project.id}
        className="w-full h-full border-3 rounded-lg bg-gray-100 md:m-1 md: p-3 place-items-center text-left"
      >
        <h2 className="!font-bold m-1">{project.name}</h2>

        <ProjectBadge>
          <span className="!font-bold text-sm m-3"> ☁️ Cloud : </span>
          {project.cloud}
        </ProjectBadge>

        <br />

        <ProjectBadge>
          <span className="!font-bold text-sm m-3"> 🔨 Tools : </span>
          {project.tools}
        </ProjectBadge>

        <div className="flex justify-center items-center">
          <a href={project.link} target="_blank" rel="noreferrer">
            <img
              className="w-50 hover:opacity-75 hover:shadow-lg
                    active:border-2 active:border-gray-500"
              src={imageSrc}
              alt={project.name}
              loading="lazy"
            />
          </a>
        </div>
        <p className="text-sm md:p-5"> {project.description} </p>
      </div>
    );
  });
  return (
    <div>
      <GradientHr />
      <header className="text-xl md:text-4xl m-5 font-bold animate__animated animate__bounceIn">Recent Projects</header>
      <GradientHr />

      <div className="w-full h-full grid grid-cols-1 gap-2 md:grid-cols-2 place-items-center">{RecentListProjects}</div>
    </div>
  );
};

export default RecentProjects;
