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
      mainImg: 'B01KUGJDB0_1.jpg',
    }
    this.handleThumbnailHover = this.handleThumbnailHover.bind(this);
  }

  handleThumbnailHover(e){
    const mainImg = e.target.id;
    this.setState({mainImg});
  }

  render(){
    const ImageDiv = styled.div`
      display: inline-flex;
    `;

     // const MainImage = styled.img`
     //    width: 30vw;
     //    min-width: 285px;
     //    height: auto;
     //    margin: 25px;
     // `;
    // <MainImage src={`https://hackmazon-images.s3.amazonaws.com/Images/${this.state.mainImg}`}/>

    return (
      <React.Fragment>
        <ImageCol
          ASIN={this.ASIN}
          imgURLs={this.imgURLs}
          mainImg={this.state.mainImg}
          onHover={this.handleThumbnailHover}
        />
        <MainImg mainImg={this.state.mainImg} />
      </React.Fragment>
    )
  }
}
