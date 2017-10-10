import React from 'react';
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import { CSSTransitionGroup } from 'react-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MyAwesomeReactComponent} from './MyAwesomeReactComponent';
import './index.css';



export const MenuHeader = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent/>
  </MuiThemeProvider>
);






