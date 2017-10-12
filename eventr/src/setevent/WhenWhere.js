import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';


import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';



const styles = {
    // floatingLabelStyle: {
    //   color: orange500,
    // },
    // floatingLabelFocusStyle: {
    //   color: blue500,
    // },
    underlineStyle: {
        borderColor: '#7c5cb7',
      },
      floatingLabelStyle: {
        color: '#7c5cb7',
      },
      floatingLabelFocusStyle: {
        color:'#7c5cb7'
      },
  };

  const IconMenuExampleScrollable = () => (
    <IconMenu
      iconButtonElement={<IconButton><MapsPlace /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      maxHeight={272}
    >
      <MenuItem value="AL" primaryText="Alabama" />
      <MenuItem value="AK" primaryText="Alaska" />
      <MenuItem value="AZ" primaryText="Arizona" />
      <MenuItem value="AR" primaryText="Arkansas" />
      <MenuItem value="CA" primaryText="California" />
      <MenuItem value="CO" primaryText="Colorado" />
      <MenuItem value="CT" primaryText="Connecticut" />
      <MenuItem value="DE" primaryText="Delaware" />
      <MenuItem value="DC" primaryText="District Of Columbia" />
      <MenuItem value="FL" primaryText="Florida" />
      <MenuItem value="GA" primaryText="Georgia" />
      <MenuItem value="HI" primaryText="Hawaii" />
      <MenuItem value="ID" primaryText="Idaho" />
      <MenuItem value="IL" primaryText="Illinois" />
      <MenuItem value="IN" primaryText="Indiana" />
      <MenuItem value="IA" primaryText="Iowa" />
      <MenuItem value="KS" primaryText="Kansas" />
      <MenuItem value="KY" primaryText="Kentucky" />
      <MenuItem value="LA" primaryText="Louisiana" />
      <MenuItem value="ME" primaryText="Maine" />
      <MenuItem value="MD" primaryText="Maryland" />
      <MenuItem value="MA" primaryText="Massachusetts" />
      <MenuItem value="MI" primaryText="Michigan" />
      <MenuItem value="MN" primaryText="Minnesota" />
      <MenuItem value="MS" primaryText="Mississippi" />
      <MenuItem value="MO" primaryText="Missouri" />
      <MenuItem value="MT" primaryText="Montana" />
      <MenuItem value="NE" primaryText="Nebraska" />
      <MenuItem value="NV" primaryText="Nevada" />
      <MenuItem value="NH" primaryText="New Hampshire" />
      <MenuItem value="NJ" primaryText="New Jersey" />
      <MenuItem value="NM" primaryText="New Mexico" />
      <MenuItem value="NY" primaryText="New York" />
      <MenuItem value="NC" primaryText="North Carolina" />
      <MenuItem value="ND" primaryText="North Dakota" />
      <MenuItem value="OH" primaryText="Ohio" />
      <MenuItem value="OK" primaryText="Oklahoma" />
      <MenuItem value="OR" primaryText="Oregon" />
      <MenuItem value="PA" primaryText="Pennsylvania" />
      <MenuItem value="RI" primaryText="Rhode Island" />
      <MenuItem value="SC" primaryText="South Carolina" />
      <MenuItem value="SD" primaryText="South Dakota" />
      <MenuItem value="TN" primaryText="Tennessee" />
      <MenuItem value="TX" primaryText="Texas" />
      <MenuItem value="UT" primaryText="Utah" />
      <MenuItem value="VT" primaryText="Vermont" />
      <MenuItem value="VA" primaryText="Virginia" />
      <MenuItem value="WA" primaryText="Washington" />
      <MenuItem value="WV" primaryText="West Virginia" />
      <MenuItem value="WI" primaryText="Wisconsin" />
      <MenuItem value="WY" primaryText="Wyoming" />
    </IconMenu>
  );
  

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
            <div>
            <TextField
            floatingLabelText="Address"
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            onChange={this._handleChangeLocation}
        />
        <IconMenuExampleScrollable/>
        </div>
        )
    }
}