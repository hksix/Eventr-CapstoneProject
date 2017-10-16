import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    BrowserRouter as Router,
    Route,
    Link,
    // withRouter
  } from 'react-router-dom';

import LandingPage from './landingPage/LandingPage.js';
import { Welcome } from './Welcome.js';
import { SetEvent } from './SetEvent.js';
import UserMenu from './sidemenu/UserMenu.js';
import Settings from './Settings.js';
import Footer from './Footer.js';
import './index.css';
import MapContainer from "./GoogleMap/MapContainer.js";
import axios from 'axios';
import { ROOT_URL } from './App.js';

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

class MenuOptions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      userdata: null,
    };
  }
  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render(){
    return (
      <Router>
        <Tabs className="menubar" value={this.state.value} onChange={this.handleChange}>
          <Tab icon={<img src="../logo4.png" alt="Eventr Logo - lightbulb with E inside"/>} value="L" className="eventr-logo" containerElement={<Link to="/landingpage" />} >
            <LandingPage />
          </Tab>
          <Tab icon={<FontIcon className="material-icons">home</FontIcon>} label="HOME" value="a" containerElement={<Link to="/home" />} >
            <Route exact path="/home"/>
            <div className="main-content-container">
              <div className="side-content-container">
                <UserMenu user={this.props.userdata}/>
              </div>
              <div className="changing-content-container" >
                <Welcome user={this.props.userdata} />
              </div>
            </div>
          </Tab>
          <Tab icon={<FontIcon className="material-icons">event</FontIcon>} label="CREATE EVENT" value="b" containerElement={<Link to="/create-event" />} >
            <Route exact path="/events"/>
            <div className="main-content-container">
              <div className="side-content-container">
                <UserMenu user={this.props.userdata}/>
              </div>
              <div className="changing-content-container" >
                <SetEvent />
              </div>
            </div>
          </Tab>
          <Tab icon={<MapsPersonPin />} label="NEARBY" value="c" containerElement={<Link to="/nearby" />} >
            <Route exact path="/nearby"/>
            <div className="main-content-container">
              <div className="side-content-container">
                <UserMenu user={this.props.userdata}/>
              </div>
              <div >
                <MapContainer />
              </div>
            </div>
          </Tab>
          <Tab icon={<FontIcon className="material-icons">settings</FontIcon>} label="SETTINGS" value="d" containerElement={<Link to="/settings" />} >
            <Route exact path="/settings"/>
            <div className="main-content-container">
              <div className="side-content-container">
                <UserMenu user={this.props.userdata}/>
                </div>
                <div className="changing-content-container" >
                  <Settings />
                </div>
            </div>
          </Tab>
        </Tabs>
      </Router>
    );
  }
}



export default class MyAwesomeReactComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        profile: {}        
    };
  }
  componentDidMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile: {...profile, userid: parseInt(profile.sub.slice(9))}});
        axios.post(`${ROOT_URL}/currentuser/${this.state.profile.userid}/${this.state.profile.given_name}/${this.state.profile.family_name}`);
      });
    } else {
      this.setState({ profile: userProfile });
    }
   

  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <MenuOptions userdata={this.state.profile}/>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}