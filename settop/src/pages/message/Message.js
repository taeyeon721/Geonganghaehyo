import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Book from "assets/img/book_red.png";
import { useNavigate } from "react-router-dom";
import "assets/font/font.css";
import { useSpeechRecognition } from "react-speech-kit";
import Slider from "components/Slider.js";
import axios from "axios";

function Message() {
  console.log('재렌더링')
  const [value, setValue] = useState("");
  const [textData, setTextData] = useState("");
 
  let [isRec, setIsRec] = useState(false);
  const navigate = useNavigate();
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      console.log(result);
    },
  });
  useMemo(() => {
    if (isRec === true) {
      console.log(value);
      if (value.includes("보낼래") === false) {
        setTextData((textData) => `${textData} ${value}`);
      }
    }
  }, [value]);

  function realListen() {
    listen({ interimResults: false });
    console.log("start recognition");
    if (value.includes("편지 쓸래")) {
      setIsRec(true);
      // stop();
    }
    if (textData && value.includes("보낼래")) {
      // 서버랑 연동하기
      // stop();
      setIsRec(false);
      const letter = textData
      // 이 부분이 POST 요청 보내는 코드
      const jwt = localStorage.getItem('jwt')
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        };
        axios
          .post("http://localhost:8080/message/save", letter, config)
          .then(console.log("메시지 보내기에 성공했습니다"))
          .catch(function (error) {
            console.error(error);
          });

      ////
      setValue('')
    }
    if (value.includes("다 썼어")) {
      if (isRec === false) {
        navigate("/main");
        stop();
      }
    }
  }
  useEffect(() => {
    console.log("rendered");
    realListen();
    // setInterval(() => realListen, 5000);
  });

  // useMemo(() => {

  // //   const onSubmitHandler = (event) => {
  // //     //버튼에 대한 함수 정의
  // //     // 버튼만 누르면 리로드 되는것을 막아줌
  // //     event.preventDefault();
  // //     if (!SendMessage) {
  // //       return alert("메시지를 입력하세요.");
  // //     } else {
      
  // //     }
  // //   };
  // },[letter]);

  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="content">
            {isRec ? <div className="letter">{textData}</div> : <Slider />}
          </div>
          <div className="btn">
            <button className="write">편지 쓸래</button>
            <button className="send">편지 보낼래</button>
            <button className="done">다 썼어</button>
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
  p {
    margin: 0;
    font-family: "BMEULJIRO";
    font-size: 3rem;
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
    width: 85%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .carousel.slide {
    width: 90%;
  }
  .letter {
    width: 90%;
    height: 100%;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .btn {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 93%;
    height: 30%;
  }
  .write {
    width: 23%;
    height: 70%;
    border-radius: 10px;
    font-family: "BMEULJIRO";
    font-size: 3rem;
  }
  .send {
    width: 23%;
    height: 70%;
    border-radius: 10px;
    font-family: "BMEULJIRO";
    font-size: 3rem;
  }
  .done {
    width: 23%;
    height: 70%;
    border-radius: 10px;
    font-family: "BMEULJIRO";
    font-size: 3rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
