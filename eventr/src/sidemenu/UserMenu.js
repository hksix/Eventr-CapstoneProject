import React, {Component} from 'react';
import Alerts from './Alerts.js';
import MiniProfile from './MiniProfile.js';
import MiniEvents from './MiniEvents.js';


// const SideMenu = {
//   display: 'flex',
//   justifyContent: 'center',
//   float: 'left',
// }


export default class UserMenu extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <MiniProfile />
        <Alerts />
        <MiniEvents />
      </div>
    )
  }
}