import React, {Component} from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { ActionText, Row, QuantitySelect } from '../atoms/General.jsx';
import { ShippingOfferCopy } from '../atoms/Copy.jsx';
import ButtonBox from './ButtonBox.jsx';

export default class BuyBox extends Component   {
  constructor(props){
    super(props);
  }

  render(){
    const BoxStyles = createGlobalStyle`
      font-size: 13px;
      font-family: EmberRg, Arial, sans-serif;
    `
    const Box = styled.div`
      border-radius: 4px;
      border: 1px #ddd solid;
      background-color: #fff;
      width: 270px;
      height: auto;
      max-height: 680px;
      padding: 14px 18px;
      float: right;
      font-size: 13px;
      font-family: EmberRg, Arial, sans-serif;
    `;

    const InnerMain = styled.div`
      display: block;
      width: 100%;
      background-color: #fff;
      position: relative;
      top: -8px;
    `;

    const DeliverTo = styled.div`
      margin-top: 25px;
      font-size: 12px!important;
      line-height: 1.5!important;
      padding-left: 6px;
    `;

    return (
      <Box>
        <BoxStyles />
        <Row>
          <span>
            <strong>Buy New</strong>
          </span>
          <ActionText>$420.69</ActionText>
        </Row>
        <InnerMain>
          <Row>
              <QuantitySelect />
          </Row>
          <Row>
              <ActionText>Only 4 left in stock - order soon.</ActionText>
          </Row>
          <ShippingOfferCopy />
          <ButtonBox />
          <DeliverTo>
            <img src="http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/images/DeliveryStaticPackard-pin.png" />&nbsp;&nbsp;&nbsp;
            <a href="#">Deliver to Austin</a>
          </DeliverTo>
        </InnerMain>
      </Box>
    )
  }
}