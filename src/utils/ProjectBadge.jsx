const ProjectBadge = ({ children }) => {
  return (
    <span className="!font-bold bg-purple-100 hidden md:inline-block text-white text-xs font-semibold px-2 py-1 m-1 rounded-full">
      {children}
    </span>
  );
};

export default ProjectBadge;
