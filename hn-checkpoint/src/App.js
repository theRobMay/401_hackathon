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
                            <img className="hackerNewsImage" src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" alt="HackerNewsLogo"></img>
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

            <p className={"filterBar"}>Search<Box sx={{ minWidth: 100 }}>
                <FormControl className={"filterBox"} sx={{ m: 1, minWidth: 100, marginRight: 25 }} size="small">
                    <InputLabel id="demo-simple-select-label">Stories</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Stories"
                    >
                        {/*<MenuItem value="">*/}
                        {/*    <em>None</em>*/}
                        {/*</MenuItem>*/}
                        <MenuItem value={10}>All</MenuItem>
                        <MenuItem value={20}>Stories</MenuItem>
                        <MenuItem value={30}>Comments</MenuItem>
                    </Select>
                </FormControl>
            </Box> by
            <Box sx={{ minWidth: 100 }}>
                <FormControl className={"filterBox"} sx={{ m: 1, minWidth: 100, marginRight: 25 }} size="small">
                    <InputLabel id="demo-simple-select-label">Popularity</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="popularity"
                    >
                        {/*<MenuItem value="">*/}
                        {/*    <em>None</em>*/}
                        {/*</MenuItem>*/}
                        <MenuItem value={10}>Popularity</MenuItem>
                        <MenuItem value={20}>Date</MenuItem>

                    </Select>
                </FormControl>
            </Box> for
            <Box sx={{ minWidth: 100 }}>
                <FormControl className={"filterBox"} sx={{ m: 1, minWidth: 100 }} size="small">
                    <InputLabel id="demo-simple-select-label">All Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        {/*<MenuItem value="">*/}
                        {/*    <em>None</em>*/}
                        {/*</MenuItem>*/}
                        <MenuItem value={10}>All time</MenuItem>
                        <MenuItem value={20}>Last 24h</MenuItem>
                        <MenuItem value={30}>Past Week</MenuItem>
                        <MenuItem value={30}>Past Month</MenuItem>
                        <MenuItem value={30}>Past Year</MenuItem>
                        <MenuItem value={30}>Custom range</MenuItem>
                    </Select>
                </FormControl>
            </Box>
           
           
                <div className="shareResults">
                    <p>949 results (0.001 seconds)</p>
                        <img src="https://img.icons8.com/material-outlined/24/000000/share.png" alt="share"/>
                </div>
            </p>



            
            {/*<div className = "dropDownMenuContainer">*/}

            {/*    <span className="dropDownSearch">*/}

            {/*    </span>*/}
            {/*        </div>*/}

                    <ul className="articles">
                        {articles.map(article => {
                            return <Articles data={article}/>
                        })
                        }
                    </ul>
                </div>
            </div>

            <div className="squares">
                <square>1</square>
                <square>2</square>
                <square>3</square>
                <square>4</square>
                <square>5</square>
                <square>6</square>
                <square>></square>
            </div>


      <footer className="footer_container">
            <ul>
                <li className ="footer">
                    <button className="about" >About</button>

                        <li className="Interpunct"> ?? </li>
                        <button className="settingFooter" >Setting</button>
                        <li className="Interpunct"> ?? </li>
                        <button className="help" >Help</button>
                        <li className="Interpunct"> ?? </li>
                        <button className="api" >API Documentation</button>
                        <li className="Interpunct"> ?? </li>
                        <button className="hackerNews" >Hacker News</button>
                        <li className="Interpunct"> ?? </li>
                        <button className="fork" >Fork/Contribute</button>
                        <li className="Interpunct"> ?? </li>
                        <button className="coolApps" >Cool Apps</button>
                    </li>
                </ul>
            </footer>
        </div>

            );
}

export default App;
