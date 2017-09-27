import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';


import { MenuHeader } from './Menubar.js'

class App extends Component {
  state = {users:[]}

  componentDidMount(){
    fetch('/users')
      .then(res=> res.json())
      .then(users => this.setState({users}));
  }
  render() {
    return (
      <div className="App">
        <MenuHeader />
       {/* <h1>Users</h1>
       {this.state.users.map(user=>
       <div key={user.id}>{user.username}{user.id}</div>)} */}
       
      </div>
    );
  }
}

export default App;
