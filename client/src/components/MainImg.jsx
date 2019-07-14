import React, {Component} from 'react';
import styled from 'styled-components';
import ReactImageMagnify from 'react-image-magnify';

export default function MainImg (props) {
   const ImgContainer = styled.div`
     width: 30vw;
     min-width: 285px;
     height: auto;
     max-height: 450px;
     margin: 25px;
   `;
     // overflow: hidden;
     // overflow-x: visible;
     // overflow-y: hidden;
    // <div className="fluid__image-container">
    // </div>

  // const MainImage = styled.img`
  //   width: 30vw;
  //   min-width: 285px;
  //   height: auto;
  //   margin: 25px;
  // `;

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
            position: 'relative',
            top: '50%'
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