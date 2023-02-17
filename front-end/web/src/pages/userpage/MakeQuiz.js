import Note from "components/note";
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const QuizForm = () => {
  const [quiz, setQuiz] = useState({
    question: "",
    answer: "",
    decoy: "",
  });

  const handleChange = (event) => {
    setQuiz({
      ...quiz,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const jwt = localStorage.getItem("jwt");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };

    try {
      await axios.post("http://localhost:8080/quiz/create", quiz, config);
      alert("퀴즈가 성공적으로 만들어졌습니다!");
    } catch (error) {
      console.error(error);
      alert("퀴즈를 만드는데 실패하였습니다. 서버와 통신상태를 확인하세요.");
    }
  };

  return (
    <Note>
      <MainBlock>
        <form onSubmit={handleSubmit}>
          <h1>퀴즈 생성하기</h1>
          <div className="question">
            <label htmlFor="question">질문: </label>
            <textarea id="question"
              name="question"
              value={quiz.question}
              onChange={handleChange}></textarea>
            {/* <input
              type="text"
              id="question"
              name="question"
              value={quiz.question}
              onChange={handleChange}
            /> */}
          </div>
          <div className="answer">
            <div>

            <label htmlFor="answer">정답: </label>
            </div>
            <input
              type="text"
              id="answer"
              name="answer"
              value={quiz.answer}
              onChange={handleChange}
            />
          </div>
          <div className="decoy">
            <label htmlFor="decoy">오답: </label>
            <input
              type="text"
              id="decoy"
              name="decoy"
              value={quiz.decoy}
              onChange={handleChange}
            />
          </div>
          <button className="create" type="submit">
            퀴즈 생성
          </button>
        </form>
      </MainBlock>
    </Note>
  );
};

export default QuizForm;

const MainBlock = styled.div`
 width: 100%;
 height: 99%;
 display: flex;
 align-items: flex-end;
 justify-content: center;
 form {
  width: 90%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 }
 label {
  font-size: 2rem;
  font-family: "Korail Round Gothic Bold";
 }
 .question {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 }
 .answer {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 }
 .decoy {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
 }
 button {
  background-color: #CECECE;
  border-radius: 10px;
  border: 1px solid black;
  width: 20%;
  height: 5%;
  font-size: 1.5rem;
  font-family: "Korail Round Gothic Bold";
 }
 input {
  border: 1px solid black;
  width: 99%;
  height: 30%;
 }
 textarea {
  border: 1px solid black;
  width: 99%;
  height: 50%;
 }
 h1 {
  width: 100%;
  margin: 0;
  height: 10%;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-family: "Korail Round Gothic Bold";
 }
`;