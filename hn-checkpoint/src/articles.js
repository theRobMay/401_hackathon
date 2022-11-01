import React from "react";

export default function Articles(props){
    return(
      <li>
          <h4>{props.data.title}</h4>
          <a href={props.data.url} target="_blank" rel="noopener noreferrer">{props.data.url}</a>
          <p>Points: {props.data.points}</p>
          <p>Author: {props.data.author}</p>


      </li>
    );
};