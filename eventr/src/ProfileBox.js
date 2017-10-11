import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

class ProfileBox extends Component {
  state = {users:[]}
  
  componentDidMount(){
    axios.get(`${ROOT_URL}/users`)
    .then((res) => {
      // console.log(res);
      this.setState({users:res.data})
    })
  }
  
  render() {
  <Card style={styles}>
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
    {/* <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText> */}
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  }
}
export default ProfileBox;