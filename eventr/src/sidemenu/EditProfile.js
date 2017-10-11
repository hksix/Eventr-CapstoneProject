import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { ROOT_URL } from '../App.js';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';


class EditProfile extends Component {

  render(){
    return(
      <div>
        <p>Edit your profile, {this.props.fName}.</p>
        <Divider/>
        <br />
        <p>Last Name:</p>
        <TextField ref="newLastName" value={this.props.lName} onChange={this.props.handleChangeName(e)}></TextField>
        
        <br />
        <p>Phone Number:</p>
        <TextField ref="newPhone" value={this.props.phone} onChange={this.props.handlePhoneChange(e)}></TextField>
        
        <br />
        <p>Default Location:</p>
        <TextField ref="newLocation" value={this.props.location} onChange={this.props.handleLocationChange(e)}></TextField>
        
        <br />
        <button onClick={this.save}>Save</button>
      </div>
    )
  }
}

export default EditProfile;