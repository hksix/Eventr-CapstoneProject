import React, {Component} from 'react';
import LogoutButton from './LogoutButton.js';
import About from './About.js';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/FlatButton';

class Settings extends Component {

      logout() {
        this.props.auth.logout();
      }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <About />
                <RaisedButton 
                  label="LogOut"
                  primary={true}
                  style={{width: '100px'}}
                  keyboardFocused={true}
                  style={{backgroundColor: '#1b0859', color: 'white'}}
                  onClick={this.logout.bind(this)}
                ></RaisedButton>
              
              <div className="container">{this.props.children}</div>
            </div>

        )
    }
}

export default Settings;
