import React, { Component } from 'react';
//Material UI
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

//imported components
import ProfileBox from './ProfileBox.js';

//database axios calls
import axios from 'axios';
import { ROOT_URL } from '../App.js';

// const user = 1;

export default class MiniProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      ProfileData: props.userProfileData,
      // fName: props.userProfileData.given_name,
      // lName: props.userProfileData.family_name,
      // email: "",
      // location: "",
      // phone: "",
      // email: "",
      // profPic: props.userProfileData.picture,
    };
  }
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount = () => {
    // const user = '1';
    // if(this.props.userProfileData == undefined){
    // axios.get(`${ROOT_URL}/users/${user}`).then((res) => {
      // this.setState({
      //   fName: "loading",
      //   lName: "loading",
      //   email: "loading",
      //   location: "",
      //   phone: "",
      //   email: "",
      //   profPic: "loading",
      //   createdAt: "loading"
      // })
    // })
  // }


}

  componentWillReceiveProps(nextProps){
      this.setState({
        // ProfileData: nextProps.userProfileData.family_name,
        fName: nextProps.userProfileData.fName,
        lName: nextProps.userProfileData.lName,
        email: nextProps.userProfileData.email,
        profPic: nextProps.userProfileData.profPic,
        location: nextProps.userProfileData.location,
        phone: nextProps.userProfileData.phone,
        // createdAt: nextProps.userProfileData.updated_at,
        userid:nextProps.userProfileData.userid,
      })


}
  
componentWillUpdate(nextProps, nextState){
  // console.log(nextProps, nextState)
  // console.log(nextProps.userProfileData)
}


  save = () => {
    // this.props.handleUpdate(this.state.userID, this.state)
    this.props.handleUpdate(this.state.userid, this.state)
    // console.log(this.state.profPic)
    // console.log(this.state.phone);
    // console.log(user);
    // axios.put(`${ROOT_URL}/users/${user}`, {
    //   fName: this.state.fName,
    //   lName: this.state.lName,
    //   profPic: this.state.profPic,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   location: this.state.location,
    // }).then((res) => {
    //   // console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // })

  }
  
  render(){
    
    console.log(this.state.profPic)
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };
    // console.log(this.props.userProfileData);
    var profTitle = `Welcome ${this.props.userProfileData.fName}!`;
    return(
      <Card >
        <CardHeader
          title={this.state.fName}
          subtitle={this.state.lName}
          avatar={this.state.profPic}
        />

        <CardTitle title={profTitle}/>
       
        <CardActions>
          <FlatButton label="View Profile" onClick={this.handleToggle} />
            <Drawer width={300} openSecondary={true} open={this.state.open} >
              <AppBar 
                style={styles} 
                onClick={this.handleToggle} 
                title="Profile" 
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}/>
              <ProfileBox 
                onFirstNameChange={this.handleFirstNameChange}
                onLastNameChange={this.handleLastNameChange}
                onLocationChange={this.handleLocationChange}
                onPhoneChange={this.handlePhoneChange}
                onEmailChange={this.handleEmailChange}
                // onProfPicChange={this.handleProfPicChange}
                fName={this.state.fName}
                lName={this.state.lName}
                location={this.state.location}
                phone={this.state.phone}
                email={this.state.email}
                profPic={this.state.profPic}
               
                // createdAt={this.props.userProfileData.given_name}
                onSave={this.save}
              />
            </Drawer>
        </CardActions>
      </Card>
    )
  }

  handleFirstNameChange=(name)=> {
    this.setState({
      fName: name
    })
  }
  handleLastNameChange=(name)=> {
    this.setState({
      lName: name
    })
  }
  handlePhoneChange=(newPhone)=> {
    this.setState({
      phone: newPhone
    })
  }
  handleLocationChange=(newLocation)=> {
    this.setState({
      location: newLocation
    })
  }
  handleEmailChange=(newEmail)=> {
    this.setState({
      email: newEmail
    })
  }
  handleProfPicChange=(newProfPic)=> {
    this.setState({
      profPic: newProfPic
    })
  }
}

