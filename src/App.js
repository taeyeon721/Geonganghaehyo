import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, GameLobby, GameResult, SelectGame, Game, Notfound } from "./pages";
import styled from "styled-components";
import BackgroundImage from "./assets/img/background.png";
// import GameResult from "./pages/GameResult";

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/gamelobby" element={<GameLobby />}></Route>
            <Route path="/gameresult" element={<GameResult />}></Route>
            <Route path="/selectgame" element={<SelectGame />}></Route>
            <Route path="/game" element={<Game />}></Route>
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
