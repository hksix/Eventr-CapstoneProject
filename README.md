# Eventr-CapstoneProject



## Overall

Demo: https://youtu.be/-iItbDLkB2s


#MVP
<p>Event creating app to make the users less focused on planning and more excited for an event.</p>


## Beginning WireFrames
<img src="" alt="whiteboard with multiple pages of wireframes"/>


# Features
* Create Event: Name, Type, Date, Time, Location, Items for Event
* Login with Facebook or Google OAuth
* Invite Friends
* Sign up for items
* Manage events when creator
* See upcoming and past events, both hosted and attended
* Manage User profile
* Notifications for invites, event updates

### Stretch Features
* Post on event message board
* Convert web app into react native mobile application
* Survey invitees for when/where is good for an event
* Allow businesses to add promotional deals
* Suggest promotions based on event and items
* Suggest events to host next?
* Suggest public events to attend based on location or similar events attend in the past


# Architecture
* Frontend: React, CSS, JSX, Material UI
* Backend API: Node.js, Restify, Sequelize, PostgreSQL, Postico
* Server: AWS EC2, Nginx, SSL
* Keywords: Modular Architecture, Progressive Web App, User Experience, Responsive Design

![alt text](planning-board.jpg "planning board")

### Frontend Stages
* Stage 1: Built event creation components
* Stage 5: Implemented Axios on client side for HTTP GET, PUT, POST and DELETE requests
* Stage 3: Built interface in React in order to create seamless transitions while creating event and updating page only as needed when user interacts with events
* Stage 4: Connects React framework to PostgreSQL with Restify, Axios and Sequelize


### Backend Stages
* Stage 1: Created multiple tables with ability to inner join in PostgreSQL database schemas
* Stage 2: Used postico to assist in building PostgreSQL 
* Stage 3: Created Restify API with separate routers for common CRUD operations needed for frontend functionality
* Stage 4: Utilized Sequelize ORM to map database entries to objects and vice versa


### Screen Shots
<h3>Desktop of home page when signed in to Eventr.</h3>
<img src="/images/desktopscreenshot.png" height: '500px' alt="desktop version of application"/>

<h3>Mobile responsive design for user section when signed in.</h3>
<img src="/images/mobilescreenshot.png" height: '500px' alt="mobile version of application"/>

<h3>Desktop version of party information after clicking on event on user calendar.</h3>
<img src="/images/desktoppartyinfo.png" height: '500px' alt="desktop version of party information"/>

<h3>Showcases how party invitees can cross off certain items to indicate they are bringing those to the party.</h3>
<img src="/images/mobilescreenshot2.png" height: '500px' alt="mobile version of party information"/>

<h3>Guides through event creation process.</h3>
<div display: 'flex'>
<img src="/images/eventname.png" width: '300px' alt="mobile version of party information"/>
<img src="/images/eventwhenandwhere.png" width: '300px' alt="mobile version of party information"/>
<img src="/images/eventinvites.png" width: '300px' alt="mobile version of party information"/>
<img src="/images/eventitems.png" width: '300px' alt="mobile version of party information"/>
</div>

### Code Snippites
<h3>Snippit belows showcases how all React components within Logged In State are brought together into one page.</h3>
<h3>Used router between tabs to keep sections organized and seamless transitions between components</h3>


``` javascript

<Router>
  <Tabs className="menubar" 
      value={this.state.value} 
      onChange={this.handleChange}>
    {/* first tab containing landing page after logged in */}
    <Tab 
      icon={<img src="../lightbulb-logo.png" alt="Eventr Logo - lightbulb with E inside"/>}
      value="L"
      className="eventr-logo">
      <LandingPage/>
    </Tab>

    {/* Main tab after login -- second tab containing user calendar, user profile, upcoming events, and notifications*/}  
    <Tab 
      icon={<FontIcon className="material-icons">home</FontIcon>} 
      label="HOME" 
      value="a" 
      containerElement={<Link to="/home" />} >
      <Route exact path="/home"/>
      <div className="main-content-container">
        <div className="side-content-container">
          <UserMenu handleUpdate={this.props.handleUpdate} user={this.props.userdata}/>
        </div>
        <div className="changing-content-container" >
          <Welcome user={this.props.userdata} />
        </div>
      </div>
    </Tab>

    {/* thrid tab containing wizard to create events */}    
    <Tab icon={<FontIcon className="material-icons">event</FontIcon>} 
      label="CREATE EVENT" 
      value="b" 
      containerElement={<Link to="/create-event" />} >
      <Route exact path="/events"/>
      <div className="main-content-container">
        <div className="side-content-container">
          <UserMenu handleUpdate={this.props.handleUpdate} user={this.props.userdata}/>
        </div>
        <div className="changing-content-container" >
          <SetEvent user={this.props.userdata}/>
        </div>
      </div>
    </Tab>

    {/* fourth tab containing google maps for user to search for convenient items nearby. Ex: Cake Shop */}
    <Tab icon={<MapsPersonPin />} 
      label="NEARBY" 
      value="c" 
      containerElement={<Link to="/nearby" />} >
      <Route exact path="/nearby"/>
      <div className="main-content-container">
        <div className="side-content-container">
          <UserMenu handleUpdate={this.props.handleUpdate} user={this.props.userdata}/>
        </div>
        <div className="changing-content-container" style={{backgroundColor: '#f5f5f5'}} >
          <MapContainer style={{margin: 20}} />
        </div>
      </div>
    </Tab>

    {/* fifth tab containing log out function */}
    <Tab icon={<FontIcon className="material-icons">settings</FontIcon>} 
      label="SETTINGS" 
      value="d" 
      ontainerElement={<Link to="/settings" />} >
      <Route exact path="/settings"/>
      <div className="main-content-container">
        <div className="side-content-container">
          <UserMenu handleUpdate={this.props.handleUpdate} user={this.props.userdata}/>
        </div>
        <div className="changing-content-container" >
          <Settings auth={this.props.auth}/>
        </div>
      </div>
    </Tab>


  </Tabs>
</Router>

```
<h3>Example of use of paths within server for ease of use of common HTTP request
``` javascript 

server.put('/api/v1/users/:id', updateUser);
function updateUser(request,response,next){
    if (!verifyRequiredParamsForUser(request)){
        response.send(422,error_messages);
        return;
    }
    models.Users.find({
        where: {
            'id': request.params.id
        }
    }).then(function(user) {
        if(user){
            console.log(request.body)
            user.updateAttributes({
                fName: request.body['fName'],
                lName: request.body['lName'],
                profPic: request.body['profPic'],
                email: request.body['email'],
                phone: request.body['phone'],
                location: request.body['location']
            }).then(function(user) {
                var data = {
                    message: "Updated user successfully",
                    data: user
                };
                response.send(data);
                next();
            }).catch(function (err) {
                console.log(err)
            });
        }
    });
}

```

