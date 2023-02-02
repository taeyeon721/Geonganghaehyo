import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Book from "assets/img/book_orange2.png";
import "assets/font/font.css";

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1F3995;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .book {
    width: 1500px;
    height: 650px;
    background-image: url(${Book});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .explain {
    background-color: #CECECE;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .start {
    background-color: #FD6262;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .goback {
    background-color: #CECECE;
    border-radius: 10px;
    width: 300px;
    height: 400px;
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
  .game_title {
    margin-left: 100px;
    margin-top: 30px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameLobby = () => {
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="game_title">
            <h3>게임 제목</h3>
          </div>
          <div className="btn">
            <button className="explain">게임설명</button>
            <Link to='/Game'><button className="start">시작하기</button></Link>
            <button className="goback">이전으로</button>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default GameLobby;
