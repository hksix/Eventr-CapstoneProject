# Eventr-CapstoneProject



#Overall



#MVP
<p>Event creating app to make the users less focused on planning and more excited for an event.</p>

#Goals
<li>Connect with friends over Facebook OAuth</li>
<li>Admin settings and ability to grant others admin privlages</li>



#Stretch Goals
<li>Meeting with vendors to promote their brand within our app</li>




#Beginning WireFrames
<img src="" alt="whiteboard with multiple pages of wireframes"/>


# Features
* Create Event: Name, Type, Date, Time, Location
* Invite Friends
* Add Items
* Sign up for items
* manage events
* See upcoming and past events hosted and attended
* manage profile
* notifications for invites, event updates

### Stretch Features
* Post on event message board
* Convert web app into react native mobile application
* Survey invitees for when/where is good for an event
* Allow businesses to add promotional deals
* Suggest promotions based on event and items
* Suggest events to host next?
* Suggest public events to attend based on location or similar events attend in the past


# Architecture
* Frontend: React, CSS, JSX
* Backend API: Node.js, Restify, Sequelize, PostgreSQL    
* Server: AWS EC2, Nginx, SSL
* Keywords: Modular Architecture, Progressive Web App, User Experience

![alt text](planning-board.jpg "planning board")

### Frontend Stages
* Stage 1: Build event creation components
* Stage 2: Connect to backend api for data
* Stage 3: Build interface in react-native and connect to backend api


### Backend Stages
* Stage 1: Create SQL database and connect with restify router
* Stage 2: Create data api with separate routers for common CRUD operations needed for frontend functionality
* Stage 3: Convert direct SQL Queries to sequalize ORM
* Stage 4: Convert modular routes and components into microsystems for scalability


### Code Snippites


### Screen Shots
<h3>Desktop of home page when signed in to Eventr.</h3>
<img src="/images/desktopscreenshot.png" height: '500px' alt="desktop version of application"/>

<h3>Mobile responsive design for user section when signed in.</h3>
<img src="/images/mobilescreenshot.png" height: '500px' alt="mobile version of application"/>

<h3>Desktop version of party information after clicking on event on user calendar</h3>
<img src="/images/desktoppartyinfo.png" height: '500px' alt="desktop version of party information"/>

<h3>Showcases how party invitees can cross off certain items to indicate they are bringing those to the party.</h3>
<img src="/images/mobilescreenshot2.png" height: '500px' alt="mobile version of party information"/>

<div>
<img src="/images/eventname.png" width: '300px' alt="mobile version of party information"/>
<img src="/images/eventwhenandwhere.png" width: '300px' alt="mobile version of party information"/>
<img src="/images/eventinvites.png" width: '300px' alt="mobile version of party information"/>
<img src="/images/eventitems.png" width: '300px' alt="mobile version of party information"/>
</div>