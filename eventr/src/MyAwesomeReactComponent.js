import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import PopoverExampleSimple from './LeftBurger.js'

var IconMenuExampleSimple = (
    <div>
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    </div>
  );

var menuOptions = 

    <Tabs>
        <PopoverExampleSimple />
        
    <Tab
      icon={<FontIcon className="material-icons">home</FontIcon>}
      label="HOME"
    />
    <Tab
      icon={<FontIcon className="material-icons">event</FontIcon>}
      label="Events"
    />
    <Tab
      icon={<FontIcon className="material-icons">face</FontIcon>}
      label="PROFILE"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="NEARBY"
    />
  </Tabs>



const MyAwesomeReactComponent = () => (
    <Paper zDepth={3}>
    {menuOptions}
</Paper>
);

export default MyAwesomeReactComponent;