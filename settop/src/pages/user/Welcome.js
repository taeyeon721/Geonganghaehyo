import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Board from "assets/img/board.png";
import "assets/font/font.css";

const MainBlock = styled.div`
  h1 {
    margin: 0;
    margin-top: 10%;
    font-size: 5rem;
    font-family: "DdangBold";
    color: white;
  }
  .board {
    width: 60%;
    height: 60%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Board});
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Welcome() {
    const navigate = useNavigate();
    const isLogin = true

    setTimeout(function() {
        if (isLogin) {
            navigate('/main');
        }
        else {
            navigate('/login')
        }
    }, 3000)
  return (
    <>
      <MainBlock>
        <div className="board">
          <h1>건강해효</h1>
        </div>
      </MainBlock>
    </>
  );
}

export default Welcome;
