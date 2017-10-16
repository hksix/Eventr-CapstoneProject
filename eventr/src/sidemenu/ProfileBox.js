import React, {Component} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import axios from 'axios';
// import { ROOT_URL } from '../App.js';
// import Drawer from 'material-ui/Drawer';
// import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';


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
      message: 'Profile updates saved',
      open: false,
    }
  }

  // ability to edit profile
  // when editing is true, the editable content is shown
  edit = () => {
    if (this.state.editing === false) {
      this.setState({
        editing: true
      })
    } else {
      this.setState({
        editing: false
      })
    }
  }

  handleTouchTap = () => {
    console.log(this.state.open)
    console.log("HandleTouchTap")
    this.setState({
      open: true,
    });
    console.log(this.state.open)
  }

  // this is how side profile looks without editing
  renderNormal = () => {
    const profTitle = this.props.fName + ' ' + this.props.lName;
    return (
      <Card style={style.cardStyle}>
        <CardHeader
          title={profTitle}
          avatar={this.props.profPic}
        />
        <h3 style={style.text}>Welcome <u>{this.props.fName} {this.props.lName}</u>!</h3>
        <h3 style={style.text}>Phone: {this.props.phone}</h3>
        <h3 style={style.text}>Location: {this.props.location}</h3>
        <h3 style={style.text}>Email: {this.props.email}</h3>
        {/* <h3 style={style.text}>Last Update: {this.props.createdAt}</h3> */}
        <br />
        <FlatButton label="Edit" open={this.state.open} onClick={this.edit} style={{marginLeft:10, marginTop:10, marginBottom:10}}/>
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
          floatingLabelText="FirstName" 
          floatingLabelFixed={true} 
          hintText={this.props.fName}
          onChange={this._handleLastNameChange}>
        </TextField>
        <TextField 
          style={style.text} 
          floatingLabelText="Last Name" 
          floatingLabelFixed={true} 
          hintText={this.props.lName}
          onChange={this._handleLastNameChange}>
        </TextField>

        <TextField 
          style={style.text} 
          floatingLabelText="Phone Number" 
          floatingLabelFixed={true} 
          hintText={this.props.phone}
          type='text' 
          onChange={this._handlePhoneChange}>
        </TextField>

        <TextField 
          style={style.text} 
          floatingLabelText="Location" 
          floatingLabelFixed={true} 
          hintText={this.props.location}
          type='text'
          onChange={this._handleLocationChange}>
        </TextField>

        <TextField 
          style={style.text} 
          floatingLabelText="Email" 
          floatingLabelFixed={true} 
          hintText={this.props.email}
          type='text'
          onChange={this._handleEmailChange}>
        </TextField>

        <br />
        <FlatButton 
          label="Save" 
          onClick={(e) => this._handleClick(e)}
          style={{marginLeft:10, marginTop:10, marginBottom:10}}
          />
          <Snackbar
            open={this.state.open}
            message={this.state.message}
            action="undo"
            autoHideDuration={4000}
            onActionTouchTap={this._handleActionTouchTap}
            onRequestClose={this._handleRequestClose}/>
    </Card>
    )
  }
  // default state is false, therefore renderNormal will render. 
  // if edit is clicked, editing state is change to true and renderForm will render
  render = () => {
    if (this.state.editing) {
      return this.renderForm()
    } else {
      return this.renderNormal()
    }
  };

  // these handle the notification at the bottom stating changes have been made
  // these handle the notification at the bottom stating changes have been made
  _handleTouchTap = () => {
    this.setState({
      open: true,
      editing: false,
    });
  }
  _handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
    alert('Edits removed from your profile.');
  }
  _handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }
  _handleClick = (e) => {
    console.log("working")
    this._handleTouchTap()
    this.props.onSave()
  }		    




  // handle all edits of users profile and passes value back to MiniProfile to change state and save to database

  _handleLastNameChange=(e)=> {
    this.props.onNameChange(e.target.value)
  };
  _handlePhoneChange=(e)=> {
    this.props.onPhoneChange(e.target.value)
  };
  _handleLocationChange=(e)=> {
    this.props.onLocationChange(e.target.value)
  };
  _handleEmailChange=(e)=> {
    this.props.onEmailChange(e.target.value)
  };
  _handleProfPicChange=(e)=> {
    this.props.onProfPicChange(e.target.value)
  };
}

export default ProfileBox;
  

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
  
