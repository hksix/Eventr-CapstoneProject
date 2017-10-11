import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import ItemList from './ListOfItems.js'
import SubmitSnackBar from './Submit.js'
import Card from 'material-ui/Card';

import Snackbar from 'material-ui/Snackbar';
// import RaisedButton from 'material-ui/RaisedButton';


import {DateSelector, TimeSelector, LocationSelector} from './setevent/WhenWhere.js'
import {NameSelector, DescriptionSelector} from './setevent/NameDesc.js'
import PartyTypeTable  from './setevent/EventType.js'
import { SelectFriends} from './setevent/SelectFriends.js'
// google maps drawer for example
// request invite
// public event toggle - radius from current location  but doesnt show actual location // trending parties in area 
// attendees 100/150 
// parent teacher meetings
// set cover for party entry
// dress code

// taking the guess work out of your event

import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 120,
  startVelocity: 40,
  elementCount: 60,
  decay: 0.95
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};



  /**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class SubmitButton extends Component {
    state = {
      open: false,
    };
    
  
    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
      
      this.setState({open: false});
      
    };
    handleTouchTap = () => {
      this.setState({
        open: true,
      });
    };
  
    handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };
  
    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleClose}>
        </FlatButton>,
      ];
      
      return (
        <div>
          <RaisedButton label="Sumbit" onClick={this.handleOpen}> <Confetti active={this.state.open} config={config}/> </RaisedButton>
          <Dialog
            title="Lets do this"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          
            Ready to party?
          </Dialog>
          
        </div>
      );
    }

    
  }
        
export class SetEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      eventName: "",
      eventDiscription:'',
      eventLocation: "",
      eventTime: '',
      eventDate: '',
      eventType: "",
      eventID:'',
      eventPeopleCount:'',
      eventPeopleNames:'',
      eventItems:'',
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    console.log(this.state.eventItems)
    
    return (
      
      <Card>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={{
            justifyContent: 'space-between',
            width: '100%',
          }}
        >

          <Tab style={{fontSize: '12px', paddingLeft:"5px"}} label="Name & Description" value={0} />
          <Tab style={{fontSize: '12px'}} label="When & Where" value={1} />
          <Tab style={{fontSize: '12px'}} label="Event Type" value={2} />
          <Tab style={{fontSize: '12px'}} label="Invite" value={3} />
          <Tab style={{fontSize: '12px'}} label="Items" value={4} />
          <Tab style={{fontSize: '12px'}} label="Finish" value={5} />
        </Tabs>

        <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
        >
        <div id="name&Description">
          <NameSelector name={this.state.eventName}
            changeHandler={this._handleNameChange}/>
            <br/>
            <DescriptionSelector disc={this.state.eventDiscription}
            changeHandler={this._handleDiscripChange}/>
              </div>

            <div id="When&where" style={{textAlign: 'center'}}>
                <div>
                    <h2 style={styles.headline} style={{textAlign: 'center'}}>When and where?</h2> 
                        Type in the details below.<br />
                    <LocationSelector location={this.state.eventLocation}
                      changeHandler={this._handleLocationChange}/>    
                </div>
                <div>
                    <DateSelector date={this.state.eventDate}
                      changeHandler={this._handleDateChange}/>
                </div>
                <div>
                    <TimeSelector time={this.state.eventTime}
                    changeHandler={this._handleTimeChange}/>
                </div>
            </div>

            <div id="EventType" style={styles.slide}>
                <PartyTypeTable type={this.state.eventType}
                changeHandler={this._handleTypeChange}/>
            </div>

            <div style={styles.slide}>
                <h2 style={styles.headline} style={{textAlign: 'center'}}>Invite your peeps</h2> 
                <SelectFriends invited={this.state.eventPeopleCount} names={this.state.eventPeopleNames}
                changeHandler={this._handleInviteChange}/>
                
            </div>

            <div style={styles.slide}>
                <h2 style={styles.headline} style={{textAlign: 'center'}}>Items page</h2>
                <ItemList defaultItems={this.state.eventItems}/> 
            </div>
            <div style={styles.slide} style={{textAlign: 'center'}}>
                <h2 style={styles.headline} style={{textAlign: 'center'}}>Summary page</h2>
                <p>Name: {this.state.eventName}</p>
                <p>Description: {this.state.eventDiscription}</p>
                <p>Location: {this.state.eventLocation}</p>
                <p>Time: {this.state.eventTime.toString()}</p>
                <p>Date: {this.state.eventDate.toString()}</p>
                <p>Type:{this.state.eventType.toString()}</p>
                <p>{this.state.eventItems.toString()}</p>
                <p>Number of people invited: {this.state.eventPeopleCount} {this.state.eventPeopleNames}</p>
                <p>Number of required items needed</p>
                <SubmitButton></SubmitButton> 
            </div>
        </SwipeableViews>
      </Card>
    );
  }
  _handleNameChange=(newName)=>{
    this.setState({
      eventName: newName
    })
  }
  _handleDiscripChange=(newDiscrip)=>{
    this.setState({
      eventDiscription: newDiscrip
    })
  }
  _handleLocationChange=(newLocation)=>{
    this.setState({
      eventLocation: newLocation
    })
  }
  _handleDateChange=(newDate)=>{
    this.setState({
      eventDate: newDate
    })
  }
  _handleTimeChange=(newTime)=>{
    this.setState({
      eventTime: newTime
    })
  }
  _handleTypeChange=(newType,newID, newDefaultItems)=>{
    this.setState({
      eventType: newType,
      eventID: newID,
      eventItems: newDefaultItems,
    })
  }
  _handleInviteChange=(newInvites, names)=>{
    this.setState({
      eventPeopleCount: newInvites,
      eventPeopleNames: names
    })
  }

}
