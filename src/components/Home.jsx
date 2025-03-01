import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const greeting = useRef(null);
  const code = useRef(null);
  useEffect(() => {
    const typed = new Typed(code.current, {
      strings: ["software developer.", "programmer.", "coder."],
      typeSpeed: 60,
      backDelay: 500,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const typed = new Typed(greeting.current, {
      strings: [
        "Hello.",
        "¡Hola!",
        "你好!",
        "こんにちは!",
        "안녕하세요!",
        "Привет!",
      ],
      typeSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div>
        <div className="intro-background">
          <div className="intro-container containerPad">
            <img className="jq" src="/img/jq.jpg" alt="Smiling with desserts" />
            <div className="intro w3-animate-opacity">
              <h1>
                <header className="bold centerText  w3-animate-right">
                  <span className="intro" ref={greeting} />
                  👋
                </header>
              </h1>

              <h2 className="intro name w3-animate-right centerText">
                I'm Jacqueline. 😊
                <span className="intro nickname">
                  I go by
                  {/* <img className="jqlogo" src={`${process.env.PUBLIC_URL}/img/jqlogo.png`} alt="JQ Logo" /> */}
                  <img className="jqlogo" src="/img/jqlogo.png" alt="JQ Logo" />
                </span>
              </h2>
              <h4 className="intro name centerText">
                I'm a self-taught <span className="intro" ref={code} />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
