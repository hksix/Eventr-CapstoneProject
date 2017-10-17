import React, { Component } from 'react';
import './LandingPage.css'
import "./landingpg.js"

export default class LandingPage extends Component{
    render(){
        return(

        <div className="landing-page-container">

          <header className="landing-header-container">
              
                  <div className="main-headline">
                    <h1 className="h1-landing-page"><span style={{color: '#4c3187', fontSize:'2em'}}>EVENTR</span><br/> Your events, simplified.</h1>
                    <h3 className="h3-landing-page">First of it's kind, event design & planning platform.</h3>
                  </div>
                  {/* <button id="get-started" href="#">GET STARTED</button> */}
                  <div className="video-container">
                      <video autoPlay loop className="fillWidth">
                          <source src="images/Night-BBQ.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser. 
                      </video>
                      <div className="poster hidden">
                          <img src="images/Night-BBQ.jpg" alt=""/>
                      </div>
                  </div>
                
          </header>
          
          <main className="landing-main-container">
        
            <div className="section-container img-right">
              <div className="description-container">
                <div className="landing-description">
                  <h2 className="h2-landing-page">Events with EVENTR</h2>
                  <p>
                    Whether it's a picnic with your best friend, a party at the lakehouse, or a family reunion, Eventr has all your planning needs covered.
                  </p>
                </div>
              </div>
              <div className="image-container">
                <img src="/images/twogirlsatpicnic.jpg" alt="two girls at picnic celebrating a birthday with a tiny cupcake"/>
              </div>
            </div>
        
        
            <div className="section-container">
              <div className="image-container">
                <img src="/images/partyonlakecloseup.jpg" alt="multiple people on doc at party"/>
              </div>
              <div className="description-container">
                <div className="landing-description">
                  <h2 className="h2-landing-page">Personal Planner</h2>
                  <p>
                    Plan with easy of mind. Eventr reminds you of upcomming events, alerts you when others check off items, and show other events near you.
                  </p>
                </div>
              </div>
            </div>
        
            <div className="section-container img-right">
                <div className="description-container">
                  <div className="landing-description">
                    <h2 className="h2-landing-page">Event anywhere</h2>
                    <p>
                      Eventr provides seamless transitions between devices to help best fit your lifestyle. Create an event on your desktop and complete it later on your phone. 
                    </p>
                  </div>
                </div>
                <div className="image-container">
                  <img src="/images/responsive3.png" alt="displays of application on desktop, mobile, and tablet"/>
                </div>
              </div>
        
              <div className="section-container">
                  <div className="image-container">
                    <img src="/images/diagramofpeople.svg" alt="mockup of app on phone with person holding it"/>
                  </div>
                  <div className="description-container">
                    <div className="landing-description">
                      <h2 className="h2-landing-page">
                        Connect with anyone
                      </h2>
                      <p>
                        Finding others is easy with Eventr. Simply sign in and choose either Google or Facebook to find your event group.
                      </p>
                    </div>
                  </div>
                </div>
          </main>
        
          {/* <footer>
            <div className="landing-footer-container">
              <div className="landing-footer-info">
              <h4 className="h4-landing-page">&copy; 2017 Eventr</h4>
              </div>
            </div>
          </footer> */}

        </div>
        
        )
    }
}
