import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  // Handle timer logic
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const { hours, minutes, seconds } = prevTime;

          if (seconds > 0) {
            return { ...prevTime, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { hours, minutes: minutes - 1, seconds: 59 };
          } else if (hours > 0) {
            return { hours: hours - 1, minutes: 59, seconds: 59 };
          } else {
            clearInterval(timer);
            setIsRunning(false);
          }
          return prevTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTime((prev) => ({
      ...prev,
      [name]: Math.max(0, Math.min(Number(value), name === "hours" ? 99 : 60)),
    }));
  };

  // Start the stopwatch
  const handleStart = () => {
    if (time.hours || time.minutes || time.seconds) {
      setIsRunning(true);
    }
  };

  // Reset the stopwatch
  const handleReset = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setIsRunning(false);
  };

  return (
    <div style={styles.container}>
      <h1>Stopwatch</h1>
      <div style={styles.inputs}>
        <div>
          <label>Hours:</label>
          <input
            type="number"
            name="hours"
            value={time.hours}
            onChange={handleInputChange}
            disabled={isRunning}
            style={styles.input}
          />
        </div>
        <div>
          <label>Minutes:</label>
          <input
            type="number"
            name="minutes"
            value={time.minutes}
            onChange={handleInputChange}
            disabled={isRunning}
            style={styles.input}
          />
        </div>
        <div>
          <label>Seconds:</label>
          <input
            type="number"
            name="seconds"
            value={time.seconds}
            onChange={handleInputChange}
            disabled={isRunning}
            style={styles.input}
          />
        </div>
      </div>
      <div style={styles.buttons}>
        <button onClick={handleStart} disabled={isRunning} style={styles.button}>
          Start
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>
      <div style={styles.timerDisplay}>
        <h2>
          {String(time.hours).padStart(2, "0")}:
          {String(time.minutes).padStart(2, "0")}:
          {String(time.seconds).padStart(2, "0")}
        </h2>
      </div>
    </div>
  );
}

// Inline CSS for styling
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  inputs: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    width: "60px",
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  timerDisplay: {
    marginTop: "20px",
  },
};
