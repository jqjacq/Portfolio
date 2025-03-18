import FlyingPlanes from "./FlyingPlanes";

const TopPlanes = () => {
  return (
    <>
      {/* Top Right Plane 1*/}
      <FlyingPlanes
        svgPlane={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" stroke="#000000">
            <path
              fill="#5d297d"
              fillRule="evenodd"
              d="M16.48 14h4.02a2.5 2.5 0 1 0 0-5H6.618a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 4.382 7H2.517a1 1 0 0 0-.92 1.394l2.143 5a1 1 0 0 0 .92.606h3.863a1 1 0 0 1 .928 1.371L8.55 17.63A1 1 0 0 0 9.477 19h2.042a1 1 0 0 0 .781-.375l3.4-4.25a1 1 0 0 1 .78-.375M9.5 8h4.75L12.3 5.4a1 1 0 0 0-.8-.4H9.618a1 1 0 0 0-.894 1.447z"
              clipRule="evenodd"
              filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        }
        startX="60vw"
        stopX="-15vw"
        setY={-24}
        scaleX={-1}
        duration={5}
        times={(0, 0.5, 1)}
        delay={2}
      />

      {/* Top Left Plane 2*/}
      <FlyingPlanes
        svgPlane={
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 50 50" stroke="#000000">
            <path
              fill="#3884d7"
              d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6z"
              filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        }
        startX="-15vw"
        stopX="60vw"
        setY="0"
        scaleX={1}
        duration={5}
        delay={1}
      />

      {/* Top Right Plane 3*/}
      <FlyingPlanes
        svgPlane={
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" stroke="#000000">
            <path
              fill="#8352a2"
              d="M9 2c.607 0 1.157.36 1.4.916l2.368 5.41l3.236-.201a1.88 1.88 0 0 1 1.992 1.758L18 10a1.88 1.88 0 0 1-1.879 1.879l-.117-.004l-3.236-.202l-2.367 5.41A1.53 1.53 0 0 1 9 18a.883.883 0 0 1-.883-.883l.002-.055l.703-5.636l-2.458-.154l-1.14 2.28A.81.81 0 0 1 4.5 14a.5.5 0 0 1-.5-.5v-2.376l-1.062-.065A1 1 0 0 1 2 10.06v-.122a1 1 0 0 1 .938-.998L4 8.875V6.5a.5.5 0 0 1 .5-.5a.81.81 0 0 1 .724.447l1.139 2.28l2.459-.154l-.698-5.58A.883.883 0 0 1 9 2"
              filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        }
        startX="60vw"
        stopX="-15vw"
        setY={10}
        scaleX={-1}
        duration={10}
        times={(0.25, 0.5, 0.75, 1)}
        delay={1}
      />
    </>
  );
};

export default TopPlanes;
