import React, {Component} from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Map from './Map.js';



export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

    }
  
  }
  // did mount means component has already rendered and have access to the dom


  render(){
    const style = {
      width: '700px',
      height: '500px'
    }
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };
    
    return(
      // <div >
      //   <Map 
      //     style={style}
      //     google={this.props.google} 
      //     initialCenter={{
      //       lat: 40.854885,
      //       lng: -88.081807
      //     }}
      //     zoom={12}
      //     onClick={this._onMapClicked}
      //   >
      //     <Marker onClick={this._onMarkerClick} name={'Current location'}/>
      //     <InfoWindow 
      //       onOpen={this.windowHasOpened}
      //       onClose={this.windowHasClosed}
      //       marker={this.state.activeMarker}
      //       visible={this.state.showingInfoWindow} >
      //       <div>
      //         {/* <h1>{this.state.selectedPlace.name}</h1> */}
      //         <h1>Place Name</h1>
      //       </div>
      //     </InfoWindow>
      //   </Map>
      // </div>
      <div>
        <Map initialPosition={{lat: 48.858608, lng: 2.294471}} />
      </div>
    )
    
  }
  _onInfoWindowClose = (e) => {
    this.setState({
      showingInfoWindow: false
    })
  }
  _onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true``
    });
  }
  
  _onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

}


 // export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAAOcyB-GjFLa4ck2GfeIQksgtunFbxpow')
// })(MapContainer)



