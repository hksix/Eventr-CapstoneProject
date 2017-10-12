import React from 'react';
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import { CSSTransitionGroup } from 'react-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MyAwesomeReactComponent} from './MyAwesomeReactComponent';
import './index.css';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#4c3187',
    primary2Color: '#7c5cb7',
    primary3Color: '#1b0859',
    accent1Color: '#B16CFF',
    accent2Color: '#7c5cb7',
    canvasColor: 'white',
    pickerHeaderColor: '#7c5cb7',
  }
});


export const MenuHeader = () => (
  <MuiThemeProvider  muiTheme={muiTheme}>
    <MyAwesomeReactComponent/>
  </MuiThemeProvider>
);






