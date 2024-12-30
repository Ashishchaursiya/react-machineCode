import { useEffect, useRef, useState } from "react";
import { images } from "../utils/data";
export default function Corosoul() {
  const [index, setIndex] = useState(0);
  const intervalId = useRef(null);
  const nextHandle = () => {
    setIndex((prev) => {
      if (prev === images.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const prevHandle = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  useEffect(() => {
    intervalId.current = setInterval(() => nextHandle(), 2000);
    return () => clearInterval(intervalId.current);
  }, []);
  return (
    <>
      <div
        className="corosalContainer"
        onMouseEnter={() => clearInterval(intervalId.current)}
        onMouseLeave={() =>
          (intervalId.current = setInterval(() => nextHandle(), 2000))
        }
      >
        <div className="leftArrow" onClick={prevHandle}>
          {"<"}
        </div>

        <img
          src={images[index].download_url}
          alt="corosalImage"
          height="600px"
          width="100%"
        />
        <div className="rightArrow" onClick={nextHandle}>
          {">"}
        </div>
      </div>
    </>
  );
}
