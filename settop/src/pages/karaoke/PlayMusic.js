// YouTube API Key : 'AIzaSyCJTS3iS4ItVUdnhpTkoi_-CC-WPFLtJeQ'
import React, {useState, useEffect, useCallback} from "react";
import styled from "styled-components";
import BookImg from "assets/img/book_red.png";
import "assets/font/font.css";
import axios from 'axios';
import YouTube from 'react-youtube';

const KEY = 'AIzaSyCJTS3iS4ItVUdnhpTkoi_-CC-WPFLtJeQ';
let keyword, videoId;

function PlayMusic(props) {

    // props 데이터 가공
    if (props.musicName !== '' && props.musicName !== undefined && props.musicName.includes("틀어")) {
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
        contentDetails: {
            licensedContent: true,
        }
    })

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search', {params})
        .then((response) => {
            const data = response.data;
            console.log(data);
            videoId = data.items[0].id.videoId; // 검색한 영상 videoId
            console.log(videoId);
        })
        .catch((e) => {
            console.log(e);
        })
    })
    
    return (
        <>
        <Container>
            <Book>
                <Header>건강해효 노래방</Header>
                <YouTube videoId={videoId} opts={{
                    height: '660',
                    width: '840',
                    playerVars: {
                        autoplay: 0,
                        rel: 0,
                        modestbranding: 1,   
                    },
                }} style={{
                    width: '80%',
                    height: '70%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginLeft: '8%',
                }}/>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Header = styled.div`
    margin-left: 80px;
`