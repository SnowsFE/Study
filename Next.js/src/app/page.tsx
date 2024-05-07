// interface HomeProps {
//   id: number;
//   name: string;
// }

// function Home(props: HomeProps) {
//   return (
//     <div>
//       <p>{props.id}</p>
//       <h1>{props.name}</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Home id={1} name="홍길동" />
//     </div>
//   );
// }

// export default App;

interface HomeProps {
  id: number;
  name: string;
}

function Home({ id, name }: HomeProps) {
  return (
    <div>
      <a href="/data">
        <p>{id}</p>
      </a>
      <h1>{name}</h1>
    </div>
  );
}

function Apps() {
  return (
    <div>
      <Home id={1} name="홍길동" />
    </div>
  );
}

export default Apps;
