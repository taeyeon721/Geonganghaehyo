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
  const [questionnumber, setQuestionnumber] = useState(0);
  const { correct, incorrect } = props; //props 비구조화 할당
  const randomanswer = props.randomanswer;
  let answer = randomanswer[questionnumber];

  return (
    <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={5}
          colors={["#E91616"]}
          onComplete={() => {
            if (
              sessionStorage.getItem("result") === "left_hand" &&
              answer === 0
            ) {
              // 0일 경우 왼쪽이 정답, 1일 경우 오른쪽이 정답
              correct();
              console.log("맞았습니다");
              setQuestionnumber(questionnumber + 1);
            } else if (
              sessionStorage.getItem("result") === "right_hand" &&
              answer === 1
            ) {
              correct();
              console.log("맞았습니다");
              setQuestionnumber(questionnumber + 1);
            } else {
              incorrect();
              console.log(
                "틀렸습니다",
                sessionStorage["result"],
                randomanswer[questionnumber]
              );
              setQuestionnumber(questionnumber + 1);
            }
            return {
              shouldRepeat: true,
              delay: 3,
            };
          }}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default App;
