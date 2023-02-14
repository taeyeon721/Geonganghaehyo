import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function IndividualIntervalsExample() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item interval={1000}>
        <div>
          <h3>내용1</h3>
          <p>날짜1</p>
          <p>발신인1</p>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={15000}>
        <h3>내용2</h3>
        <p>날짜2</p>
        <p>발신인2</p>
      </Carousel.Item>
      <Carousel.Item interval={15000}>
        <h3>내용3</h3>
        <p>날짜3</p>
        <p>발신인3</p>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
