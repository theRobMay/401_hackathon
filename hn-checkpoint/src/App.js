import React, { useEffect, useState } from "react";
import './App.css';
import Articles from "./articles";

// import Dropdown from 'react-bootstrap/Dropdown';




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
                        <span className="searchHeader_label">
                            <h2>Search</h2>
                            <h2>Hacker News</h2>
                        </span>
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
                            value = {search}></input>

                    <span>
                        <img className="fa fa-cog"  src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/000000/external-setting-basic-user-interface-anggara-basic-outline-anggara-putra.png" alt="settings"></img>
                    </span>
                    <span>
                            <p className="settings">Settings</p>
                    </span>

                </div>
            </header>

        </div>


        <div className="appBody">
            <div className = "dropDownMenuContainer">
                <span className="dropDownSearch">
                    Search
                    {/*This is where the dropdowns piece goes, i need help with this */}
                </span>
            </div>

            <ul className="articles">
            {articles.map(article => {
              return <Articles data={article}/>
            })}
            </ul>
        </div>
      </div>

      <footer className="footer_container">
            <ul>
                <li className ="footer">
                    <button className="about" >About</button>
                        <li className="Interpunct"> · </li>
                    <button className="settingFooter" >Setting</button>
                        <li className="Interpunct"> · </li>
                    <button className="help" >Help</button>
                        <li className="Interpunct"> · </li>
                    <button className="api" >API Documentation</button>
                        <li className="Interpunct"> · </li>
                    <button className="hackerNews" >Hacker News</button>
                        <li className="Interpunct"> · </li>
                    <button className="fork" >Fork/Contribute</button>
                        <li className="Interpunct"> · </li>
                    <button className="coolApps" >Cool Apps</button>
                </li>
            </ul>
        </footer>
    </div>
  );
}

export default App;
