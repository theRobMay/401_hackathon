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
      <div className="default">
        <div className="container">
            <header className="searchHeader_container">
                <div className="searchHeader_search">
                    <span className="searchHeader_logo">
                        <a href="https://news.ycombinator.com">
                            <img src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" alt="HackerNewsLogo"></img>
                        </a>
                    </span>
                        <div className="searchHeader_label">
                            <h2>Search</h2>
                            <h2>Hacker News</h2>
                        </div>
                    <span>
                        <button className ="glass">
                            <img className ="magnifying" src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-orange.png" alt="magnifying"></img>
                        </button>
                    </span>
                        <input
                            className = "searchInput"
                            type="search"
                            placeholder="Search stories by title, url or author"
                            onChange={event => setSearch(event.target.value)}
                            value= {search}/>
                </div>
            </header>
        </div>

        <div className="appBody">

            <ul>
            {articles.map(article => {
              return <Articles data={article}/>
            })}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
