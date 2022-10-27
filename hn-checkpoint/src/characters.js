import React from "react";

export default function Character(props){
    return(
      <li>
          <img src={props.data.image} alt={props.data.name} />
          <h4>{props.data.name}</h4>
      </li>
    );
}