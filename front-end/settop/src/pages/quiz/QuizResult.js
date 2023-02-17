import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Book from "assets/img/book_orange2.png";
import "assets/font/font.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";

function GameResult() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      console.log(result);
    },
  });

  function realListen() {
    listen({ interimResults: false });
    console.log("start recognition");
    if (value.includes("다시 할래")) {
      navigate("/quiz");
      stop();
    }
    if (value.includes("그만 할래")) {
      navigate("/main");
      stop();
    }
  }

  useEffect(() => {
    realListen();
    setInterval(() => realListen, 5000);
  });

  const location = useLocation();
  const score = location.state.score;

  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="game_title">
            <h3>퀴즈 결과</h3>
          </div>
          <div className="result">
            <div className="score">
              <p>{score}</p><span>점</span>
            </div>
            <div className="btn">
              <div className="replay">
                다시할래
              </div>
              <div className="goback">
                그만할래
              </div>
            </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default GameResult;

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 7rem;
    font-family: "BMEULJIRO";
  }
  p {
    margin: 0;
    font-family: "BMEULJIRO";
    font-size: 15rem;
  }
  span {
    margin: 0;
    font-family: "BMEULJIRO";
    font-size: 9rem;
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
  .game_title {
    width: 93%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .result {
    width: 93%;
    height: 55%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .replay {
    width: 50%;
    height: 40%;
    background-color: #fd6262;
    border-radius: 10px;
    font-size: 4rem;
    font-family: "BMEULJIRO";
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goback {
    width: 50%;
    height: 40%;
    background-color: #cecece;
    border-radius: 10px;
    font-size: 4rem;
    font-family: "BMEULJIRO";
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .score {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
