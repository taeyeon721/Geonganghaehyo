import React from "react";
import styled from "styled-components";
import Book from "../assets/img/book_orange2.png";
import "../assets/font/font.css";

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 5rem;
    font-family: "BMEULJIRO";
    text-align: center;
  }
  p {
    margin: 0;
    font-family: "BMEULJIRO";
    text-align: end;
    font-size: 2rem;
    margin-right: 50px;
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
    width: 1300px;
    margin-left: 100px;
  }
  .left {
    background-color: #CECECE;
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

function Game() {
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="question">
            <p>1 / 10</p>
            <h3>~~~~뭘까요~~~~</h3>
          </div>
          <div className="btn">
            <button className="left">선택지 1</button>
            <button className="right">선택지 2</button>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default Game;
