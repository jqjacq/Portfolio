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
        startY="0.75vw"
        scaleX={1}
        duration={5}
        times={(0, 0.2, 0.5, 0.6, 0.8, 1)}
        delay={2}
      />

      {/* MiddleCrossPlane */}
      {/* BottomCrossPlane */}
      <FlyingPlanes
        svgPlane={
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
            <path fill="#ffce31" d="m43.4 25.1l14.4-1.7l-14 5.1" />
            <path fill="#b2c1c0" d="M44.4 24.5s-5.2-.2-9.3 3.2V32s5.2 0 9.3-3.2c.5-.4 1-1 1-2.1c0-1.2-.4-2.2-1-2.2" />
            <path fill="#42ade2" d="m9.3 25.1l8.2 16.3l13.1-4.2l-17.2-13.3z" />
            <path fill="#428bc1" d="M13.4 17.6v6.3l-4.1 1.2l2.1-6.2z" />
            <ellipse cx="35.1" cy="30.1" fill="#3e4347" rx="1" ry="2.5" />
            <path
              fill="#dae3ea"
              d="m50.6 17.6l-5.7 9.8s-23.3 6.5-31.5 9.3C5.2 39.6 8 42.4 2.1 48.2c-6.8 6.5 2.7 6.9 33.9-5.6c2.8-1.1 4.2-5.7 8.7-8.6c4.8-3.1 9-4.4 9-4.4l3.1-14.4z"
            />
            <path
              fill="#42ade2"
              d="m51.6 10.1l-4.1 1.3l3.1 6.5l9.2 2.2l4.2-2.9l-7.2-2.1zM21.3 46.5l38.6 7.4L64 51L37.2 39.5z"
            />
            <path fill="#428bc1" d="M64 43.9V51l-4.1 2.9l2.1-8.7z" />
            <path
              fill="#3e4347"
              d="M8.2 39.7C7 40.9 6.4 42.3 5.4 44c.9 1.1 2.3 1.7 3.9 1.7c2.9 0 5.2-2.2 5.2-5h-3.1c-1.3.1-2.4-.4-3.2-1"
            />
            <path fill="#dae3ea" d="m10.4 49.3l-1 .2c-.6-6.5 1.1-9.9 1.2-10l.8 1l-.4-.5l.4.5c-.1 0-1.6 3-1 8.8" />
            <g fill="#3e4347">
              <ellipse cx="21.7" cy="40.8" rx="1" ry="1.9" />
              <ellipse cx="25.8" cy="39.5" rx="1" ry="1.9" />
              <ellipse cx="29.9" cy="38.2" rx="1" ry="1.9" />
            </g>
            <path fill="#ffce31" d="M51.6 30L64 26.7l-11.9 6.7" />
            <path fill="#b2c1c0" d="M51.6 29.5s-5.2-.3-9.3 3.7v5s5.2 0 9.3-3.7c.5-.4 1-1.1 1-2.5s-.4-2.5-1-2.5" />
            <ellipse cx="42.3" cy="35.8" fill="#3e4347" rx="1" ry="2.5" />
          </svg>
        }
        startX="60vw"
        stopX="-15vw"
        startY="-5vh"
        stopY="50vh"
        scaleX={1}
        duration={5}
        times={0}
        delay={0.5}
      />
    </>
  );
};

export default MiddlePlanes;
