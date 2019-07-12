import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ImageContainer from './components/ImageContainer.jsx';
import Details from './components/Details.jsx';
// import Lato from './resources/Lato-Regular.ttf';
import Ember from './resources/Amazon-Ember-Regular.ttf';

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
    this.handleThumbnailHover = this.handleThumbnailHover.bind(this);
    this.getData(this.defaultASIN);
  }

  componentDidMount(){
    var bc = new BroadcastChannel('product-change');
    bc.onmessage = ev => this.getData(ev.data);
    bc.onmessage = ev => console.log(ev.detail);;
    console.log(bc);
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

  handleThumbnailHover(e){
    const mainImg = e.target.id;
    this.setState({mainImg});
  }

  render(){
    const data = this.state.data;
    const mainImg = this.state.mainImg;
    const isLoading = this.state.isLoading;
    const GlobalStyles = createGlobalStyle`
      @font-face {
        font-family: Ember;
        src: url(${Ember});
      }
      body {
        font-family: Ember, Arial, sans-serif;
        font-weight: 400;
      }
    `;
    const MainDiv = styled.div`
      display: flex;
    `;

    return (isLoading ? (
        <div>Loading...</div>
      ) : (
        <MainDiv>
        <GlobalStyles />
          <ImageContainer
            data={data}
            mainImg={mainImg} 
            onHover={this.handleThumbnailHover}
          />
          <Details data={data} />
        </MainDiv>
      )
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));