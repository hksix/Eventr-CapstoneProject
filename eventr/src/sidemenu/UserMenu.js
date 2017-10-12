import React, {Component} from 'react';
import Alerts from './Alerts.js';
import MiniProfile from './MiniProfile.js';
import MiniEvents from './MiniEvents.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class UserMenu extends Component {
  // componentWillMount() {
  //   this.setState({ profile: {} });
  //   const { userProfile, getProfile } = this.props.auth;
  //   if (!userProfile) {
  //     getProfile((err, profile) => {
  //       this.setState({ profile });
  //     });
  //   } else {
  //     this.setState({ profile: userProfile });
  //   }
  // }

  render(){
    // const { profile } = this.state;
    // console.log(this.state.profile)
    return(
      
      <div>
        <MiniProfile />
        <Alerts />
        <MiniEvents />
      </div>
      
    )
  }
}