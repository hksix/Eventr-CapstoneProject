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
            calendarData:[]
        };

        BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    }

    componentDidMount() {
      const current_user = 1;
      const hostingEvents = axios.get(`${ROOT_URL}/events/host/${current_user}`);
      const attendingEvents = axios.get(`${ROOT_URL}/events/guest/${current_user}`);

      Promise.all([hostingEvents, attendingEvents])
        .then((res) => {
          this.setState({events: res}, () => {
            var idExists = {};
            const newCalData = this.state.events.map(index => {
              console.log(index.data.length)
              return index.data.map(val => {
                if (!idExists.hasOwnProperty(val.id)) {
                  idExists[val.id] = true;
                  return ( {
                    "id": val.id,
                    "title": val.name,
                    "start": new Date( parseInt(val.date.slice(0,4)), parseInt(val.date.slice(5,7))-1, parseInt(val.date.slice(8,11)) ),
                    "end": new Date( parseInt(val.date.slice(0,4)), parseInt(val.date.slice(5,7))-1, parseInt(val.date.slice(8,11)) ),
                    "desc": val.description,
                    "cat": val.category_id,
                  }); 
                } 
              });  
            });
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b#Flatten_an_array_of_arrays
            this.setState({calendarData: newCalData.reduce((a, b) => {return a.concat(b)}, [])})
          });
        });
    }

    onEventClick() {

    }
    



    render() {
      return (
        <div className="event-calendar">
          <BigCalendar 
          popup='True'
          popupOffset={30}
          selectable
          key={this.state.calendarData.id}   
          culture='en'
          events={this.state.calendarData}
          onSelectEvent={calendarData => this.props.handleEventClick(calendarData)}
          defaultDate={new Date()}
          views={{month: true, week: true}}
          defaultView="month"
          style={{height: "500px"}}
          eventPropGetter={(val) => ({style: {backgroundColor: "#7c5cb7", height: "25px"}})}
          />
        </div>
      );
    }
  }


          