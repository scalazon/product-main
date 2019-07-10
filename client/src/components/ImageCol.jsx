import React from 'react';
import ReactDOM from 'react-dom';

export default class ImageCol extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("imgcol mounted");
    var bc = new BroadcastChannel('test_channel');
    bc.onmessage = function (ev) { console.log('IC', ev); }
    // ReactDOM.findDOMNode(this).addEventListener('custom-event', (e) => console.log('I heard', e.detail), true);
  }

  render(){
    return (
      <h1 id="imgcol">I'm the image column</h1>
    )
  }
}