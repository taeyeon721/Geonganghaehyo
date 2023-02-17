import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Book from "assets/img/book_yellow.png";
import "assets/font/font.css";
import { useSpeechRecognition } from "react-speech-kit";
import YouTube from 'react-youtube';
import QuitImg from "assets/img/quittext.png";

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
    if (value.includes("뒤로")) {
      navigate("/selectgym");
      stop();
    }
  }

  useEffect(() => {
    realListen();
    setInterval(() => realListen, 5000);
  });

  // YouTube options 객체
  const opts = {
    height: '95%',
    width: '85%',
    playerVars: { 'autoplay': 1, 'controls': 0 },
}

  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="content">
            <div className="title">
              <h3>{gymName}</h3>
              <Quit/>
            </div>
            <div className="video_frame">
              <div className="v_gym">
              <YouTube videoId={(gymName === "신체 운동") ? "aSPIO3zGiDU" : "QcD_wg8YKF0"} opts={opts}
                style={{
                  width: "100%",
                  height: "521px",
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "center",
                }}/>
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
    width: 74%;
    display: flex;
    align-items: center;
  }
  .v_webcam {
    width: 44%;
    display: flex;
    align-items: center;
    padding: 0 4%;
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
  .iframe{
    width: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Quit = styled.div`
    width: 460px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${QuitImg});
    z-index: 1;
    position: absolute;
    top: 11%;
    left: 14%;
`