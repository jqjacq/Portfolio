const Contact = () => {
  return (
    <>
      <header className="all-title"> Contact Me </header>
      <a
        href="https://www.github.com/jqjacq"
        target="popup"
        rel="noopener noreferrer"
        alt="Github"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/jqjqjq/"
        target="popup"
        alt="LinkedIn"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="mailto:xujacque@gmail.com"
        alt="Email Address"
        rel="noopener noreferrer"
      >
        Email
      </a>
      <button className="button resume-button">
        <a href="../Res.pdf" target="popup" rel="noopener noreferrer">
          Resume
        </a>
      </button>
    </>
  );
};

export default Contact;
