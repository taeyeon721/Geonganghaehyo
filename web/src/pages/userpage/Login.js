// 로그인을 하는 페이지
// react에서 form 태그 사용할 수 있는지 알아볼 것
// 추후 내 MM으로 보낸 링크 활용하여 로그인 기능 있는 페이지 구현,
// css 손볼 것.

// localstorage

import Note from "components/note";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    //버튼에 대한 함수 정의
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    console.log("Id", Id);
    console.log("Password", Password);

    if (!Id) {
      return alert("ID를 입력하세요.");
    } else if (!Password) {
      return alert("Password를 입력하세요.");
    } else {
      const test = {
        email: Id,
        password: Password,
      };
      const testjson = JSON.stringify(test);
      console.log(testjson);
      axios
        .post("http://localhost:8080/manager/login", test, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(function (res) {
          console.log(res.data); //응답 코드별 결과
          console.log(res.data.accessToken);
          if (res.data.accessToken) {
            localStorage.setItem("jwt", res.data.accessToken);
            console.log(localStorage);
            navigate("/");
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log("에러가 나버렸습니다.");
          console.log(localStorage);
        });
    }
  };

  return (
    <>
      <Note>
        <MainBlock>
          <form action="" onSubmit={onSubmitHandler}>
            <div className="title">
              <h1>로그인</h1>
            </div>
            <div className="id">
              <h3>아이디</h3>
              <br/>
              <input
                type="id"
                value={Id}
                placeholder="Id를 입력하세요"
                onChange={onIdHandler}
              />
            </div>
            <div className="pw">
              <h3>패스워드</h3>
              <br/>
              <input
                type="password"
                value={Password}
                placeholder="비밀 번호를 입력하세요"
                onChange={onPasswordHandler}
              />
            </div>
            {/* <span>
                <a href="#">회원가입</a>
                <a href="#">ID/비밀번호 찾기</a>
              </span> */}
            <button formAction="#"> 로그인 </button>
          </form>
        </MainBlock>
      </Note>
    </>
  );
};

export default Login;

const MainBlock = styled.div`
  width: 100%;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  h3 {
    margin: 0;
    font-size: 2rem;
    font-family: "Korail Round Gothic Bold";
  }
  h1 {
    margin: 0;
    font-size: 2.5rem;
    font-family: "Korail Round Gothic Bold";
    display: flex;
    align-items: center;
  }
  form {
    height: 95%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .title {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
  }
  .id {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .pw {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;

  }
  input {
    border: 1px solid black;
    width: 60%;
    height: 20%;
  };
  button {
    border: 1px solid black;
    width: 25%;
    height: 5%;
    border-radius: 10px;
    background-color: #CECECE;
    font-size: 1.5rem;
    font-family: "Korail Round Gothic Bold";
  }
`;
