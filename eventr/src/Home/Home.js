import React, { Component } from 'react';
import { MenuHeader } from '../Menubar.js'


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
        <div>
        
      <div className="container">
        {
          isAuthenticated() && (
            <div>
              
              <h4>
                You are logged in!
              </h4>
              <MenuHeader />
              </div>
          )
         
        }<MenuHeader />
        
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
        </div>
      </div>
    );
  }
}

export default Home;
