import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import './App.css';

// import UserMenu from './sidemenu/UserMenu.js';


const header = {
    // paddingTop: 40,
    // border: '1px solid black',
    // width: '30%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // color: 'blue',
    // display: 'flex',
  };

const SubHeader = {
    // display: 'flex',
    // justifyContent: 'center',
}

const Welcome2 = (props) =>(
    <header style={header}>
        <h3 className="welcome">Welcome Bob</h3>
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
            <div>
                <Welcome2 />
            </div>
        )
    }
}


