import React, {Component} from 'react';
import LogoutButton from './LogoutButton.js';
import About from './About.js';


class Settings extends Component {
    render() {
        return (
            <div>
                <About />
                <LogoutButton />
            </div>    
        )
    }
}

export default Settings;