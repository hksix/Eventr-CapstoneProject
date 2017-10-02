import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import ProfileBox from './ProfileBox'
import GridListExampleComplex from './Testing.js'

const header = {
    paddingTop: 40,
    // border: '1px solid black',
    width: '30%',
    marginLeft: 20,
    color: 'blue',
    // display: 'flex',
  };

const SubHeader = {
    display: 'flex',
    justifyContent: 'center',
}

const Welcome = (props) =>(
    <header style={header}>
    <h3 className="welcome">Home</h3>
    <div style={SubHeader}>
        <div>
            <GridListExampleComplex/>
    {/* <FontIcon className="material-icons">home</FontIcon> */}
    </div>
    <div>
    <h2>Home</h2>
    </div>
    </div>
    </header>
);

export class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        };
    }
    render(){
        return(
            <div className="homepg">
                <Welcome />
                <ProfileBox/>
            </div>
        )
    }
}


