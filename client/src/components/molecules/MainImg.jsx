import React, {Component} from 'react';
import styled from 'styled-components';
import ReactImageMagnify from 'react-image-magnify';

export default function MainImg (props) {
  const ImgContainer = styled.div`
    width: 40vw;
    min-width: 285px;
    max-width: 800px;
    height: auto;
    margin: 8px 8px;
    position: relative;
    top: -20px;
    z-index: 1000;
  `;
  // const imagesURL = 'https://hackmazon.s3.amazonaws.com/Images/';
  const imagesURL = '';

  let bigHeight = props.bigHeight;
  let bigWidth = props.bigWidth;

  return (
    <ImgContainer>
      <ReactImageMagnify {...{
        smallImage: {
          isFluidWidth: true,
          src: (imagesURL + props.mainImg),
          lensStyle: {
            background: 'hsla(0, 0%, 100%, .3)',
            border: '1px solid #ccc'
          },
          imageStyle: {
            maxHeight: '680px'
          }
        },
        largeImage: {
          src: (imagesURL + props.mainImg),
          width: bigWidth,
          height: bigHeight
        },
        enlargedImageContainerStyle: {
          width: '50vw',
          height: '30vh',
          backgroundColor: 'white'
        },
        shouldUsePositiveSpaceLens: true
      }} />
    </ImgContainer>
  );
}