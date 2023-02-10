import styled from "styled-components";
import Book from "assets/img/book_orange2.png";
import "assets/font/font.css";
import { useState, useEffect } from "react"; // react hook 을 사용하기 위한 import
import { useNavigate } from "react-router-dom";
import Timer from 'components/Timer/index.js'

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 5rem;
    font-family: "BMEULJIRO";
    text-align: center;
    margin-top: 50px;
  }
  p {
    margin: 0;
    font-family: "BMEULJIRO";
    text-align: end;
    font-size: 3rem;
    margin-top: 70px;
  }
  .book {
    width: 1500px;
    height: 650px;
    background-image: url(${Book});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .question {
    display: flex;
    justify-content: space-around;
    width: 1300px;
    margin-top: 30px;
    margin-left: 100px;
  }
  .left {
    background-color: #cecece;
    border: transparent;
    border-radius: 10px;
    width: 550px;
    height: 350px;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .right {
    background-color: transparent;
    border-radius: 10px;
    width: 550px;
    height: 350px;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .btn {
    margin-left: 100px;
    width: 1300px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

/* 로직
0,1 랜덤으로 뽑음
0일 경우, 왼쪽이 정답. 1일 경우, 오른쪽이 정답
삼항연산자를 사용하여 렌더링.

*/
const Game = () => {
  const navigate = useNavigate(); // useNavigate를 사용하기 위한 할당
  const _ = require("lodash");
  const numbers = _.range(0, 2);
  const randomanswer = []; //randomanswer: 0 또는 1이 10개 담긴 배열, 0일 경우 왼쪽이 정답, 1일 경우 오른쪽이 정답
  // 해당 코드는 컴포넌트 마운트 시 실행됨.

  for (let index = 0; index < 10; index++) {
    randomanswer.push(_.sampleSize(numbers, 1)[0]);
  }

  console.log(randomanswer);

  // 컴포넌트 렌더링 시 변수 초기화: useEffect hook 사용

  const [gamedata, setGamedata] = useState(myData[0]);
  let [questionnumber, setQuestionnumber] = useState(1);
  let [score, setScore] = useState(0);

  // const onIncrease = () => {
  //   console.log('실행 전', score)
  //   setScore(score + 10);
  //   console.log('현재 스코어는' ,  score) //정답 시 onIncrease 함수 호출, 점수 증가
  // };

  useEffect(() => {
    console.log("컴포넌트 마운트 됨");
    
    setQuestionnumber(1);
    setScore(0);
    
  }, []);

  useEffect(() => {
    if (questionnumber === 5) {
      console.log("실행됨");
    }
  }, [questionnumber]);

  function correct() {
    //정답을 골랐을 때
    // onIncrease();
    setScore(score + 20);
    setQuestionnumber(questionnumber + 1);
    setGamedata(myData[questionnumber]);

    console.log("정답 눌림");
    console.log(questionnumber, "문제번호", score);
    if (questionnumber === 10) {
      console.log("모든 문제 소모");
      console.log(questionnumber, "문제번호", score);
      score += 10;
      navigate(`/QuizResult`, { state: { score } });
    }

    // 만약 카운트 10 이상인 경우, 결과창 출력
    // if (questionnumber === 10) {
    //   // console.log("모든 문제 소모");
    //   // console.log({ score });
    //   ;
    // }
  }

  function incorrect() {
    //오답을 골랐을 때
    setQuestionnumber(questionnumber + 1);
    setGamedata(myData[questionnumber]);
    if (questionnumber === 10) {
      console.log("모든 문제 소모");
      navigate(`/quizresult`, { state: { score } });
    }
  }


  // 변한 state에 대해 렌더링
  // 이하 게임 UI 제공
  // 1. 랜덤으로 정답, 오답 제시
  // 2. onclick event에 대해 for문 사용해 다음 페이지로 넘겨줌,
  // 정답 컴포넌트 클릭시 점수 증가 및 다음페이지 렌더링
  // 오답 클릭 시 점수 유지 및 다음페이지 렌더링
  // 모든 문제 풀 시 gameResult.js 페이지 제공
  // 정답 위에 마우스 호버할 시 호버 된 것 표시
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="question">
            <Timer correct={correct}/>
            <h3>{gamedata["question"]}</h3>
            <p>{questionnumber} / 5</p>
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
              {randomanswer[questionnumber - 1] === 0 ? gamedata["answer"] : gamedata["notanswer"]}
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
              {randomanswer[questionnumber - 1] === 0 ? gamedata["notanswer"] : gamedata["answer"]}
            </button>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default Game;
