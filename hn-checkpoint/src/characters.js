import React, {useState} from "react";

export default function Character(props){
    const [isToggled, setToggle] = useState(false);
    return(
      <li>
          <img src={props.data.image} alt={props.data.name} />
          <h4>{props.data.name}</h4>
          {isToggled && <p>{props.data.status}</p>}
          <button onClick={() => setToggle(!isToggled)}>Spoiler</button>
      </li>
    );
};