import { Icon } from "@iconify/react"
const Contact = () => {
  const contacts = [
    {
      name: "Github",
      link: "https://www.github.com/jqjacq",
      icon: 
      <Icon icon="line-md:github-loop" width="100" height="100"  style={{color: "#75949f"}} />
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jqjqjq/",
      icon: <Icon icon="line-md:linkedin" width="100" height="100" />
    },
    {
      name: "Email",
      link: "mailto:xujacque@gmail.com",
      icon: <Icon icon="line-md:email" width="100" height="100" />
    },
    {
      name: "Resume",
      link: "../Res.pdf",
      icon: <Icon icon="line-md:file" width="100" height="100"  style={{color: "#0a66c2"}} />
    },
  ];
  return (
    <>
      <header className="all-title"> Contact Me</header>
      <div className="w-full h-full grid grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-2 gap-2 md:place-items-center place-items-start bg-surface-200-800">
        {contacts.map((contact) => (
            <a
              href={contact.link}
              target="popup"
              rel="noopener noreferrer"
              alt={contact.name}
              className="text-center text-5xl block flex items-center col-span-1 row-span-1 card p-14 gap-1 xl:gap-8 border-3 rounded-lg w-125 hover:opacity-75 transition duration-300 ease-in-out active:font-extrabold"
            >
              {contact.icon}
              {contact.name}
            </a>
        ))}
      </div>
    </>
  );
};

export default Contact;
