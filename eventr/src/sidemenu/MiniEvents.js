import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { ROOT_URL } from '../App.js';


export default class MiniEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  
  componentDidMount = () => {
    const user = '10213816111942068';
    axios.get(`${ROOT_URL}/events/guest/3`).then((res) => {
      this.setState({
        data: res.data
      })
      // console.log(this.state.data)
    })
  }



  render(){
    const events = this.state.data.map(function(data) {
      const year = data.date.slice(0,4);
      const month = data.date.slice(5,7);
      const day = data.date.slice(8,10);
      const eventDate = month + '-' + day + '-' + year;
      return(<CardText><b>{data.name}<br/></b>{eventDate}</CardText>)
    })
    return(
      <Card >
        <CardTitle title="Events" subtitle="Here are your upcoming events" />
        <CardText style={{height: '200px', overflow: 'scroll'}}>{events}</CardText>

      </Card>
    )
  }
}

{/* <CardActions >
<FlatButton label="Action1" />
<FlatButton label="Action2" />
</CardActions> */}