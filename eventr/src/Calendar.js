import React, {Component} from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.momentLocalizer(moment);

export class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [
              {
                "title": "Demo Day",
                "allDay": false,
                "start": new Date(2017, 9, 17),//JS dates are indexed from 0-11, 9 == october
                "end": new Date(2017, 9, 17)
              },
              {
                "title": "Hamza Job Day",
                "allDay": false,
                "start": new Date(2017, 9, 03),//JS dates are indexed from 0-11, 9 == october
                "end": new Date(2017, 9, 03)
              },
              {
                "title": "Friday the 13th",
                "allDay": true,
                "start": new Date(2017, 9, 13),//JS dates are indexed from 0-11, 9 == october
                "end": new Date(2017, 9, 13)
              }
            ]
        };
        BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    }

    handleSelectSlot({start, end}) {
        // console.log("handleSelectSlot: " + start + " - " + end);
        this.state.events.push({start: start, end: end});
        this.setState({});

    }

    render() {
      return (
        <div className="event-calendar">
          <BigCalendar 
          selectable
          popup
          culture='en'
          events={this.state.events}
          onSelectSlot={(slotInfo) => this.handleSelectSlot(slotInfo)}
          defaultDate={new Date()}
          views={{month: true}}
          defaultView="month"
          style={{height: "400px"}}
          />
        </div>
      );
    }
  }
