import Note from "components/note";
import React, { useState } from "react";
import axios from "axios";

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
    }); //이 부분 이해가 안됨.
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            name="question"
            value={quiz.question}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            name="answer"
            value={quiz.answer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="decoy">Decoy:</label>
          <input
            type="text"
            id="decoy"
            name="decoy"
            value={quiz.decoy}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Quiz</button>
      </form>
    </Note>
  );
};

export default QuizForm;
