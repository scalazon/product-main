import React, {Component} from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { ActionText, Row, QuantitySelect } from '../atoms/General.jsx';
import { ShippingOfferCopy } from '../atoms/Copy.jsx';
import { MainBox, InnerBox } from '../atoms/BuyBoxDivs.jsx';
import DeliverTo from '../atoms/DeliverToLocation.jsx';
import ButtonBox from './ButtonBox.jsx';

export default function BuyBox (props){
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
    margin: 0 20px;
  `;

  const InnerMain = styled.div`
    display: block;
    width: 100%;
    background-color: #fff;
    position: relative;
    top: -8px;
  `;

  return (
    <Box>
      <Row>
        <span>
          <strong>Buy New</strong>
        </span>
        <ActionText>{props.price || '$420.69'}</ActionText>
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
        <DeliverTo />
      </InnerMain>
    </Box>
  )
}