import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ImageCol from './ImageCol.jsx'
import MainImage from './MainImage.jsx'

const ImageDiv = styled.div`
  display: inline-flex
`

export default function ImageContainer(props){
  return (
    <ImageDiv>
      <ImageCol />
      <MainImage src="https://hackmazon-images.s3.amazonaws.com/Images/B002WVJA5G_1.jpg"/>
    </ImageDiv>
  )
}