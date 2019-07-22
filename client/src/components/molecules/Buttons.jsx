import React from 'react';
import styled, {css} from 'styled-components';
import {CartButtonBase, 
        CartButtonInner,
        CartIcon,
        ButtonText,
        BuyButtonBase,
        BuyButtonInner,
        NowIcon} from '../atoms/ButtonElements.jsx';

export default function PurchaseButton(props){
  return (
    <React.Fragment>
      {props.type === 'cart' ? (
        <CartButtonBase>
          <CartButtonInner onClick={props.clickHandler}>
            <CartIcon />
            <ButtonText>Add to Cart</ButtonText>
          </CartButtonInner>
        </CartButtonBase>
      ) : (
        <BuyButtonBase>
          <BuyButtonInner onClick={props.clickHandler}>
            <NowIcon />
            <ButtonText>Buy Now</ButtonText>
          </BuyButtonInner>
        </BuyButtonBase>
      )}
    </React.Fragment>
  )
}