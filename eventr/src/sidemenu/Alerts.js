import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class Alerts extends Component {

  render(){
    return(
      <Card >
        <CardTitle title="Alerts" subtitle="These are your upcomming alerts" /> 
        <CardText>
          Pick up cake from Publix on Friday
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}