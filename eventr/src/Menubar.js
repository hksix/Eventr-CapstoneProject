import React, {Component} from 'react';
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import { CSSTransitionGroup } from 'react-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserStateComponent from './MyAwesomeReactComponent';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#4c3187',
    primary2Color: '#7c5cb7',
    primary3Color: '#1b0859',
    accent1Color: '#B16CFF',
    accent2Color: '#7c5cb7',
    canvasColor: '#f5f5f5',
    pickerHeaderColor: '#7c5cb7',
  }
});

const MenuHeader = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <UserStateComponent/>
  </MuiThemeProvider>
);

export default MenuHeader;





