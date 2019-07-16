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
  `;

  const ActionText = styled.span`
    color: #B12704!important;
    font-size: 17px!important;
    line-height: 1.255!important;
    font-family: EmberRg, Arial, sans-serif;
  `;

  const Price = styled.span``;
  const HR = styled.hr``;
  const Bullets = styled.ul`
    font-family: EmberRg, Arial, sans-serif;
  `;
  const Point = styled.li``;

  return (
    <DetailsDiv>
      <DetailsHead productTitle={props.data.productTitle}/>
      <HR />
      <Price>
        Price: <ActionText>${props.data.price}</ActionText>FREE Shipping on orders over $25 shipped by Amazon or get Fast, Free Shipping with Amazon Prime & FREE Returns
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
