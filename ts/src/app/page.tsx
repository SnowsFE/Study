"use client";
import styled from "styled-components";

function Home() {
  return (
    <Come>
      <a href="components">
        <p>안녕하세요</p>
      </a>
    </Come>
  );
}

const Come = styled.div`
  p {
    color: red;
  }
`;
export default Home;
