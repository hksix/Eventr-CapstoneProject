import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import ProfileBox from './ProfileBox.js';



export default class MiniProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  
  render(){

    return(
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="images/twogirlsatpicnic.jpg"
        />
        {/* <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="images/twogirlsatpicnic.jpg" alt="" />
        </CardMedia> */}
        <CardTitle title="Profile" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Edit Profile" onClick={this.handleToggle} />
            <Drawer width={300} openSecondary={true} open={this.state.open} >
              <AppBar title="Edit Profile" />
              <ProfileBox/>
            </Drawer>
        </CardActions>
      </Card>
    )
  }
}
