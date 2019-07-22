import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ActionText, HR } from '../atoms/General.jsx';
import Bullets from '../atoms/Bullets.jsx';
import DetailsHead from './DetailsHead.jsx';

export default function Details(props){
  const DetailsDiv = styled.div`
    min-width: 370px;
    width: 36vw;
    max-width: 960px;
    margin: 10px 63PX 0 15PX; 
    line-height: 19px;
    z-index: 0;
  `;
    // padding-right: 63px;

  return (
    <DetailsDiv>
      <DetailsHead
        productTitle={props.data.productTitle}
        reviewCount={props.stats.reviewCount}
        rating={props.stats.overall}
        questionCount={props.questionCount}
      />
      <HR />
      Price: <ActionText>${props.data.price} </ActionText><a href="#">FREE Shipping</a> on orders over $25 shipped by Amazon or get Fast, Free Shipping with <a href="#">Amazon Prime</a> & <a href="#">FREE Returns</a>
      <Bullets 
        ASIN={props.data.ASIN}
        bulletPoints={props.data.bulletPoints}
      />
    </DetailsDiv>
  )
}
