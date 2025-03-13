import { motion } from "framer-motion";

const TopPlane = () => {
  return (
    <div className="absolute">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        initial={{ x: 1350, scaleX: -1 }}
        style={{ position: "absolute" }}
        animate={{
          x: [1350, -300],
          y: [10],
          scaleX: [-1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          times: [0.25, 0.5, 0.75, 1],
          delay: 1,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" stroke="#000000">
          <path
            fill="#8352a2"
            d="M9 2c.607 0 1.157.36 1.4.916l2.368 5.41l3.236-.201a1.88 1.88 0 0 1 1.992 1.758L18 10a1.88 1.88 0 0 1-1.879 1.879l-.117-.004l-3.236-.202l-2.367 5.41A1.53 1.53 0 0 1 9 18a.883.883 0 0 1-.883-.883l.002-.055l.703-5.636l-2.458-.154l-1.14 2.28A.81.81 0 0 1 4.5 14a.5.5 0 0 1-.5-.5v-2.376l-1.062-.065A1 1 0 0 1 2 10.06v-.122a1 1 0 0 1 .938-.998L4 8.875V6.5a.5.5 0 0 1 .5-.5a.81.81 0 0 1 .724.447l1.139 2.28l2.459-.154l-.698-5.58A.883.883 0 0 1 9 2"
            filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
          />
        </svg>
      </motion.svg>
    </div>
  );
};

export default TopPlane;
