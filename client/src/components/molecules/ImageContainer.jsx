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
      mainImg: this.props.data.imgURLs[0]
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
    this.setState({mainImg});
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
        <img
          id="HiddenImg"
          src={this.imagesURL + this.state.mainImg}
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
