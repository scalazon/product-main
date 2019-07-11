import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './components/ImageContainer.jsx';
import Details from './components/Details.jsx';
// import ImageCol from './components/ImageCol.jsx'
// import MainImage from './components/MainImage.jsx'

export default class Main extends Component {
  constructor(props){
    super(props)
    // this.apiURL = 'http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/products/';
    this.apiURL = '/products/';
    this.imagesURL = 'https://hackmazon-images.s3.amazonaws.com/Images/';
    this.defaultASIN = 'B01KUGJDB0';
    this.state = {
      mainImg: 'B01KUGJDB0_1.jpg',
      data: null,
      isLoading: true
    }
    this.getData(this.defaultASIN);
  }

  componentDidMount(){
    var bc = new BroadcastChannel('product-change');
    bc.onmessage = ev => (this.getData(ev.data));
  }

  getData(ASIN){
    return fetch(this.apiURL + this.defaultASIN)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({data, isLoading: false})})
      .catch(console.error);
  }

  render(){
    const data = this.state.data;
    const mainImg = this.state.mainImg;
    const isLoading = this.state.isLoading;

    return (isLoading ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
        <img src="http://i.picasion.com/gl/89/bp0C.gif" />
        <ImageContainer data={data} mainImg={mainImg} />
        <Details data={data} />
        </React.Fragment>
      )
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));