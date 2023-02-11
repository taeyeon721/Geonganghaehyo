import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Book from "assets/img/book_yellow.png";
import "assets/font/font.css";
import { useSpeechRecognition } from "react-speech-kit";


function Gym() {
  
  const location = useLocation();
  const gymName = location.state.gymName;
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      console.log(result);
    },
  }); 

  function realListen() {
    listen({ interimResults: false});
    console.log("start recognition");
    if (value.includes("그만 할래")) {
      navigate('/main');
      stop();
    }
  }

  useEffect(() => {
    realListen();
    setInterval(() =>realListen, 5000);
  });

  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="title">
            <h3>{ gymName }</h3>
          </div>
          <div className="video_frame">
            <video autoPlay muted loop src="/videos/sample.mp4"></video>
            <Webcam />
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default Gym;

  const MainBlock = styled.div`
    h3 {
      margin: 0;
      color: #1f3995;
      font-size: 5rem;
      font-family: "BMEULJIRO";
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
    .video_frame {
      width: 80%;
      height: 60%;
      margin-left: 0%;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 0%;
    }
    video {
      width: 40%;
      height: 40%;
      border: 1px solid black;
    }
    .title {
      width: 70%;
      display: flex;
      justify-content: center;
      margin-left: 100px;
      margin-top: 30px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;