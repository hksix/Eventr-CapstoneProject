import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


// import SubmitSnackBar from './Submit.js'
import Card from 'material-ui/Card';
import { ROOT_URL } from './App.js';
import axios from 'axios';


// import RaisedButton from 'material-ui/RaisedButton';

import ItemList from './setevent/ListOfItems.js';
import {DateSelector, TimeSelector, LocationSelector} from './setevent/WhenWhere.js';
import {NameSelector, DescriptionSelector} from './setevent/NameDesc.js';
import EventType from './setevent/EventType.js';
import { SelectFriends} from './setevent/SelectFriends.js';
import EventTypeDefaultItems from './setevent/EventTypeDefaultItems';
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
  startVelocity: 20,
  elementCount: 80,
  decay: 0.95
};

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textAlign: 'center'
  },
  slide: {
    padding: 10,
    textAlign: 'center'
  },
  underlineStyle: {
    borderColor: '#7c5cb7',
  },
  floatingLabelStyle: {
    color: '#7c5cb7',
  },
  floatingLabelFocusStyle: {
    color:'#7c5cb7'
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
      this.setState({open: true,});
    };
    handleRequestClose = () => {
      this.setState({open: false,});
    };
    handleSubmitAndClose = ()=>{
      this.handleRequestClose();
      this.props.changeHandler();
    }
  
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
          onClick={this.handleSubmitAndClose}>
        </FlatButton>,
      ];
      
      return (
        <div>
          <RaisedButton label="Submit" onClick={this.handleOpen}> <Confetti active={this.state.open} config={config}/> </RaisedButton>
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
      eventItems:[],
      finalItemsForEvent: [],
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    console.log(this.state)
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
          <Tab style={{fontSize: '12px'}} label="Invite" value={2} />
          <Tab style={{fontSize: '12px'}} label="Items" value={3} />
          <Tab style={{fontSize: '12px'}} label="Finish" value={4} />
        </Tabs>

        <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
        >
        <div id="name&Description">
          <div>
            <h2 style={styles.headline}>Enter your event's name and description:</h2> 
            <NameSelector name={this.state.eventName}
            changeHandler={this._handleNameChange}/>
          </div>
          <div>
            <DescriptionSelector disc={this.state.eventDiscription}
            changeHandler={this._handleDiscripChange}/>
          </div>
        </div>

        <div id="When&where" style={{textAlign: 'center'}}>
          <div>
              <h2 style={styles.headline} >When and where?</h2> 
                  {/* Type in the details below.<br /> */}
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

        <div style={styles.slide}>
            <h2 style={styles.headline} >Invite your peeps</h2> 
            <SelectFriends invited={this.state.eventPeopleCount} 
            names={this.state.eventPeopleNames}
            changeHandler={this._handleInviteChange}/>
            
        </div>
          
        <div style={styles.slide}>
            <EventType type={this.state.eventType}
            changeHandler={this._handleTypeChange} autoWidth={false}/>
            <EventTypeDefaultItems defaultItems={this.state.eventItems} changeHandler={this._addItemToEvent}/>
            {/* <ItemList changeHandler={this._addItemToEvent}/>  */}
        </div>

        <div style={styles.slide}>
            <h2 style={styles.headline} >Summary page</h2>
            <p>Name: <u> {this.state.eventName}</u></p>
            <p>Description: <u>{this.state.eventDiscription}</u></p>
            <p>Location: <u>{this.state.eventLocation}</u></p>
            <p>Time: <u>{this.state.eventTime.toString()}</u></p>
            <p>Date: <u>{this.state.eventDate.toString()}</u></p>
            {/* <p>Type: <u>{this.state.eventType.toString()}</u></p> */}
            <p>Number of people invited: <u> 3 </u></p>

            {/* <p>Number of people invited: <u>{this.state.eventPeopleCount} {this.state.eventPeopleNames}</u></p> */}
            {/* <p>Items Needed: <u>{this.state.eventItems}</u></p> */}
            <p>Items Needed: <u>Cake, Soda, Streamers</u></p>

            <SubmitButton changeHandler={this._handleSubmit}></SubmitButton> 
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
  // sets default items for whatever category was chosen in EventType.js
  // then passes state to EventTypeDefaultItems.js to populate checklist
  _handleTypeChange=(newType, newID, newDefaultItems)=>{
    console.log("handling change of category")
    this.setState({
      eventType: newType,
      eventID: newID,
      eventItems: newDefaultItems

    })
  }
  _handleInviteChange=(newInvites, names)=>{
    this.setState({
      eventPeopleCount: newInvites,
      eventPeopleNames: names
    })
  }
  
  _addItemToEvent = (newValue, newDescription, newQuantity) => {
    console.log(newItem)
    let newItem = {}
    newItem.push({
      value: newValue,
      description: newDescription,
      quantity: newQuantity
    })
    this.state.finalItemsForEvent.push(newItem)
  }

  _handleSubmit=(e)=>{
    console.log(this.state)
    if(this.state.eventName === '' || this.state.eventDate === ''){
      // alert('woah chill.. before we continue please fill out all forms.' );
      // console.log(this.state.eventName);
    } else{
      // console.log('this.state.current_user');
    // axios.post(`${ROOT_URL}/events`,{

    //   'host_id': 3,

    //   //'host_id': `${this.props.user.userid}`,

    //   'name': `${this.state.eventName}`,
    //   'description': `${this.state.eventDiscription}`,
    //   'date': `${this.state.eventDate.toString()}`,
    //   'time': `${this.state.eventTime.toString()}`,
    //   'location': `${this.state.eventLocation}`,
    //   'category_id': `${this.state.eventID}`,
    // }).then(function(response){
    //   console.log(response)
    // })
    // .catch(function(error){
    //   console.log(error);
      
    // })
  }
}

}
