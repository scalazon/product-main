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
        {props.data.imgURLs.map((imgURL, idx)=> (
          <Thumbnail key={props.data.ASIN + 'thumbnail' + idx} src={`https://hackmazon-images.s3.amazonaws.com/Images/${imgURL}`} />
        ))}
      </ImgColDiv>
    )
}