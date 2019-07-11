import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function DetailsHead(props){
  return (
    <h1>{props.productTitle}</h1>
  )
}