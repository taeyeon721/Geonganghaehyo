import React, { useState, useEffect } from "react";
//import Modal from "react-modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Book from "assets/img/book_orange2.png";
import "assets/font/font.css";
import { useSpeechRecognition } from "react-speech-kit";
import QuitImg from "assets/img/quittext.png";

const GameLobby = () => {
  //const [modalIsOpen, setModalIsOpen] = useState(false);
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
    if (value.includes("넘어가")) {
      navigate("/quiz");
      stop();
    }
    else if (value.includes("뒤로")) {
      navigate("/main");
      stop();
    }
  }

  useEffect(() => {
    realListen();
    setInterval(() => realListen, 5000);
  });

  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="game_title">
            <h3>퀴즈</h3>
            <Quit/>
          </div>
          <div className="content">
            <video src="/videos/sample.mp4" autoPlay muted loop></video>
            <div className="explain">
            <br></br><br></br>
              바로 시작하려면<br></br><br></br>
              "넘어가"라고<br></br><br></br>
              말씀해주세요!
              </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default GameLobby;

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 5rem;
    font-family: "BMEULJIRO";
    text-shadow: 0 1px 0 #CCC,
                0 2px 0 #CCC,
                0 3px 0 #CCC,
                0 4px 0 #CCC,
                0 10px 10px rgba(0, 0, 0, .4);
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
    flex-direction: row;
    justify-content: flex-end;
    width: 95%;
    margin: 0%
  }
  video {
    display: flex;
    flex-direction: column;
    width: 55%;
    margin-right: 15%;
  }
  .explain {
    width: 30%;
    margin-left: -15%;
    font-family: "BMEULJIRO";
    font-size: 3rem;
    text-align: center;
  }
  .game_title {
    margin-left: 3%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Quit = styled.div`
    width: 460px;
    height: 85px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${QuitImg});
    z-index: 1;
    position: absolute;
    top: 11%;
    left: 14%;
`