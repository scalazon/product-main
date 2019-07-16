import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ImageContainer from './components/ImageContainer.jsx';
import Details from './components/Details.jsx';
import BuyBox from './components/BuyBox.jsx';
import EmberLt from './resources/AmazonEmber_Lt.ttf';
import EmberBd from './resources/AmazonEmber_Bd.ttf';
import EmberRg from './resources/AmazonEmber_Rg.ttf';

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
      console.log('i heard', ev);
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
    const GlobalStyles = createGlobalStyle`
      @font-face {
        font-family: EmberLt;
        src: url("http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/fonts/AmazonEmber_Lt.ttf");
      }

      @font-face {
        font-family: EmberBd;
        src: url("http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/fonts/AmazonEmber_Bd.ttf");
      }

      @font-face {
        font-family: EmberRg;
        src: url("http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/fonts/AmazonEmber_Rg.ttf");
      }

      #product-main {
        font-family: EmberLt, Arial, sans-serif;
      }
      *, ::before, ::after {
        box-sizing: border-box;
      }
    `;
    const MainDiv = styled.div`
      width: 100%;
      max-width: 1900px;
      padding: 14px 5px;
      display: flex;
      height: 800px;
      overflow: hidden;
      font-size: 13px;
      line-height: 29px;
    `;

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