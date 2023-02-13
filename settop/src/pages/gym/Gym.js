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
    if (value.includes("그만 할래")) {
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
          <div className="content">
            <div className="title">
              <h3>{gymName}</h3>
            </div>
            <div className="video_frame">
              <div className="v_gym">
                <video autoPlay muted loop src="/videos/sample.mp4"></video>
              </div>
              <div className="v_webcam">
                <Webcam className="webcam" />
              </div>
            </div>
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
    justify-content: flex-end;
    align-items: center;
  }
  .content {
    width: 93%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .video_frame {
    width: 95%;
    height: 70%;
    display: flex;
    justify-content: space-evenly;
  }
  .v_gym {
    width: 55%;
    display: flex;
    align-items: center;
  }
  .v_webcam {
    width: 35%;
    display: flex;
    align-items: center;
  }
  video {
    width: 100%;
  }
  .webcam {
    width: 100%;
  }
  .title {
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
