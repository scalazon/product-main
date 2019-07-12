import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ImageCol from './ImageCol.jsx';


export default function ImageContainer(props){
  const ImageDiv = styled.div`
    display: inline-flex;
  `;

  const MainImage = styled.img`
    width: 30vw;
    min-width: 285px;
    height: auto;
    margin: 25px;
  `;

  return (
    <ImageDiv>
      <ImageCol
        data={props.data}
        mainImg={props.mainImg}
        onHover={props.onHover}
      />
      <MainImage src={`https://hackmazon-images.s3.amazonaws.com/Images/${props.mainImg}`}/>
    </ImageDiv>
  )
}