import React, {useState} from "react";

export default function Articles(props){
    const [isToggled, setToggle] = useState(false);
    return(
      <li>
          <h4>{props.data.title}</h4>
          <p>Author: {props.data.author}</p>
          <p>Points: {props.data.points}</p>
          {isToggled && <p>Check out <a href={props.data.url} target="_blank" rel="noopener noreferrer">the Article here</a>.</p>}
          <button onClick={() => setToggle(!isToggled)}>Link is here</button>
      </li>
    );
};