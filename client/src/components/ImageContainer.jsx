import React, {Component} from 'react';
import styled from 'styled-components';
import ImageCol from './ImageCol.jsx';
import MainImg from './MainImg.jsx';


export default class ImageContainer extends Component {
  constructor(props){
    super(props);
    this.imagesURL = 'https://hackmazon-images.s3.amazonaws.com/Images/';
    this.imgURLs = props.data.imgURLs;
    
    this.ASIN = props.data.ASIN;
    this.state = {
      mainImg: this.imgURLs[0],
    }
    this.handleThumbnailHover = this.handleThumbnailHover.bind(this);
  }

  handleThumbnailHover(e){
    const mainImg = e.target.id;
    this.setState({mainImg});
  }


  render(){
    const ImgWidthBuffer = styled.div`
      width: 40vw;
      min-width: 285px;
      max-width: 745px;
      height: auto;
      margin: 25px;
      position: relative;
      top: -20px;
    `;
    
    const ImageDiv = styled.div`
      display: inline-flex;
    `;

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
        <MainImg
          bigWidth={this.state.bigWidth}
          bigHeight={this.state.bigHeight}
          mainImg={this.state.mainImg} />
        </ImgWidthBuffer>
      </React.Fragment>
    )
  }
}
