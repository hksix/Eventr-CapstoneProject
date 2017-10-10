import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import axios from 'axios';
// import { ROOT_URL } from '../App.js';
// import Drawer from 'material-ui/Drawer';
// import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';


const style = {
  cardStyle: {
    width: '95%', 
    marginLeft: 'auto', 
    marginRight:'auto',
  },
  text: {
    marginLeft: '5px',
  }
}


class ProfileBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      autoHideDuration: 4000,
      message: 'Profile updates saved',
      open: false,
    }
  }

  // handles snackbar
  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  // ability to edit profile
  edit = () => {
    this.setState({
      editing: true
    })
  }
  // save  = () => {
  //   var lastName = this.refs.newLastName.value;
  //   var newLocation = this.refs.newLocation.value;
  //   var newPhone = this.refs.newPhone.value;
  //   alert("Your profile has been saved")
  //   this.setState({
  //     // ** Update "text" property with new value (this fires render() again)
  //     editing: false,
  //     lName: lastName,
  //     location: newLocation,
  //     phone: newPhone,
  //   })
  // }

  // this is how side profile looks without editing
  renderNormal = () => {
    return (
      <Card style={style.cardStyle}>
        <CardHeader
          title="Profile Picture"
          subtitle="Subtitle"
          avatar={this.props.profPic}
        />
        <h3 style={style.text}>Welcome {this.props.fName} {this.props.lName}!</h3>
        <h3 style={style.text}>Phone: {this.props.phone}</h3>
        <h3 style={style.text}>Default location: {this.props.location}</h3>
        <br />
        <button onClick={this.edit}>Edit</button>
      </Card>
    )
  }

  // editable profile page
  renderForm = () => {
    return (
      <Card style={style.cardStyle}>
        <h3 style={style.text}>Edit your profile</h3>
        
        <TextField 
          style={style.text} 
          ref="newLastName" 
          floatingLabelText="Last Name" 
          floatingLabelFixed={true} 
          hintText={this.props.lName}
          onChange={this._handleLastNameChange}>
        </TextField>

        <TextField 
          style={style.text} 
          ref="newPhone" 
          floatingLabelText="Phone Number" 
          floatingLabelFixed={true} 
          hintText={this.props.phone}
          type='text'
          value={this.props.value} 
          onChange={this._handlePhoneChange}>
        </TextField>

        <TextField 
          style={style.text} 
          ref="newLocation" 
          floatingLabelText="New Default Location" 
          floatingLabelFixed={true} 
          hintText={this.props.location}
          type='text'
          value={this.props.value}
          onChange={this._handleLocationChange}
          >
        </TextField>
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

  _handleLastNameChange=(e)=> {
    this.props.onNameChange(e.target.value)
  }
  _handlePhoneChange=(e)=> {
    this.props.onPhoneChange(e.target.value)
  }
  _handleLocationChange=(e)=> {
    this.props.onLocationChange(e.target.value)
  }
}

export default ProfileBox;
  

  

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
