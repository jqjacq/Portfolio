import { motion } from "framer-motion";

const BottomPlane = () => {
  return (
    <div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        initial={{ x: -300, scaleX: 1 }}
        style={{ position: "absolute" }}
        animate={{
          x: [-300, 1500],
          y: [0],
          scaleX: [1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1.75,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" stroke="#000000">
          <path
            fill="#2f6491"
            fill-rule="evenodd"
            d="M2.563 2.197a.775.775 0 0 1 .758.598v-.003l-.243.062l.244-.056v-.003l.486 1.91L8.934 3.68a4.204 4.204 0 0 1 5.013 4.09v.003a1.32 1.32 0 0 1-1.321 1.321H8.048l-.997 1.577l-.001.001a2.4 2.4 0 0 1-2.01 1.101H3.857a.786.786 0 0 1-.692-1.146l.223.114l-.222-.115l.758-1.5h-2.55A1.32 1.32 0 0 1 .052 7.805V2.983a.786.786 0 0 1 .786-.786z"
            clip-rule="evenodd"
            filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
          />
        </svg>
      </motion.svg>
    </div>
  );
};

export default BottomPlane;
