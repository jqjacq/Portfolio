import CMULogo from "../assets/CarnegieLogo.png";
import CCNYLogo from "../assets/CCNYLogo.png";
import AzureAI from "../assets/AzureAI.png";
import AzureFundamental from "../assets/AzureFundamental.png";
import GradientHr from "../utils/GradientHr";

const CertificateEducation = () => {
  return (
    <>
      <GradientHr />
      <header className="text-4xl m-5 font-bold"> Education </header>
      <GradientHr />

      <div className="w-full h-full grid grid-cols-2 gap-2 md:place-items-center place-items-start">
        <div className="border-3 rounded-lg bg-gray-100 h-full flex flex-col place-content-center m-2 p-5 pl-10 pr-10 hover:translate-x-1 hover:translate-y-1 transition duration-300 hover:ease-in-out hover:bg-teal-100 opacity-80">
          <a
            href="https://www.credential.net/7f11a1ec-9b44-43ff-9b09-146b045c8586#acc.pnvy8EJL"
            target="popup"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out"
          >
            <img src={CMULogo} alt="CMU Logo" key="cmu-logo" />
          </a>
          <div>
            <p className="text-l !font-bold"> Carnegie Mellon Techbridge </p>
            <h3 className="m-1">September 2024 - February 2025 </h3>
          </div>
        </div>

        <div className="border-3 rounded-lg bg-gray-100 h-full flex flex-col place-content-center m-2 p-5 pl-10 pr-10">
          <img src={CCNYLogo} alt="CCNY Logo" key="ccny-logo" />
          <p className="text-l !font-bold">Bachelor's Degree in Psychology</p>
          <h3 className="m-1"> February 2017 </h3>
        </div>
      </div>
      <GradientHr />
      <header className="text-4xl m-5 font-bold"> Certifications </header>
      <GradientHr />

      <div className="w-full h-full grid grid-cols-2 gap-2 md:place-items-center place-items-star">
        <div className="border-3 rounded-lg bg-gray-100 h-full flex flex-col place-content-center m-1 pl-10 pr-10 hover:bg-teal-100 opacity-80">
          <div className="h-full flex flex-col place-content-center m-10 hover:translate-x-1 hover:translate-y-1 transition duration-300 hover:ease-in-out">
            <a
              href="https://learn.microsoft.com/api/credentials/share/en-us/jqjqjq/F0534D4E19D12238?sharingId=BB0DACDD4272677D"
              target="popup"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out"
            >
              <img src={AzureAI} alt="Azure AI" key="azure-ai" className="w-100 h-50 m-3" />
            </a>
            <p className="text-l !font-bold"> AI900 - Azure AI Fundamental</p>
            <h3 className="m-1"> September 2023 </h3>
          </div>
        </div>

        <div className="border-3 rounded-lg bg-gray-100 h-full flex flex-col place-content-center m-1 pl-10 pr-10 hover:bg-teal-100 opacity-80">
          <div className="h-full flex flex-col place-content-center m-10 hover:translate-x-1 hover:translate-y-1 transition duration-300 hover:ease-in-out">
            <a
              href="https://learn.microsoft.com/en-us/users/jqjqjq/credentials/2fcc11843f1e892d"
              target="popup"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out active:font-extrabold"
            >
              <img src={AzureFundamental} alt="Azure Fundamental" key="azure-fundamental" className="w-100 h-50 m-3" />
            </a>
            <p className="text-l !font-bold"> AZ900 - Azure Fundamental </p>
            <h3 className="m-1"> July 2023 </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateEducation;
