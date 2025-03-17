import Typed from "typed.js";
import { useRef } from "react";
import jqImage from "../assets/jq.jpg";
import jqLogo from "../assets/jqlogo.png";
import GradientHr from "../utils/GradientHr";
import useTypedEffect from "../hooks/useTypedEffect";

const Home = () => {
  const greeting = useRef(null);
  const code = useRef(null);
  useTypedEffect({
    ref: greeting,
    strings: ["Hello.", "¡Hola!", "你好!", "こんにちは!", "안녕하세요!", "Привет!"],
    typeSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  useTypedEffect({
    ref: code,
    strings: ["software developer.", "programmer.", "coder."],
    typeSpeed: 60,
    backDelay: 500,
    loop: true,
  });

  return (
    <>
      <GradientHr />
      <header className="text-xl md:text-4xl m-5 animate__animated animate__fadeIn">
        <span ref={greeting} />
        👋
      </header>
      <GradientHr />
      <p className="relative hidden md:block md:text-md lg:text-xl">
        I'm a self-taught <span ref={code} />
      </p>
      <div className="text-2xl w-full h-full grid grid-cols-1 md:grid-cols-2 md:place-items-center place-items-start md:m-10">
        <div className="text-2xl md:m-8">
          <img
            className="mx-auto rounded-full md:block w-3/4 h-3/4 md:w-full md:h-full transition-transform transform hover:translate-x-2"
            src={jqImage}
            alt="Smiling with desserts"
            loading="lazy"
          />
        </div>
        <div className="w-full flex items-center justify-center border-3 rounded-lg bg-gray-100 md:m-1 p-2 md:p-10 text-left">
          <div className="text-sm md:text-lg lg:text-xl  animate__animated animate__slideInRight">
            <p className="text-center">
              <span className="md:text-lg lg:text-2xl "> I'm Jacqueline. 😊 You can call me JQ! </span>
              <img className="jqlogo w-30 h-20 md:w-50 md:h-30 mx-auto" src={jqLogo} alt="JQ Logo" loading="lazy" />
            </p>
            <p>
              👩🏻‍💻 <span className="bg-sky-200">Coding is like solving puzzles— I ❤️ puzzles!</span>
            </p>
            <p>
              🎓 I recently completed
              <span className="bg-sky-200"> Carnegie Mellon Techbridge </span>
              in February 2025.
            </p>
            <p>
              🍳 I also love
              <span className="bg-sky-200"> food</span>,<span className="bg-sky-200"> traveling</span>,
              <span className="bg-sky-200"> practicing latte art</span>, &
              <span className="bg-sky-200"> playing games </span>! 🍲🍵🎮
            </p>
            <p>
              🌏 I'm
              <span className="bg-sky-200"> fascinated by language </span>&
              <span className="bg-sky-200"> different cultures </span> around the world. ✨
            </p>

            <p>
              💬 I <span className="bg-sky-200">enjoy hearing others' experiences </span>
              because we can learn a lot from each other.
            </p>
            <p>
              💻 My main coding languages are
              <span className="bg-sky-200"> JavaScript</span> &<span className="bg-sky-200"> Python</span>, & I have
              <span className="bg-sky-200"> dabbled in C#. </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
