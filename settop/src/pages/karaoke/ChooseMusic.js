import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import styled from "styled-components";
import BookImg from "assets/img/book_red.png";
import BubbleImg from "assets/img/bubble.png";
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
            console.log(result);
        }
    })

    function realListen () {
        listen({interimResults: false});
        console.log("start recognition");
        if (isValue.includes("틀어 줘")) {
            navigate('/playmusic');
            stop();
        }

        else if (isValue.includes("뒤로")) {
            navigate('/main');
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
                {(isValue.includes("틀어 줘") ? (<PlayMusic musicName={isValue}/>) 
                : <MainBox>
                    <CharacterBox/>
                    <Bubble/>
                </MainBox>)}
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

const MainBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
`

const Bubble = styled.div`
    width: 910px;
    height: 530px;
    background-image: url(${BubbleImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

const CharacterBox = styled.div`
    width: 200px;
    height: 331px;
    background-image: url(${Character});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: motion 0.7s linear 0s infinite alternate;
    @keyframes motion {
        0% {margin-top: 0px;}
	    100% {margin-top: 20px;}
    }
`