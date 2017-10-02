import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Paper from 'material-ui/Paper';

import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from 'react-router-dom'
import { Sidebar } from './Welcome.js'
import {SetEvent} from './SetEvent.js'

import UserMenu from './sidemenu/UserMenu.js';
import './index.css';

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
                <Tab icon={<FontIcon className="material-icons"><i class="material-icons">format_list_bulleted</i></FontIcon>}/>
                <Tab label="Tab A" 
                    icon={<FontIcon className="material-icons">home</FontIcon>}
                    label="HOME"
                    value="a"
                    containerElement={<Link to="/home" />}
                >
                    {/* <Route exact path="/home" component={Sidebar}/> */}
                    <Sidebar className="main-content-container"/>
                    
                </Tab>
                <Tab
                    icon={<FontIcon className="material-icons">event</FontIcon>}
                    label="Events"
                    value="b"
                    containerElement={<Link to="/events" />}
                    >
                    <Route exact path="/events" component={event}/>
                    <SetEvent className="main-content-container"/>
                </Tab>
                  <Tab
                      icon={<FontIcon className="material-icons">face</FontIcon>}
                      label="PROFILE"
                      value="c"
                      containerElement={<Link to="/profile" />}>
                      <div>
                          <h2>Controllable Tab c</h2>
                      </div>
                </Tab>
                <Tab
                    icon={<MapsPersonPin />}
                    label="NEARBY"
                    value="d"
                    containerElement={<Link to="/nearby" />}>
                    <div>
                        <h2>Controllable Tab D</h2>
                    </div>
                </Tab>
              </Tabs>
            </Router>
          );
        }
      }

      const event = () => (
        <div>
          <h2>Event page</h2>
        </div>
      )

export const MyAwesomeReactComponent = () => (
    // <Paper zDepth={3}>
    <div>
      <div>
        <MenuOptions />
      </div>
      <div className="side-content-container">
        <UserMenu />
      </div>
    </div>
// </Paper>
);

// export default MyAwesomeReactComponent;