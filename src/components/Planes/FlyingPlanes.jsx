import { motion } from "framer-motion";

const FlyingPlanes = ({ svgPlane, startX, stopX, startY, stopY, scaleX, duration, delay, width = 80, height = 80 }) => {
  return (
    <div className="relative w-full h-full">
      <motion.svg
        className="absolute z-[-10]"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: startX, scaleX: stopX, opacity: 1 }}
        animate={{
          x: [startX, stopX],
          y: [startY, stopY],
          scaleX: [scaleX],
          opacity: [1, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          time: [],
          delay,
        }}
      >
        {svgPlane}
      </motion.svg>
    </div>
  );
};

export default FlyingPlanes;
