import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ImgColDiv = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  width: 40px;
`;
 const Thumbnail = styled.img`
  height: 40px;
  border-radius: 3px;
  border-width: 1px;
  border-style: solid;
  border-color: #ADB1B8 #A2A6AC #8D9096;
  margin: 5px 0;
`;

 const SelectedThumbnail = styled.img`
  height: 40px;
  border-radius: 3px;
  border: 1px solid #e77600;
  box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
  margin: 5px 0;
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
            <Thumbnail
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