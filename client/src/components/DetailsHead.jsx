import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function DetailsHead(props){
  const Title = styled.h2`
    color: #555;
    font-size: 21px!important;
    line-height: 1.3!important;
  `
  return (
    <Title>{props.productTitle}</Title>
  )
}