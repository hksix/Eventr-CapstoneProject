import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { ROOT_URL } from '../App.js';



//server.get(`${extension}/users/:id`, getUser);
// data
// :
// createdAt
// :
// null
// email
// :
// "hamza@haseeb.com"
// fName
// :
// "Hamaz"
// id
// :
// 1
// lName
// :
// "Haseeb"
// location
// :
// "Atlanta"
// phone
// :
// "4045056789"
// profPic
// :
// "hh.jpg"
// updatedAt
// :
// null

const styles = {
      // width:'20%',
      // marginLeft:'10%',
}


class ProfileBox extends Component {
  constructor(props) {
		super(props);
		this.state = {
      fName: '',
      lName: '',
      email: '',
      location: '',
      phone: '',
      profPic: '',
      createdAt: ''
    }
  }

  componentDidMount = () => {
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
    }
  

  render(){
    return(
      <Card>
        <Card style={styles}>
          <CardHeader
            title="Profile Picture"
            subtitle="Subtitle"
            avatar={this.state.profPic}
          />
        </Card>
        <Card>
          <CardTitle title={this.state.fName} subtitle={this.state.lName} />
          
          <CardActions>
            <FlatButton label={this.state.loginstatus} />

            <FlatButton label="Edit"/>
          </CardActions>
        </Card>
      </Card>

    )
  }
}

export default ProfileBox;