import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ImageCol from './ImageCol.jsx';


export default function ImageContainer(props){
  const ImageDiv = styled.div`
    display: inline-flex;
    width: 80vw;
  `;

  const MainImage = styled.img`
    flex-shrink: 0;
    min-width: 100%;
    height: auto;
  `;

  return (
    <ImageDiv>
      <ImageCol />
      <MainImage src="https://hackmazon-images.s3.amazonaws.com/Images/B002WVJA5G_1.jpg"/>
    </ImageDiv>
  )
}