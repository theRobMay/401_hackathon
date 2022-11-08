import React, { useEffect, useState } from "react";
import './App.css';
import Articles from "./articles";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






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

                        <input className = "searchInput" type="search" placeholder="Search stories by title, url or author" onChange={event => setSearch(event.target.value)} value = {search}></input>

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

            <p className={"filterBar"}>Search<Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-label">Stories</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Stories"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box> by
            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-label">Popularity</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="popularity"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box> for
            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-label">All Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box></p>
            <ul>

            <div className = "dropDownMenuContainer">
                <span className="dropDownSearch">
                    Search

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
