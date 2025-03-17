import { motion } from "framer-motion";

const LeftPlane = () => {
  return (
    <div className="absolute">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        initial={{ x: "-15vw", scaleX: 1 }}
        animate={{
          x: ["-15vw", "70vw"],
          scaleX: [1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" stroke="#000000">
          <path
            fill="#3884d7"
            d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6z"
            filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
          />
        </svg>
      </motion.svg>
    </div>
  );
};

export default LeftPlane;
