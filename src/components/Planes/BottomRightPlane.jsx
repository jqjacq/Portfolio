import { motion } from "framer-motion";

const BottomRightPlane = () => {
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
          y: [0],
          scaleX: [-1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          times: [0, 0.5, 1],
          delay: 3,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" stroke="#000000">
          <path
            fill="#88609b"
            fill-rule="evenodd"
            d="M16.48 14h4.02a2.5 2.5 0 1 0 0-5H6.618a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 4.382 7H2.517a1 1 0 0 0-.92 1.394l2.143 5a1 1 0 0 0 .92.606h3.863a1 1 0 0 1 .928 1.371L8.55 17.63A1 1 0 0 0 9.477 19h2.042a1 1 0 0 0 .781-.375l3.4-4.25a1 1 0 0 1 .78-.375M9.5 8h4.75L12.3 5.4a1 1 0 0 0-.8-.4H9.618a1 1 0 0 0-.894 1.447z"
            clip-rule="evenodd"
            filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
          />
        </svg>
      </motion.svg>
    </div>
  );
};

export default BottomRightPlane;
