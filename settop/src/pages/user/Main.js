import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import styled from "styled-components";
import Book from "assets/img/book_green.png";
import "assets/font/font.css";

const Main = (props) => {
  // 음성인식 기능

  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      console.log(result);
    },
  });

  function realListen() {
    listen({ interimResults: false });
    console.log("start recognition");
    if (value.includes("노래방")) {
      navigate('/ChooseMusic');
      stop();
    }
    if (value.includes("퀴즈")) {
      navigate("/quizlobby");
      stop();
    }
    if (value.includes("체조")) {
      navigate("/selectgym");
      stop();
    }
    if (value.includes("편지")) {
      stop();
      navigate("/message");
    }
  }

  useEffect(() => {
    console.log("rendered");
    realListen();
    //setInterval(() =>realListen, 5000);
  });

  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="info">
            <div className="info_video">
              <video src="/videos/sample.mp4" autoPlay muted loop></video>
            </div>
            <div className="info_ment">
              <p className="ment">하고싶으신 것을 말씀해주세요</p>
            </div>
          </div>
          <div className="menulist">
            <div className="karaoke">
              <p>▪ 체조</p>
            </div>
            <div className="quiz">
              <p>▪ 퀴즈</p>
              </div>
            <div className="gym">
              <p>▪ 노래방</p>
              </div>
            <div className="message">
              <p>▪ 편지</p>
              </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default Main;

const MainBlock = styled.div`
  h3 {
    margin: 0;
    padding: 0;
    font-size: 3.5rem;
    font-family: "BMEULJIRO";
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .book {
    width: 95%;
    height: 95%;
    background-image: url(${Book});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .menulist {
    height: 90%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .message {
    font-family: "BMEULJIRO";
  }
  .quiz {
    font-family: "BMEULJIRO";
  }
  .gym {
    font-family: "BMEULJIRO";
  }
  .info {
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .info_video {
    height: 55%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info_ment {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
  }
  video {
    height: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
