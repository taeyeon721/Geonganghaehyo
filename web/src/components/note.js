// 노트를 여러번 사용하게 되므로, 해당 노트를 컴포넌트로 활용
import styled from "styled-components";
import Noteimage from "../assets/img/note.png";

const Container = styled.div`
  .noteimage {
    width: 650px;
    height: 1100px;
    background-image: url(${Noteimage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-top: 100px;
    display: flex;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: #00CEEF;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 15px 25px;
    // margin: 10px;
    letter-spacing: 1px;
  }
  input{
    // background: #eee;
    padding: 16px;
    margin: 10px;
    width: 50%;
    border: 0;
    border-radius: 20px;
    // box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
  }
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
