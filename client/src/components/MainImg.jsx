import React, {Component} from 'react';
import styled from 'styled-components';
import ReactImageMagnify from 'react-image-magnify';

export default function MainImg (props) {
   const ImgContainer = styled.div`
     width: 30vw;
     min-width: 285px;
     height: auto;
     margin: 25px;
   `;

  return (
    <ImgContainer>
      <ReactImageMagnify {...{
        smallImage: {
          isFluidWidth: true,
           src: `https://hackmazon-images.s3.amazonaws.com/Images/${props.mainImg}`,
          lensStyle: {
            background: 'hsla(0, 0%, 100%, .3)',
            border: '1px solid #ccc'
          },
          imageStyle: {
           
          }
        },
        largeImage: {
          src: `https://hackmazon-images.s3.amazonaws.com/Images/${props.mainImg}`,
          width: 1200,
          height: 1800
        },
        shouldUsePositiveSpaceLens: true
      }} />
    </ImgContainer>
  );
}