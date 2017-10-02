import React, {Component} from 'react';
import Alerts from './Alerts.js';
import MiniProfile from './MiniProfile.js';
import MiniEvents from './MiniEvents.js';


// const SideMenu = {
//   display: 'flex',
//   justifyContent: 'center',
//   float: 'left',
// }


export class ConsistentMenu extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="side-menu-container">
        <MiniProfile />
        <Alerts />
        <MiniEvents />
      </div>
    )
  }
}