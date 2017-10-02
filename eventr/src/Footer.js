import React, { Component } from 'react';
import {cyan400} from 'material-ui/styles/colors';

const footer = {
  backgroundColor: cyan400,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 500,
}
export default class Footer extends Component {

  render(){
    return(
      <div style={footer} className="footer-container">
        <div>
          <h3>&copy; 2017 Eventr</h3>
        </div>
      </div>
    )
  }
}
