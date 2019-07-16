import React, {Component} from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import {PlayArrow} from 'styled-icons/material/PlayArrow';
import {Cart} from 'styled-icons/boxicons-regular/Cart';

export default class BuyBox extends Component   {
  constructor(props){
    super(props);
  }

  render(){
    const BorderBox = createGlobalStyle`
      box-sizing: border-box;
    `
    const Box = styled.div`
      border-radius: 4px;
      border: 1px #ddd solid;
      background-color: #fff;
      width: 270px;
      padding: 14px 18px;
      float: right;
    `;

    const Row = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    // const QtyPriceRow = styled.div`
    // `;

    const Qty = styled.div`
      width: 40%;
      border-radius: 4px;
      border: 1px #ddd solid;
    `;

    const Price = styled.div`
      width: 60%;
      border-radius: 4px;
      border: 1px #ddd solid;
    `;

    const InStock = styled.div`
    `;

    const InnerMain = styled.div`
      box-sizing: border-box;
      display: block;
      width: 100%;
      border-radius: 4px;
      border: 1px #ddd solid;
      background-color: #fff;
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

      // background: #ed9220;
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

    const ButtonBox = styled.div``;

    const SameDayShipCopy = styled.div``;

    const DeliverTo = styled.div``;

    return (
      <Box>
        <BorderBox />
        <Row>
          <span>
            <strong>Buy New</strong>
          </span>
        </Row>
        <Row>
            <p>
              Qty: 
                <select>
                  {Array.from('12345').map(i=>(<option key={'qty_' + (i)}>{i}</option>))}
                </select>
            </p>
        </Row>
        <InStock></InStock>
        <InnerMain>
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
        </InnerMain>
      </Box>
    )
  }
}