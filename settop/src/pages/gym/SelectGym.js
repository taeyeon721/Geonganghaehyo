import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Book from "assets/img/book_yellow.png";
import BodyTraining from "assets/img/몸튼튼체조_선택.png"
import BrainTraining from "assets/img/뇌튼튼체조_선택.png"
import "assets/font/font.css";
import { useSpeechRecognition } from "react-speech-kit";



const gymData = [{ name: "몸튼튼" }, { name: "뇌튼튼" }];

function SelectGym() {
  
  const gymBody = gymData[0].name;
  const gymBrain = gymData[1].name;
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
    if (value.includes("몸튼튼")) {
      navigate('/gym',{state:{gymName: gymBody}});
      stop();
    }
    if (value.includes("뇌튼튼")) { // 뇌튼튼이 인식이 잘 안됨
      navigate('/gym',{state:{gymName: gymBrain}});
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
          <div className="content">
            <div className="title">
              <h3>하고 싶은 체조를 말씀해주세요!</h3>
            </div>
            <div className="selection">
                <div className="body">
                  <img src={BodyTraining} alt="body training" />
                  <p>{gymBody}</p>
                </div>
                <div className="brain">
                  <img src={BrainTraining} alt="brain training" />
                  <p>{gymBrain}</p>
                </div>
            </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default SelectGym;

  const MainBlock = styled.div`
    h3 {
      margin: 0;
      color: #1f3995;
      font-size: 5rem;
      font-family: "BMEULJIRO";
    }
    p {
      margin: 0;
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
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
    .content {
      width: 93%;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .title {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
    }
    .selection {
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: space-around;
    }
    .body {
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .brain {
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 100%;
      height: 100%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  `;