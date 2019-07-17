import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';

const ImgColDiv = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  width: 40px;
`;

const ThumbNail = css`
  height: 40px;
  border-radius: 3px;
  border-width: 1px;
  margin: 5px 0;
  position: relative;
  left: 15px;
`;

const UnselectedThumbnail = styled.img`
  ${ThumbNail}
  border-style: solid;
  border-color: #ADB1B8 #A2A6AC #8D9096;
`;

const SelectedThumbnail = styled.img`
  ${ThumbNail}
  border: 1px solid #e77600;
  box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
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