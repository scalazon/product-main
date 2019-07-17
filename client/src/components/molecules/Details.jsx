import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DetailsHead from './DetailsHead.jsx';
import CustomerResponse from './CustomerResponse.jsx';
import styled from 'styled-components';

export default function Details(props){
  const DetailsDiv = styled.div`
    min-width: 370px;
    width: 40vw;
    max-width: 980px;
    padding-right: 63px;
    line-height: 19px;
    z-index: 0;
  `;

  const ActionText = styled.span`
    color: #B12704!important;
    font-size: 17px!important;
    line-height: 1.255!important;
    font-family: EmberRg, Arial, sans-serif;
  `;

  const Price = styled.span``;

  const HR = styled.hr`
    margin: 2px;
    color: #333;
  `;

  const Bullets = styled.ul`
    font-family: EmberRg, Arial, sans-serif;
    padding: 0 15px;
  `;
  const Point = styled.li``;

  return (
    <DetailsDiv>
      <DetailsHead productTitle={props.data.productTitle}/>
      <HR />
      <Price>
        Price: <ActionText>${props.data.price} </ActionText><a href="#">FREE Shipping</a> on orders over $25 shipped by Amazon or get Fast, Free Shipping with <a href="#">Amazon Prime</a> & <a href="#">FREE Returns</a>
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
