import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { MainDiv, GlobalStyles } from './components/atoms/General.jsx';
import ImageContainer from './components/molecules/ImageContainer.jsx';
import Details from './components/molecules/Details.jsx';
import BuyBox from './components/molecules/BuyBox.jsx';

class Main extends Component {
  constructor(props){
    super(props)
    // this.apiURL = 'http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/products/';
    this.apiURL = '/products/';

    this.statsAPI = 'http://reviews-dev.us-west-2.elasticbeanstalk.com/summaries/'
    this.defaultASIN = 'B075H7Z5L8';
    this.state = {
      data: null,
      stats: null,
      isLoading: true
    }
    this.getData = this.getData.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getData(this.defaultASIN);
  }

  componentDidMount(){
    console.log('Trying to get data from', this.apiURL, this.defaultASIN)
    var bc = new BroadcastChannel('product-change');
    bc.onmessage = (ev) => {
      this.getData(ev.data)
    };
  }

  getData(ASIN){
    console.log('Trying to get data from', this.apiURL, this.defaultASIN)
    return Promise.all([
      fetch(this.apiURL + ASIN).then(res => res.json()),
      // Hardcode this with a working ASIN for now, will need to modify once other services have this data
      fetch(this.statsAPI+ 'B075H7Z5L8').then(res => res.json())
      ])
      .then(promises => {
        console.log('Promises returned:', promises)
        let data = promises[0];
        let stats = promises[1];
        this.setState({data, stats, isLoading: false})})
      .catch(err => {
        console.log('Error getting data', err)
      });
  }

  addToCart(e){
    setTimeout(()=>{
      if (document.activeElement != document.body) document.activeElement.blur();
    }, 300);
    const cc = new BroadcastChannel('cart');
    const quantity = document.getElementById('quantitySelect').value;
    const asin = this.state.data.asin;
    cc.postMessage({asin, quantity});
  }

  render(){
    const data = this.state.data;
    const stats = this.state.stats;
    const mainImg = this.state.mainImg;
    const isLoading = this.state.isLoading;
    return (isLoading ? (
        <div>Loading...</div>
      ) : (
        <MainDiv>
          <GlobalStyles />
          <ImageContainer data={data} />
          <Details data={data} stats={stats} />
          <BuyBox
            price={data.price}
            clickHandler={this.addToCart} />
        </MainDiv>
      )
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));

export default function deployPM(){
  ReactDOM.render(<Main />, document.getElementById('product-main'));
}