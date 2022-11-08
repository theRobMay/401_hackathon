import React from "react";
import "./App.css";

export default function Articles(props){
    return(
      <li className={"articleList"}>
          <h4 className={"articleTitle"}>{props.data.title} <a href={props.data.url} target="_blank" rel="noopener noreferrer">({props.data.url})</a>
          </h4>
          <p className={"articlePoints"}>Points: {props.data.points} | Author: {props.data.author}</p>


      </li>
    );
};