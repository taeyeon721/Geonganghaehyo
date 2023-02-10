import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";


const RenderTime = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

function App(props) {
  const correct = props.correct
  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={15}
          colors={["#E91616"]}
          onComplete={()=> {
            correct()
            return {
              shouldRepeat: true, delay: 1.5
            }
          }
          }
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default App;
