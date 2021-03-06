import React, {Component} from 'react';
// import FontIcon from 'material-ui/FontIcon';
// import {cyan400} from 'material-ui/styles/colors';
import {Card} from 'material-ui/Card';
import './App.css';
import axios from 'axios';
import { ROOT_URL } from './App.js'
import Paper from 'material-ui/Paper';
import { Calendar } from './Calendar.js'

import AppBar from 'material-ui/AppBar';

import EditDropdown from './updateEventComponents/EditDropdown.js'
import ItemsCheckList from './updateEventComponents/ItemsCheckList.js'

import MapsPlace from 'material-ui/svg-icons/maps/place';
import MapContainer from './GoogleMap/MapContainer.js';
// var header = {
//     textAlign: 'center',
//     backgroundColor: '#4c3187',
//     color: 'white',
//     paddingTop: '15px',
//     paddingBottom: '15px',
//     // fontSize: '14px',
//     fontSize: '1.3em',
//     fontWeight: 400,
// };

const SubHeader = {
    // height: '400px',
    
    position:'relative',
    display:'flex',

};
const cardbox={
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
    height:'auto',
    width: '100%',
    margin: '10px'
}


const Welcome2 = (props) =>(

    <header>
        <h3 style={props.headerColor} className="welcome">
            {props.title}
        </h3>

        <div style={SubHeader}>
            <Card style={cardbox}>
                <div> 
                    <p><b>Name:</b> {props.title}</p>
                    <p><b>Location:</b> {props.location}</p>
                    <p><b>Date:</b> {props.date.slice(0, 10)}</p>
                    <p><b>Time:</b>{props.time}</p>
                    <p><b>Description:</b> {props.desc}</p>
                    <p><b>Hosted By:</b> {props.host}</p>
                </div>
                <div style={{position:'relative', float:'right'}}>
                
                </div>
            </Card>
        </div>
        <div style={SubHeader}>
            <Card style={cardbox}>
                <div>
                    <u>Location</u>
                    <p>{props.location}</p>     
                </div>
                <div style={{position:'relative', float:'right'}}>
               
                </div>
                <div className="map-container-in-welcome" >
                    <MapContainer />
                </div>
            </Card>
            <Card style={cardbox}>
                <div><u>Guests</u></div>
                {/* {props.invited} */}
                <p>
                Steph Asmar <br/>
                Hamza Haseeb <br/>
                Katie Lane <br/>
                Jennifer Johnson
                </p>
                <div style={{position:'relative', float:'right'}}>
               
                </div>
            </Card>
        </div>
        <div style={SubHeader}>
            <Card style={cardbox}>
                <div> <u>Items Needed</u> </div>
                <ItemsCheckList userName={props.userdata}  items={props.items} eventid={props.eventid}/>
                <div style={{position:'relative', float:'right'}}>
                
                </div>
            </Card>
        </div>
        <div style={{textAlign:'right'}}>{props.isHost ? <EditDropdown/>: null }</div>
    </header>
);



const AppBarExampleIcon = () => (
    <AppBar
    className="upcoming-events-header"
      title="Upcoming Events"
      showMenuIconButton={false}
    />
);






export class Welcome extends Component {
  constructor(props){
      super(props);
      this.state = {
          name: '',
          event: null,
          eventid: null,
          invited: [],
          itemsForEvent: []
      };
  }

  // grabs data from Calendar.js for event that user has clicked on
  // sets eventid here so there's not an infinate loop later when render guest invited to party
  makeEventDetail = (calendarData) => {
     //console.log(calendarData)
    let event = calendarData.id
    this.getInvitedForParty(event)
    this.getItemsForParty(event)
    this.setState({
        event: calendarData,
        eventid: event
    })
  }

  getHeaderColor(isHost) {
      var header = {
          textAlign: 'center',
          color: '#f5f5f5',
          paddingTop: '15px',
          paddingBottom: '15px',
          fontSize: '1.3em',
          fontWeight: 400,
      }
      if (isHost) {
          header.backgroundColor = "#1b0859";
      }
      else {
          header.backgroundColor = "#4c3187";
      }
      return header;
  }

  getHostName(isHost, host) {
      if(isHost) {
          return "You are hosting this event!"
      }
      else {
          return "Steph Asmar"
      }
  }

  // server.get('/api/v1/event_inventory/:event_id', getInventoryForEvent);
  getItemsForParty = (eventid) => {
    axios.get(`${ROOT_URL}/event_inventory/${eventid}`).then((res) => {
        console.log(res)
        this.setState({
            itemsForEvent: res.data.data
        })
        console.log(this.state.itemsForEvent)
    })
  }

//server.get(`${extension}/guests/event/:eventid`, getAllGuestsByEvent);
// 10/15 - needs inner join query within sever.js to retreive name from id
  getInvitedForParty = (eventid) => {
      axios.get(`${ROOT_URL}/guests/event/${eventid}`).then((res) => {
          this.setState({
              invited: res.data.data
          })
      })
  }

  setInvitedList = (invited) => {
      let guestList = []
      if(invited.length > 0){
          guestList = invited.map(guest =>{
              let attending = ''
              if(guest.attending === false){
                  attending = "Attending"
              } else {
                  attending = "Not attending"
              }
              return <p key={guest.index}>{guest.userid} {attending}</p>
          })
      } else {
          guestList.push(<h3>No one is invited to this event</h3>)
      }
      return (
          <div>
              {guestList}
          </div>
      )
  }


  render(){
    let eventElement = <p></p>;
    if (this.state.event) {
        eventElement = (
            <Card className='welcomeBox'> 
              <Welcome2 
                eventid={this.state.eventid}
                invited={this.setInvitedList(this.state.invited)}
                title={this.state.event.title} 
                desc={this.state.event.desc} 
                date={this.state.event.date}
                time={this.state.event.time}
                host={this.getHostName(this.state.event.isHost,this.state.event.host)} 
                location={this.state.event.location}
                headerColor={this.getHeaderColor(this.state.event.isHost)}
                items={this.state.itemsForEvent}
                userdata={this.props.user}
                />

            </Card>);
      }

      return(
          <div className="profilepg" >
              <Card>
                  <AppBarExampleIcon/>
              </Card>
              <Paper>
                  <Calendar handleEventClick={this.makeEventDetail} userdata={this.props.user}/>
              </Paper>
              {eventElement}
          </div>
      )
  }
}


