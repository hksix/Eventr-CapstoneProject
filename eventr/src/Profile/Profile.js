import React, { Component } from 'react';
// import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  profile = {}
  componentWillMount() {
    // this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.profile = profile;
        // this.setState({ profile });
      });
    } else {
      this.profile = userProfile;
      // this.setState({ profile: userProfile });
    }
  }
  render() {
    // const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{this.profile.name}</h1>
          <div header="Profile">
            <img src={this.profile.picture} alt="profile" />
            <div>
              <header> Nickname</header>
              <h3>{this.profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(this.profile, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
