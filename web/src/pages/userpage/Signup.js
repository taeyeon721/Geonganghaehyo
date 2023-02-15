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
  const [signupValue, setSignupValue] = useState({
    email: "",
    name: "",
    password: "",
    userName: "",
    gender: "",
    age: 0,
    telNo: "",
  });
  // const [Email, setEmail] = useState("");
  // const [Name, setName] = useState("");
  // const [Password, setPassword] = useState("");
  // const [UserName, setUserName] = useState("");
  // const [Gender, setGender] = useState("");
  // const [Age, setAge] = useState("");
  // const [TelNo, setTelNo] = useState("");

  // 2단계 - Eventhandler 부착
  const onChangeHandler = (event) => {
    setSignupValue({
      ...signupValue,
      [event.target.name]: event.target.value,
    }); //이 부분 이해가 안됨.
  };
  // const onEmailHandler = (event) => {
  //   setEmail(event.currentTarget.value);
  // };
  // const onPasswordHandler = (event) => {
  //   setPassword(event.currentTarget.value);
  // };
  // const onNameHandler = (event) => {
  //   setName(event.currentTarget.value);
  // };
  // const onUserNameHandler = (event) => {
  //   setUserName(event.currentTarget.value);
  // };
  // const onUserGenderHandler = (event) => {
  //   setGender(event.currentTarget.value);
  // };
  // const onUserAgeHandler = (event) => {
  //   setAge(event.currentTarget.value);
  // };
  // const onUserTelNoHandler = (event) => {
  //   setTelNo(event.currentTarget.value);
  // };

  //버튼 입력 시, 제출하는 코드
  const onSubmitHandler = async (event) => {
    // 버튼에 대한 함수 정의
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();

    // 유효성 검사
    // 원래 switch 문을 사용하려 했으나 안 써본걸 써보기 어려워서 ifelse문으로 대체

    if (!signupValue.email) {
      return alert("이메일을 입력하세요.");
    } else if (!signupValue.name) {
      return alert("이름을 입력하세요.");
    } else if (!signupValue.password) {
      return alert("Password를 입력하세요.");
    } else if (!signupValue.userName) {
      return alert("닉네임을 입력하세요.");
    } else {
      // 모든 input이 입력되어 있으면, signupValue에 값을 담아
      // 서버로 POST 요청을 보낸다.
      // const signupValue = {
      //   email: Email,
      //   name: Name,
      //   password: Password,
      //   userName: UserName,
      //   gender: Gender,
      //   age: Age,
      //   telNo: TelNo,
      // };
      // console.log(signupValue);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        await axios
          .post("http://localhost:8080/manager/register", signupValue, config)
          .then(function (res) {
            console.log(res.data);
          });
      } catch (error) {
        console.log(error);
        console.log("에러가 나버렸습니다.");
      }
    }
  };

  const idCheck = async (event) => {
    event.preventDefault();
    const config = {
      email: signupValue.email,
    };
    axios
      .post(
        "http://localhost:8080/manager/emailCheck",
        JSON.stringify(config),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (res) {
        console.log(res);
        alert(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
              value={signupValue.email}
              onChange={onChangeHandler}
            />
            <button onClick={idCheck}>중복 확인</button>
          </span>
          <span>
            <h3>비밀 번호</h3>
            <Inputbox
              type="password"
              name="password"
              placeholder="비밀 번호를 입력하세요"
              value={signupValue.password}
              onChange={onChangeHandler}
            />
          </span>
          <span>
            <h3>비밀번호 확인</h3>
            <Inputbox
              type="password"
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
              value={signupValue.name}
              onChange={onChangeHandler}
            />
          </span>
          <br />
          <span>
            <h3>보호자 연락처</h3>
            <Inputbox
              type="text"
              name="telNo"
              placeholder="보호자 연락처를 입력하세요"
              value={signupValue.telNo}
              onChange={onChangeHandler}
            />
          </span>
          <br />
          <span>
            <h3>사용자 이름</h3>
            <Inputbox
              type="text"
              name="userName"
              placeholder="사용자의 이름을 입력하세요"
              value={signupValue.userName}
              onChange={onChangeHandler}
            />
          </span>
          <br />
          <span>
            <h3>사용자 성별</h3>
            <Inputbox
              type="text"
              name="gender"
              placeholder="사용자의 성별을 입력하세요"
              value={signupValue.gender}
              onChange={onChangeHandler}
            />
          </span>
          <br />
          <span>
            <h3>사용자 나이</h3>
            <Inputbox
              type="text"
              name="age"
              placeholder="사용자의 나이를 입력하세요"
              value={signupValue.age}
              onChange={onChangeHandler}
            />
          </span>
          <br />
          <Link to="/">
            <button> 처음으로 </button>
          </Link>
          <button type="submit"> 회원가입 </button>
        </form>
      </Note>
    </>
  );
};

export default Signup;
