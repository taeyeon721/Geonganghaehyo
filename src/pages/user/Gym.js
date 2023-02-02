import React from "react";
import styled from "styled-components";
import Book from "assets/img/book_yellow.png";
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
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .video_frame {
    width: 1300px;
    margin-left: 100px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }
  video {
    width: 500px;
    height: 400px;
    border: 1px solid black;
  }
  .title {
    width: 1100px;
    display: flex;
    justify-content: flex-start;
    margin-left: 100px;
    margin-top: 30px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Gym() {
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="title">
            <h3>체조이름</h3>
          </div>
          <div className="video_frame">
            <video src="#"></video>
            <video src="#"></video>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default Gym;
