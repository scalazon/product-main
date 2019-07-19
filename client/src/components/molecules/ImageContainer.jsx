import React, {Component} from 'react';
import styled from 'styled-components';
import ImageCol from './ImageCol.jsx';
import MainImg from './MainImg.jsx';
import {ImgWidthBuffer, ImageDiv} from '../atoms/ImageContainerElements.jsx';

export default class ImageContainer extends Component {
  constructor(props){
    super(props);
    this.imagesURL = 'https://hackmazon.s3.amazonaws.com/Images/';
    this.state = {
      mainImg: this.props.data.imgURLs[0],
      mainImgDimensions: this.props.data.imgDimensions[0]
    }
    this.handleThumbnailHover = this.handleThumbnailHover.bind(this);
  }

  componentDidUpdate(prevProps){
    if (this.props.data.imgURLs[0] !== prevProps.data.imgURLs[0]){
      this.setState({mainImg: this.props.data.imgURLs[0]});
    }
  }

  handleThumbnailHover(e){
    const mainImg = e.target.id;
    const imgIdx = this.props.data.imgURLs.indexOf(mainImg);
    const mainImgDimensions = this.props.data.imgDimensions[imgIdx];
    this.setState({mainImg, mainImgDimensions});
  }

  render(){
    return (
      <React.Fragment>
        <ImageCol
          ASIN={this.props.data.ASIN}
          imgURLs={this.props.data.imgURLs}
          mainImg={this.state.mainImg}
          onHover={this.handleThumbnailHover}
        />
        <ImgWidthBuffer>
        <MainImg
          bigWidth={this.state.mainImgDimensions.width}
          bigHeight={this.state.mainImgDimensions.height}
          mainImg={this.state.mainImg} />
        </ImgWidthBuffer>
      </React.Fragment>
    )
  }
}
