import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {cyan400} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './App.css';


import { Calendar } from './Calendar.js'

import AppBar from 'material-ui/AppBar';

const header = {
    textAlign: 'center',
    backgroundColor: cyan400,
    color: 'white',
    paddingTop: '15px',
    paddingBottom: '15px',
    fontSize: '14px',
    fontWeight: 500,
};

const SubHeader = {
    // height: '400px',
    position:'relative',
    display:'flex',
    
};
const cardbox={
    textAlign: 'center',
    height:'100px',
    width: '100%',
    margin: '10px'
}


const Welcome2 = (props) =>(
    <header>
        <h3 style={header} className="welcome">Bob's party</h3>
        <div style={SubHeader}>
            <Card style={cardbox}>
                <div> big box </div>
            </Card>
        </div>
        <div style={SubHeader}>
            <Card style={cardbox}>
                <div>box1</div>
            </Card>
            <Card style={cardbox}>
                <div>box2</div>
            </Card>
            <Card style={cardbox}>
                <div>box3</div>
            </Card>
        </div>
        <div style={SubHeader}>
            <Card style={cardbox}>
                <div> Items box </div>
            </Card>
        </div>
        
    </header>
);

const AppBarExampleIcon = () => (
    <AppBar
      title="events"
    />
    
);




export class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        };
    }
    render(){
        return(
            <div className="profilepg">
                <div style={{border:"1px solid black"}}>
                    <AppBarExampleIcon/>
                    <div>events</div>
                </div>
            <Calendar/>
            <Card className='welcomeBox'>
                <Welcome2 />
            </Card>
            </div>
        )
    }
}


