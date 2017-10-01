import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import ItemRegistry from './itemRegistry';
import {GridList, GridTile} from 'material-ui/GridList';


import { MenuHeader } from './Menubar.js'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class App extends Component {
  state = {users:[]}

  componentDidMount(){
    fetch('/users')
      .then(res=> res.json())
      .then(users => this.setState({users}));
  }
  render() {
    return (
      <GridList style={styles.gridList} className="App">
        <MenuHeader />
        <hi>Users</hi>
        {this.state.users.map(user =>
          <GridList key={user.user_id}>
              <ul>
                <li>{user.fname} {user.lname}</li>
                <li>Picture {user.picture}</li>
                <li>Email: {user.email}</li>
                <li>Join-date: {user.join_date}</li>
                <li>Telephone: {user.phone}</li>
                <li>Location: {user.location}</li>
                <li>User Name: {user.user_name}</li>
               </ul>
            </GridList>
        )}
      </GridList>
    );
  }
}

export default App;
