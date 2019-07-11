import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import Thumbnail from './Thumbnail.jsx';

const ImgColDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100px;
`
 const Thumbnail = styled.img`
   width: 40px;
   height: 40px;
 `

export default function ImageCol(props){
  return (
      <ImgColDiv>
        <Thumbnail src="https://hackmazon-images.s3.amazonaws.com/Images/B002WVJA5G_1.jpg" />
      </ImgColDiv>
    )
}