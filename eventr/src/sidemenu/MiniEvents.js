import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { ROOT_URL } from '../App.js';



const events = []

export default class MiniEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  
  componentDidMount = () => {
    axios.get(`${ROOT_URL}/events/guest/3`).then((res) => {
      this.setState({
        data: res.data
      })
      // console.log(this.state.data)
    })
  }



  render(){
    const events = this.state.data.map(function(data) {
      return(<CardText>{data.name} {data.date}</CardText>)
    })
    return(
      <Card >
        <CardTitle title="Events" subtitle="These are your upcomming events" />
        <CardText style={{height: '200px', overflow: 'scroll'}}>{events}</CardText>
        <CardActions >
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}