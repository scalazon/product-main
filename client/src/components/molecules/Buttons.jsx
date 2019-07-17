import React from 'react';
import styled, {css} from 'styled-components';
import {CartButtonBase, 
        CartButtonInner,
        CartIcon,
        BuyButtonBase,
        BuyButtonInner,
        NowIcon,
        ButtonText} from '../atoms/ButtonElements.jsx';

export default function PurchaseButton(props){
  return (
    <React.Fragment>
      {props.type === 'cart' ? (
        <CartButtonBase>
          <CartButtonInner>
            <CartIcon />
            <ButtonText>Add to Cart</ButtonText>
          </CartButtonInner>
        </CartButtonBase>
      ) : (
        <BuyButtonBase>
          <BuyButtonInner>
            <NowIcon />
            <ButtonText>Buy Now</ButtonText>
          </BuyButtonInner>
        </BuyButtonBase>
      )}
    </React.Fragment>
  )
}