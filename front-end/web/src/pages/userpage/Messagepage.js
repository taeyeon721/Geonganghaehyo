import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Message from "components/message";

const Container = styled.div`
.flexbox {
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Messagepage = () => {
  const [SendMessage, setSendMessage] = useState("");
  const onSendMessageHandler = (event) => {
    setSendMessage(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    //버튼에 대한 함수 정의
    // 버튼만 누르면 리로드 되는것을 막아줌
    event.preventDefault();
    if (!SendMessage) {
      return alert("메시지를 입력하세요.");
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      };
      axios
        .post("http://localhost:8080/message/save", SendMessage, config)
        .then(console.log("메시지 보내기에 성공했습니다"))
        setSendMessage("")
        .catch(function (error) {
          console.error(error);
        });
    }
  };
  const [messageList, setMessageList] = useState([]);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };

    axios
      .post("http://localhost:8080/message/list", {}, config)
      .then((response) => {
        setMessageList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <Container>
      <div className="flexbox">
      {messageList.map((message) => {
        return (
          
            message.location === "setTop" && <div>
              <Message
                content={message.content}
                sound={message.sound}
                time={message.time}
                email={message.email}
              />
            </div>
          
        );
        
      })}
      </div>
      </Container>
      <form onSubmit={onSubmitHandler}> 
        <input
          type="text"
          value={SendMessage}
          placeholder="메시지를 입력하세요"
          onChange={onSendMessageHandler}
        />
        <button>전송</button>
      </form>
      </>
  );
};

export default Messagepage;
