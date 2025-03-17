import CMULogo from "../assets/CarnegieLogo.png";
import CCNYLogo from "../assets/CCNYLogo.png";
import AzureAI from "../assets/AzureAI.png";
import AzureFundamental from "../assets/AzureFundamental.png";
import GradientHr from "../utils/GradientHr";

const CertificateEducation = () => {
  return (
    <>
      <GradientHr />
      <header className="text-xl md:text-4xl m-5 font-bold animate__animated animate__bounceIn"> Education </header>
      <GradientHr />

      <div className="md:w-full md:h-full grid grid-cols-1 md:grid-cols-2 gap-2 animate__animated animate__zoomIn">
        <div className="border-3 rounded-lg bg-gray-100 flex flex-col  place-content-center hover:translate-x-1 hover:translate-y-1 transition duration-300 hover:ease-in-out m-1 p-5 h-50 md:h-80">
          <a
            href="https://www.credential.net/7f11a1ec-9b44-43ff-9b09-146b045c8586#acc.pnvy8EJL"
            target="popup"
            rel="noopener noreferrer"
            className="hover:opacity-75 hover:italic transition duration-300 ease-in-out active:font-extrabold"
          >
            <img src={CMULogo} className="w-1/2 md:w-full mx-auto" alt="CMU Logo" key="cmu-logo" loading="lazy" />
          </a>
          <p className="text-sm md:text-l !font-bold"> Carnegie Mellon Techbridge </p>
          <h3 className="text-sm md:text-l m-1">September 2024 - February 2025 </h3>
        </div>

        <div className="border-3 rounded-lg bg-gray-100  flex flex-col place-content-center m-1 p-5 h-50 md:h-80">
          <img src={CCNYLogo} className="w-1/2 md:w-full mx-auto" alt="CCNY Logo" key="ccny-logo" loading="lazy" />
          <p className="text-sm md:text-l !font-bold">Bachelor's Degree in Psychology</p>
          <h3 className="text-sm md:text-l m-1"> February 2017 </h3>
        </div>
      </div>
      <GradientHr />
      <header className="text-xl md:text-4xl m-5 font-bold animate__animated animate__bounceIn">
        {" "}
        Certifications{" "}
      </header>
      <GradientHr />

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:place-items-center place-items-start">
        <div className="border-3 rounded-lg bg-gray-100 h-50 flex flex-col place-content-center m-1 md:h-80 ">
          <div className="place-content-center m-10 hover:translate-x-1 hover:translate-y-1 transition duration-300 hover:ease-in-out ">
            <a
              href="https://learn.microsoft.com/api/credentials/share/en-us/jqjqjq/F0534D4E19D12238?sharingId=BB0DACDD4272677D"
              target="popup"
              rel="noopener noreferrer"
              className="hover:opacity-75 hover:italic transition duration-300 ease-in-out active:font-extrabold"
            >
              <img src={AzureAI} alt="Azure AI" key="azure-ai" className="m-3 w-1/2 md:w-7/8 mx-auto" loading="lazy" />
            </a>
            <p className="text-sm md:text-l !font-bold">AI900 - Azure AI Fundamentals</p>
            <h3 className="text-sm md:text-l m-1"> September 2023 </h3>
          </div>
        </div>

        <div className="border-3 rounded-lg bg-gray-100 h-50 flex flex-col place-content-center m-1 md:h-80">
          <div className="place-content-center m-10 hover:translate-x-1 hover:translate-y-1 transition duration-300 hover:ease-in-out">
            <a
              href="https://learn.microsoft.com/en-us/users/jqjqjq/credentials/2fcc11843f1e892d"
              target="popup"
              rel="noopener noreferrer"
              className="hover:opacity-75 hover:italic transition duration-300 ease-in-out active:font-extrabold"
            >
              <img
                src={AzureFundamental}
                alt="Azure Fundamental"
                key="azure-fundamental"
                className="m-3 w-1/2 md:w-7/8 mx-auto"
              />
            </a>
            <p className="text-sm md:text-l !font-bold">AZ900 - Azure Fundamental</p>
            <h3 className="text-sm m-1"> July 2023 </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateEducation;
