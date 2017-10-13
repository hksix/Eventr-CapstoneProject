import React, {Component} from 'react';
// import FontIcon from 'material-ui/FontIcon';
// import {cyan400} from 'material-ui/styles/colors';
import {Card} from 'material-ui/Card';
import './App.css';
// import axios from 'axios';
import Paper from 'material-ui/Paper';
import { Calendar } from './Calendar.js'

import AppBar from 'material-ui/AppBar';

import EditDropdown from './updateEventComponents/EditDropdown.js'
import ItemsCheckList from './updateEventComponents/ItemsCheckList.js'

import MapsPlace from 'material-ui/svg-icons/maps/place';

const header = {
    textAlign: 'center',
    backgroundColor: '#4c3187',
    color: 'white',
    paddingTop: '15px',
    paddingBottom: '15px',
    // fontSize: '14px',
    fontSize: '1.3em',
    fontWeight: 400,
};

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
        <h3 style={header} className="welcome">{props.title}</h3>
        <div style={SubHeader}>
            <Card style={cardbox}>
                <div> 
                    <p><u>{props.title}</u></p>
                    <p><u>{props.start}</u></p>
                    <p><u>{props.desc}</u></p>
                </div>
                <div style={{position:'relative', float:'right'}}>
                <EditDropdown />
                </div>
            </Card>
        </div>
        <div style={SubHeader}>
            <Card style={cardbox}>
                <div><u>Location</u></div>
                <MapsPlace/>
                <div style={{position:'relative', float:'right'}}>
                <EditDropdown />
                </div>
            </Card>
            <Card style={cardbox}>
                <div><u>Friends invited</u></div>
                <div style={{position:'relative', float:'right'}}>
                <EditDropdown />
                </div>
            </Card>
            <Card style={cardbox}>
                <div><u>Upcoming Dates</u></div>
                <div style={{position:'relative', float:'right'}}>
                <EditDropdown />
                </div>
            </Card>
        </div>
        <div style={SubHeader}>
            <Card style={cardbox}>
                <div> <u>List of Items box</u> </div>
                <ItemsCheckList/>
                <div style={{position:'relative', float:'right'}}>
                <EditDropdown />
                </div>
            </Card>
        </div>
        
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
            event: null
        };
    }

    makeEventDetail = (calendarData) => {
        this.setState({event: calendarData})
    }


    render(){
       let eventElement = <p></p>;
        if (this.state.event) {
           eventElement = (<Card className='welcomeBox'>
                <Welcome2 title={this.state.event.title} date={this.state.event.start} description={this.state.event.desc} />
            </Card>);
        }

        return(
            <div className="profilepg">
                <Card>
                    <AppBarExampleIcon/>
                </Card>
                <Paper>
                <Calendar handleEventClick={this.makeEventDetail} />
                </Paper>
                {eventElement}
            
            </div>
        )
    }
}


