import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () =>  clearInterval(timer);
    ;
  }, []);
  return (
    <div className="progressBox">
      <h1>Progress</h1>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        ></div>
      </div>
    </div>
  );
}
