import React, {Component} from 'react';
// import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
// import { CSSTransitionGroup } from 'react-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import './index.css';

class MenuHeader extends Component{
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    console.log(this.state.profile)
    return (
      <MuiThemeProvider>
          <MyAwesomeReactComponent/>
      </MuiThemeProvider>
    );
  }
}

export default MenuHeader;

// const MenuHeader = () => (
//   <MuiThemeProvider>
//     <MyAwesomeReactComponent/>
//   </MuiThemeProvider>
// );

// export default MenuHeader;





