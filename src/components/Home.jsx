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
      <header className="text-4xl m-5 animate__animated animate__fadeIn">
        <span ref={greeting} />
        👋
      </header>
      <GradientHr />

      <div className="text-2xl w-full h-full grid grid-cols-2 md:place-items-center place-items-star m-10">
        <div className="text-2xl m-8">
          <img
            className="mx-auto rounded-full max-w-3/4 transition-transform duration-700 transform hover:translate-x-3"
            src={jqImage}
            alt="Smiling with desserts"
            loading="lazy"
          />
        </div>

        <div>
          <div className="text-xl text-left animate__animated animate__slideInRight">
            <p className="m-5 text-center">
              <p className="m-3 text-2xl"> I'm Jacqueline. 😊 You can call me JQ! </p>
              <img className="jqlogo w-50 mx-auto" src={jqLogo} alt="JQ Logo" />
              <p className="text-2xl m-3">
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
              <span className="underline decoration-sky-500"> cooking</span>,
              <span className="underline decoration-sky-500"> practicing latte art</span>, and
              <span className="underline decoration-sky-500"> playing games </span>! 🍲🍵🎮
            </p>
            <p>
              🌏 I'm
              <span className="underline decoration-sky-500"> fascinated by language </span>
              and
              <span className="underline decoration-sky-500"> different cultures </span> around the world. ✨
            </p>

            <p>
              💬 I <span className="underline decoration-sky-500">enjoy hearing others' experiences </span>
              because we can learn a lot from each other.{" "}
            </p>
            <p>
              💻 My main coding languages are <span className="underline decoration-sky-500">JavaScript</span> and
              <span className="underline decoration-sky-500"> Python</span>, and I have
              <span className="underline decoration-sky-500"> dabbled in C#. </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
