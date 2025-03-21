import FlyingPlanes from "./FlyingPlanes";

const BottomPlanes = () => {
  return (
    <>
      {/* Bottom Right Plane 4 */}
      <FlyingPlanes
        svgPlane={
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 50 50" stroke="#000000">
            <path
              fill="#88609b"
              fillRule="evenodd"
              d="M16.48 14h4.02a2.5 2.5 0 1 0 0-5H6.618a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 4.382 7H2.517a1 1 0 0 0-.92 1.394l2.143 5a1 1 0 0 0 .92.606h3.863a1 1 0 0 1 .928 1.371L8.55 17.63A1 1 0 0 0 9.477 19h2.042a1 1 0 0 0 .781-.375l3.4-4.25a1 1 0 0 1 .78-.375M9.5 8h4.75L12.3 5.4a1 1 0 0 0-.8-.4H9.618a1 1 0 0 0-.894 1.447z"
              clipRule="evenodd"
              filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        }
        startX="60vw"
        stopX="-15vw"
        startY={0}
        scaleX={-1}
        duration={5}
        times={(0, 0.5, 1)}
        delay={3}
      />

      {/* <BottomLeftPlane 5/> */}
      <FlyingPlanes
        svgPlane={
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 50 50" stroke="#000000">
            <path
              fill="#2f6491"
              fillRule="evenodd"
              d="M2.563 2.197a.775.775 0 0 1 .758.598v-.003l-.243.062l.244-.056v-.003l.486 1.91L8.934 3.68a4.204 4.204 0 0 1 5.013 4.09v.003a1.32 1.32 0 0 1-1.321 1.321H8.048l-.997 1.577l-.001.001a2.4 2.4 0 0 1-2.01 1.101H3.857a.786.786 0 0 1-.692-1.146l.223.114l-.222-.115l.758-1.5h-2.55A1.32 1.32 0 0 1 .052 7.805V2.983a.786.786 0 0 1 .786-.786z"
              clipRule="evenodd"
              filter="drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))"
            />
          </svg>
        }
        startX="-15vw"
        stopX="70vw"
        startY="1.5vw"
        scaleX={1}
        duration={5}
        times={0}
        delay={1.75}
      />

      {/* BottomCrossPlane */}
      <FlyingPlanes
        svgPlane={
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <path
              fill="#66757f"
              d="M30 23.828a.997.997 0 0 1-1.414 0l-1.414-1.414a.997.997 0 0 1 0-1.414L30 18.172a1 1 0 0 1 1.414 0l1.414 1.414a.997.997 0 0 1 0 1.414zm-15-15a.997.997 0 0 1-1.414 0l-1.414-1.414a.997.997 0 0 1 0-1.414L15 3.172a1 1 0 0 1 1.414 0l1.414 1.414a.997.997 0 0 1 0 1.414z"
            />
            <path
              fill="#55acee"
              d="M2 22c2 0 11 1 11 1s1 9 1 11s-2 2-3 1s-4-6-4-6s-5-3-6-4s-1-3 1-3M4 6.039C7 6 29 7 29 7s.924 22 .962 25s-2.763 4.002-3.862.001S21 15 21 15S7.045 10.583 3.995 9.898C0 9 .999 6.077 4 6.039"
            />
            <path fill="#ccd6dd" d="M27 3c2-2 7-3 8-2s0 6-2 8s-19 18-19 18s-6.5 4.5-8 3s3-8 3-8S25 5 27 3" />
            <path
              fill="#66757f"
              d="M14 22s.5.5-4 5s-5 4-5 4s-.5-.5 4-5s5-4 5-4M29 4a3 3 0 0 1 3 3h.805c.114-.315.195-.645.195-1a3 3 0 0 0-3-3c-.355 0-.685.081-1 .195z"
            />
          </svg>
        }
        startX="-15vw"
        stopX="60vw"
        startY="0vh"
        stopY="-60vh"
        scaleX={1}
        duration={5}
        times={0}
        delay={0}
      />
    </>
  );
};

export default BottomPlanes;
