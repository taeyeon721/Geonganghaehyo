import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Main from './pages/Main';
import styled from 'styled-components';
import BackgroundImage from './assets/img/background.png';

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}></Route>
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
