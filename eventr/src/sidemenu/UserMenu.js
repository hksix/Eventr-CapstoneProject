import React, {Component} from 'react';
import Alerts from './Alerts.js';

import MiniProfile from './MiniProfile.js';
import MiniEvents from './MiniEvents.js';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


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

export default class UserMenu extends Component {
  //   state={
  //     userProfile: null
  //   }
  
  // componentWillReceiveProps(nextProps){
  //   // this.setState({
  //   //   userProfile: nextProps.user
  //   // });
  // }

  render(){
    // console.log(this.state.userProfile)
    return(
      <div>
        <MiniProfile userProfileData={this.props.user}  />
        <Alerts />
        <MiniEvents />
      </div>
      
    )
  }
}