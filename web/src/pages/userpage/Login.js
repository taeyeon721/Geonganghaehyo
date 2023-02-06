// 로그인을 하는 페이지
// react에서 form 태그 사용할 수 있는지 알아볼 것
// 추후 내 MM으로 보낸 링크 활용하여 로그인 기능 있는 페이지 구현,
// css 손볼 것.

import Note from "components/note";
import { useState } from "react";
import axios from "axios";

const Login = () => {
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
      let account = {
        Id,
        Password,
      };
      axios.post("보낼 곳", account)
      .then(function (res) {
        console.log(res.data); //응답 코드별 결과
        if (res.accessToken) {
          localStorage.setItem("login-token", res.accessToken);
        }})
        .catch(function (error) {
          console.log(error)
          console.log('에러가 나버렸습니다.')
          localStorage.setItem("에러코드", 123)
          console.log(localStorage)
        })
      ;
    }
  };

  return (
    <>
      <div>건강해효</div>

      <Note>
        <div>
          <form action="" onSubmit={onSubmitHandler}>
            <span>
              <h3>아이디</h3>
              <input
                type="id"
                value={Id}
                placeholder="Id를 입력하세요"
                onChange={onIdHandler}
              />
            </span>
            <span>
              <h3>패스워드</h3>
              <input
                type="text"
                value={Password}
                placeholder="비밀 번호를 입력하세요"
                onChange={onPasswordHandler}
              />
            </span>
            <br />
            <span>
              {/* <a href="#">회원가입</a>
              <a href="#">ID/비밀번호 찾기</a> */}
            </span>
            <button formAction="#"> 로그인 </button>
          </form>
        </div>
      </Note>
    </>
  );
};

export default Login;
