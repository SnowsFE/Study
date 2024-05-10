"use client";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import typenice from "../../../public/typenice.png";
import profile from "./images.png";
import hi from "./1.png";
import hi2 from "./2.png";
import category from "./category.png";

const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false); // showMenu 상태 추가

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

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
      <Div>
        <Link href={"/"}>
          <Image src={typenice} alt="Logo" width={32} height={32} />
        </Link>
        <Link href={""}>
          📬 &nbsp; &nbsp; 🔔 &nbsp; &nbsp; 🔖 &nbsp; &nbsp; 🧍 &nbsp; &nbsp;
          <ProfileImage
            src={profile}
            alt="프로필"
            width={32}
            height={32}
            onClick={handleClick}
          />
        </Link>
        {/* showMenu 상태에 따라 메뉴를 보여줄지 여부를 결정 */}
        {showMenu && (
          <Menu>
            <MenuItem>내 프로필</MenuItem>
            <MenuItem>내 포인트</MenuItem>
            <MenuItem>후원 보기</MenuItem>
            <MenuItem>로그아웃</MenuItem>
          </Menu>
        )}
      </Div>
      <Out>
        <Image src={category} alt="카테고리" />
        <MinNav>
          <p>썸네일 생성 🎨</p>
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
        <Image src={hi2} alt="hi2" />
      </MusicGrid>
      <MusicGrid2>
        <Image src={hi} alt="hi2" />
      </MusicGrid2>
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

// 프로필 이미지 스타일 추가
const ProfileImage = styled(Image)`
  cursor: pointer;
`;

// Menu, MenuItem, Div 컴포넌트 및 스타일 추가
const Menu = styled.div`
  position: absolute;
  top: 60px;
  right: 335px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  z-index: 2;
`;

const MenuItem = styled.div`
  cursor: pointer;
  margin-bottom: 5px;
`;

const Div = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  max-width: 1224px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  font-weight: 700;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    gap: 0.5em;
  }
`;

const By = styled.div`
  width: 100%;
  border-bottom: 1px solid #adadad;
  margin-bottom: 1.5%;
`;

const Out = styled.div`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  max-width: 1224px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin: auto;
  gap: 1.75em;
  font-weight: 700;
  cursor: pointer;

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
  cursor: pointer;

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
  margin-top: 1%;
  display: flex;
  align-items: center;
  justify-content: center; /* 중앙 정렬 */
  img {
    width: 1224px; /* 이미지의 너비를 1224px로 고정 */
    height: auto; /* 높이는 자동으로 조정되도록 설정 */
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서 2개씩 표시 */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* 아주 작은 화면에서는 1개씩 표시 */
  }
`;

const MusicGrid2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 중앙 정렬 */
  img {
    width: 1224px; /* 이미지의 너비를 1224px로 고정 */
    height: auto; /* 높이는 자동으로 조정되도록 설정 */
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 작은 화면에서 2개씩 표시 */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* 아주 작은 화면에서는 1개씩 표시 */
  }
`;
export default Home;
