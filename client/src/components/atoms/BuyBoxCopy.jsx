import React from 'react';
import styled, {css} from 'styled-components';

export function PrimeShippingCopy(){
  const ShippingCopyDiv = styled.div`
    margin-bottom: 14px !important;
    border-radius: 4px !important;
    padding: 10px 14px !important;
    background-color: #d9f2fb !important;
    border: #d9f2fb !important;
    font-size: 12px !important;
    line-height: 19px !important;
  `;

  return (
    <ShippingCopyDiv>
      <img src="http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/images/Prime_Logo_Transparent_cropped._CB504781143_.png"></img>
      <p>
        <b>Enjoy fast, FREE delivery, exclusive deals and Award-Winning movies & TV shows with Prime</b><br />
        <a>Click here</a> and start saving today with
        <b>Fast, FREE Delivery</b>
      </p>
    </ShippingCopyDiv>
  )
}

export function ShippingOfferCopy(){
  const ShippingCopyDiv = styled.div`
    margin-top: 10px !important;
    border: #d9f2fb !important;
    font-size: 13px !important;
    line-height: 19px !important;
    border-bottom: 1px solid #ddd !important;
    border-top: 1px solid #ddd !important;
  `;

  const CountDown = styled.span`
    color: #007600!important;
  `;

  return (
    <ShippingCopyDiv>
      <p><a href="#">FREE Shipping</a>  on orders over $25 shipped by Amazon or get Fast, Free Shipping with <a href="#">Amazon Prime</a> & <a href="#">FREE Returns</a></p>
      <p><b>Want it Friday, July 19?</b> Order within <CountDown>20 hrs 7 mins</CountDown> and choose <b>Two-Day Shipping</b> at checkout. <a href="#">Details</a></p>
    </ShippingCopyDiv>
  )
}

