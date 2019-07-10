import React from 'react';
import ReactDOM from 'react-dom';

export default class MainImage extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("MainImage mounted");
    var bc = new BroadcastChannel('test_channel');
    bc.onmessage = function (ev) { console.log('MI', ev); }
    ReactDOM.findDOMNode(this).addEventListener('click', (e) => {
      console.log('MI clicked!');
      bc.postMessage('Im an ASIN!');
      // const event = new Event('custom-event', {
      //   composed: true, 
      //   bubbles: true, 
      //   detail: "hey you asshole"
      // });
      // e.target.addEventListener('custom-event', ()=>{}, true);
      // e.target.dispatchEvent(event);
      // console.log(event)
    });
  }

  render(){
    return (
      <h1 id="MainImage">I'm the MainImage</h1>
    )
  }
}