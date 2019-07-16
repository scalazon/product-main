import React, {Component} from 'react';
import styled from 'styled-components';

export default class CartInterface extends Component   {
  constructor(props){
    super(props);
  }

  render(){
    const Box = styled.div`
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px #ddd solid;
      background-color: #fff;
    `;

    return (
      <Box>
      </Box>
    )
  }
}