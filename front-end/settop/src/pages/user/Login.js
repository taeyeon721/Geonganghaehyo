import React from "react";
import styled from "styled-components";
import Board from "assets/img/board2.png";
import "assets/font/font.css";

const MainBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 5rem;
    font-family: "BMEULJIRO";
    color: white;
  }
  .board {
    width: 85%;
    height: 90%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(${Board});
  }
  .qrcode {
    margin-bottom: 5%;
    width: 30%;
    height: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <>
      <MainBlock>
        <div className="board">
            <div>
          <h1>QR 로그인</h1>
            </div>
            <div className="qrcode">
                qr
            </div>
        </div>
      </MainBlock>
    </>
  );
}

export default Login;