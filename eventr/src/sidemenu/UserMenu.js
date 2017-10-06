import React, {Component} from 'react';
import Alerts from './Alerts.js';
import MiniProfile from './MiniProfile.js';
import MiniEvents from './MiniEvents.js';



export default class UserMenu extends Component {

  
                      
                        
                      

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