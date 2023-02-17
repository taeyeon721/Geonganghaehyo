import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: lightgray;
  margin: 10px;
`;

const Message = (props) => {
    return (
      <MessageContainer style={props.sound ? { order: -1 } : {}}>
        <div>{props.content}</div>
        <div>{props.email}</div>
        <div>{props.time}</div>
      </MessageContainer>
    );
  };
  
  export default Message;