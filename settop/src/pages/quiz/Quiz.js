import styled from "styled-components";
import Book from "assets/img/book_orange2.png";
import "assets/font/font.css";
import { useState, useEffect, useRef } from "react"; // react hook 을 사용하기 위한 import
import { useNavigate } from "react-router-dom";
import Timer from "components/Timer/index.js";

// myData: 임시 데이터셋, 추후 API 통신을 통해 받아오는 것으로 반드시 대체

const myData = [
  //임시로 만들어놓은 데이터로, 추후 backend와 API통신 시 지움
  {
    id: 1,
    question: "누가김승준일까요",
    answer: "김규리",
    notanswer: "김승준",
  },
  {
    id: 2,
    question: "누가임영웅일까요2",
    answer: "임영웅2",
    notanswer: "강승현2",
  },
  {
    id: 3,
    question: "누가임영웅일까요3",
    answer: "임영웅3",
    notanswer: "강승현3",
  },
  {
    id: 4,
    question: "누가임영웅일까요4",
    answer: "임영웅4",
    notanswer: "강승현4",
  },
  {
    id: 5,
    question: "누가임영웅일까요5",
    answer: "임영웅5",
    notanswer: "강승현5",
  },
  {
    id: 6,
    question: "누가임영웅일까요6",
    answer: "임영웅6",
    notanswer: "강승현6",
  },
  {
    id: 7,
    question: "누가임영웅일까요7",
    answer: "임영웅7",
    notanswer: "강승현7",
  },
  {
    id: 8,
    question: "누가임영웅일까요8",
    answer: "임영웅8",
    notanswer: "강승현8",
  },
  {
    id: 9,
    question: "누가임영웅일까요9",
    answer: "임영웅9",
    notanswer: "강승현9",
  },
  {
    id: 10,
    question: "누가임영웅일까요10",
    answer: "임영웅10",
    notanswer: "강승현10",
  },
];

const _ = require("lodash");
const numbers = _.range(0, 2);
const randomanswer = []; //randomanswer: 0 또는 1이 5개 담긴 배열, 0일 경우 왼쪽이 정답, 1일 경우 오른쪽이 정답
// 해당 코드는 컴포넌트 마운트 시 실행됨.
for (let index = 0; index < 5; index++) {
  randomanswer.push(_.sampleSize(numbers, 1)[0]);
}

