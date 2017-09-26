import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';



const Thing = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

export default Thing;





