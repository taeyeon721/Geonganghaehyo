import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import styled from "styled-components";
import BookImg from "assets/img/book_red.png";
import "assets/font/font.css";

function PlayMusic(props) {

    const musicName = props.musicName; // 상속받은 음악명
    console.log(musicName);
    // musicName.replace("재생", '');
    // console.log(musicName);
    return (
        <>

        </>
    )
}

export default PlayMusic;