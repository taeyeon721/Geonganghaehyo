import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
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

const gymData = [{ name: "몸튼튼 체조" }, { name: "뇌튼튼 체조" }];

function SelectGym() {
  const gymBody = gymData[0].name;
  const gymBrain = gymData[1].name;
  return (
    <>
      <MainBlock>
        <div className="book">
          <div className="title">
            <h3>체조를 선택해주세요</h3>
          </div>
          <div className="btn">
            <Link
              to="/gym"
              state={{ gymName: gymBody }}
              style={{ textDecoration: "none" }}
            >
              <div className="selection">
                <img src="#" alt="#" />
                <p>{gymBody}</p>
              </div>
            </Link>
            <Link
              to="/gym"
              state={{ gymName: gymBrain }}
              style={{ textDecoration: "none" }}
            >
              <div className="selection">
                <img src="#" alt="#" />
                <p>{gymBrain}</p>
              </div>
            </Link>
          </div>
        </div>
      </MainBlock>
    </>
  );
}

export default SelectGym;
