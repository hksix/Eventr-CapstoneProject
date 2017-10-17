import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
// import Paper from 'material-ui/Paper';
// import LandingPage from './landingPage/LandingPage.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import FetchData from './axios.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    // withRouter
  } from 'react-router-dom';

import { Welcome } from './Welcome.js';
import { SetEvent } from './SetEvent.js';
import UserMenu from './sidemenu/UserMenu.js';
import Settings from './Settings.js';
import Footer from './Footer.js';
import './index.css';
import MapContainer from "./GoogleMap/MapContainer.js";
// import LandingPage from './landingPage/LandingPage.js';

import axios from 'axios';
import { ROOT_URL } from './App.js';


// import PartyTypeTable from './setevent/EventType.js';

// import { Calendar } from './Calendar.js'
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
          <Tab icon={<img src="../lightbulb-logo.png" alt="Eventr Logo - lightbulb with E inside"/>} className="eventr-logo">
          <LandingPage/>
          </Tab>
          <Tab icon={<FontIcon className="material-icons">home</FontIcon>} label="HOME" value="a" containerElement={<Link to="/home" />} >
            <Route exact path="/home"/>
            <div className="main-content-container">
              <div className="side-content-container">
                <UserMenu handleUpdate={this.props.handleUpdate} user={this.props.userdata}/>
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
                <UserMenu handleUpdate={this.props.handleUpdate} user={this.props.userdata}/>
              </div>
              <div className="changing-content-container" >
                <SetEvent user={this.props.userdata}/>
              </div>
            </div>
          </Tab>
          <Tab icon={<MapsPersonPin />} label="NEARBY" value="c" containerElement={<Link to="/nearby" />} >
            <Route exact path="/nearby"/>
            <div className="main-content-container">
              <div className="side-content-container">
                <UserMenu handleUpdate={this.props.handleUpdate} user={this.props.userdata}/>
              </div>
              <div className="changing-content-container" style={{backgroundColor: '#f5f5f5'}} >
                <MapContainer style={{margin: 20}} />
              </div>
            </div>
          </Tab>
          <Tab icon={<FontIcon className="material-icons">settings</FontIcon>} label="SETTINGS" value="d" containerElement={<Link to="/settings" />} >
            <Route exact path="/settings"/>
            <div className="main-content-container">
              <div className="side-content-container">
                <UserMenu handleUpdate={this.props.handleUpdate} user={this.props.userdata}/>
                </div>
                <div className="changing-content-container" >
                  <Settings auth={this.props.auth}/>
                </div>
            </div>
          </Tab>
        </Tabs>
      </Router>
    );
  }
}



export default class UserStateComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
        profile: {},      
    };
  }
  componentDidMount() {
    // axios.get(`${ROOT_URL}/events/host/${this.state.profile}`).then(res=> {console.log(res)});
  //  console.log(this.state.profile) 
  // this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    // if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile: {...profile, userid: parseInt(profile.sub.slice(9))}},
        () => { 
          axios.post(`${ROOT_URL}/currentuser/${this.state.profile.userid}/${this.state.profile.given_name}/${this.state.profile.family_name}`)
          .then((res) => {
            this.setState({
              profile: { ...profile,
                email: res.data.email,
                fName: res.data.fName,
                lName: res.data.lName,
                userid: res.data.id,
                phone: res.data.phone,
                profPic: res.data.profPic,
                location: res.data.location
              }
            }, () => console.log(profile))
          })        
        })
      });
    // } else {
    //   this.setState({ profile: userProfile });
    // }
   

  }
  render() {
    console.log(this.state.profile)
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <MenuOptions handleUpdate={this._updateUser} userdata={this.state.profile} auth={this.props.auth}/>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
  _updateUserOnServer = (userID, userObj) => {
  console.log(userObj);
    axios.put(`${ROOT_URL}/users/${userID}`, {
      fName: userObj.fName,
      lName: userObj.lName,
      profPic: userObj.profPic,
      email: userObj.email,
      phone: userObj.phone,
      location: userObj.location,
    }).then((res) => {
      
    }).catch((err) => {
      
    })
  }
  _updateUserInState = (userID, userObj) => {
    // console.log(userObj.profPic)
    // debugger
    this.setState({
      profile: {
        fName: userObj.fName,
        lName: userObj.lName,
        profPic: userObj.profPic,
        email: userObj.email,
        phone: userObj.phone,
        location: userObj.location,
      }
    });
  }
  _updateUser = (userID, userObj) => {
    this._updateUserOnServer(userID, userObj);
    this._updateUserInState(userID, userObj);
  }
}