import ErrorImage from "../assets/error_page.gif";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-4xl">Sorry! </h1>
      <h2 className="text-xl">The page you are looking for does not exist!</h2>
      <img className="mx-auto p-10" src={ErrorImage} alt="Error" />
      <h3 className="text-2xl">
        <span className="mr-1">Return to </span>
        <a
          href="/"
          className="!font-bold p-2 bg-blue-200 rounded-lg shadow-lg
          hover:shadow-2xl hover:bg-blue-300 transition duration-300 active:translate-y-1"
        >
          Home Page
        </a>
      </h3>
    </div>
  );
};

export default ErrorPage;
