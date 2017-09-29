import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import ItemRegistry from './itemRegistry';


import Thing from './Menubar.js'

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
        <Thing />
        <div>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <ItemRegistry items={this.state.items} />
        </div>
       <h1>Users</h1>
       {this.state.users.map(user=>
       <div key={user.id}>{user.username}{user.id}</div>)}
       
      </div>
    );
  }
}

export default App;
