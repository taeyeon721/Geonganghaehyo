import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit"
import styled from "styled-components";
import Book from "assets/img/book_green.png";
import "assets/font/font.css";

// function STT() {
//   const [value, setValue] = useState('');
//   const { listen, listening, stop } = useSpeechRecognition({
//     onResult: (result) => {
//       // 음성인식 결과가 value 상태값으로 할당됩니다.
//       setValue(result);
//       console.log(result);
//     },
//   });
// }

const Main = (props) => {

  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setValue(result);
      console.log(result);
    },
  });

  

  function realListen() {
    listen({ interimResults: false});
    console.log("start recognition");
    //{listening}
    if (value.includes("테스트")) {
      navigate('/SelectGame');
      stop();
    }
  }

  useEffect(() => {
    console.log("rendered");
    realListen();
    //STT();
    setInterval(() =>realListen, 5000);
  });
  
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="info_video">
            <video src="/videos/cat.mp4" autoPlay></video>
          </div>
          <div className="btn">
            <Link to="#">
              <button className="call">노래방</button>
            </Link>
            <Link to="/selectgame">
              <button className="game">게임</button>
            </Link>
            <Link to="/selectgym">
              <button className="gym">체조</button>
            </Link>
            <Link to="/message">
              <button className="call">편지</button>
            </Link>
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
    font-size: 1.5rem;
    font-family: "BMEULJIRO";
  }
  p {
    margin: 0;
    font-size: 1.5rem;
    font-family: "BMEULJIRO";
    text-align: center;
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
  .call {
    border: 15px solid #ff7b7b;
    background-color: #ffffff;
    border-radius: 10px;
    width: 80%;
    height: 100%;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .game {
    border: 15px solid #ffba7b;
    background-color: #ffffff;
    border-radius: 10px;
    width: 80%;
    height: 100%;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .gym {
    border: 15px solid #ffe27b;
    background-color: #ffffff;
    border-radius: 10px;
    width: 80%;
    height: 100%;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  .info_video {
    width: 70%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    height: 90%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 3px solid red; */
  }
  a {
    height: 15%;
    text-align: center;
  }
  video {
    height: 90%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
