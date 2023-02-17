// YouTube API Key : 'AIzaSyB3yFm7JgzK93VPgmLV6WEYVrP787MmopY'
import React, {useState, useEffect, useCallback} from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import TVImg from "assets/img/television.png";
import QuitImg from "assets/img/quittext.png";
import "assets/font/font.css";
import axios from 'axios';
import YouTube from 'react-youtube';

const KEY = 'AIzaSyB3yFm7JgzK93VPgmLV6WEYVrP787MmopY';
let keyword;

function PlayMusic(props) {

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
        if (isValue.includes("노래 종료")) {
            navigate('/ChooseMusic');
            stop();
        }
    }

    useEffect(() => {
        console.log("rendered");
        realListen();
        setInterval(() => realListen, 5000);
    })

    // props 데이터 가공
    if (props.musicName !== '' && props.musicName !== undefined && props.musicName.includes("노래방 틀어")) {
        keyword = props.musicName.replace('노래방 틀어 줘', ' LaLaKaraoke Kpop');
    }
    else if (props.musicName !== '' && props.musicName !== undefined && props.musicName.includes("틀어")) {
        keyword = props.musicName.replace('틀어 줘', '');
    }

    console.log(keyword);

    // YouTube API
    const [params, setParams] = useState({
        key: KEY,
        part: 'snippet',
        q: keyword,
        maxResults: 1,
        type: 'video',
    })

    const opts = {
        height: '95%',
        width: '85%',
        playerVars: {
            autoplay: 1,
        },
    }


    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search', {params})
        .then((response) => {
            const data = response.data;
            setVideoId(data.items[0].id.videoId); // 검색한 영상 videoId
        })
        .catch((e) => {
            console.log(e);
        })
    })
    
    return (
        <>
        <Container>
            <Quit/>
            <TV>
                <YouTube videoId={videoId} opts={opts} 
                style={{
                    width: '100%',
                    height: '70%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '150px',

                }}/>
                <Title>건강해효 노래방</Title>
            </TV>
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

const Quit = styled.div`
    width: 500px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${QuitImg});
    z-index: 1;
    position: absolute;
    top: 3%;
    left: 9%;
`

const TV = styled.div`
    width: 88%;
    height: 95%;
    background-image: url(${TVImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Title = styled.div`
    width: 100%;
    height: 4%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 50px;
    margin-bottom: 25px;
    font-family: "BMEULJIRO";
`