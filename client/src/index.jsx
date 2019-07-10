import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageCol from './components/ImageCol.jsx'
import MainImage from './components/MainImage.jsx'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.apiURL = 'http://hackmazon-product-main.3pcivarzxb.us-east-1.elasticbeanstalk.com/products/';
    this.state = {
      mainImg: 'B002WVJA5G_1.jpg'
    }
  }

  componentDidMount(){
    // console.log("Main mounted");
    // var bc = new BroadcastChannel('product-change');
    // bc.onmessage = function (ev) { console.log('Changing the product, boss!'); }
    // ReactDOM.findDOMNode(this).addEventListener('custom-event', (e) => console.log('Main heard', e.detail), true);
    // ReactDOM.findDOMNode(this).addEventListener('custom-event', (e) => console.log('Main heard', e.detail);
  }

  render(){
    return (
      <React.Fragment>
      <img src="http://i.picasion.com/gl/89/bp0C.gif" />
      <ImageCol />
      <MainImage mainImg={this.state.mainImg}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));