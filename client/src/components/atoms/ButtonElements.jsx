import React from 'react';
import {PlayArrow} from 'styled-icons/material/PlayArrow';
import {Cart} from 'styled-icons/boxicons-regular/Cart';
import styled, { css } from 'styled-components';
import { Selected } from './General.jsx';

const ButtonBase = styled.div.attrs((props)=>({
  tabIndex: 0
}))`
  height: 31px ;
  width: 230px ;
  box-shadow: 0 1px 0 rgba(255,255,255,.4) inset ;
  border-color: #a88734 #9c7e31 #846a29 ;
  border-radius: 3px ;
  border-style: solid ;
  border-width: 1px ;
  cursor: pointer ;
  padding: 0 ;
  text-align: center ;
  text-decoration: none ;
  vertical-align: middle ;
  margin-bottom: 14px ;
  &:focus-within {
    ${Selected}
  }
`

export const CartButtonBase = styled(ButtonBase)`
  background: #f7e0a6 ;
`;

export const BuyButtonBase = styled(ButtonBase)`
  background: #f2c183 ;
`;

const ButtonInner = styled.span`
  display: block ;
  position: relative ;
  overflow: hidden ;
  height: 29px ;
  vertical-align: middle ;
  font-family: EmberBd, Arial, sans-serif ;
  color: #333 ;
  top: 2px ;
  height: 27px ;
  border-radius: 3px ;
`;
    
export const CartButtonInner = styled(ButtonInner)`
  background: linear-gradient(to bottom,#f5d78e,#eeb933) !important;
  border-color: #a88734 #9c7e31 #846a29 !important;
  &:hover {
    background: linear-gradient(to bottom,#eed088,#e8b22c) !important;
  }
`;

export const BuyButtonInner = styled(ButtonInner)`
  background: linear-gradient(to bottom,#e8b97d,#ed9220) !important;
  border-color: #ca7c1b #be751a #a56616 !important;
  &:hover {
    background: linear-gradient(to bottom,#e2b378,#e88d1a) !important;
  }
`;

const IconStyle = css`
  height: 25px ;
  width: 25px ;
  position: absolute ;

  left: 2px ;
  border-radius: 3px ;
  background-color: #333 ;
  color: #ddd ;
`;

export const CartIcon = styled(Cart)`
  ${IconStyle}
`;

export const NowIcon = styled(PlayArrow)`
  ${IconStyle}
`;

export const ButtonText = styled.span`
  position: relative ;
  top: -2px ;
  user-select: none ;
`;