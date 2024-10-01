import react, { useState, useEffect } from "react";

const StopWatch = () => {
  const [data, setData] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const handleStart = () => {
    setRunning(!isRunning);
  };
  const handleReset = () => {
    setRunning(false);
    setData(0);
  };
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setData((prevData) => prevData + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return ()=>{clearInterval(intervalId)}
  }, [isRunning]);
  return (
    <div>
      <h2>Stopwatch</h2>
      <p>Time: {formatTime(data)}</p>
      {isRunning ? (
        <button onClick={handleStart}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default StopWatch;
