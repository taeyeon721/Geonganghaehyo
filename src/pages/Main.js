import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Book from "../assets/img/book_green.png";
import "../assets/font/font.css";

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
    border: 2px solid black;
    height: 400px;
    width: 300px;
  }
  .book {
    width: 1500px;
    height: 650px;
    background-image: url(${Book});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .call {
    background-color: #ff7b7b;
    border-radius: 10px;
    width: 800px;
    height: 190px;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .game {
    background-color: #ffba7b;
    border-radius: 10px;
    width: 800px;
    height: 190px;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .gym {
    background-color: #ffe27b;
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
  justify-content: space-around;
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
            <button className="call">통화</button>
            <Link to='/SelectGame'><button className="game" >게임</button></Link>
            <button className="gym">체조</button>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default Main;
