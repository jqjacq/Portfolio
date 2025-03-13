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

      <div className="text-2xl w-full h-full grid grid-cols-1 md:grid-cols-2 md:place-items-center place-items-start md:m-10">
        <div className="text-2xl md:m-8">
          <img
            className="mx-auto rounded-full hidden md:block w-3/4 h-3/4 md:w-full md:h-full transition-transform duration-700 transform hover:translate-x-3"
            src={jqImage}
            alt="Smiling with desserts"
            loading="lazy"
          />
        </div>

        <div className="w-full flex items-center justify-center border-3 rounded-lg bg-gray-100 m-1 p-3 md:p-10 text-left">
          <div className="text-sm md:text-lg lg:text-xl  animate__animated animate__slideInRight lg:text-lg">
            <p className="m-5 text-center">
              <p className="m-3 md:text-lg lg:text-2xl "> I'm Jacqueline. 😊 You can call me JQ! </p>
              <img className="jqlogo w-30 h-20 md:w-50 md:h-30 mx-auto" src={jqLogo} alt="JQ Logo" />
              <p className=" md:m-3 hidden md:block md:text-lg lg:text-2xl">
                I'm a self-taught <span ref={code} />{" "}
              </p>
            </p>
            <p>
              👩🏻‍💻 <span className="underline decoration-sky-500">Coding is like solving puzzles— I ❤️ puzzles!</span>
            </p>
            <p>
              🎓 I recently completed
              <span className="underline decoration-sky-500"> Carnegie Mellon Techbridge </span>
              in February 2025.
            </p>
            <p>
              🍳 I also love
              <span className="underline decoration-sky-500"> food</span>,
              <span className="underline decoration-sky-500"> traveling</span>,
              <span className="underline decoration-sky-500"> practicing latte art</span>, &
              <span className="underline decoration-sky-500"> playing games </span>! 🍲🍵🎮
            </p>
            <p>
              🌏 I'm
              <span className="underline decoration-sky-500"> fascinated by language </span>&
              <span className="underline decoration-sky-500"> different cultures </span> around the world. ✨
            </p>

            <p>
              💬 I <span className="underline decoration-sky-500">enjoy hearing others' experiences </span>
              because we can learn a lot from each other.{" "}
            </p>
            <p>
              💻 My main coding languages are
              <span className="underline decoration-sky-500"> JavaScript</span> &
              <span className="underline decoration-sky-500"> Python</span>, & I have
              <span className="underline decoration-sky-500"> dabbled in C#. </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
