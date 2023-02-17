import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import styled from "styled-components";
import Book from "assets/img/book_green.png";
import DangoImg from "assets/img/DoctorDango.png";
import Bubble2Img from "assets/img/bubble2.png";
import "assets/font/font.css";
import axios from "axios";

const settopid = "1234567890"; // 출고 시 지정되는 아이디, 어디 저장할지 정하기// 임시로 적어둔 것.
// 해당 아이디는 SQL로 회원 이메일 / 전화번호와 함께 데이터베이스에 "직접" 등록. =>
// 데이터베이스에 등록된 이메일, 전화번호를 기입해야만 회원가입이 가능하다.

// 셋탑 ID를 통해 JWT를 받아오는 코드
// 유효성 검증: 임시로 활용.. 메시지 리스트를 보내보고 응답이 오면 유효한 JWT로 취급

axios
  .post(
    "http://localhost:8080/set-top/login",
    { setTopId: settopid },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((response) => {
    console.log('jwt를 가져옴')
    window.localStorage.setItem("jwt", response.data.accessToken);
  })
  .catch((err) => {
    console.log(err);
    console.log("셋탑 로그인에 실패했습니다. 서버와의 연결을 확인하세요.");
  });


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
            <Bubble2/>
            <Dango/>
            <div className="info_ment">
              <div className="ment">
                {/* 선택할 메뉴를 말씀해주세요. */}
                <span>선</span>
                <span>택</span>
                <span>할&nbsp;</span>
                <span>메</span>
                <span>뉴</span>
                <span>를&nbsp;</span>
                <span>말</span>
                <span>씀</span>
                <span>해</span>
                <span>주</span>
                <span>세</span>
                <span>요</span>
                <span>.</span>
              </div>
            </div>
          </div>
          <div className="menulist">
            <div className="gym">
              <div>체조</div>
            </div>
            <div className="quiz">
              <div>퀴즈</div>
              </div>
            <div className="karaoke">
              <div>노래방</div>
              </div>
            <div className="message">
              <div>편지</div>
              </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default Main;

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 0;
    padding: 0;
    font-size: 3.5rem;
    font-family: "BMEULJIRO";
  }
  .book {
    width: 88%;
    height: 95%;
    background-image: url(${Book});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 8%;
  }
  .menulist {
    height: 90%;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 82px;
    font-family: "BMEULJIRO";
    padding-right: 3%;
    text-shadow: 0 1px 0 #CCC,
                0 2px 0 #CCC,
                0 3px 0 #CCC,
                0 4px 0 #CCC,
                0 10px 10px rgba(0, 0, 0, .4);
  }
  .gym{
    color: #FF0000;
  }
  .quiz{
    color: #FF8200;
  }
  .karaoke{
    color: #FFBE0A;
  }
  .message{
    color: #006400;
  }
  .info {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5%;
  }
  .info_ment {
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "BMEULJIRO";
  }
  .ment span{
    position: relative;
    top: 20px;
    display: inline-block;
    animation: bounce .3s ease infinite alternate;
    font-family: "BMEULJIRO", cursive;
    font-size: 60px;
    color: #000;
    text-shadow: 0 1px 0 #CCC,
                0 2px 0 #CCC,
                0 3px 0 #CCC,
                0 4px 0 #CCC,
                0 5px 0 #CCC,
                0 6px 0 transparent,
                0 7px 0 transparent,
                0 8px 0 transparent,
                0 9px 0 transparent,
                0 10px 10px rgba(0, 0, 0, .4);
  }

  .ment span:nth-child(2) { animation-delay: .1s; }
  .ment span:nth-child(3) { animation-delay: .2s; }
  .ment span:nth-child(4) { animation-delay: .3s; }
  .ment span:nth-child(5) { animation-delay: .4s; }
  .ment span:nth-child(6) { animation-delay: .5s; }
  .ment span:nth-child(7) { animation-delay: .6s; }
  .ment span:nth-child(8) { animation-delay: .7s; }
  .ment span:nth-child(9) { animation-delay: .8s; }
  .ment span:nth-child(10) { animation-delay: .9s; }
  .ment span:nth-child(11) { animation-delay: .10s; }
  .ment span:nth-child(12) { animation-delay: .11s; }
  .ment span:nth-child(13) { animation-delay: .12s; }

  @keyframes bounce {
    100% {
      top: -1px;
      text-shadow: 0 1px 0 #CCC,
                  0 2px 0 #CCC,
                  0 3px 0 #CCC,
                  0 4px 0 #CCC,
                  0 5px 0 #CCC,
                  0 6px 0 #CCC,
                  0 7px 0 #CCC,
                  0 8px 0 #CCC,
                  0 9px 0 #CCC,
                  0 50px 25px rgba(0, 0, 0, .2);
    }
  }

  video {
    height: 80%;
  }
`

const Dango = styled.div`
  width: 70%;
  height: 60%;
  background-image: url(${DangoImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: motion 0.7s linear 0s infinite alternate;
    @keyframes motion {
        0% {margin-top: 0px;}
	    100% {margin-top: 20px;}
    }
`

const Bubble2 = styled.div`
  width: 335px;
  height: 291px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${Bubble2Img});
  z-index: 1;
  position: absolute;
  top: 10%;
  left: 53%;
  
`