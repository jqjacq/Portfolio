const ProjectButton = ({ children }) => {
  return (
    <div>
      <button
        className="bg-blue-200 text-white py-2 px-4 rounded 
       py-2 px-4 rounded shadow-lg hover:shadow-xl hover:bg-blue-300 m-1 focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-400 active:border-1 active:border-sky-400"
      >
        {children}
      </button>
    </div>
  );
};

export default ProjectButton;
