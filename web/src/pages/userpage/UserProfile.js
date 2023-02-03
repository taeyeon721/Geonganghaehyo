import Note from "components/note";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profilepic from "../../assets/img/profilepic.png"; 
import "../../assets/font/font.css"

const Container = styled.div`
  .welcome {
    margin-top: 10%;
    margin-bottom: 0%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .welcomebox {
    height: 0;
  }
  .imgbox {
    display: flex;
    justify-content: center;
    padding-right: 25px;
  }
  .informationcontainer {
   
   display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: space-around;

  }
  .changebutton{
   border-radius: 30px;
  }
  .informationtext {
    text-align: center;
    font-family: "Korail Round Gothic Bold";
    font-size: 2rem;
  }
  .buttoncontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .quizbutton {
    background-color: #e82f2f;
    border-radius: 24px;
    width: 400px;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .backbutton {
    background: #19191b;
    border-radius: 24px;
    background-color: #000000;
    width: 400px;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .buttontext {
    width: auto;
    height: 24px;

    font-family: "Korail Round Gothic Bold";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */

    display: flex;
    align-items: center;
    letter-spacing: 0.2px;

    /* white */

    color: #ffffff;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  width: 100%;
  display: grid;
`;

const UserProfile = () => {
  return (
    <Note>
      <Container>
        <div className="welcomebox">
          <span className="welcome">
            <h3>환영합니다! ASD님</h3>
            <button className="changebutton">회원정보 수정</button>
          </span>
        </div>
        <div className="imgbox">
          <img src={profilepic} alt="" />
        </div>
        <div className="informationcontainer">
          <div className="informationtext">이름: 김승준</div>
          <div className="informationtext">생년월일: 1997.XX.XX </div>
          <div className="informationtext">휴대폰 번호: 010-1234-4567</div>
          
        </div>
        <div className="buttoncontainer">
          <Link to="/">
            <button className="quizbutton">
               
               <p className="buttontext"> 퀴즈 관리 페이지 가기</p></button>
          </Link>
          <br />
          <br />

          <Link to="/">
            <button className="backbutton">
               <p
               className="buttontext">뒤로가기</p></button>
               
          </Link>
        </div>
      </Container>
    </Note>
  );
};

export default UserProfile;
