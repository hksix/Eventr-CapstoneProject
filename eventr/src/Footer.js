import React, { Component } from 'react';
// import {cyan400} from 'material-ui/styles/colors';

const footer = {
  backgroundColor: '#4c3187',
  color: '#f5f5f5',
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
          <h4>&copy; 2017 Eventr</h4>
        </div>
      </div>
    )
  }
}
