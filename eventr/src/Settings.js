import React, {Component} from 'react';
import LogoutButton from './LogoutButton.js';
import About from './About.js';

class Settings extends Component {

      logout() {
        this.props.auth.logout();
      }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (

            <div>Settings page
             {
                
                    <button
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </button>
              }
              <div className="container">
            {this.props.children}
            
          </div>
              </div>

        )
    }
}

export default Settings;