import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import StarRatings from 'react-star-ratings';

export default function DetailsHead(props){
  const Title = styled.h2`
    color: #222;
    font-size: 21px;
    line-height: 1.3;
    margin-bottom: 0;
  `

  const TinyImg = styled.img`
    width: 400px;
    height: auto;
    position: relative;
    left: -4px;
  `;

  return (
    <React.Fragment>
    <Title>{props.productTitle}</Title>
    <StarRatings
      rating={3.3}
      starRatedColor="#ed9220"
      starEmptyColor={"#fff"}
      starDimension={'18px'}
      starSpacing={'1px'}
      numberOfStars={5}
      name='titleRating'
    /><span><a href="#">345 customer reviews</a>  | <a href="#">25 answered questions</a></span>
    </React.Fragment>
  )
}