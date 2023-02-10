import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 200px;
  border: 1px solid black;
`;

const Quiz = (props) => {
  return (
    <>
      <Container>
        <h2>문제: {props.question}</h2>
        <h3>정답: {props.answer}</h3>
        <h3>오답: {props.decoy}</h3>
      </Container>
    </>
  );
};

export default Quiz;
