import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class MiniEvents extends Component {

  render(){
    return(
      <Card >
        <CardTitle title="Events" subtitle="These are your upcomming events" />
        <CardText>
          Birthday Party at Bob's house on Friday
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}