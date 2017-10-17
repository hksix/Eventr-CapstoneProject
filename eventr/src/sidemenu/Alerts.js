import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';


export default class Alerts extends Component {

  render(){
    return(
      <Card >
        <CardTitle title="Notifications"/> 
        <CardText>
          You're invited to Halloween Party! RSVP Here!
          <br/><br/>
          Katie RSVP'd YES to DigitalCrafts Demo Day!
        </CardText>
        
      </Card>
    )
  }
}

// <CardActions>
//           <FlatButton label="Action1" />
//           <FlatButton label="Action2" />
//         </CardActions>