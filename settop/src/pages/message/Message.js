import React from "react";
import styled from "styled-components";
import Book from "assets/img/book_red.png";
import { Link } from "react-router-dom";
import "assets/font/font.css";


function Message() {
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="content">
            <div className="title">
                <h3>○○○이 보낸 메시지입니다.</h3>
            </div>
            <div className="date">
                <p>2022.02.06 11:02:40</p>
            </div>
            <div className="letter">
                <p>대박!!! 저도 할머니가 해주신 음식이 제일 맛있어요!</p>
            </div>
          </div>
          <div className="btn">
            <button>녹음하기</button>
            <button>보내기</button>
            <Link to="/main">
            <button>뒤로가기</button>
            </Link>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default Message;

  const MainBlock = styled.div`
    h3 {
      margin: 0;
      font-family: "BMEULJIRO";
      font-size: 5rem;
    }
    .book {
      width: 95%;
      height: 95%;
      background-image: url(${Book});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .title {
      width: 80%;
    }
    .btn {
      display: flex;
      justify-content: space-around;
      align-items: center;
     width : 80%;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  `;