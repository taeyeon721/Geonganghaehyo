import styled from "styled-components";
import Boardimage from "./../../assets/img/board.png";
import { Link } from "react-router-dom";


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
  align-items: center;
  justify-content: center;
`;

const MainPage = () => {


  return (
    <>
      <Board>
        <div className="boardimage">
          <div>
            <h1>임시 라우팅, 완성 후 지움</h1>
            <Link to="/Login">
              <h3>로그인 페이지</h3>
            </Link>
            <Link to="/Signup">
              <h3>회원가입 페이지</h3>
            </Link>
            <Link to="/">
              <h3>로그인 페이지</h3>
            </Link>
            <Link to="/UserProfile">
              <h3>유저프로필</h3>
            </Link>
            <Link to="">
              <h3>로그인 페이지</h3>
            </Link>
            <Link to="">
              <h3>로그인 페이지</h3>
            </Link>
          </div>
        </div>
      </Board>
    </>
  );
};

export default MainPage;
