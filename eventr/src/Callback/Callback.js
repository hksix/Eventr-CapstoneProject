import React, { Component } from 'react';
import loading from './loading.svg';

class Callback extends Component {
  render() {
    const style = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f5f5f6',
      }
    

    return (
      <div style={style}>
          {/* <h1>HEY!</h1> */}
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;