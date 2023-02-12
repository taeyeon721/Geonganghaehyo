import React, {useState, useEffect, useCallback} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import styled from "styled-components";
import BookImg from "assets/img/book_red.png";
import "assets/font/font.css";
import Youtube from './YouTube';
import axios from 'axios';

let keyword;

function PlayMusic(props) {

    // props 데이터 가공
    if (props.musicName !== '' && props.musicName !== undefined && props.musicName.includes("노래")) {
        keyword = props.musicName.replace(' 노래', '');
    }
    console.log(keyword);

    // YouTube API

    const[isVideos, setVideos] = useState([]);
    const [selectVideo, setSelectVideo] = useState(null);

    const search = useCallback((query) => {
        setSelectVideo(null);
        youtube.search(query)
        .then((videos) => setVideos(videos));
    }, [youtube]);

    const httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });

    const youtube = new Youtube(httpClient);

    
    return (
        <>
        <Container>
            <Book>
            </Book>
        </Container>
        </>
    )
}

export default PlayMusic;

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