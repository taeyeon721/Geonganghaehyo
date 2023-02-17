import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import axios from "axios";

function IndividualIntervalsExample() {
  const jwt = localStorage.getItem("jwt");
  const [mymsg, setMymsg] = useState([
    { email: "ksj970714@gmail.com", content: "1", time: "2023-02-16T16:00:06" },
    { email: "ksj970714@gmail.com", content: "2", time: "2023-02-16T16:00:06" },
    { email: "ksj970714@gmail.com", content: "3", time: "2023-02-16T16:00:06" },
  ]);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  };
  useEffect(() => {
    axios
    .post("http://localhost:8080/message/latestList/FROM_USER/3", {}, config)
    .then((res) => {
      setMymsg(res.data.msgList)
    })
    .catch(function (error) {
      console.error(error);
    });
  }, []);
  

  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={1000}>
        <Contents>
          <h3>{mymsg[0]["content"]}</h3>
          <p>2023-02-17 11:27</p>
          <p>발신자 : 박건우</p>
        </Contents>
      </Carousel.Item>
      <Carousel.Item interval={15000}>
        <Contents>
          <h3>{mymsg[1]["content"]}</h3>
          <p>{mymsg[1]["time"]}</p>
          <p>{mymsg[1]["email"]}</p>
        </Contents>
      </Carousel.Item>
      <Carousel.Item interval={15000}>
        <Contents>
          <h3>{mymsg[2]["content"]}</h3>
          <p>{mymsg[2]["time"]}</p>
          <p>{mymsg[2]["email"]}</p>
        </Contents>
      </Carousel.Item>
    </Carousel>
  );
}

export default React.memo(IndividualIntervalsExample);

const Contents = styled.div`
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 10px 10px rgba(0, 0, 0, 0.4);
`;
