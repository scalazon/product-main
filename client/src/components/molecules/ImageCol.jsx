import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import {SelectedThumbnail, UnselectedThumbnail, ImgColDiv} from '../atoms/ImageContainerElements.jsx';

export default function ImageCol(props){
  const thumbnailURL = 'https://hackmazon-thumbs.s3.amazonaws.com/Images/'
  return (
    <ImgColDiv>
      {props.imgURLs.map((imgURL, idx)=> (
        (imgURL === props.mainImg) ? (
          <SelectedThumbnail
            key={props.ASIN + 'thumbnail' + idx}
            src={thumbnailURL + imgURL}
            idx={idx}
          />
        ):(
          <UnselectedThumbnail
            key={props.ASIN + 'thumbnail' + idx}
            src={thumbnailURL + imgURL}
            id={imgURL}
            idx={idx}
            onMouseOver={props.onHover}
          />
        )
      ))}
    </ImgColDiv>
  )
}