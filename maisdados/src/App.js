import Characters from "./components/Characters";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => setCharacterList(response.results))
      .catch((error) => console.log("Error"));
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <Characters page={page} setPage={setPage} chars={characterList}></Characters>
      </header>
    </div>
  );
}

export default App;
