const ProjectButton = ({ children }) => {
  return (
    <div>
      <button
        className="hidden bg-blue-200 text-white py-1 px-1 
        rounded shadow-lg hover:shadow-xl hover:bg-blue-300 m-1 focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-400 active:border-1 active:border-sky-400 md:py-2 md:px-2 md:flex justify-center mx-auto"
      >
        {children}
      </button>
    </div>
  );
};

export default ProjectButton;
