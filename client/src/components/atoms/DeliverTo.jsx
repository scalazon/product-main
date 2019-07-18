import React from 'react';
import styled from 'styled-components';

export default function DeliverTo(){
  const DeliverToDiv = styled.div`
    margin-top: 25px;
    font-size: 12px!important;
    line-height: 1.5!important;
    padding-left: 6px;
  `;

  return (
    <DeliverToDiv>
      <img src="http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/images/DeliveryStaticPackard-pin.png" />&nbsp;&nbsp;&nbsp;
      <a href="#">Deliver to Austin</a>
    </DeliverToDiv>
  )
}
