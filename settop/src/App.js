import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Login, Main, Quiz, PlayMusic, QuizLobby, QuizResult, SelectGym, Gym, Message, ChooseMusic, Notfound } from "./pages";
import styled from "styled-components";
import BackgroundImage from "assets/img/background.png";
// import GameResult from "./pages/GameResult";

 function App() {
  

  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/quizlobby" element={<QuizLobby />}></Route>
            <Route path="/quizresult" element={<QuizResult />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/selectgym" element={<SelectGym />}></Route>
            <Route path="/gym" element={<Gym />}></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/choosemusic" element={<ChooseMusic />}></Route>
            <Route path="/playmusic" element={<PlayMusic />}></Route>
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
