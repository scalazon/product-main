import React, {Component} from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
      width: 206px;
      padding: 14px 18px;
      float: right;
    `;

    const QtyPriceRow = styled.div`
      display: flex;
      justify-content: space-between;
    `;

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
      display: block;
      border-radius: 4px;
      border: 1px #ddd solid;
      background-color: #fff;
      width: 169px;
      padding: 14px 18px;
    `;

    const PrimeShippingCopy = styled.div``;


    const ButtonBox = styled.div``;

    const SameDayShipCopy = styled.div``;

    const DeliverTo = styled.div``;

    return (
      <Box>
        <BorderBox />
        <QtyPriceRow>
          <Qty>
            <p><strong>Buy new</strong></p>
            <p>Qty: 
              <select>
                {Array.from('12345').map(i=>(<option key={'qty_' + (i)}>{i}</option>))}
              </select>
            </p>
          </Qty>
          <Price></Price>
        </QtyPriceRow>
        <InStock></InStock>
        <InnerMain></InnerMain>
      </Box>
    )
  }
}