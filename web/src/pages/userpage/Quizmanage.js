import Note from "components/note";
import Quiz from "components/quiz"
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Quizmanage = () => {
  const [quizstate, setquizstate] = useState([]);
  const jwt = localStorage.getItem("jwt");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8080/userQuiz/list", {}, config);
        console.log(response.data);
        const myquiz = response.data;
        setquizstate(myquiz);
        alert("퀴즈를 받아오는데 성공했습니다!");
      } catch (error) {
        console.error(error);
        alert("퀴즈를 받아오는데 실패했습니다. 서버와의 연결상태를 확인하세요.");
      }
    };

    fetchData();
  }, []);

  // 고려할 점: JSX 안에선 for문을 사용하는 것이 불가능하기 때문에, 다른 방법을 사용해주어야 한다.
  // https://codingbroker.tistory.com/123 링크 참조.
 
  return (
    <>
      <Note>
        <Container>
          <h1>퀴즈 관리 페이지</h1>
          <Link to="/makequiz">
            <button>퀴즈 생성으로 이동</button>
          </Link>
          <hr/>
          <div>
            {quizstate.map((quiz, index) => {
              
            return (
              <div>
            <Quiz key={index} question = {quiz.question}  decoy = {quiz.decoy}  answer = {quiz.answer}/>
            <hr />
            </div>
            )
          })}

          </div>
          
        </Container>
      </Note>
    </>
  );
};

export default Quizmanage;
