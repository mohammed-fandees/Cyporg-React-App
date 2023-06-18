import React from 'react';
import "./wedget.css";

import { Title } from "../index";

export default function Wedget(props) {
  return (
    <div className={`wedget rounded-pill ${props.customClass}`}>
      <Title>
        <span className='text-white text-decoration-underline'>{props.titleSpanOne} </span>
        <span className='custom'>{props.titleSpanTwo}</span>
      </Title>
      {props.children}
    </div>
  )
}
