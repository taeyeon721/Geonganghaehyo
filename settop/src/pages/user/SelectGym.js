import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Book from "assets/img/book_yellow.png";
import "assets/font/font.css";

const MainBlock = styled.div`
  h3 {
    margin: 0;
    color: #1f3995;
    font-size: 5rem;
    font-family: "BMEULJIRO";
  }
  p {
    margin: 0;
    font-size: 3rem;
    font-family: "BMEULJIRO";
  }
  .book {
    width: 1500px;
    height: 650px;
    background-image: url(${Book});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .title {
    margin-left: 100px;
    margin-top: 30px;
  }
  .btn {
    margin-left: 100px;
    width: 1300px;
    height: 400px;
    display: flex;
    justify-content: center;
    /* margin-bottom: 30px; */
  }
  .selection {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    border: 2px solid black;
    height: 300px;
    width: 300px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SelectGym() {
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="title">
            <h3>체조~~</h3>
          </div>
          <div className="btn">
            <div className="selection">
              <img src="#" alt="#" />
              <p>몸튼튼 체조</p>
            </div>
            <div className="selection">
              <img src="#" alt="#" />
              <p>뇌튼튼 체조</p>
            </div>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default SelectGym;
