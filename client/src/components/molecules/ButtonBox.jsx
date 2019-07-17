import React, {Component} from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import PurchaseButton from './Buttons.jsx';
import ActionText from '../atoms/General.jsx';

export default class ButtonBox extends Component {
  constructor(props){
    super(props);
  }

  render(){

    const PrimeShippingCopy = styled.div`
      margin-bottom: 14px;
      border-radius: 4px;
      padding: 10px 14px!important;
      background-color: #d9f2fb;
      border: #d9f2fb;
      font-size: 12px;
      line-height: 19px;
    `;

    const ButtonBox = styled.div`
      border-radius: 4px;
      border: 1px #ddd solid;
      margin-top: 14px;
    `;

    return (
      <ButtonBox>
        <PrimeShippingCopy>
          <img src="http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/images/Prime_Logo_Transparent_cropped._CB504781143_.png"></img>
          <p>
            <b>Enjoy fast, FREE delivery, exclusive deals and Award-Winning movies & TV shows with Prime</b><br />
            <a>Click here</a> and start saving today with
            <b>Fast, FREE Delivery</b>
          </p>
        </PrimeShippingCopy>
        <PurchaseButton type={"cart"} />
        <PurchaseButton type={"BuyNow"} />
      </ButtonBox>
    )
  }
}