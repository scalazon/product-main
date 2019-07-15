import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DetailsHead from './DetailsHead.jsx';
import CustomerResponse from './CustomerResponse.jsx';
import styled from 'styled-components';

export default function Details(props){
  const DetailsDiv = styled.div`
  padding-left: 30px;
  padding-left: 30px;
  box-sizing: content-box !important;
  `;

   const Price = styled.span``;
   const HR = styled.hr``;
   const Bullets = styled.ul``;
   const Point = styled.li``;

  return (
    <DetailsDiv>
      <DetailsHead productTitle={props.data.productTitle}/>
      <HR />
      <Price>
        {props.data.price}
      </Price>
      <Bullets>
        {props.data.bulletPoints.map((point, idx) => (
          (point !== '') ? (
          <Point key={props.data.ASIN + 'bullet' + idx}>{point}</Point>
          ) : (null)
        ))}
      </Bullets>
    </DetailsDiv>
  )
}
