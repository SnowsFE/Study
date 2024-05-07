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
    <div>
      <Home id={2001} name="민떠는 바보얌" />
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   // 상태를 선언하여 백엔드로부터 받은 데이터를 저장합니다.
//   const [userData, setUserData] = useState({ id: 0, name: "" });

//   useEffect(() => {
//     // componentDidMount와 동일하게 동작하는 useEffect를 사용하여 데이터를 요청합니다.
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("백엔드 URL");
//         // 응답으로 받은 데이터를 상태에 저장합니다.
//         setUserData(response.data);
//       } catch (error) {
//         console.error("데이터를 불러오는데 실패했습니다.", error);
//       }
//     };

//     fetchData();
//   }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

//   // 상태에 저장된 데이터를 Home 컴포넌트에 props로 전달합니다.
//   return (
//     <div>
//       <Home id={userData.id} name={userData.name} />
//     </div>
//   );
// }

// export default App;
