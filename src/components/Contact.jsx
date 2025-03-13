import { Icon } from "@iconify/react";
import GradientHr from "../utils/GradientHr";
import Resume from "../assets/Jacqueline_Xu_Resume.pdf";

const Contact = () => {
  const contacts = [
    {
      name: "Github",
      link: "https://www.github.com/jqjacq",
      icon: <Icon icon="line-md:github-loop" width="100" height="100" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jqjqjq/",
      icon: <Icon icon="line-md:linkedin" width="100" height="100" />,
    },
    {
      name: "Email",
      link: "mailto:xujacque@gmail.com",
      icon: <Icon icon="line-md:email" width="100" height="100" />,
    },
    {
      name: "Resume",
      link: Resume,
      icon: <Icon icon="line-md:file" width="100" height="100" />,
    },
  ];
  return (
    <>
      <GradientHr />
      <header className="text-xl md:text-4xl m-5 font-bold animate__animated animate__bounceIn"> Contact </header>
      <GradientHr />

      <br></br>
      <div className="w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-5 place-items-center ">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="popup"
              rel="noopener noreferrer"
              alt={contact.name}
              className="border-3 rounded-lg bg-gray-100 block flex items-center card hover:opacity-85 hover:bg-gray-200 hover:translate-x-1 hover:translate-y-1 transition duration-300 hover:ease-in-out p-5 text-2xl w-75
              md:p-18 md:text-5xl  md:w-125"
            >
              {contact.icon}
              <span className="ml-10">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
