import React from "react";
import styled from "styled-components";
import Book from "../assets/img/book_orange2.png";
import "../assets/font/font.css";

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 5.5rem;
    font-family: "BMEULJIRO";
  }
  p {
    margin: 0;
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
  .game_title {
    margin-left: 100px;
    margin-top: 30px;
  }
  .replay {
    background-color: #FD6262;
    border: transparent;
    border-radius: 10px;
    width: 400px;
    height: 150px;
    font-size: 6rem;
    font-family: "BMEULJIRO"; 
  }
  .goback {
    background-color: #CECECE;
    border: transparent;
    border-radius: 10px;
    width: 400px;
    height: 150px;
    font-size: 6rem;
    font-family: "BMEULJIRO";
  }
  .btn {
    height: 450px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .result {
    height: 400px;
    margin-left: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .score {
    width: 600px;
    display: flex;
    justify-content: center;
    font-family: "BMEULJIRO";
    font-size: 15rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

function GameResult() {
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="game_title">
            <h3>맞는 것을 골라요</h3>
          </div>
          <div className="result">
            <div className="score">
              <p>100점</p>
            </div>
            <div className="btn">
              <button className="replay">다시하기</button>
              <button className="goback">뒤로가기</button>
            </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default GameResult;
