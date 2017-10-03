import React, {Component} from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const events = [
	{
		'event_id': '1',
    'host_id': '1',
    'name': 'Demo Day',
		'date': '2017-10-17',
		'time': '17:00:00',
    'location': 'ATV',
    'category_id': '1'
	}
]

export class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            date: '',
            time: '',
            location: ''
        };
    }


    // componentDidMount() {
    //   this.findEventById(this.props.params.event_id)
    // }


    // findEventById(eventId) {
    //   axios.get("/api/event/event_id")
    //     .then(res => {
    //       const event = res.data;
    //       console.log(event);
    //       this.setState({
    //         name: event.name,
    //         date: event.date,
    //         time: event.time,
    //         location: event.location
    //       });
    //     });

    // }




    render() {
      return (
        <div>
          <h2>Event Calendar</h2>
          <BigCalendar 
            culture='en'
            events={this.state.events}
            defaultDate={new Date()}/>
        </div>
      );
    }
  }



