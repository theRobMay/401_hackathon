import React, { useEffect, useState } from "react";
import './App.css';
import Character from "./characters";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("mounted");
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.results);
        });
  }, []);

  useEffect(() => {
    console.log("updated", characters);
  }, [characters]);


  return (
    <div className="App">
      <h4>Characters</h4>
      <ul>
          {characters.map(character => {
              return <Character data={character}/>
          })}
      </ul>
    </div>
  );
}

export default App;
