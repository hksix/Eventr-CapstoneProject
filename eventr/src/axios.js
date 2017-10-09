// import React, { Component } from 'react';
// import axios from 'axios';

// class FetchData extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             events: []
//         };
//     }
//     componentDidMount() {
//         axios.get('http://localhost8080/api/v1/events')
//         .then(res => {
//            const events = res.data.map(obj => obj.data);
//            this.setState({events}); 
//         }
//         )
        
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.events.map(event => 
//                 <div key={event.id}>{event}</div>
//                 )}
//             </div>
//         );
//     }
// }

// export default FetchData;
