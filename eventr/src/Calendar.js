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

        this.handleSelectEvent = this.handleSelectEvent.bind(this);
        BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    }

    componentDidMount() {
      axios.get(`${ROOT_URL}/events/host/1`)
        .then(res => {
          this.setState({events: res.data.data}, () => {
            this.state.events.map(event => {
              this.state.calendarData.push( {
                "id": event.id,
                "title": event.name,
                "start": new Date( parseInt(event.date.slice(0,4)), parseInt(event.date.slice(5,7))-1, parseInt(event.date.slice(8,11)) ),
                "end": new Date( parseInt(event.date.slice(0,4)), parseInt(event.date.slice(5,7))-1, parseInt(event.date.slice(8,11)) ),
                "desc": event.description,
                "cat": event.category_id,
              });
            });
          });
        })
    }
    



    handleSelectEvent({start, end}) {
        this.state.events.push({start: start, end: end});
        this.setState({});
    }

    // eventStyleGetter() {
    //   var backgroundColor = event.color;
    //   var styles = {
    //     height: "55px",
    //     backgroundColor: backgroundColor,
    //     opacity: 0.8
          
    //   }

    // }



    render() {
      return (
        <div className="event-calendar">
          <BigCalendar 
          key={this.state.calendarData.id}   
          culture='en'
          events={this.state.calendarData}
          onSelectEvent={(eventInfo) => this.handleSelectEvent(eventInfo)}
          defaultDate={new Date()}
          views={{month: true}}
          defaultView="month"
          style={{height: "500px"}}
          />
        </div>
      );
    }
  }
