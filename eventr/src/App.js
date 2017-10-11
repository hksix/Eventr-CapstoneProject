import React, { Component } from 'react';
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

// import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
// import ItemRegistry from './itemRegistry';

import { MenuHeader } from './Menubar.js'

import axios from 'axios';
import apikey from './apikeys.js';
// export const ROOT_URL = `http://localhost:8090/api/v1/${apikey}`;
export const ROOT_URL = `http://ec2-52-207-242-113.compute-1.amazonaws.com/api/v1/${apikey}`;




class App extends Component {
  state = {users:[]}
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }


  login() {
    this.props.auth.login();
  }


  logout() {
    this.props.auth.logout();
  }

  componentDidMount(){
    axios.get(`${ROOT_URL}/users`)
    .then((res) => {
      // console.log(res);
      this.setState({users:res.data})
    })
  }
  
  render() {
    const { isAuthenticated } = this.props.auth;
    
    return (
      <div className="App">
        
        <header>

          <button
              className="btn-margin"
              onClick={this.goTo.bind(this, 'main')}
            >
              Home
            </button>
            {
              !isAuthenticated() && (
                  <button
                    
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>
                )
            }
            </header>
        


        
        {/* <h1>Users Table example info</h1> */}
        {/* <h1>Users Table example info</h1>
        {this.state.users.map(user =>
          <div key={user.user_id}>
              <ul>
                <li>{user.fname} {user.lname}</li>
                <li>Picture {user.picture}</li>
                <li>Email: {user.email}</li>
                <li>Join-date: {user.join_date}</li>
                <li>Telephone: {user.phone}</li>
                <li>Location: {user.location}</li>
                <li>User Name: {user.user_name}</li>
               </ul>
            </div>
        )}  */}
      </div>
    );
  }
}

export default App;
