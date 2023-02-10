import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import styled from "styled-components";
import BookImg from "assets/img/book_red.png";
import Character from "assets/img/dango.png";
import "assets/font/font.css";
import PlayMusic from "./PlayMusic.js"

function ChooseMusic() {

    // STT
    const [isValue, setValue] = useState("");
    const navigate = useNavigate();
    const {listen, listening, stop} = useSpeechRecognition({
        onResult: (result) => {
            // 음성인식 결과가 isValue 상태 값으로 할당
            setValue(result);
        }
    })

    function realListen () {
        listen({interimResults: false});
        console.log("start recognition");
        if (isValue.includes("재생")) {
            navigate('/playmusic');
            stop();
          }
    }

    useEffect(() => {
        console.log("rendered");
        realListen();
        setInterval(() => realListen, 5000);
    })


    return(
        <>
        <Container>
            <Book>
                < CharacterBox/>
                <PlayMusic musicName={isValue}/>
            </Book>
        </Container>
        </>
    )
}

export default ChooseMusic;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Book = styled.div`
    width: 95%;
    height: 95%;
    background-image: url(${BookImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CharacterBox = styled.div`
    width: 327px;
    height: 557px;
    background-image: url(${Character});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: motion 0.7s linear 0s infinite alternate;
    @keyframes motion {
        0% {margin-top: 0px;}
	    100% {margin-top: 20px;}
    }
`