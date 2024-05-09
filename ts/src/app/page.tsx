"use client";
import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Home: React.FC = () => {
  // 페이지 상태 관리를 위한 State 추가
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지 변경 함수
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  // 다음 페이지로 이동하는 함수
  const handleNextPage = () => {
    if (currentPage < 5) {
      // 5 페이지를 넘지 않도록 조건 추가
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Out>
        <span>커뮤니티</span>
        <span>공고</span>
        <span>구인구직</span>
        <MinNav>
          <p>AI Drawing 🎨</p>
        </MinNav>
      </Out>
      <By></By>
      <Liveranking>
        <p>이번주 인기곡</p>
        <div className="rank">
          <p>1.영호님 - Bam 🥇</p>
          <p>2.원재님 - Yang 🥈</p>
          <p>3.주영님 - Gang 🥉</p>
          <p>4.우라님 - AK-47</p>
          <p>5.지원님 - ButterFly</p>
        </div>
      </Liveranking>
      <br></br>
      <Banner>
        <p>배너</p>
      </Banner>
      <MusicGrid>
        {Array.from({ length: 12 }, (_, i) => `음원${i + 1}`).map((music) => (
          <div key={music}>{music}</div>
        ))}
      </MusicGrid>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            style={{
              margin: "0 5px",
              background: number === currentPage ? "grey" : "white",
              color: number === currentPage ? "white" : "black",
            }}
            onClick={() => handleChangePage(number)}
          >
            {number}
          </button>
        ))}
        <button onClick={handleNextPage}>&gt;&gt;</button>
      </div>
    </>
  );
};

const By = styled.div`
  width: 100%;
  border-bottom: 1px solid #adadad;
  margin-bottom: 1.5%;
`;

const Out = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  max-width: 1224px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin: auto;
  gap: 1.75em;
  font-weight: 700;

  span:hover {
    transform: scale(1.03);
    color: red;
  }
`;

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`;

const glow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
  `;

const MinNav = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  width: 131px;
  margin-left: auto;
  text-align: center;
  font-weight: 700;

  p {
    border: 1px solid #adadad;
    border-radius: 10px;
    background: linear-gradient(
      45deg,
      #00ff00,
      #00ff00,
      #ffffff,
      #00ff00,
      #00ff00
    );
    background-size: 200% 200%;
    animation: ${glow} 3s ease infinite;
    z-index: 100;
    animation: ${bounce} 1s infinite, ${glow} 4s infinite; /* 여기에 추가 */
  }

  @media screen and (max-width: 600px) {
    width: 100%; /* 화면이 작은 경우 전체 너비를 차지하도록 설정 */
    margin-left: 0; /* 왼쪽 여백 제거 */
  }
`;

const Liveranking = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 700;
  border: 1px solid black;
  border-radius: 15px;
  width: 150px;
  position: fixed;
  top: 160px;
  right: 50px;
  padding: 0px 10px;

  @media screen and (max-width: 768px) {
    width: 100%; /* 화면이 작은 경우 전체 너비를 차지하도록 설정 */
    border-radius: 0; /* border-radius 제거 */
    position: static; /* 위치 변경 */
    margin-top: 20px; /* 위쪽 여백 추가 */
    right: auto; /* 오른쪽 여백 제거 */
  }
`;

const Banner = styled.div`
  width: 1224px;
  height: 300px;
  margin: auto;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 100px;

  @media screen and (max-width: 768px) {
    width: 100%; /* 화면이 작은 경우 전체 너비를 차지하도록 설정 */
    border-radius: 0; /* border-radius 제거 */
    font-size: 60px; /* 폰트 크기 변경 */
  }
`;

const MusicGrid = styled.div`
  max-width: 1224px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: 100%;
  margin: 50px auto;
  text-align: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size: 20px;

  div {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서 2개씩 표시 */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* 아주 작은 화면에서는 1개씩 표시 */
  }
`;

export default Home;
