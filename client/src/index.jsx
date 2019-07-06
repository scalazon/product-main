import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <React.Fragment>
      <img src="http://i.picasion.com/gl/89/bp0C.gif" />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('product-main'));