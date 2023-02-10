import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit"
import { Welcome, Main, Message, GameLobby, GameResult, SelectGame, Game, SelectGym, Gym, Login, Notfound } from "./pages";
import styled from "styled-components";
import BackgroundImage from "assets/img/background.png";
// import GameResult from "./pages/GameResult";

 function App() {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // STT 결과를 value 상태값으로 저장
      setValue(result);
      console.log(result);
    },
  });

  function realListen() {
    listen({ interimResults: false});
  }
  

  useEffect(() => {
    console.log(1);
    realListen();
    // return setInterval(() =>realListen, 5000);
  }, [value]);



  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/main" element={<Main value={value}/>}></Route>
            <Route path="/gamelobby" element={<GameLobby />}></Route>
            <Route path="/gameresult" element={<GameResult />}></Route>
            <Route path="/selectgame" element={<SelectGame />}></Route>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/selectgym" element={<SelectGym />}></Route>
            <Route path="/gym" element={<Gym />}></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/*" element={<Notfound />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  background: url(${BackgroundImage});
  background-size: cover;
`;

export default App;
