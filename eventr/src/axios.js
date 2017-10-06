import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }
    componentDidMount() {
        axios.get('')
        .then(res => {
            
        }
        )
        
    }
    render() {
        return (
            <div></div>
        );
    }
}

ReactDOM.render(
    <FetchData/>,
    document.getElementById('root')
);