import Note from "components/note";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Inputbox = styled.input`
  width: 300px;
  height: 30px;
`;

const Signup = () => {
  // 1단계 - usestate 변수 선언
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  const [TelNo, setTelNo] = useState("");

  // 2단계 - Eventhandler 부착
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onUserNameHandler = (event) => {
    setUserName(event.currentTarget.value);
  };
  const onUserGenderHandler = (event) => {
    setGender(event.currentTarget.value);
  };
  const onUserAgeHandler = (event) => {
    setAge(event.currentTarget.value);
  };
  const onUserTelNoHandler = (event) => {
    setTelNo(event.currentTarget.value);
  };

  //버튼 입력 시, 제출하는 코드
  const onSubmitHandler = (event) => {
    // 버튼에 대한 함수 정의
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    // 유효성 검사
    // 원래 switch 문을 사용하려 했으나 안 써본걸 써보기 어려워서 ifelse문으로 대체

    if (!Email) {
      return alert("이메일을 입력하세요.");
    } else if (!Name) {
      return alert("이름을 입력하세요.");
    } else if (!Password) {
      return alert("Password를 입력하세요.");
    } else if (!UserName) {
      return alert("닉네임을 입력하세요.");
    } else {
      // 모든 input이 입력되어 있으면, signupValue에 값을 담아
      // 서버로 POST 요청을 보낸다.
      const signupValue = {
        email: Email,
        name: Name,
        password: Password,
        userName: UserName,
        gender: Gender,
        age: Age,
        telNo: TelNo,
      };
      console.log(signupValue);
      axios
        .post(
          "http://localhost:9999/manager/register",
          JSON.stringify(signupValue),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
          console.log("에러가 나버렸습니다.");
        });
    }
  };

  const idCheck = async (event) => {
    event.preventDefault();

    const jwt = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };

    try {
      await axios.post("http://localhost:9999/manager/idCheck", Email, config);
      alert("중복된 이메일이 없습니다!");
    } catch (error) {
      console.error(error);
      alert("중복된 아이디가 있습니다. 다시 시도하세요.");
    }
};
  return (
    <>
      <Note>
          <form action="" onSubmit={onSubmitHandler}>
            <span>
              <h3>이메일</h3>
              <Inputbox
                type="text"
                name="email"
                placeholder="이메일을 입력하세요"
                onChange={onEmailHandler}
              />
              <button onClick={idCheck}>중복 확인</button>
            </span>
            <span>
              <h3>비밀 번호</h3>
              <Inputbox
                type="text"
                name="password"
                placeholder="비밀 번호를 입력하세요"
                onChange={onPasswordHandler}
              />
            </span>
            <span>
              <h3>비밀번호 확인</h3>
              <Inputbox
                type="text"
                name="passwordcheck"
                placeholder="비밀 번호를 입력하세요"
              />
            </span>
            <span>
              <h3>보호자 이름</h3>
              <Inputbox
                type="text"
                name="name"
                placeholder="당신의 이름을 입력하세요"
                onChange={onNameHandler}
              />
            </span>
            <br />
            <span>
              <h3>보호자 연락처</h3>
              <Inputbox
                type="text"
                name="telno"
                placeholder="보호자 연락처를 입력하세요"
                onChange={onUserTelNoHandler}
              />
            </span>
            <br />
            <span>
              <h3>사용자 이름</h3>
              <Inputbox
                type="text"
                name="username"
                placeholder="사용자의 이름을 입력하세요"
                onChange={onUserNameHandler}
              />
            </span>
            <br />
            <span>
              <h3>사용자 성별</h3>
              <Inputbox
                type="text"
                name="gender"
                placeholder="사용자의 성별을 입력하세요"
                onChange={onUserGenderHandler}
              />
            </span>
            <br />
            <span>
              <h3>사용자 나이</h3>
              <Inputbox
                type="text"
                name="age"
                placeholder="사용자의 나이를 입력하세요"
                onChange={onUserAgeHandler}
              />
            </span>
            <br />
            <Link to="/">
              <button> 처음으로 </button>
            </Link>
            <button> 회원가입 </button>
          </form>
      </Note>
    </>
  );
};

export default Signup;
