import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function DetailsHead(props){
  const Title = styled.h2`
    color: #555;
    font-size: 21px;
    line-height: 1.3;
  `
  return (
    <React.Fragment>
    <Title>{props.productTitle}</Title>
    <img src="http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/images/CustomerResponse.png" />
    </React.Fragment>
  )
}