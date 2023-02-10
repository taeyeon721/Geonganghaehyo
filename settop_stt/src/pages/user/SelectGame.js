import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Book from "assets/img/book_orange2.png";
import "assets/font/font.css";

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 5rem;
    font-family: "BMEULJIRO";
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
    margin-left: 100px;
    margin-top: 30px;
  }
  .left {
    background-color: #ffffff;
    border: 5px solid black;
    border-radius: 10px;
    width: 550px;
    height: 350px;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .right {
    background-color: #ffffff;
    border: 5px solid black;
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

const gameData = [{ name: "첫번째 게임" }, { name: "두번째 게임" }];

function SelectGame() {
  const game1 = gameData[0].name
  const game2 = gameData[1].name
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="question">
            <h3>게임을 선택해주세요</h3>
          </div>
          <div className="btn">
            <Link to="/gamelobby" state = {{ gameName: game1 }}>
              <button className="left">{ game1 }</button>
            </Link>
            <Link to="/gamelobby" state={{ gameName: game2 }}>
            <button className="right">{ game2 }</button>
            </Link>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default SelectGame;
