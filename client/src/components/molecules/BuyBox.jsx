import React, {Component} from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { ActionText, Row, QuantitySelect } from '../atoms/General.jsx';
import { ShippingOfferCopy } from '../atoms/BuyBoxCopy.jsx';
import { Box, MainBox, InnerBox } from '../atoms/BuyBoxDivs.jsx';
import DeliverTo from '../atoms/DeliverTo.jsx';
import ButtonBox from './ButtonBox.jsx';

export default function BuyBox (props){
  return (
    <Box>
      <Row>
        <span>
          <strong>Buy New</strong>
        </span>
        <ActionText>${props.price || '420.69'}</ActionText>
      </Row>
      <InnerBox>
        <Row>
          <QuantitySelect />
        </Row>
        <Row>
          <ActionText>Only 4 left in stock - order soon.</ActionText>
        </Row>
        <ShippingOfferCopy />
        <ButtonBox />
        <DeliverTo />
      </InnerBox>
    </Box>
  )
}