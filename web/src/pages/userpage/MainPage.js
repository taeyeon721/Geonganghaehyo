import styled from "styled-components";
import Boardimage from "./../../assets/img/board.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// 아무 입력이나 하면 로그인 페이지로 이동

const Board = styled.div`
  .boardimage {
    width: 650px;
    height: 450px;
    background-image: url(${Boardimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-bottom: 50px;
  }
  display: flex;
  text-align: center;
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
   
    window.localStorage.removeItem('jwt')
    setIsLogin(false)
    alert('로그아웃 되었습니다')
  }

  return (
    <>
      <Board>
        <div className="boardimage">
          {isLogin ? (
            <div>
              {/* <Link to="/">
              <h3>로그인 페이지</h3>
            </Link> */}
              <Link to="/">
                <button onClick={Logout}>로그아웃</button>
              </Link>
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
            </div>
          ) : (
            <div>
              <h1>임시 라우팅, 완성 후 지움</h1>
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
