import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import {SelectedThumbnail, UnselectedThumbnail} from '../atoms/Thumbnails.jsx';

const ImgColDiv = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  width: 40px;
`;

export default function ImageCol(props){
  return (
      <ImgColDiv>
        {props.imgURLs.map((imgURL, idx)=> (
          (imgURL === props.mainImg) ? (
            <SelectedThumbnail
              key={props.ASIN + 'thumbnail' + idx}
              src={`https://hackmazon-images.s3.amazonaws.com/Images/${imgURL}`}
            />
          ):(
            <UnselectedThumbnail
              key={props.ASIN + 'thumbnail' + idx}
              src={`https://hackmazon-images.s3.amazonaws.com/Images/${imgURL}`}
              id={imgURL}
              onMouseOver={props.onHover}
            />
          )
        ))}
      </ImgColDiv>
    )
}