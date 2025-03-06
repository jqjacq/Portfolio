import { useEffect } from "react";
import Typed from "typed.js";

const useTypedEffect = ({ ref, strings, typeSpeed = 60, backDelay = 500, loop = true }) => {
  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings,
      typeSpeed,
      backDelay,
      loop,
    });

    return () => {
      typed.destroy();
    };
  }, [ref, strings, typeSpeed, backDelay, loop]);
};

export default useTypedEffect;
