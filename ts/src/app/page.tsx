"use client";

import React from "react";
import styled from "styled-components";

interface Props {
  사람: string;
}

const Home: React.FC<Props> = ({ 사람 = ["배고파", "밥좀줘", "나죽어"] }) => {
  let 상품: string[] = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <>
      <Come>
        <a href="components">
          <p>안녕하세요</p>
        </a>
      </Come>
      <Hi>
        <h4 className="title">상품목록</h4>
        <div className="food">
          <h4>{상품[0]} & 40</h4>
          <h4>{사람[0]} & 40</h4>
        </div>
      </Hi>
    </>
  );
};

const Come = styled.div`
  p {
    color: red;
  }
`;

const Hi = styled.div`
  display: flex;
  .title {
    background-color: pink;
  }
  .food {
    background-color: rosybrown;
  }
`;

export default Home;
