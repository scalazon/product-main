import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import ImageContainer from './components/ImageContainer.jsx';
import Details from './components/Details.jsx';
import EmberLt from './resources/AmazonEmber_Lt.ttf';
import EmberBd from './resources/AmazonEmber_Bd.ttf';
import EmberRg from './resources/AmazonEmber_Rg.ttf';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.apiURL = '/products/';
    this.defaultASIN = 'B01KUGJDB0';
    this.state = {
      data: null,
      isLoading: true
    }
    this.getData(this.defaultASIN);
  }

  componentDidMount(){
    var bc = new BroadcastChannel('product-change');
    bc.onmessage = ev => this.getData(ev.data);
    bc.onmessage = ev => console.log(ev.detail);;
    // console.log(bc);
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
    const GlobalStyles = createGlobalStyle`
      @font-face {
        font-family: EmberLt;
        src: url(${EmberLt});
      }
      @font-face {
        font-family: EmberBd;
        src: url(${EmberBd});
      }
      @font-face {
        font-family: EmberRg;
        src: url(${EmberRg});
      }
      body {
        font-family: EmberLt, Arial, sans-serif;
        font-weight: 400;
      }
    `;
    const MainDiv = styled.div`
      display: flex;
      position: relative;
    `;

    return (isLoading ? (
        <div>Loading...</div>
      ) : (
        <MainDiv>
        <GlobalStyles />
          <ImageContainer
            data={data}
            onHover={this.handleThumbnailHover}
          />
          <Details data={data} />
        </MainDiv>
      )
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));