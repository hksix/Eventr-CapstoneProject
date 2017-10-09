import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';



const styles = {
    floatingLabelStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
  };

export class DateSelector extends Component {
    // constructor(props) {
    //     super(props);
    
      //   this.state = {
      //     controlledDate: null,
      //   };
    //}
    render() {
        return (
            <DatePicker
                hintText="Select Date"
                onChange={this._handleChange}
            />
        );
    }

    _handleChange = (event, date) => {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date(date);
        var day = days[d.getDay()];
        var date = d.getDate();
        var month = months[d.getMonth()];
        var year = d.getFullYear();
        this.props.changeHandler(day + " "+ " " + date + " " + month + " " + year);
    };
}

export class TimeSelector extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { value12: null};
    // }


    handleChangeTimePicker12 = (event, date) => {
        var d = new Date(date);
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = "am";
        if( hr > 12 ) {
            hr -= 12;
            ampm = "pm";
        }
        this.props.changeHandler(hr + ":" + min + ampm );
        // this.setState({value12: date});
    };

    render() {
        return (
            <div>
                <TimePicker
                  format="ampm"
                  hintText="Set Time"
                  value={this.props.value12}
                  onChange={this.handleChangeTimePicker12}
                />
        </div>
      );
    }
}

export class LocationSelector extends Component{
    // constructor(props){
    //     super(props);
    // }

    _handleChangeLocation = (event, address)=>{
        this.props.changeHandler(address);
    }
    render(){
        return(
            <TextField
            floatingLabelText="Address"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            onChange={this._handleChangeLocation}
        />
        )
    }
}