import React, {Component} from 'react';

var google;
export default class Map extends Component {


  componentDidMount = () => {
    const googleInterval = setInterval(function(){
      if (window.google){
        clearInterval(googleInterval)
        
        this.map = new google.maps.Map(this.refs.map, {
          center: {
            lat: 48.858608,
            lng: 2.294471
          },
          zoom: 16
        });
      }
    }, 100)
  }


  render() {
    return (
      <div>
        <h1>Map</h1>
        <button>Go to Arc De Triophe</button>
        <div ref="map" style={{width: 500, height: 500, border: '1ps solid black'}}>
          {/* <pre>{JSON.stringify(this.props.initialPosition, null, 2)}</pre> */}
        </div>
      </div>
    )
  }
}


Map.propTypes={
  initialPosition: React.PropTypes.object.isRequired
};
