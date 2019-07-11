import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './components/ImageContainer.jsx';
// import ImageCol from './components/ImageCol.jsx'
// import MainImage from './components/MainImage.jsx'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.apiURL = 'http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/products/';
    this.imagesURL = 'https://hackmazon-images.s3.amazonaws.com/Images/';
    this.defaultASIN = 'B01KUGJDB0';
    this.state = {
      mainImg: 'B01KUGJDB0_1.jpg',
      data: null
    }
    getData(this.defaultASIN);
  }

  componentDidMount(){
    var bc = new BroadcastChannel('product-change');
    bc.onmessage = ev => (getData(ev.data));
  }

  getData(ASIN){
    fetch(this.apiURL + this.defaultASIN)
      .then(data => this.setState({data}));
  }

  render(){
    const data = this.state.data;
    const mainImg = this.state.mainImg;
    return (
      <React.Fragment>
      {data ? (
      <img src="http://i.picasion.com/gl/89/bp0C.gif" />
      <ImageContainer images={data.imgURLs} mainImg={mainImg} />
      <Details data={data} />
      ) : ()}
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));