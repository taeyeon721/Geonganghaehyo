import Note from "components/note";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
        <MainBlock>
          <form action="" onSubmit={onSubmitHandler}>
            <h1>회원 가입</h1>
            <div className="email">
              <h3>이메일</h3>
              <div className="input">
                <Inputbox
                  type="text"
                  name="email"
                  placeholder="이메일을 입력하세요"
                  value={signupValue.email}
                  onChange={onChangeHandler}
                />
                <button className="button_email" style={{ display: "inline" }} onClick={idCheck}>
                  중복 확인
                </button>
              </div>
            </div>
            <div className="pw">
              <h3>비밀 번호</h3>
              <div className="input">
                <Inputbox
                  type="password"
                  name="password"
                  placeholder="비밀 번호를 입력하세요"
                  value={signupValue.password}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="pw_check">
              <h3>비밀번호 확인</h3>
              <div className="input">
                <Inputbox
                  type="password"
                  name="passwordcheck"
                  placeholder="비밀 번호를 입력하세요"
                />
              </div>
            </div>
            <div className="name">
              <h3>보호자 이름</h3>
              <div className="input">
                <Inputbox
                  type="text"
                  name="name"
                  placeholder="당신의 이름을 입력하세요"
                  value={signupValue.name}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="tel_no">
              <h3>보호자 연락처</h3>
              <div className="input">
                <Inputbox
                  type="text"
                  name="telNo"
                  placeholder="보호자 연락처를 입력하세요"
                  value={signupValue.telNo}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="user_name">
              <h3>사용자 이름</h3>
              <div className="input">
                <Inputbox
                  type="text"
                  name="userName"
                  placeholder="사용자의 이름을 입력하세요"
                  value={signupValue.userName}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="user_gender">
              <h3>사용자 성별</h3>
              <div className="input">
                <Inputbox
                  type="text"
                  name="gender"
                  placeholder="사용자의 성별을 입력하세요"
                  value={signupValue.gender}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="user_age">
              <h3>사용자 나이</h3>
              <div className="input">
                <Inputbox
                  type="text"
                  name="age"
                  placeholder="사용자의 나이를 입력하세요"
                  value={signupValue.age}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="btn">
              <Link to="/">
                <button className="tomain"> 처음으로 </button>
              </Link>
              <button className="signup" type="submit"> 회원가입 </button>
            </div>
          </form>
        </MainBlock>
      </Note>
    </>
  );
};

export default Signup;

const Inputbox = styled.input`
  border: 1px solid black;
  width: 75%;
  height: 70%;
  border-radius: 10px;
`;

const MainBlock = styled.div`
  /* .email {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */
  form {
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }
  width: 100%;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  h3 {
    margin: 0;
    height: 40%;
    font-size: 2rem;
    font-family: "Korail Round Gothic Bold";
  }
  h1 {
    margin: 0;
    height: 10%;
    width: 100%;
    font-size: 2.5rem;
    font-family: "Korail Round Gothic Bold";
    display: flex;
    align-items: center;
  }
  .btn {
    height: 10%;
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input {
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .email {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .pw {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .pw_check {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .tel_no {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .user_name {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .user_gender {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .user_age {
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .button_email {
    background-color: #CECECE;
    height: 85%;
    width: 20%;
    font-size: 1.5rem;
    border-radius: 10px;
    font-family: "Korail Round Gothic Bold";
  }
  a {
    height: 45%;
    width: 45%;
  }
  .tomain {
    background-color: #FD6262;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-size: 1.5rem;
    font-family: "Korail Round Gothic Bold";
  }
  .signup {
    background-color: #CECECE;
    height: 45%;
    width: 45%;
    font-size: 1.5rem;
    border-radius: 10px;
    font-family: "Korail Round Gothic Bold";
  }
`;
