import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, LoginSelect, MainPage, Signup, UserProfile, Quizmanage, Notfound } from "./pages";
import styled from "styled-components";
import BackgroundImage from "assets/img/background.png";

// https://leftday.tistory.com/40
// npm install react-device-detect를 통해 모바일/데스크톱 페이지 구분가능
// 해당 사항은 당장 적용할 건 아니고 추후 반영 가능하도록 참고만 할 예정

// https://phrygia.github.io/react/2022-01-27-styled-components/
// styled component 사용하여 모바일에 맞게 출력하게 설정

// 모바일 페이지 사이즈: 720 X 1280px
// <Container> 태그는 모바일 사이즈에 맞는 규격을 만드는 컴포넌트.

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/loginselect" element={<LoginSelect />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/userprofile" element={<UserProfile />}></Route>
            <Route path="/quizmanage" element={<Quizmanage />}></Route>
            <Route path="/*" element={<Notfound />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid; 
  width: 720px;
  height: 1280px;
  background: url(${BackgroundImage});
  background-size: cover;
`;

export default App;
