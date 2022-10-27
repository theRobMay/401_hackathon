import React, { useEffect, useState } from "react";
import './App.css';
import Articles from "./articles";

function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

  const url = `http://hn.algolia.com/api/v1/search?query=`+ search;

  const fetchURL = () => {
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
              setArticles(data.hits);
          });
  };

  useEffect(() => {
    console.log("mounted");
    fetchURL()}, []);

  useEffect(() => {
    console.log("updated", articles);
  }, [articles]);


  return (
    <div className="App">
      <h4>HN</h4>
        <input
            type="search"
            value={search}
            onChange={event => setSearch(event.target.value)}/>
      <ul>
          {articles.map(article => {
              return <Articles data={article}/>
          })}
      </ul>
    </div>
  );
}

export default App;
