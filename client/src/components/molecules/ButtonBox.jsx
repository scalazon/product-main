import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import PurchaseButton from './Buttons.jsx';
import { PrimeShippingCopy } from '../atoms/BuyBoxCopy.jsx';

export default function ButtonBox (props){
  const ButtonBox = styled.div`
    border-radius: 4px;
    border: 1px #ddd solid;
    margin-top: 14px;
  `;

  const handleClick = (e) => {
    const q = document.getElementById('quantitySelect').value;
    console.log('q');
  }

  return (
    <ButtonBox>
      <PrimeShippingCopy />
      <PurchaseButton
        type={"cart"}
        clickHandler={props.clickHandler} />
      <PurchaseButton type={"BuyNow"} />
    </ButtonBox>
  )
}