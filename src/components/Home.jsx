import Typed from "typed.js";
import { useEffect, useRef } from "react";
import jqImage from "../assets/jq.jpg";
import jqLogo from "../assets/jqlogo.png";
import GradientHr from "../utils/GradientHr";
import useTypedEffect from "../hooks/useTypedEffect";

const Home = () => {
  const greeting = useRef(null);
  const code = useRef(null);
  useTypedEffect({
    ref: greeting,
    strings: ["Hello.", "Yo"],
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
      <header className="text-4xl m-5 font-bold">
        <span ref={greeting} />
        👋
      </header>
      <GradientHr />

      <div>
        <div className="w-full h-full grid grid-cols-2 gap-2 md:place-items-center place-items-star m-10">
          <div className="text-2xl m-8">
            <img
              className="mx-auto rounded-full max-w-3/4 max-h-1/2 animate-pulse duration-2000"
              src={jqImage}
              alt="Smiling with desserts"
            />
            <div>
              <p className="m-5"> I'm Jacqueline. 😊</p>
              <span> You can call me JQ! </span>
              <img className="jqlogo w-50 mx-auto" src={jqLogo} alt="JQ Logo" />
              <p className="text-2xl m-5 font-bold">
                I'm a self-taught <span ref={code} />
              </p>
            </div>
          </div>

          <div className="text-2xl m-8">More Details...</div>
        </div>
      </div>
    </>
  );
};

export default Home;
