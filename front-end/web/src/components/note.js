// 노트를 여러번 사용하게 되므로, 해당 노트를 컴포넌트로 활용
import { Link } from "react-router-dom";
import styled from "styled-components";
import Noteimage from "../assets/img/note.png";

const Container = styled.div`
  .noteimage {
    width: 95%;
    height: calc(var(--vh, 1vh) * 95);
    background-image: url(${Noteimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .navbar {
    margin-top: 7%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    font-size: 1.5rem;
    font-family: "Korail Round Gothic Bold";
  }
  a {
    text-decoration: none;
    color: black;  }
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Note = ({ children }) => {
  return (
    <Container>
      <div className="noteimage">
        <div className="navbar">
          <Link to='/'>메인</Link>
          <p>|</p>
          <Link to='/makequiz'>퀴즈 생성</Link>
          <p>|</p>
          <Link to='/quizmanage'>퀴즈 관리</Link>
          <p>|</p>
          <Link to='/messagepage'>메시지</Link>
        </div>
        {children}
      </div>
    </Container>
  );
};

export default Note;
