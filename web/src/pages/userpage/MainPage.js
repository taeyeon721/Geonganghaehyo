import styled from "styled-components";
import Boardimage from "./../../assets/img/board.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// 아무 입력이나 하면 로그인 페이지로 이동

const Board = styled.div`
  .boardimage {
    width: 100%;
    height: 100%;
    background-image: url(${Boardimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }
  .link {
    width: 100%;
    height: 40%;
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    font-size: 1.5rem;
    font-family: "Korail Round Gothic Bold";
  }
  .link_2 {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    font-size: 1.5rem;
    font-family: "Korail Round Gothic Bold";
  }
  .title {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: white;
    font-size: 3rem;
    font-family: "Korail Round Gothic Bold";
  }
  a {
    text-decoration: none;
    color: white;  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
  margin-bottom: 15%;
  width: 95%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  let jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt !== null) {
      setIsLogin(true);
    }
  }, [isLogin]);

  function Logout() {
    window.localStorage.removeItem("jwt");
    setIsLogin(false);
    alert("로그아웃 되었습니다");
  }

  return (
    <>
      <Board>
        <div className="boardimage">
          <div className="title">

          <h1>건강해효</h1>
          </div>
          {isLogin ? (
            <div className="link_2">
              {/* <Link to="/">
              <h3>로그인 페이지</h3>
            </Link> */}
              <Link to="/UserProfile">
                <h3>유저프로필</h3>
              </Link>
              <Link to="/Makequiz">
                <h3>퀴즈 페이지</h3>
              </Link>
              <Link to="/Quizmanage">
                <h3>퀴즈 관리 페이지</h3>
              </Link>
              <Link to="/Messagepage">
                <h3>메시지 페이지</h3>
              </Link>
              <Link to="/">
                <h3 onClick={Logout}>로그아웃</h3>
              </Link>
            </div>
          ) : (
            <div className="link">
              <Link to="/Login">
                <h3>로그인 페이지</h3>
              </Link>
              <Link to="/Signup">
                <h3>회원가입 페이지</h3>
              </Link>
            </div>
          )}
        </div>
      </Board>
    </>
  );
};

export default MainPage;
