import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import PurchaseButton from './Buttons.jsx';
import { PrimeShippingCopy } from '../atoms/Copy.jsx';

export default function ButtonBox (){
  const ButtonBox = styled.div`
    border-radius: 4px;
    border: 1px #ddd solid;
    margin-top: 14px;
  `;

  return (
    <ButtonBox>
      <PrimeShippingCopy />
      <PurchaseButton type={"cart"} />
      <PurchaseButton type={"BuyNow"} />
    </ButtonBox>
  )
}