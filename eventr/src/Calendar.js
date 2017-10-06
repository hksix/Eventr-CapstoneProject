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
                "start": new Date(2017, 9, 17),
                "end": new Date(2017, 9, 17),
                "desc": "We Graduate Today!",
                "cat": "Graduation",
                "color": "red"
              },
              {
                "title": "Hamza Job Day",
                "start": new Date(2017, 9, 3),
                "end": new Date(2017, 9, 3),
                "desc": "Hamza got a job!",
                "cat": "Other",
                "color": "Green"
              },
              {
                "title": "Friday the 13th",
                "start": new Date(2017, 9, 13),
                "end": new Date(2017, 9, 13),
                "desc": "Luckiest day of the year",
                "cat": "Holiday",
                "color": "purple"
              }
            ]
        };
        this.handleSelevtEvent = this.handleSelectEvent.bind(this);
        BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    }

    handleSelectEvent({start, end}) {
        this.state.events.push({start: start, end: end});
        this.setState({});
    }

    // onSlotChange(slotInfo) {
    //   var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DDm:ss");
    //   var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DDm:ss");
    // }

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
          popup="True"
          popupOffset={30}
          culture='en'
          events={this.state.events}
          onSelectEvent={(eventInfo) => this.handleSelectEvent(eventInfo)}
          eventPropGetter={(event) => ({style: {backgroundColor: event.color, height: "55px"}})}
          defaultDate={new Date()}
          views={{month: true}}
          defaultView="month"
          style={{height: "500px"}}
          />
        </div>
      );
    }
  }
