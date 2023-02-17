import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  Login,
  MainPage,
  Signup,
  UserProfile,
  Quizmanage,
  MakeQuiz,
  Notfound,
  Messagepage,
} from "./pages";
import styled from "styled-components";
import BackgroundImage from "assets/img/background.png";
import Header from "components/Header";

// https://leftday.tistory.com/40
// npm install react-device-detect를 통해 모바일/데스크톱 페이지 구분가능
// 해당 사항은 당장 적용할 건 아니고 추후 반영 가능하도록 참고만 할 예정

// https://phrygia.github.io/react/2022-01-27-styled-components/
// styled component 사용하여 모바일에 맞게 출력하게 설정

// 모바일 페이지 사이즈: 720 X 1280px
// <Container> 태그는 모바일 사이즈에 맞는 규격을 만드는 컴포넌트.

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
        <div className="header">
          <Header />
        </div>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/userprofile" element={<UserProfile />}></Route>
            <Route path="/quizmanage" element={<Quizmanage />}></Route>
            <Route path="/makequiz" element={<MakeQuiz />}></Route>
            <Route path="/messagepage" element={<Messagepage />}></Route>
            <Route path="/*" element={<Notfound />}></Route>
            {/* <Route path="/lastmsg" element={<LastMsg />}></Route> */}
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 720px;
  height: calc(var(--vh, 1vh) * 100);
  background: url(${BackgroundImage});
  background-size: cover;
  .header {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default App;
