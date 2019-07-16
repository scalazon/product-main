import React, {Component} from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import {PlayArrow} from 'styled-icons/material/PlayArrow';
import {Cart} from 'styled-icons/boxicons-regular/Cart';

export default class ButtonBox extends Component   {
  constructor(props){
    super(props);
  }

  render(){
    const ActionText = styled.span`
      color: #B12704!important;
      font-size: 17px!important;
      line-height: 1.255!important;
    `;
    
    const ButtonBox = styled.div`
      border-radius: 4px;
      border: 1px #ddd solid;
      margin-top: 14px;
    `;

    const PrimeShippingCopy = styled.div`
      margin-bottom: 14px;
    `;

    const Button = styled.div`
      height: 31px;
      width: 230px;
      box-shadow: 0 1px 0 rgba(255,255,255,.4) inset;
      border-color: #a88734 #9c7e31 #846a29;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      cursor: pointer;
      padding: 0;
      text-align: center;
      text-decoration: none!important;
      vertical-align: middle;
      margin-bottom: 14px;
    `

    const CartButton = styled(Button)`
      background: #f7e0a6;
    `;

    const BuyButton = styled(Button)`
      background: #f2c183;
    `;

    const ButtonInner = styled.span`
      display: block;
      position: relative;
      overflow: hidden;
      height: 29px;
      vertical-align: middle;
      font-family: EmberBd, Arial, sans-serif;
      color: #333;
    `;
    
    const AddToCart = styled(ButtonInner)`
      top: 2px;
      height: 27px;
      border-radius: 3px;
      background: linear-gradient(to bottom,#f5d78e,#eeb933);
      &:hover {
        background: linear-gradient(to bottom,#eed088,#e8b22c);
      }
    `;

    const BuyNow = styled(ButtonInner)`
      top: 2px;
      height: 27px;
      border-radius: 3px;
      background: linear-gradient(to bottom,#e8b97d,#ed9220);
      &:hover {
        background: linear-gradient(to bottom,#e2b378,#e88d1a);
      }
      border-color: #ca7c1b #be751a #a56616;
    `;

    const IconStyle = css`
      height: 25px;
      width: 25px;
      position: absolute;

      left: 2px;
      border-radius: 3px;
      background-color: #333;
      color: #ddd;
    `;

    const SCart = styled(Cart)`
      ${IconStyle}
    `;

    const Action = styled(PlayArrow)`
      ${IconStyle}
    `;

    const ButtonText = styled.span`
      position: relative;
      top: -2px;
    `;

    return (
      <ButtonBox>
        <PrimeShippingCopy>
          Buy Prime, Baby!!!
        </PrimeShippingCopy>
        <CartButton>
          <AddToCart>
            <SCart></SCart>
            <ButtonText>Add to Cart</ButtonText>
          </AddToCart>
        </CartButton>
        <BuyButton>
          <BuyNow>
            <Action></Action>
            <ButtonText>Buy Now</ButtonText>
          </BuyNow>
        </BuyButton>
      </ButtonBox>
    )
  }
}