/* 로직
0,1 랜덤으로 뽑음
0일 경우, 왼쪽이 정답. 1일 경우, 오른쪽이 정답
삼항연산자를 사용하여 렌더링.

*/
const Game = () => {
  const init = useRef(window.init);
  const end = useRef(window.end);
  const navigate = useNavigate(); // useNavigate를 사용하기 위한 할당

  const [raisehand, setRaisehand] = useState("no_pose"); //left_hand, right_hand, no_pose

  // 컴포넌트 렌더링 시 변수 초기화: useEffect hook 사용

  const [gamedata, setGamedata] = useState(myData[0]);
  const [questionnumber, setQuestionnumber] = useState(1);
  const [score, setScore] = useState(0);

  // const onIncrease = () => {
  //   console.log('실행 전', score)
  //   setScore(score + 10);
  //   console.log('현재 스코어는' ,  score) //정답 시 onIncrease 함수 호출, 점수 증가
  // };

  useEffect(() => {
    // console.log("컴포넌트 마운트 됨");

    // console.log(MainBlock);

    init.current();
    setQuestionnumber(1);
    setScore(0);
  }, []);

  setInterval(function () {
    // 선택된 것 콘솔로그에 찍어주며, sessionStorage에 있는 변수를 특정 간격마다 raisehand 변수에 넣어줌 => 바로 아래의 useeffect 함수를 통해 변화를 감지.
    console.log();
    console.log("세션에 저장된 값", sessionStorage["result"]);
    setRaisehand(sessionStorage["result"]);
  }, 500); // 실시간으로 변화값 반영

  // 이하는 손 든거 감지하여 변경하는 함수
  // sessionStorage의 변화를 반영하는 raisehand 변수를 사용, 해당 변수의 변화에 따라 결정

  useEffect(() => {
    if (raisehand === "right_hand") {
      // 오른손을 든 경우
      // CSS 수정
      document.querySelector(".right").style.border = "1rem solid red"; // 선택된 것 가시성 좋게 표시 : 자세를 유지하라는 것
      document.querySelector(".left").style.border = "1px solid black";
    } else if (raisehand === "left_hand") {
      // 왼손을 든 경우
      document.querySelector(".left").style.border = "1rem solid red";
      document.querySelector(".right").style.border = "1px solid black";
    } //no_pose 인 경우, 원래대로 수정
    else {
      document.querySelector(".right").style.border = "1px solid black";
      document.querySelector(".left").style.border = "1px solid black";
    }
  }, [raisehand]);

  // 이하는 문제 읽어주는 함수

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();

    msg.text = myData[questionnumber - 1]["question"];
    window.speechSynthesis.speak(msg);
  }, [questionnumber]);

  function correct() {
    //정답을 골랐을 때
    // onIncrease();
    console.log(randomanswer);
    //

    if (randomanswer[questionnumber - 1] === 0) {
      document.querySelector(".left").style.outline = "0.5rem solid green";
    } else {
      document.querySelector(".right").style.outline = "0.5rem solid green";
    }
    // //
    setScore(score + 20);
    
    setTimeout(() => {
      setQuestionnumber(questionnumber + 1);
      setGamedata(myData[questionnumber]);

      console.log("정답 눌림");
      console.log(questionnumber, "문제번호", score);
      document.querySelector(".right").style.outline = 0
      document.querySelector(".left").style.outline = 0
      if (questionnumber === 5) {
        end.current();
        console.log("모든 문제 소모");
        console.log(questionnumber, "문제번호", score);
        setScore(score + 20);
        navigate(`/quizresult`, { state: { score } });
      }
    }, 3000);

    // 만약 카운트 5 이상인 경우, 결과창 출력
    // if (questionnumber === 5) {
    //   // console.log("모든 문제 소모");
    //   // console.log({ score });
    //   ;
    // }
  }

  function incorrect() {
    //오답을 골랐을 때

    if (randomanswer[questionnumber - 1] === 0) {
      document.querySelector(".left").style.outline = "0.5rem solid green";
    } else {
      document.querySelector(".right").style.outline = "0.5rem solid green";
    }
    
    setTimeout(() => {
      setQuestionnumber(questionnumber + 1);
      console.log(randomanswer);
      setGamedata(myData[questionnumber]);
      document.querySelector(".right").style.outline = 0
      document.querySelector(".left").style.outline = 0
      if (questionnumber === 5) {
        end.current();
        console.log("모든 문제 소모");
        navigate(`/quizresult`, { state: { score } });
      }
    }, 3000);
  }

  // 변한 state에 대해 렌더링
  // 이하 게임 UI 제공
  // 1. 랜덤으로 정답, 오답 제시
  // 2. onclick event에 대해 for문 사용해 다음 페이지로 넘겨줌,
  // 정답 컴포넌트 클릭시 점수 증가 및 다음페이지 렌더링
  // 오답 클릭 시 점수 유지 및 다음페이지 렌더링
  // 모든 문제 풀 시 gameResult.js 페이지 제공
  // 정답 위에 마우스 호버할 시 호버 된 것 표시

  // const valueFromContext = useContext(MyContext);
  // console.log(valueFromContext)

  console.log(randomanswer);

  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="title">
            <div className="timer">
              <Timer
                correct={correct}
                incorrect={incorrect}
                randomanswer={randomanswer}
              />
            </div>
            <div className="question">
              <h3>{gamedata["question"]}</h3>
            </div>
            <div className="questionnumber">
              <p>{questionnumber} / 5</p>
            </div>
          </div>
          <div className="btn">
            <button
              className="left"
              onClick={() => {
                if (randomanswer[questionnumber - 1] === 0) {
                  correct();
                } else {
                  incorrect();
                }
              }}
            >
              {randomanswer[questionnumber - 1] === 0
                ? gamedata["answer"]
                : gamedata["notanswer"]}
            </button>
            <button
              className="right"
              onClick={() => {
                if (randomanswer[questionnumber - 1] === 1) {
                  correct();
                } else {
                  incorrect();
                }
              }}
            >
              {randomanswer[questionnumber - 1] === 0
                ? gamedata["notanswer"]
                : gamedata["answer"]}
            </button>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default Game;

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 5rem;
    font-family: "BMEULJIRO";
    text-align: center;
    text-shadow: 0 1px 0 #CCC,
                0 2px 0 #CCC,
                0 3px 0 #CCC,
                0 4px 0 #CCC,
                0 10px 10px rgba(0, 0, 0, .4);
  }
  p {
    margin: 0;
    font-family: "BMEULJIRO";
    text-align: center;
    font-size: 3rem;
  }
  .book {
    width: 95%;
    height: 95%;
    background-image: url(${Book});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 93%;
    height: 30%;
  }
  .timer {
    width: 20%;
  }
  .question {
    width: 55%;
  }
  .questionnumber {
    width: 20%;
  }
  .btn {
    display: flex;
    width: 93%;
    height: 60%;
    justify-content: space-evenly;
    align-items: center;
  }
  .left {
    width: 40%;
    height: 85%;
    border: 1px solid black;
    background-color: #cecece;
    border-radius: 10px;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .right {
    width: 40%;
    height: 85%;
    background-color: #cecece;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
