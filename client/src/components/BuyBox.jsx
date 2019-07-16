import React, {Component} from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import ButtonBox from './ButtonBox.jsx';

export default class BuyBox extends Component   {
  constructor(props){
    super(props);
  }

  render(){
    const BoxStyles = createGlobalStyle`
      box-sizing: border-box;
      font-size: 13px;
      font-family: EmberRg, Arial, sans-serif;
    `
    const Box = styled.div`
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px #ddd solid;
      background-color: #fff;
      width: 270px;
      padding: 14px 18px;
      float: right;
      font-size: 13px;
      font-family: EmberRg, Arial, sans-serif;
    `;

    const Row = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    const ActionText = styled.span`
      color: #B12704!important;
      font-size: 17px!important;
      line-height: 1.255!important;
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
      box-sizing: border-box;
      display: block;
      width: 100%;
      background-color: #fff;
      position: relative;
      top: -8px;
    `;

    const SameDayShipCopy = styled.div``;

    const DeliverTo = styled.div``;

    return (
      <Box>
        <BoxStyles />
        <Row>
          <span>
            <strong>Buy New</strong>
          </span>
          <ActionText>$420.69</ActionText>
        </Row>
        <InStock></InStock>
        <InnerMain>
          <Row>
              <span>
                Qty:&nbsp;
                  <select>
                    {Array.from('12345').map(i=>(<option key={'qty_' + (i)}>{i}</option>))}
                  </select>
              </span>
          </Row>
          <Row>
              <span>
                & <strong>FREE Shipping.</strong> <a href="#">Details</a>
              </span>
          </Row>
          <Row>
              <ActionText>Only 4 left in stock - order soon.</ActionText>
          </Row>
          <ButtonBox />
        </InnerMain>
      </Box>
    )
  }
}