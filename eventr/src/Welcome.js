import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {cyan400} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './App.css';

// import UserMenu from './sidemenu/UserMenu.js';


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
    height: '300px',
    
};

const Welcome2 = (props) =>(
    <header >
        <h3 style={header} className="welcome">Welcome Bob</h3>
        <div style={SubHeader}>

        </div>
    </header>
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
            <Card>
                <Welcome2 />
            </Card>
        )
    }
}


