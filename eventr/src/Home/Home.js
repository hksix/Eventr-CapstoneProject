import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage.js';


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {/* {
          isAuthenticated() && (
            <div>
              <h4>
                You are logged in! You can now view your{' '}
                <Link to="profile">profile area</Link>
                .
              </h4>
              <h4>
                Or you can now view the{' '}
                <Link to="main">Main page</Link>
                .
              </h4>
              
            </div>
            )
        } */}
        {
          !isAuthenticated() && (
            <div>
              <h6 style={{margin:0}}>
                
                <a
                  style={{ cursor: 'pointer', color: 'purple',position:'absolute'}}
                  onClick={this.login.bind(this)}
                >
                  <u>Log In</u>
                </a>
                
              </h6>
              <LandingPage/>
            </div>

            )
        }
        
      </div>
    );
  }
}

export default Home;
