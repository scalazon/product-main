import React, {Component} from 'react';
import styled from 'styled-components';

export default function Bullets(props){
  const Bullets = styled.ul`
    font-family: EmberRg, Arial, sans-serif;
    padding: 0 15px;
    color: #222;
  `;

  const Point = styled.li``;

  return (
    <Bullets>
      {props.bulletPoints.map((point, idx) => (
        (point !== '') ? (
        <Point key={props.ASIN + 'bullet' + idx}>{point}</Point>
        ) : (null)
      ))}
    </Bullets>
  )

}