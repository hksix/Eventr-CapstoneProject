import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

import Profile from './Profile/Profile';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';
// import  MenuHeader from './Menubar.js'
// import UserMenu from './sidemenu/UserMenu'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route 
            path="/" 
            render={(props) =>
              !auth.isAuthenticated()
              ? <Redirect to="/home" />
              :<MyAwesomeReactComponent auth={auth} {...props} />} />

          <Route path="/home" render={(props) =>  <Home auth={auth} {...props}  />}   />
          <Route
          path="/profile"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <Profile auth={auth} {...props} />}
        />
        {/* <Route
        path="/main"
        render={props =>
          !auth.isAuthenticated()
            ? <Redirect to="/home" />
            : <MiniProfile auth={auth} {...props} />}
        /> */}
        <Route
        path="/main"
        render={props =>
          !auth.isAuthenticated()
            ? <Redirect to="/home" />
            : <MyAwesomeReactComponent auth={auth} {...props} />
            }
        />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
