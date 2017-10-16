import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import { ROOT_URL } from './App.js'


BigCalendar.momentLocalizer(moment);

export class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [],
            calendarData:[],
            userdata: []
        };
        BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    }
    componentWillReceiveProps(nextProps) {
      this.setState({userdata: nextProps.userdata}, () => {
        const current_user = this.state.userdata.userid;
      const hostingEvents = axios.get(`${ROOT_URL}/events/host/${current_user}`);
      const attendingEvents = axios.get(`${ROOT_URL}/events/guest/${current_user}`);
      Promise.all([hostingEvents, attendingEvents])
        .then((res) => {
          console.log(res)
          this.setState({events: res}, () => {
            var idExists = {};
            const newCalData = this.state.events.map(index => {
              return index.data.map(val => {
                if (!idExists.hasOwnProperty(val.id)) {
                  idExists[val.id] = true;
                  const year = val.date.slice(0,4);
                  const month = val.date.slice(5,7);
                  const day = val.date.slice(8,10);
                  const eventDate = month + '-' + day + '-' + year;
                    const eventInfo = {
                    "id": val.id,
                    "title": val.name,
                    "date": eventDate,
                    // simply inserted ,10 as radix to mitigate errors received within console
                    // https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter-what-should-i-do
                    "start": new Date( parseInt(val.date.slice(0,4),10), parseInt(val.date.slice(5,7),10)-1, parseInt(val.date.slice(8,11),10) ),
                    "end": new Date( parseInt(val.date.slice(0,4),10), parseInt(val.date.slice(5,7),10)-1, parseInt(val.date.slice(8,11),10) ),
                    "desc": val.description,
                    "cat": val.category_id,
                    "host": val.host_id,
                    "location": val.location,
                    "time": val.time,
                  }; 
                  if (eventInfo.host === current_user) {
                    eventInfo.isHost = true;
                  }
                  return (eventInfo);
                } 
              });  
            });
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b#Flatten_an_array_of_arrays
            this.setState({calendarData: newCalData.reduce((a, b) => {return a.concat(b)}, [])})
          });
        });

      });
    
    }

    createEventStyles(val) {
      const eventStyle = {
        style: {
          backgroundColor: "#7c5cb7", 
          height: "25px",
        }
      }
      if(val.isHost) {
        eventStyle.style.backgroundColor = "#1b0850";
      }
      return eventStyle;
    }


    render() {
      
      
      return (
        <div className="event-calendar">
          <BigCalendar 
          popup={true}
          popupOffset={30}
          selectable
          key={this.state.calendarData.id}   
          culture='en'
          events={this.state.calendarData}
          onSelectEvent={calendarData => this.props.handleEventClick(calendarData)}
          defaultDate={new Date()}
          views={{month: true, week: true}}
          defaultView="month"
          style={{height: "600px"}}
          eventPropGetter={val => this.createEventStyles(val)}
          />
        </div> 
      );
    }
  }


          