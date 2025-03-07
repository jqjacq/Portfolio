import { Icon } from "@iconify/react";
import GradientHr from "../utils/GradientHr";

const Contact = () => {
  const contacts = [
    {
      name: "Github",
      link: "https://www.github.com/jqjacq",
      icon: <Icon icon="line-md:github-loop" width="100" height="100" style={{ color: "#75949f" }} />,
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
      link: "../Res.pdf",
      icon: <Icon icon="line-md:file" width="100" height="100" style={{ color: "#0a66c2" }} />,
    },
  ];
  return (
    <>
      <GradientHr />
      <header className="text-4xl m-5 font-bold"> Contact </header>
      <GradientHr />

      <br></br>
      <div className="w-full h-full flex items-center justify-center">
        <div className="grid xl:grid-cols-2 xl:grid-rows-2 gap-10 md:place-items-center place-items-start">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="popup"
              rel="noopener noreferrer"
              alt={contact.name}
              className="text-center text-5xl block bg-gray-100 flex items-center col-span-1 row-span-1 card p-14 gap-1 xl:gap-8 border-3 rounded-lg w-125 hover:opacity-85 hover:translate-x-1 hover:translate-y-1 transition duration-300 hover:ease-in-out active:bg-gray-150"
            >
              {contact.icon}
              <span className="ml-15">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
