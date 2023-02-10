import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Book from "assets/img/book_orange2.png";
import "assets/font/font.css";
import { useSpeechRecognition } from "react-speech-kit";


const GameLobby = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
    if (value.includes("넘어가")) {
      navigate('/quiz');
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
          <div className="game_title">
            <h3>퀴즈</h3>
          </div>
          <div className="btn">
            <button className="explain" onClick={()=> setModalIsOpen(true)}>게임설명</button>
            <Modal isOpen={modalIsOpen}>
              <video src="/videos/cat.mp4" autoPlay onEnded={() => setModalIsOpen(false)}></video>
            </Modal>
            <Link to="/quiz">
              <button className="start">넘어가</button>
            </Link>
            <Link to="/main">
              <button className="goback">이전으로</button>
            </Link>
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
    .explain {
      border: 20px solid #ffe27b;
      background-color: #ffffff;
      border-radius: 10px;
      width: 300px;
      height: 400px;
      font-size: 3rem;
      font-family: "BMEULJIRO";
    }
    .start {
      border: 20px solid #73d388;
      background-color: #ffffff;
      border-radius: 10px;
      width: 300px;
      height: 400px;
      font-size: 3rem;
      font-family: "BMEULJIRO";
    }
    .goback {
      border: 20px solid #fd6262;
      background-color: #ffffff;
      border-radius: 10px;
      width: 300px;
      height: 400px;
      font-size: 3rem;
      font-family: "BMEULJIRO";
    }
    .btn {
      margin-left: 100px;
      width: 1300px;
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 30px;
    }
    .game_title {
      margin-left: 100px;
      margin-top: 30px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;