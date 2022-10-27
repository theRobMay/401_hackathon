import React, { useEffect, useState } from "react";
import './App.css';
import Character from "./characters";

function App() {
  const [isUserLoggedIn, setUserLoggedState] = useState(true);
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

  const handleClick = () => {
    setUserLoggedState(!isUserLoggedIn);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me to toggle logged in state</button>
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
