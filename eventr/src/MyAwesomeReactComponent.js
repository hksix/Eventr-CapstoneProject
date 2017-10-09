import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Paper from 'material-ui/Paper';
// import FetchData from './axios.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from 'react-router-dom'
import { Welcome } from './Welcome.js'
import { SetEvent } from './SetEvent.js'
import UserMenu from './sidemenu/UserMenu.js';
import Footer from './Footer.js';
import './index.css';
import MapContainer from "./MapContainer.js";
import PartyTypeTable from './setevent/EventType.js';

// import { Calendar } from './Calendar.js'


export default class MenuOptions extends Component {
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
              
              <Tabs
                className="menubar"
                value={this.state.value}
                onChange={this.handleChange}>
                
                
                <Tab icon={<FontIcon className="material-icons"><i className="material-icons">format_list_bulleted</i></FontIcon>}/>
                
                <Tab label="Tab A" 
                    icon={<FontIcon className="material-icons">home</FontIcon>}
                    label="HOME"
                    value="a"
                    containerElement={<Link to="/home" />}
                >
                    <Route exact path="/home"/>
                    <div className="main-content-container">
                      <div className="side-content-container">
                        <UserMenu />
                      </div>
                      <div className="changing-content-container" >
                        <Welcome/>
                      </div>
                      
                    </div>
                    
                </Tab>
                
                

                {/* renders events page */}
                <Tab
                    icon={<FontIcon className="material-icons">event</FontIcon>}
                    label="Events"
                    value="b"
                    containerElement={<Link to="/events" />}
                    >
                    <Route exact path="/events"/>

                    <div className="main-content-container">
                      <div className="side-content-container">
                        <UserMenu />
                      </div>
                      <div className="changing-content-container" >
                        <SetEvent />
                      </div>
                    </div>

                </Tab>

                {/* renders user's profile */}
                <Tab
                    icon={<FontIcon className="material-icons">face</FontIcon>}
                    label="PROFILE"
                    value="c"
                    containerElement={<Link to="/profile" />}>
                    <div className="main-content-container">
                      <div className="side-content-container">
                        <UserMenu />
                      </div>
                      <div className="changing-content-container" >
                        
                      </div>
                    </div>
                </Tab>

                {/* renders map */}
                <Tab
                    icon={<MapsPersonPin />}
                    label="NEARBY"
                    value="d"
                    containerElement={<Link to="/nearby" />}>
                    <div className="main-content-container">
                      <div className="side-content-container">
                        <UserMenu />
                      </div>
                      <div >
                        {/* <MapContainer /> */}
                      </div>
                    </div>
                </Tab>
              </Tabs>
              
            </Router>
          );
        }
      }

      // const event = () => (
      //   <div>
      //     <h2>Event page</h2>
      //   </div>
      // )

export const MyAwesomeReactComponent = () => (

    <div>
      
      <MenuOptions />
      {/* <PartyTypeTable/> */}
      <Footer />
      {/* <FetchData /> */}
    </div>

);
