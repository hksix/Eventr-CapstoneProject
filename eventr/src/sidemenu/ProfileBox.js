import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { ROOT_URL } from '../App.js';

const styles = {
      // width:'20%',
      // marginLeft:'10%',
}


class ProfileBox extends Component {
  
  state = {users:[]}

  componentDidMount(){
    axios.get(`${ROOT_URL}/event_categories`)
    .then((res) => {
      this.setState({types:res.data.data})
    })
  }

  render(){
    return(
      <Card style={styles}>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="images/twogirlsatpicnic.jpg"
      />
      <CardTitle title="Profile" subtitle="Card subtitle" />
  
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
    )
  }
}

export default ProfileBox;