import styled, { css } from 'styled-components';
import React from 'react';

const ThumbNail = css`
  height: 40px;
  border-radius: 3px;
  border-width: 1px;
  margin: 5px 0;
  position: relative;
  left: 15px;
`;

export const UnselectedThumbnail = styled.img`
  ${ThumbNail}
  border-style: solid;
  border-color: #ADB1B8 #A2A6AC #8D9096;
`;

export const SelectedThumbnail = styled.img`
  ${ThumbNail}
  border: 1px solid #e77600;
  box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
`;

export const ImgWidthBuffer = styled.div`
  width: 40vw;
  min-width: 285px;
  max-width: 745px;
  height: auto;
  margin: 25px;
  position: relative;
  top: -20px;
  z-index: 1000;
`;

export const ImgColDiv = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  width: 40px;
`;

export const ImageDiv = styled.div`
  display: inline-flex;
`;