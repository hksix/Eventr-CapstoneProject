import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { ROOT_URL } from '../App.js';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const styles = {
      // width:'20%',
      // marginLeft:'10%',
}


class ProfileBox extends Component {
  constructor(props) {
		super(props);
		this.state = {
      fName: '',
      lName: '',
      email: '',
      location: '',
      phone: '',
      profPic: '',
      createdAt: ''
    }
  }
  getInitialState = () => {
    return {
      editing: false,
      // ** Initialize "text" property with empty string here

    }
  }
  edit = () => {
    this.setState({
      editing: true
    })
  }
  save  = () => {
    var lastName = this.refs.newLastName.value;
    var newLocation = this.refs.newLocation.value;
    var newPhone = this.refs.newPhone.value;
    alert("Your profile has been saved")
    this.setState({
      // ** Update "text" property with new value (this fires render() again)
      editing: false,
      lName: lastName,
      location: newLocation,
      phone: newPhone,
    })
  }
  renderNormal = () => {
    // ** Render "state.text" inside your <p> whether its empty or not...
    return (
      <Card>
        <CardHeader
          title="Profile Picture"
          subtitle="Subtitle"
          avatar={this.state.profPic}
        />
        <p>Welcome {this.state.fName} {this.state.lName}!</p>
        <p>Phone: {this.state.phone}</p>
        <p>Default location: {this.state.location}</p>
        <button onClick={this.edit}>Edit</button>
      </Card>
    )
  }
  renderForm = () => {
    return (
      <Card>
        <p>Edit your profile, {this.state.fName}.</p>
        <p>Last Name:</p>
        <textarea ref="newLastName" defaultValue={this.state.lName}></textarea>
        <br />
        <p>Phone Number:</p>
        <textarea ref="newPhone" defaultValue={this.state.phone}></textarea>
        <br />
        <p>Default Location:</p>
        <textarea ref="newLocation" defaultValue={this.state.location}></textarea>
        <br />
        <button onClick={this.save}>Save</button>
    </Card>
    )
  }
  render = () => {
    if (this.state.editing) {
      return this.renderForm()
    } else {
      return this.renderNormal()
    }
  }
  
  componentDidMount = () => {
    axios.get(`${ROOT_URL}/users/3`).then((res) => {
        this.setState({
          fName: res.data.fName,
          lName: res.data.lName,
          email: res.data.email,
          location: res.data.location,
          phone: res.data.phone,
          profPic: res.data.profPic,
          createdAt: res.data.createdAt
        })
      })
    }
  

  // render(){
    
  //   return(
  //     <Card>
  //       <Card style={styles}>
  //         <CardHeader
  //           title="Profile Picture"
  //           subtitle="Subtitle"
  //           avatar={this.state.profPic}
  //         />
  //       </Card>
  //       <Card>
  //         <CardTitle title={this.state.fName} subtitle={this.state.lName} />
          
  //         <CardActions>
  //           <FlatButton label={this.state.loginstatus} />

  //           <FlatButton label="Edit"/>
  //           <FlatButton label="Edit Profile" onClick={this.handleToggle} />

  //         </CardActions>
  //       </Card>
  //     </Card>

  //   )
  //}
}

export default ProfileBox;