import React, {Component} from 'react';
import styled from 'styled-components';
import ImageCol from './ImageCol.jsx';
import MainImg from './MainImg.jsx';
import {ImgWidthBuffer, ImageDiv} from '../atoms/ImageContainerElements.jsx';


export default class ImageContainer extends Component {
  constructor(props){
    super(props);
    this.imagesURL = 'https://hackmazon-images.s3.amazonaws.com/Images/';
    // this.data = props.data;
    this.imgURLs = props.data.imgURLs;

    this.ASIN = props.data.ASIN;
    this.state = {
      mainImg: this.imgURLs[0],
      data: props.data
    }
    this.handleThumbnailHover = this.handleThumbnailHover.bind(this);
  }

  handleThumbnailHover(e){
    const mainImg = e.target.id;
    this.setState({mainImg});
  }

  render(){
    console.log(this.data);
    return (
      <React.Fragment>
        <ImageCol
          ASIN={this.ASIN}
          imgURLs={this.imgURLs}
          mainImg={this.state.mainImg}
          onHover={this.handleThumbnailHover}
        />
        <img
          id="HiddenImg"
          src={`https://hackmazon-images.s3.amazonaws.com/Images/${this.state.mainImg}`}
          style={{display: 'none'}}
          onLoad={(e) => {
            this.setState({
              bigHeight: e.target.height,
              bigWidth: e.target.width
            })
          }}
        />
        <ImgWidthBuffer>
        {this.state.bigWidth ? (
          <MainImg
            bigWidth={this.state.bigWidth}
            bigHeight={this.state.bigHeight}
            mainImg={this.state.mainImg} />
          ) : (
          <MainImg
            bigWidth={1000}
            bigHeight={1000}
            mainImg={this.state.mainImg} />
          )

        }
        </ImgWidthBuffer>
      </React.Fragment>
    )
  }
}
