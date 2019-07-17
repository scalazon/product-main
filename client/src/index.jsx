import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { MainDiv, GlobalStyles } from './components/atoms/General.jsx';
import ImageContainer from './components/molecules/ImageContainer.jsx';
import Details from './components/molecules/Details.jsx';
import BuyBox from './components/molecules/BuyBox.jsx';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.apiURL = 'http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/products/';
    this.defaultASIN = 'B01KUGJDB0';
    this.state = {
      data: null,
      isLoading: true
    }
    this.getData = this.getData.bind(this)
    this.getData(this.defaultASIN);
  }

  componentDidMount(){
    var bc = new BroadcastChannel('product-change');
    bc.onmessage = (ev) => {
      this.getData(ev.data)
    };
  }

  getData(ASIN){
    return fetch(this.apiURL + ASIN)
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
        <MainDiv>
          <GlobalStyles />
          <ImageContainer
            data={data}
            onHover={this.handleThumbnailHover} />
          <Details data={data} />
          <BuyBox />
        </MainDiv>
      )
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));