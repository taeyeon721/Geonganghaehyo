// 노트를 여러번 사용하게 되므로, 해당 노트를 컴포넌트로 활용
import styled from "styled-components";
import Noteimage from "../assets/img/note.png";

const Container = styled.div`
  .noteimage {
    width: 95%;
    height: calc(var(--vh, 1vh) * 95);
    background-image: url(${Noteimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Note = ({ children }) => {
  return (
    <Container>
      <div className="noteimage">
        {children}
      </div>
    </Container>
  );
};

export default Note;
