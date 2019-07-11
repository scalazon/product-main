import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DetailsHead from './DetailsHead.jsx';
import CustomerResponse from './CustomerResponse.jsx';
import styled from 'styled-components';

export default function Details(props){
  const DetailsDiv = styled.div``;
  const Price = styled.span``;
  const HR = styled.hr``;
  const Bullets = styled.ul``;
  const Point = styled.li``;

  return (
    <DetailsDiv>
      <DetailsHead />
      <HR />
      <Price>
        {props.data.price}
      </Price>
      <Bullets>
      {props.bulletPoints.map((point, idx) => {
        <Point key={props.data.ASIN + 'bullet' + idx}>{point}</Point>
      })}
      </Bullets>
    </DetailsDiv>
  )
}