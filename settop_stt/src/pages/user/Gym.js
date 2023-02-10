import React from "react";
import Webcam from "react-webcam";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Book from "assets/img/book_yellow.png";
import "assets/font/font.css";

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 4rem;
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
  .video_frame {
    width: 1300px;
    margin-left: 100px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }
  video {
    width: 600px;
    height: 500px;
  }
  .title {
    width: 1100px;
    display: flex;
    justify-content: center;
    margin-left: 100px;
    margin-top: 30px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Gym() {
  const location = useLocation();
  const gymName = location.state.gymName;

  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="title">
            <h3>{ gymName }</h3>
          </div>
          <div className="video_frame">
            <video autoPlay muted loop src="/videos/체조.mp4"></video>
            <Webcam />
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default Gym;
