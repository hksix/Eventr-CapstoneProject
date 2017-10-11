import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
    marginLeft: '10px',
    font: '300 20px/35px "Open Sans",open-sans,sans-serif',
  },
  editText: {
    textAlign: 'center',
    font: '300 20px/30px "Open Sans",open-sans,sans-serif',
    paddingTop: '20px',
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
          avatar={this.props.profPic}
        />
        <h3 style={style.text}>Welcome {this.props.fName} {this.props.lName}!</h3>
        <h3 style={style.text}>Phone: {this.props.phone}</h3>
        <h3 style={style.text}>Location: {this.props.location}</h3>
        <h3 style={style.text}>Email: {this.props.email}</h3>
        <h3 style={style.text}>Member Since {this.props.createdAt}</h3>
        <br />
        <FlatButton label="Edit" onClick={this.edit} style={{marginLeft:10, marginTop:10, marginBottom:10}}/>
      </Card>
    )
  }

  // editable profile page
  renderForm = () => {
    return (
      <Card style={style.cardStyle}>
        <h2 style={style.editText}>Edit your profile</h2>
        
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
          onChange={this._handlePhoneChange}>
        </TextField>

        <TextField 
          style={style.text} 
          ref="newLocation" 
          floatingLabelText="New Default Location" 
          floatingLabelFixed={true} 
          hintText={this.props.location}
          type='text'
          onChange={this._handleLocationChange}
          >
        </TextField>
        <TextField 
          style={style.text} 
          ref="newEmail" 
          floatingLabelText="New Email" 
          floatingLabelFixed={true} 
          hintText={this.props.email}
          type='text'
          onChange={this._handleEmailChange}
          >
        </TextField>
        <br />
        <FlatButton label="Save" onClick={this.props.onSave} style={{marginLeft:10, marginTop:10, marginBottom:10}}/>

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
