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
    this.statsAPI = 'http://reviews-dev.us-west-2.elasticbeanstalk.com/summaries/'
    this.defaultASIN = 'B07PSQKDDZ';
    this.state = {
      data: null,
      stats: null,
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
    return Promise.all([
      fetch(this.apiURL + ASIN).then(res => res.json()),
      fetch(this.statsAPI+ ASIN).then(res => res.json())
      ])
      .then(promises => {
        let data = promises[0];
        let stats = promises[1];
        this.setState({data, stats, isLoading: false})})
      .catch(console.error);
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
          <BuyBox price={data.price} />
        </MainDiv>
      )
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));