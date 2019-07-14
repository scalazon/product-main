import React, {Component} from 'react';
import ReactImageMagnify from 'react-image-magnify';

export default class BasicExample extends Component {
  render() {
    return (
      <div className="fluid__image-container">
        <ReactImageMagnify {...{
          smallImage: {
              isFluidWidth: true,
              src: `https://hackmazon-images.s3.amazonaws.com/Images/${props.mainImg}`,
              lensStyle: {
                background: 'hsla(0, 0%, 100%, .3)',
                border: '1px solid #ccc'
              }
          },
          largeImage: {
            src: `https://hackmazon-images.s3.amazonaws.com/Images/${props.mainImg}`,
            width: 1200,
            height: 1800
          }
        }} />
      </div>
    );
  }
}