import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class LogoutButton extends Component {

  onLogout() {
    // this.props.router.push('/');
    alert('Are you sure you want to leave this page?');
  }

  handleClose() {

  }

  render() {
    const actions = 
      <FlatButton
        label="X"
        primary={true}
        onClick={this.handleClose}
      />

    return (
      <div>
        <RaisedButton 
          label="LogOut"
          primary={true}
          style={{width: '100px'}}
          keyboardFocused={true}
          onClick={this.onLogOut}
          ></RaisedButton>
        <Dialog 
          title="Lets do this"
          actions={actions}
          modal={false}
          >Yay!!!</Dialog>
      </div>
    );
  }
}

