"use client";

import styled from "styled-components";

interface HomeProps {
  id: number;
  name: string;
}

function Home({ id, name }: HomeProps) {
  return (
    <div>
      <p>{id}</p>
      <h1>{name}</h1>
    </div>
  );
}

function App() {
  return (
    <Minseo>
      <a href="/">
        <Home id={2001} name="민떠는 바보얌 멍충" />
      </a>
    </Minseo>
  );
}

const Minseo = styled.div`
  color: red;
  a {
    text-decoration: none;
  }

  a:hover {
    color: yellowgreen;
    transform: scale(1.5);
  }
`;

export default App;
