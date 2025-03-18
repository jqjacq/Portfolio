import FlyingPlanes from "./FlyingPlanes";

const MiddlePlanes = () => {
  return (
    <>
      {/* Middle Left Plane*/}
      <FlyingPlanes
        svgPlane={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" stroke="#000000">
            <path
              fill="#8e5aae"
              fillRule="evenodd"
              d="M16.48 14h4.02a2.5 2.5 0 1 0 0-5H6.618a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 4.382 7H2.517a1 1 0 0 0-.92 1.394l2.143 5a1 1 0 0 0 .92.606h3.863a1 1 0 0 1 .928 1.371L8.55 17.63A1 1 0 0 0 9.477 19h2.042a1 1 0 0 0 .781-.375l3.4-4.25a1 1 0 0 1 .78-.375M9.5 8h4.75L12.3 5.4a1 1 0 0 0-.8-.4H9.618a1 1 0 0 0-.894 1.447z"
              clipRule="evenodd"
              filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        }
        startX="-15vw"
        stopX="70vw"
        setY={-15}
        scaleX={1}
        duration={5}
        times={(0, 0.2, 0.5, 0.6, 0.8, 1)}
        delay={2}
      />
    </>
  );
};

export default MiddlePlanes;
