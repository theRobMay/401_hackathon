import React, { useEffect, useState } from "react";
import './App.css';
import Articles from "./articles";

function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://hn.algolia.com/api/v1/search?query=`+ search)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.hits);
            });
        }, [search]);
    

  useEffect(() => {
    console.log("updated", articles);
  }, [articles]);


  return (
    <div className="App">
      <h4>HN</h4>
        <div className="appHeader">
            <input
                type="text"
                value={search}
                onChange={event => setSearch(event.target.value)}/>
      <ul>
          {articles.map(article => {
              return <Articles data={article}/>
          })}
      </ul>
        </div>
    </div>
  );
}

export default App;
