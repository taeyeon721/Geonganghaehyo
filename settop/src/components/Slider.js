import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

function IndividualIntervalsExample() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={1000}>
        <Contents>
          <h3>내용1</h3>
          <p>날짜1</p>
          <p>발신인1</p>
        </Contents>
      </Carousel.Item>
      <Carousel.Item interval={15000}>
        <Contents>
          <h3>내용2</h3>
          <p>날짜2</p>
          <p>발신인2</p>
        </Contents>
      </Carousel.Item>
      <Carousel.Item interval={15000}>
        <Contents>
          <h3>내용3</h3>
          <p>날짜3</p>
          <p>발신인3</p>
        </Contents>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

const Contents = styled.div`
  text-shadow: 0 1px 0 #CCC,
                0 2px 0 #CCC,
                0 3px 0 #CCC,
                0 4px 0 #CCC,
                0 10px 10px rgba(0, 0, 0, .4);
`;