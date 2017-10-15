import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class LogoutButton extends Component {

  onButtonClick() {
    // this.props.router.push('/');
    alert('Are you sure you want to leave this page?');
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
          keyboardFocused={true}
          onClick={this.onButtonClick}
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

