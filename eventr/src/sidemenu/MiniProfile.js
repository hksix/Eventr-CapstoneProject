import React, { Component } from 'react';
//Material UI
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
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


export default class MiniProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      ProfileData:'',
      fName: '',
    };
  }
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount = () => {
    // if(this.props.userProfileData !== undefined){
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
  // }
  }
  
  // componentWillReceiveProps(nextProps){
  //   if(this.props.userProfileData === undefined){
  //     this.setState({
  //       fName:'test'
  //     })
  //   }else{
  //   this.setState({
  //     fName:nextProps.userProfileData,
  //     ProfileData:nextProps.userProfileData
  //   })
  //   console.log(nextProps.userProfileData)
  // }
    
    
    // if(nextProps.userProfileData !== undefined){
    // this.setState({
    //   ProfileData:nextProps.userProfileData,
    //   lName:nextProps.userProfileData
    // },()=>{
    //   this.setState({
    //     lName:this.state.ProfileData
    //   })
    // })
    // }
    
  // }

  save = () => {
    axios.put(`${ROOT_URL}/users/3`, {
      fName: this.state.fName,
      lName: this.state.lName,
      profPic: this.state.profPic,
      email: this.state.email,
      phone: this.state.phone,
      location: this.state.location,
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  
  render(){
    console.log(this.state.ProfileData)
    const styles = {
      title: {
        cursor: 'pointer',
      },
    };
    
    return(
      <Card >
        <CardHeader
          title={this.state.fName}
          subtitle={this.state.lName}
          avatar={this.state.profPic}
        />

        <CardTitle title="Welcome" subtitle={this.state.fName} />
       
        <CardActions>
          <FlatButton label="View Profile" onClick={this.handleToggle} />
            <Drawer width={300} openSecondary={true} open={this.state.open} >
              <AppBar 
                style={styles} 
                onClick={this.handleToggle} 
                title="Profile" 
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}/>
              <ProfileBox 
                onNameChange={this.handleLastNameChange}
                onLocationChange={this.handleLocationChange}
                onPhoneChange={this.handlePhoneChange}
                onEmailChange={this.handleEmailChange}
                onProfPicChange={this.handleProfPicChange}
                fName={this.state.fName}
                lName={this.state.lName}
                location={this.state.location}
                phone={this.state.phone}
                email={this.state.email}
                profPic={this.state.profPic}
                createdAt={this.state.createdAt}
                onSave={this.save}
              />
            </Drawer>
        </CardActions>
      </Card>
    )
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

