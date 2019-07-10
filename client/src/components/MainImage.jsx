import React from 'react';
import ReactDOM from 'react-dom';
import {styled} from 'styled-components';

export default function MainImage(props) {
  return (
    <img src={"https://hackmazon-images.s3.amazonaws.com/Images/" + props.mainImg} />
    )
}