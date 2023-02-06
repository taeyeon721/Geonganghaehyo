import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Book from "assets/img/book_green.png";
import "assets/font/font.css";

const MainBlock = styled.div`
  h3 {
    margin: 0;
    font-size: 1.5rem;
    font-family: "BMEULJIRO";
  }
  p {
    margin: 0;
    font-size: 3rem;
    font-family: "BMEULJIRO";
    text-align: center;
  }
  img {
    border: 3px solid black;
    border-radius: 5px;
    height: 400px;
    width: 300px;
  }
  .book {
    width: 1500px;
    height: 650px;
    background-image: url(${Book});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .call {
    border: 15px solid #ff7b7b;
    background-color: #ffffff;
    border-radius: 10px;
    width: 800px;
    height: 190px;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .game {
    border: 15px solid #ffba7b;
    background-color: #ffffff;
    border-radius: 10px;
    width: 800px;
    height: 190px;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .gym {
    border: 15px solid #ffe27b;
    background-color: #ffffff;
    border-radius: 10px;
    width: 800px;
    height: 190px;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .user_info {
    margin: 20px;
    margin-left: 120px;
    width: 600px;
    height: 600px;
    /* border: 3px solid black; */
    border-radius: 10px;
    display: grid;
    justify-content: space-around;
    align-items: center;
    background-color: white;
  }
  .btn {
    height: 600px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    justify-content: space-between;
    /* border: 3px solid red; */
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = (props) => {
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="user_info">
            <img src="#" alt="#" />
            <p>사용자</p>
          </div>
          <div className="btn">
            <Link to="/message">
            <button className="call">통화</button>
            </Link>
            <Link to="/selectgame">
              <button className="game">게임</button>
            </Link >
            <Link to="/selectgym">
            <button className="gym">체조</button>
            </Link>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default Main;
