import React from 'react';
import { Title } from '../atoms/General.jsx';
import CustomerResponse from '../atoms/CustomerResponse.jsx';

export default function DetailsHead(props){
  return (
    <React.Fragment>
    <Title>{props.productTitle}</Title>
    <CustomerResponse
      rating={props.rating || null}
      reviewCount = {props.reviewCount || null}
      questionCount = {props.questionCount || null}
    />
    </React.Fragment>
  )
}